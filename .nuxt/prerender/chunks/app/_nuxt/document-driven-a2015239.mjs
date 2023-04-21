import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext, inject, computed, Transition, h } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/index.mjs';
import { o as useContent, x as useRequestEvent, m as useContentHead, l as useRoute, t as layouts, v as appLayoutTransition, w as _wrapIf } from '../server.mjs';
import { useRoute as useRoute$1 } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue-router/dist/vue-router.node.mjs';
import __nuxt_component_1 from './ContentRenderer-a868cfc7.mjs';
import __nuxt_component_2 from './DocumentDrivenEmpty-c6b5d06b.mjs';
import __nuxt_component_3 from './DocumentDrivenNotFound-77302a73.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/ofetch/dist/node.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/hookable/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unctx/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unhead/dist/index.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@unhead/shared/dist/index.mjs';
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
import './ContentRendererMarkdown-8b0fb622.mjs';
import 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/property-information/index.js';

const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    ...{}
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, context.attrs, context.slots);
    };
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(props.name)) != null ? _a : route.meta.layout) != null ? _b : "default";
    });
    return () => {
      var _a;
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (_a = route.meta.layoutTransition) != null ? _a : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && {
          key: layout.value,
          name: layout.value,
          ...{},
          ...context.attrs
        }, context.slots).default()
      }).default();
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "document-driven",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, layout } = useContent();
    if (!page.value && true) {
      const event = useRequestEvent();
      event.res.statusCode = 404;
    }
    useContentHead(page);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ContentRenderer = __nuxt_component_1;
      const _component_DocumentDrivenEmpty = __nuxt_component_2;
      const _component_DocumentDrivenNotFound = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "document-driven-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: unref(layout) || "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DocumentDrivenEmpty, { value }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_DocumentDrivenNotFound, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }) => [
                  createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["value"])) : (openBlock(), createBlock(_component_DocumentDrivenNotFound, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=document-driven-a2015239.mjs.map
