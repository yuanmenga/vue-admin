import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss/index";
export function setupPlugins(app: App) {
  setupTailwindcss();
}
