const getInlineTemplate = (filename: string, outerHTML: string) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${filename}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

    @page { size: A4 portrait; margin: 0; }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Segoe UI', Arial, sans-serif;
        background: white;
    }

    /* Variables */
    :root {
        --cv-sidebar-bg: #0f172a;
        --cv-sidebar-accent: #6366f1;
        --cv-sidebar-muted: #94a3b8;
        --cv-sidebar-text: #e2e8f0;
        --cv-main-bg: #ffffff;
        --cv-main-text: #1e293b;
        --cv-main-muted: #64748b;
        --cv-accent: #6366f1;
        --cv-border: #e2e8f0;
    }

    /* Document */
    .cv-document-container { width: 100%; height: 100%; }

    .cv-document {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        background: white;
        overflow: hidden;
    }

    /* ── Sidebar ── */
    .cv-sidebar-panel {
        width: 34%;
        height: 100%;
        background: var(--cv-sidebar-bg) !important;
        color: var(--cv-sidebar-text);
        padding: 1.75rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        flex-shrink: 0;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    .cv-sidebar-identity {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-bottom: 1.25rem;
    }

    .cv-photo {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid var(--cv-sidebar-accent);
        margin-bottom: 0.75rem;
        flex-shrink: 0;
    }

    .cv-photo-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    /* Next.js wraps Image in a span -flatten it */
    .cv-photo span, .cv-photo > span { display: block !important; width: 100% !important; height: 100% !important; }

    .cv-name {
        font-size: 1.3rem;
        font-weight: 700;
        color: #ffffff !important;
        line-height: 1.2;
        margin-bottom: 0.25rem;
    }

    .cv-title-text {
        font-size: 0.82rem;
        color: var(--cv-sidebar-accent) !important;
        font-weight: 500;
        line-height: 1.3;
        margin-bottom: 0.4rem;
    }

    .cv-availability {
        font-size: 0.72rem;
        color: var(--cv-sidebar-muted) !important;
        font-style: italic;
    }

    .cv-sidebar-section {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }

    .cv-sidebar-title {
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--cv-sidebar-accent) !important;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid rgba(99, 102, 241, 0.3);
        margin-bottom: 0.2rem;
    }

    /* Contact */
    .cv-contact-list { display: flex; flex-direction: column; gap: 0.50rem; }
    .cv-contact-item { display: flex; flex-direction: column; gap: 0.05rem; }
    .cv-contact-label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cv-sidebar-muted) !important; font-weight: 600; }
    .cv-contact-value { font-size: 0.80rem; color: var(--cv-sidebar-text) !important; word-break: break-all; text-decoration: none; }
    .cv-contact-value a { color: var(--cv-sidebar-text) !important; text-decoration: none; }

    /* Compétences */
    .cv-skills-list { display: flex; flex-direction: column; gap: 0.5rem; }
    .cv-skill-group { display: flex; flex-direction: column; gap: 0.3rem; }
    .cv-skill-cat { font-size: 0.8rem; font-weight: 600; color: #ffffff !important; }
    .cv-skill-tags { font-size: 0.75rem; color: var(--cv-sidebar-muted) !important; line-height: 1.4; }

    /* Langues */
    .cv-languages-list { display: flex; flex-direction: column; gap: 0.5rem; }
    .cv-language-item { display: flex; justify-content: space-between; align-items: center; }
    .cv-language-name { font-size: 0.8rem; font-weight: 500; color: var(--cv-sidebar-text) !important; }
    .cv-language-level { font-size: 0.75rem; color: var(--cv-sidebar-muted) !important; }

    /* Qualités */
    .cv-qualities-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
    .cv-qualities-list li { font-size: 0.8rem; color: var(--cv-sidebar-muted) !important; padding-left: 0.75rem; position: relative; }
    .cv-qualities-list li::before { content: ''; position: absolute; left: 0; top: 0.4em; width: 0.28rem; height: 0.28rem; border-radius: 50%; background: var(--cv-sidebar-accent) !important; }

    /* -- Main panel -- */
    .cv-main-panel {
        flex: 1;
        height: 100%;
        background: #ffffff !important;
        padding: 1.75rem 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        overflow: hidden;
    }

    .cv-main-section { display: flex; flex-direction: column; gap: 0.5rem; }

    .cv-main-title {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--cv-accent) !important;
        padding-bottom: 0.4rem;
        border-bottom: 2px solid var(--cv-border);
    }

    .cv-main-icon { width: 0.75rem; height: 0.75rem; stroke: var(--cv-accent); flex-shrink: 0; }

    .cv-profile-text { font-size: 0.85rem; line-height: 1.6; color: var(--cv-main-muted) !important; text-align: justify; }

    /* Timeline */
    .cv-timeline { display: flex; flex-direction: column; gap: 1.2rem; }
    .cv-timeline-item { display: flex; gap: 0.975rem; }
    .cv-timeline-dot { width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--cv-accent) !important; flex-shrink: 0; margin-top: 0.3rem; }
    .cv-timeline-body { flex: 1; display: flex; flex-direction: column; gap: 0.4rem; }

    .cv-timeline-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.7rem; }
    .cv-job-title { font-size: 0.9rem; font-weight: 700; color: var(--cv-main-text) !important; line-height: 1.3; }
    .cv-period { font-size: 0.75rem; color: var(--cv-main-muted) !important; white-space: nowrap; flex-shrink: 0; }

    .cv-company-info { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.2rem; }
    .cv-company { font-size: 0.8rem; font-weight: 600; color: var(--cv-accent) !important; }
    .cv-location { font-size: 0.75rem; color: var(--cv-main-muted) !important; }
    .cv-location::before { content: '- '; }

    .cv-description-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.3rem; }
    .cv-description-list li { font-size: 0.9rem; line-height: 1.5; color: var(--cv-main-muted) !important; padding-left: 0.75rem; position: relative; }
    .cv-description-list li::before { content: ''; position: absolute; left: 0; top: 0.5em; width: 0.25rem; height: 0.25rem; border-radius: 50%; background: var(--cv-accent) !important; opacity: 0.5; }

    /* Formation */
    .cv-education-list { display: flex; flex-direction: column; gap: 0.85rem; }
    .cv-education-item { display: flex; flex-direction: column; gap: 0.2rem; padding-left: 0; }
    .cv-degree { font-size: 0.85rem; font-weight: 700; color: var(--cv-main-text) !important; }
    .cv-school { font-size: 0.75rem; color: var(--cv-main-muted) !important; }

    /* Masquer le bouton export */
    .cv-export-button, button { display: none !important; }

    /* Next.js Image optimized -force display */
    img { display: block; }

    @media print {
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

        /* En impression : 1vh = 1% de la hauteur A4 (297mm) avec @page margin:0 */
        html, body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        .cv-document-container {
            height: 100% !important;
        }

        .cv-document {
            width: 100vw !important;
            height: 100vh !important;
            overflow: hidden !important;
        }

        .cv-sidebar-panel {
            height: 100% !important;
            background: var(--cv-sidebar-bg) !important;
        }

        .cv-main-panel {
            height: 100% !important;
            overflow: hidden !important;
        }
    }
  </style>
</head>
<body>
  ${outerHTML}
</body>
</html>`;
};

export default getInlineTemplate;

