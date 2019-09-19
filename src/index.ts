import { PDFCreator } from "./pdf-creator";

let fname = "ticket.pdf"
let len = PDFCreator.print("Title", [
    { key: "Sample 1", value: "1" },
    { key: "サンプル 1", value: "2" },
    { key: "Sample 2", value: "1" },
    { key: "サンプル 2", value: "2" }
], fname);

console.log(`Size of ${fname} is 80x${len}mm`);