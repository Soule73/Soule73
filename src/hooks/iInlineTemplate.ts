const getInlineTemplate = (filename: string, outerHTML: string) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${filename}</title>
          <style>
            /* Reset et optimisation pour PDF */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            @page {
                size: A3;
                margin: 0mm !important;
                padding: 0mm !important;
            }

            body {
                font-family: 'Segoe UI', Arial, sans-serif;
                line-height: 1.3;
                color: #000;
                background: white;

                margin: 0 !important;
                padding: 0 !important;
                page-break-inside: avoid;
            }

            :root {
                --primary-blue: #3b82f6;
                --primary-dark-blue: #1e40af;
                --secondary-blue: #60a5fa;
                --accent-purple: #8b5cf6;
                --text-dark: #1f2937;
                --text-medium: #374151;
                --text-light: #6b7280;
                --bg-light: #f9fafb;
                --bg-white: #ffffff;
                --border-color: #e5e7eb;
                --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }

            /* Document CV */
            .cv-document {
                max-width: 64rem;
                margin: 0 auto;
                background-color: var(--bg-white);
                box-shadow: var(--shadow-lg);
                border-radius: 0.5rem;
                overflow: hidden;
                page-break-inside: avoid;
            }

            /* Header du document */
            .cv-document-header {
                background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark-blue) 100%);
                color: white;
                padding: 2rem;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .cv-header-content {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 2rem;
            }

            .cv-photo {
                width: 8rem;
                height: 8rem;
                background-color: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .cv-photo-img {
                width: 7rem;
                height: 7rem;
                border-radius: 50%;
                object-fit: cover;
            }

            .cv-header-info {
                text-align: left;
                flex: 1;
            }

            .cv-name {
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
                color: white;
            }

            .cv-title {
                font-weight: 300;
            }

            .cv-professional-info {
                font-size: 0.875rem;
                color: white;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 0.25rem;
            }

            .cv-available-from {
                font-style: italic;
            }

            .cv-available-from::before,
            .cv-available-from::after {
                content: ' ';
                margin-left: 0.4rem;

            }

            .cv-searching-for {
                font-weight: 700;
            }

            .cv-searching-for::after {
                content: '-';
                margin: 0 0.4rem;
                font-size: 1rem;
            }

            .cv-duration,
            .cv-rythm {
                font-size: 0.875rem;
                color: white;
                font-style: italic;
                margin: 0.25rem 0;
            }

            .cv-separator {
                margin: 0 0.5rem;
            }

            .cv-contact-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.5rem;
                font-size: 0.875rem;
            }

            .cv-contact-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: white;
            }

            .cv-contact-item a {
                color: white;
                text-decoration: underline;
                text-underline-offset: 2px;
                text-decoration-thickness: 0.5px;
            }

            /* Contenu principal */
            .cv-content {
                padding: 0.5rem 2rem;
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: 2.5rem;
            }

            /* Sections */
            .cv-section {
                margin-bottom: 2.5rem;
                page-break-inside: avoid;
            }

            .cv-section:last-child {
                margin-bottom: 0;
            }

            .cv-section-title {
                font-size: 1.25rem !important;
                font-weight: 700 !important;
                color: var(--text-dark) !important;
                margin-bottom: 0.75rem !important;
                padding-bottom: 0.1rem !important;
                border-bottom: 2px solid var(--primary-blue) !important;
                display: flex !important;
                align-items: center !important;
                gap: 0.75rem !important;
            }

            .cv-section-icon {
                width: 1.25rem;
                height: 1.25rem;
                /* color: var(--primary-blue); */
                stroke: var(--primary-blue);
            }

            /* Section Profil */
            .cv-profile-section {
                margin-bottom: 1rem;
                padding: 0.5rem 1.5rem 0 1.5rem;
                border-radius: 0.5rem;
                page-break-inside: avoid;
            }

            .cv-profile-text {
                line-height: 1.6;
                color: var(--text-medium);
                font-size: 0.9rem;
                text-align: justify;
                margin: 0;
            }

            /* Timeline (expérience) */
            .cv-timeline {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .cv-timeline-item {
                position: relative;
                padding-left: 1.5rem;
                border-left: 2px solid var(--border-color);
                page-break-inside: avoid;
                margin-bottom: 1.5rem;
            }

            .cv-timeline-item-last {
                position: relative;
                padding-left: 1.5rem;
                border-left: 2px solid var(--border-color);
                page-break-inside: avoid;
                margin-bottom: 0;
            }

            .cv-timeline-item-last::before,
            .cv-timeline-item::before {
                content: '';
                position: absolute;
                width: 1rem;
                height: 1rem;
                background-color: var(--primary-blue);
                border-radius: 50%;
                left: -0.5rem;
                top: 0;
            }

            .cv-timeline-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
            }

            .cv-job-title {
                font-weight: 700;
                color: var(--text-dark);
                font-size: 1rem;
                margin-bottom: 0.2rem;
            }

            .cv-period {
                font-size: 0.8rem;
                color: var(--text-light);
                padding: 0.25rem 0.75rem;
                white-space: nowrap;
            }

            .cv-company-info {
                display: flex;
                align-items: center;
                color: var(--text-light);
                margin-bottom: 0.3rem;
                gap: 0.5rem;
            }

            .cv-company {
                font-weight: 500;
                font-size: 0.875rem;

            }

            .cv-location {
                font-size: 0.875rem;
            }

            .cv-description-list {
                font-size: 0.9rem;
                line-height: 1.5;
                color: var(--text-medium);
                padding-left: 0;
                list-style: none;
                margin: 0;
            }

            .cv-description-list li {
                display: flex;
                align-items: flex-start;
                margin-bottom: 0.5rem;
            }

            .cv-description-list li::before {
                content: '';
                width: 0.5rem;
                height: 0.2rem;
                margin-top: 0.25rem;
                background-color: var(--primary-blue);
                color: var(--primary-blue);
                margin-right: 0.5rem;
                margin-top: 0.6rem;
                flex-shrink: 0;
            }

            /* Compétences compactes pour économiser l'espace */
            .cv-skills-compact {
                padding-bottom: 0.75rem;
                padding-top: 0 !important;
            }

            .cv-skill-row {
                display: flex;
                margin-bottom: 0.5rem;
                font-size: 0.875rem;
                line-height: 1.3;
            }

            .cv-skill-row:last-child {
                margin-bottom: 0;
            }

            .cv-skill-label {
                font-weight: 600;
                color: var(--text-dark);
                flex-shrink: 0;
                margin-right: 1rem;
            }

            .cv-skill-label::after {
                content: ' : ';
            }

            .cv-skill-list {
                color: var(--text-medium);
                flex: 1;
            }

            /* Sidebar */
            .cv-sidebar {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-bottom: 1rem;
            }

            /* Formation */
            .cv-education-list {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .cv-education-item {
                background-color: var(--bg-light);
                padding: 1.25rem;
                border-radius: 0.5rem;
                page-break-inside: avoid;
            }

            .cv-degree {
                font-weight: 700;
                font-size: 0.8rem;
                color: var(--text-dark);
                margin-bottom: 0.5rem;
            }

            .cv-school {
                color: var(--primary-blue);
                font-weight: 500;
                font-size: 0.7rem;
                margin-bottom: 0.55rem;
            }

            .cv-edu-details {
                display: flex;
                flex-direction: row;
                font-size: 0.7rem;
                color: var(--text-light);
                margin-bottom: 0.75rem;
                gap: 0.5rem;
            }

            .cv-edu-period::after {
                content: ' - ';
            }

            .cv-edu-description {
                color: var(--text-medium);
                font-size: 0.8rem;
                margin: 0;
            }

            /* Langues */
            .cv-languages-list {
                display: flex;
                flex-direction: column;
                gap: 0.3rem;
            }

            .cv-language-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .cv-language-name {
                font-weight: 500;
                color: var(--text-dark);
            }

            .cv-language-level {
                font-size: 0.875rem;
                color: var(--text-light);
            }

            /* Print styles pour optimiser l'export PDF A4 */
            @media print {
                * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }

                @page {
                    size: A4;
                    margin: 0mm !important;
                    padding: 0mm !important;
                }

                .cv-document {
                    box-shadow: none;
                    border-radius: 0;
                    max-width: none;
                    margin: 0 !important;
                    padding: 0 !important;
                    page-break-inside: avoid;
                    height: 100vh !important;
                    width: 100vw !important;
                    min-height: auto;
                }

                .cv-document-header {
                    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark-blue) 100%) !important;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                    padding: 0.5rem !important;
                    margin: 0 !important;
                }

                .cv-content {
                    padding: 0.5rem 2rem !important;
                    gap: 1rem !important;
                    margin: 0 !important;
                }

                .cv-main-content {
                    gap: 1rem !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }

                .cv-sidebar {
                    gap: 1rem !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    margin-bottom: 1rem !important;
                }

                .cv-section {
                    break-inside: avoid;
                    page-break-inside: avoid;
                    margin-bottom: 1rem !important;
                    margin: 0 0 1rem 0 !important;
                    padding: 0 !important;
                }

                .cv-section-title {
                    font-size: 1rem !important;
                    margin-bottom: 0.75rem !important;
                    padding-bottom: 0.1rem !important;
                    margin: 0 0 1rem 0 !important;
                    border-bottom: 1.5px solid var(--primary-blue) !important;
                }

                .cv-timeline-item {
                    break-inside: avoid;
                    page-break-inside: avoid;
                    margin-bottom: 1rem !important;
                }

                .cv-education-item,
                .cv-project-item {
                    break-inside: avoid;
                    page-break-inside: avoid;
                    margin-bottom: 0.75rem !important;
                }

                .cv-name {
                    font-size: 1.5rem !important;
                    margin-bottom: 0.25rem !important;
                }

                .cv-title {
                    font-weight: 300;
                }

                .cv-professional-info {
                    font-size: 0.875rem !important;
                    color: white !important;
                    display: flex !important;
                    align-items: center !important;
                    margin-bottom: 0.25rem !important;
                }

                .cv-available-from {
                    font-style: italic !important;
                }

                .cv-available-from::before,
                .cv-available-from::after {
                    content: ' ' !important;
                    margin-left: 0.4rem !important;

                }

                .cv-searching-for {
                    font-weight: 700 !important;
                }

                .cv-searching-for::after {
                    content: '-' !important;
                    margin: 0 0.4rem !important;
                    font-size: 1rem !important;
                }

                .cv-duration,
                .cv-rythm {
                    font-size: 0.875rem !important;
                    color: white !important;
                    font-style: italic !important;
                    margin: 0.25rem 0 !important;
                }

                .cv-separator {
                    margin: 0 0.5rem !important;
                }

                .cv-contact-grid {
                    gap: 0.25rem !important;
                }

                .cv-skills-compact {
                    padding: 0.75rem !important;
                }

                .cv-skill-row {
                    display: flex !important;
                    margin-bottom: 0.5rem !important;
                    font-size: 0.875rem !important;
                    line-height: 1.3 !important;
                }

                .cv-skill-row:last-child {
                    margin-bottom: 0 !important;
                }

                .cv-languages-list {
                    gap: 0.25rem !important;
                }

                .cv-description-list li {
                    margin-bottom: 0.125rem !important;
                    font-size: 0.8rem !important;
                }

                .cv-header-content {
                    gap: 1rem !important;
                }

                .cv-photo {
                    width: 6rem !important;
                    height: 6rem !important;
                }

                .cv-photo-img {
                    width: 5.5rem !important;
                    height: 5.5rem !important;
                }

                .cv-contact-item {
                    display: flex !important;
                    align-items: center !important;
                    gap: 0.5rem !important;
                    color: white !important;
                }

                .cv-contact-item a {
                    color: white !important;
                    text-decoration: underline !important;
                    text-underline-offset: 2px !important;
                    text-decoration-thickness: 0.5px !important;
                }

                .cv-company-info {
                    display: flex !important;
                    align-items: center !important;
                    color: var(--text-light) !important;
                    margin-bottom: 0.3rem !important;
                    gap: 0.5rem !important;
                }

                .cv-company {
                    font-weight: 500 !important;
                    font-size: 0.875rem !important;

                }

                .cv-location {
                    font-size: 0.875rem !important;
                }

                .cv-profile-text {
                    line-height: 1.6 !important;
                    color: var(--text-medium) !important;
                    font-size: 0.9rem !important;
                    text-align: justify !important;
                    margin: 0 !important;
                }


                /* Masquer les éléments non nécessaires pour l'impression */
                .cv-export-button {
                    display: none !important;
                }
            }
          </style>
        </head>
        <body>
          ${outerHTML}
        </body>
        </html>
      `;
};

export default getInlineTemplate;