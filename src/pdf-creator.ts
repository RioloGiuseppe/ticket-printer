import { PdfLine } from "./Interfaces";
import { createWriteStream } from 'fs'
const pdfmake = require('pdfmake');

export class PDFCreator {
    private static printer;
    private static get fonts() {
        return {
            MPLUS1p: { normal: 'fonts/MPLUS1p-Regular.ttf', bold: 'fonts/MPLUS1p-Bold.ttf', italics: 'fonts/MPLUS1p-Thin.ttf', bolditalics: 'fonts/MPLUS1p-Bold.ttf' },
            Roboto: { normal: 'fonts/Roboto-Regular.ttf', bold: 'fonts/Roboto-Medium.ttf', italics: 'fonts/Roboto-Italic.ttf', bolditalics: 'fonts/Roboto-MediumItalic.ttf' }
        };
    }

    private static prepare(table: string, data: PdfLine[]) {
        return {
            pageBreakBefore: (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) =>
                currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0,
            pageSize: { width: 227, height: 'auto' },
            pageMargins: [5, 10, 5, 15],
            defaultStyle: { font: 'MPLUS1p', fontSize: 13 },
            content: [
                { text: table, style: { alignment: 'center', fontSize: 17 } },
                {
                    layout: 'headerLineOnly',
                    style: 'table',
                    table: {
                        headerRows: 1,
                        widths: ['*', 'auto'],
                        body: [["Dish", "Quantity"]].concat(data.map(o => [o.key, o.value]))
                    }
                }
            ]
        };
    }

    public static init(): void {
        this.printer = new pdfmake(this.fonts);
    }

    public static print(table: string, data: PdfLine[], fname: string) {
        this.init();

        var pdfDoc = this.printer.createPdfKitDocument(this.prepare(table, data));
        pdfDoc.pipe(createWriteStream(fname));
        pdfDoc.end();
    }
}