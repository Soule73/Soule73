# 📧 Système de Templates d'Email (Compatible Vercel)

Ce système permet de gérer les templates d'email de manière similaire à Blade Laravel, en séparant la logique métier du design. **Compatible avec Vercel et tous les environnements serverless.**

## 📂 Structure des fichiers

```
src/
├── templates/
│   └── emails/
│       ├── contact-form.html          # Template HTML original (pour édition)
│       ├── contact-form.js            # Template JS (pour production)
│       ├── contact-form-simple.html   # Template alternatif HTML
│       ├── contact-form-simple.js     # Template alternatif JS
│       └── README.md                  # Documentation
├── lib/
│   └── email-template-engine.ts       # Moteur de templating (Serverless compatible)
└── app/
    ├── api/
    │   ├── contact/
    │   │   └── route.ts                # API utilisant le template
    │   └── test-email/
    │       └── route.ts                # API de test des templates
    └── test-contact/
        └── page.tsx                    # Page de test front-end
```

## 🚀 Utilisation

### 1. Créer un template

**Étape 1:** Créez un fichier `.html` dans `src/templates/emails/` avec la syntaxe `{{variable}}` :

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mon Template</title>
</head>
<body>
    <h1>Bonjour {{name}} !</h1>
    <p>Votre email : {{email}}</p>
    <p>Message : {{message}}</p>
</body>
</html>
```

**Étape 2:** Convertissez-le en module JS pour la compatibilité Vercel :

```javascript
const template = `<!DOCTYPE html>
<html>
<head>
    <title>Mon Template</title>
</head>
<body>
    <h1>Bonjour {{name}} !</h1>
    <p>Votre email : {{email}}</p>
    <p>Message : {{message}}</p>
</body>
</html>`;

export default template;
```

**Étape 3:** Ajoutez le template dans `email-template-engine.ts` :

```typescript
private async importTemplate(templateName: string): Promise<EmailTemplate> {
    switch (templateName) {
        case 'contact-form':
            return await import('@/templates/emails/contact-form.js');
        case 'contact-form-simple':
            return await import('@/templates/emails/contact-form-simple.js');
        case 'mon-template':  // Ajoutez votre template ici
            return await import('@/templates/emails/mon-template.js');
        default:
            throw new Error(`Template "${templateName}" non supporté`);
    }
}

getAvailableTemplates(): string[] {
    return [
        'contact-form',
        'contact-form-simple',
        'mon-template'  // Et ici aussi
    ];
}
```

### 2. Utiliser le template dans votre API

```typescript
import { renderEmailTemplate, EmailTemplateVariables } from '@/lib/email-template-engine';

// Préparer les variables
const variables: EmailTemplateVariables = {
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Test',
    message: 'Bonjour le monde!'
};

// Générer le HTML
const htmlContent = await renderEmailTemplate('contact-form', variables);

// Utiliser dans nodemailer
const mailOptions = {
    // ...autres options
    html: htmlContent
};
```

## 🔧 Variables disponibles

Les variables suivantes sont disponibles par défaut :

- `{{name}}` - Nom du contact
- `{{email}}` - Email du contact  
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message
- `{{timestamp}}` - Date/heure formatée automatiquement

## 🧪 Testing

### Pages de test disponibles :

1. **`/test-contact`** - Page front-end pour tester le formulaire complet
2. **`/api/test-email`** - API pour prévisualiser les templates
3. **`/api/test-email?list=true`** - Liste de tous les templates

### URLs de test utiles :

```bash
# Page de test complète
http://localhost:3000/test-contact

# Prévisualiser le template par défaut
http://localhost:3000/api/test-email

# Prévisualiser un template spécifique
http://localhost:3000/api/test-email?template=contact-form-simple

# Voir tous les templates disponibles
http://localhost:3000/api/test-email?list=true

# Obtenir les données JSON
http://localhost:3000/api/test-email?format=json
```

## 🎨 Avantages

1. **Compatible Vercel/Serverless** : Fonctionne parfaitement en production
2. **Séparation des responsabilités** : HTML séparé de la logique
3. **Maintenance facile** : Modification des templates sans toucher au code
4. **Réutilisabilité** : Même template pour plusieurs usages
5. **Sécurité** : Échappement automatique des variables HTML
6. **Flexibilité** : Support de variables personnalisées
7. **Testing intégré** : Pages de test pour le développement

## 📝 Workflow de développement

1. **Développement** : Éditez le fichier `.html` pour le design
2. **Conversion** : Copiez le contenu dans le fichier `.js` correspondant
3. **Test** : Utilisez `/test-contact` pour tester
4. **Déploiement** : Le système utilise automatiquement les fichiers `.js`

## 🛠️ Automatisation (Optionnelle)

Vous pouvez créer un script pour automatiser la conversion HTML → JS :

```javascript
// scripts/convert-templates.js
const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../src/templates/emails');
const htmlFiles = fs.readdirSync(templatesDir).filter(file => file.endsWith('.html'));

htmlFiles.forEach(htmlFile => {
    const htmlPath = path.join(templatesDir, htmlFile);
    const jsFile = htmlFile.replace('.html', '.js');
    const jsPath = path.join(templatesDir, jsFile);
    
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    const jsContent = `const template = \`${htmlContent}\`;

export default template;`;
    
    fs.writeFileSync(jsPath, jsContent);
    console.log(`✅ Converti: ${htmlFile} → ${jsFile}`);
});
```

## 🔄 Migration depuis l'ancien système

L'ancien code avec HTML inline :
```typescript
html: `<h1>Bonjour ${name}</h1>`
```

Devient :
```typescript
const htmlContent = await renderEmailTemplate('mon-template', { name });
html: htmlContent
```

## 🛡️ Sécurité

- ✅ Échappement automatique des variables HTML
- ✅ Validation de l'existence des templates
- ✅ Gestion d'erreurs robuste
- ✅ Variables non définies conservées (pas de crash)
- ✅ Cache en mémoire pour les performances

## 🚀 Déploiement

Le système fonctionne automatiquement sur :
- ✅ Vercel (serverless)
- ✅ Netlify Functions
- ✅ AWS Lambda
- ✅ Développement local
- ✅ Docker containers

Aucune configuration supplémentaire requise !