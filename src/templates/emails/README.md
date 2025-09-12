# 📧 Système de Templates d'Email

Ce système permet de gérer les templates d'email de manière similaire à Blade Laravel, en séparant la logique métier du design.

## 📂 Structure des fichiers

```
src/
├── templates/
│   └── emails/
│       ├── contact-form.html          # Template principal
│       ├── contact-form-simple.html   # Template alternatif
│       └── ...                        # Autres templates
├── lib/
│   └── email-template-engine.ts       # Moteur de templating
└── app/
    └── api/
        └── contact/
            └── route.ts                # API utilisant le template
```

## 🚀 Utilisation

### 1. Créer un template

Créez un fichier `.html` dans `src/templates/emails/` avec la syntaxe `{{variable}}` :

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

## 🎨 Avantages

1. **Séparation des responsabilités** : HTML séparé de la logique
2. **Maintenance facile** : Modification des templates sans toucher au code
3. **Réutilisabilité** : Même template pour plusieurs usages
4. **Sécurité** : Échappement automatique des variables HTML
5. **Flexibilité** : Support de variables personnalisées

## 📝 Exemples d'utilisation

### Changer de template

```typescript
// Utiliser le template simple
const htmlContent = await renderEmailTemplate('contact-form-simple', variables);

// Utiliser le template principal
const htmlContent = await renderEmailTemplate('contact-form', variables);
```

### Ajouter des variables personnalisées

```typescript
const variables: EmailTemplateVariables = {
    name: 'John Doe',
    email: 'john@example.com', 
    subject: 'Test',
    message: 'Hello world!',
    customField: 'Ma valeur personnalisée'  // Variable custom
};
```

### Vérifier les templates disponibles

```typescript
import { emailTemplateEngine } from '@/lib/email-template-engine';

// Lister tous les templates
const templates = emailTemplateEngine.getAvailableTemplates();
console.log(templates); // ['contact-form', 'contact-form-simple']

// Vérifier qu'un template existe
const exists = emailTemplateEngine.templateExists('contact-form');
console.log(exists); // true
```

## 🛡️ Sécurité

- ✅ Échappement automatique des variables HTML
- ✅ Validation de l'existence des templates
- ✅ Gestion d'erreurs robuste
- ✅ Variables non définies conservées (pas de crash)

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