export interface Driver {
    id: string;
    makeAndModel: string;
    lang: string;
    driver: string;
}

export interface Device {
    uri: string;
    class: string;
    info: string;
    makeAndModel: string;
    id: string;
    location: string;
}

export interface PdfLine {
    key: string;
    value: string;
}