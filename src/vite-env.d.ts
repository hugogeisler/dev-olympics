/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OLYMPIC_DATA_API_URL: string;
    readonly VITE_OLYMPIC_DATA_API_TIMEOUT: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
