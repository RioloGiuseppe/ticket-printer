import { PDFCreator } from "./pdf-creator";

PDFCreator.print("Table 1", [
    {
        key: "Pasta",
        value: "1"
    },
    {
        key: "餃子",
        value: "12"
    },
    {
        key: "Boooo",
        value: "7"
    }
], "ticket.pdf")