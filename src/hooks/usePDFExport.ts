import { useCallback } from 'react'
import getInlineTemplate from './iInlineTemplate'

interface usePDFExportOptions {
    filename?: string
}

export const usePDFExport = () => {
    const exportToPDF = useCallback(async (
        element: HTMLElement,
        options: usePDFExportOptions = {}
    ) => {
        const { filename = 'CV_Soule_Soumare.pdf' } = options

        try {

            // Créer une nouvelle fenêtre pour l'impression
            const printWindow = window.open('', '_blank', 'width=800,height=600')

            if (!printWindow) {
                throw new Error("Impossible d'ouvrir la fenêtre d'impression")
            }

            // Cloner le contenu pour l'optimiser
            const clonedElement = element.cloneNode(true) as HTMLElement

            // Créer le HTML optimisé pour l'impression
            const printHTML = getInlineTemplate(filename, clonedElement.outerHTML)

            // Écrire le contenu dans la nouvelle fenêtre
            printWindow.document.write(printHTML)
            printWindow.document.close()

            // Attendre que le contenu soit chargé
            await new Promise<void>((resolve) => {
                printWindow.onload = () => {
                    setTimeout(() => {
                        resolve()
                    }, 1000)
                }
            })

            // Lancer l'impression
            printWindow.focus()
            printWindow.print()

            // Fermer la fenêtre après un délai
            setTimeout(() => {
                printWindow.close()
            }, 1000)


        } catch (error) {
            console.error('Erreur export PDF:', error)
            throw error
        }
    }, [])

    return { exportToPDF }
}

export default usePDFExport