/// <reference types="vite/client" />

declare const __HAS_RESUME__: boolean

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_CONTACT_ENDPOINT?: string
}
