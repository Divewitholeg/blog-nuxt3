import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "article" | "default" | "page"
declare module "/home/holydiver/Documents/FIE/nuxt/blog/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}