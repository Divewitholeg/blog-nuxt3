import { useSSRContext, defineComponent, ref, computed, mergeProps, unref } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/server-renderer/index.mjs';
import { useClipboard } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@vueuse/core/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "Terminal",
  __ssrInlineRender: true,
  props: {
    content: {
      type: [Array, String],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useClipboard();
    const state = ref("init");
    const lines = computed(() => {
      if (typeof props.content === "string") {
        return [props.content];
      }
      return props.content;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "terminal" }, _attrs))} data-v-63eb7158>`);
      if (unref(state) === "copied") {
        _push(`<div class="copied" data-v-63eb7158><div class="scrim" data-v-63eb7158></div><div class="content" data-v-63eb7158> Copied! </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header" data-v-63eb7158><div class="controls" data-v-63eb7158><div data-v-63eb7158></div><div data-v-63eb7158></div><div data-v-63eb7158></div></div><div class="title" data-v-63eb7158> Bash </div></div><div class="window" data-v-63eb7158><!--[-->`);
      ssrRenderList(unref(lines), (line) => {
        _push(`<span class="line" data-v-63eb7158><span class="sign" data-v-63eb7158>$</span><span class="content" data-v-63eb7158>${ssrInterpolate(line)}</span></span>`);
      });
      _push(`<!--]--></div>`);
      if (unref(state) !== "copied") {
        _push(`<div class="prompt" data-v-63eb7158> Click to copy </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Terminal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63eb7158"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Terminal-53d6e082.mjs.map
