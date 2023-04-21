import { _ as _export_sfc, o as useContent, l as useRoute, G as useHead, a as __nuxt_component_0$4, h as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, computed, unref, withCtx, createVNode } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/index.mjs';
import { f as formatDate } from './date-d2ab7be4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/ofetch/dist/node.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/hookable/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unctx/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unhead/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/h3/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/ufo/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/destr/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/ohash/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/nanoid/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/scule/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/defu/dist/defu.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@iconify/vue/dist/iconify.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unstorage/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/radix3/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/pathe/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unified/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/mdast-util-to-string/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/micromark/lib/preprocess.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/micromark/lib/postprocess.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/micromark-util-character/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/micromark-util-chunked/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/remark-emoji/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/rehype-slug/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/rehype-external-links/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/remark-gfm/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/rehype-raw/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/remark-parse/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/remark-rehype/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/mdast-util-to-hast/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/detab/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unist-builder/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/mdurl/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/slugify/slugify.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unist-util-position/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unist-util-visit/index.js';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unenv/runtime/npm/consola.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "article",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    const route = useRoute();
    if (page.value && page.value.cover) {
      useHead({
        meta: [
          { property: "og:image", content: page.value.cover }
        ]
      });
    }
    const parentPath = computed(
      () => {
        const pathTabl = route.path.split("/");
        pathTabl.pop();
        return pathTabl.join("/");
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<article${ssrRenderAttrs(_attrs)} data-v-d563bb21>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(parentPath),
        class: "back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ph:arrow-left" }, null, _parent2, _scopeId));
            _push2(`<span class="text-primary-900 dark:text-primary-100" data-v-d563bb21${_scopeId}> Back </span>`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ph:arrow-left" }),
              createVNode("span", { class: "text-primary-900 dark:text-primary-100" }, " Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header data-v-d563bb21>`);
      if ((_a = unref(page)) == null ? void 0 : _a.title) {
        _push(`<h1 class="title" data-v-d563bb21>${ssrInterpolate(unref(page).title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = unref(page)) == null ? void 0 : _b.date) {
        _push(`<time class="text-primary-700 dark:text-primary-400"${ssrRenderAttr("datetime", unref(page).date)} data-v-d563bb21>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(page).date))}</time>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="prose" data-v-d563bb21>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/layouts/article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const article = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d563bb21"]]);

export { article as default };
//# sourceMappingURL=article-91195ceb.mjs.map
