/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_START: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
