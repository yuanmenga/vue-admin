interface ViteEnv {
  VITE_API_URL: string;
  VITE_MOCK_ENABLE: boolean;
}
interface ImportMetaEnv extends ViteEnv {}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
