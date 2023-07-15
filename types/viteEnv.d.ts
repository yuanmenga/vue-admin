interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: boolean
  VITE_API_URL: string
  VITE_MOCK_ENABLE: boolean
}
interface ImportMetaEnv extends ViteEnv {}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
