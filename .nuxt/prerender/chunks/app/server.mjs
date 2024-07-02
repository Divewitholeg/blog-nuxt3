import { getCurrentInstance, version, toRef, isRef, inject, ref, reactive, computed, useSSRContext, defineComponent, h, unref, watch, watchEffect, resolveComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, withAsyncContext, openBlock, createBlock, createCommentVNode, Fragment as Fragment$1, createApp, shallowReactive, provide, onErrorCaptured, onServerPrefetch, shallowRef, isReadonly, defineAsyncComponent, nextTick, createElementBlock, onScopeDispose, Suspense, Transition } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/index.mjs';
import { $fetch as $fetch$1 } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unctx/dist/index.mjs';
import { renderSSRHead } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@unhead/ssr/dist/index.mjs';
import { composableNames, getActiveHead, createServerHead as createServerHead$1 } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@unhead/shared/dist/index.mjs';
import { createMemoryHistory, createRouter, RouterView } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue-router/dist/vue-router.node.mjs';
import { createError as createError$1, appendHeader, sendRedirect, setResponseStatus as setResponseStatus$1 } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/h3/dist/index.mjs';
import { withoutTrailingSlash, withLeadingSlash, joinURL, hasProtocol, parseURL, parseQuery, withBase, withTrailingSlash, isEqual as isEqual$1 } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/ufo/dist/index.mjs';
import destr from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/destr/dist/index.mjs';
import { hash, isEqual } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/ohash/dist/index.mjs';
import { parse, serialize } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/cookie-es/dist/index.mjs';
import { nanoid } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/nanoid/index.js';
import { kebabCase } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/scule/dist/index.mjs';
import { defu } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/defu/dist/defu.mjs';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSuspense } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/server-renderer/index.mjs';
import { Icon as Icon$1 } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@iconify/vue/dist/offline.mjs';
import { loadIcon } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/@iconify/vue/dist/iconify.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
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

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.4.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      data: shallowReactive({}),
      state: shallowReactive({}),
      _errors: shallowReactive({}),
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtAppCtx.call(nuxtApp, () => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin2, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin2 of plugins2) {
    await applyPlugin(nuxtApp, plugin2);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = [];
  for (const plugin2 of _plugins2) {
    if (typeof plugin2 !== "function") {
      continue;
    }
    let _plugin = plugin2;
    if (plugin2.length > 1) {
      _plugin = (nuxtApp) => plugin2(nuxtApp, nuxtApp.provide);
    }
    plugins2.push(_plugin);
  }
  plugins2.sort((a, b) => {
    var _a, _b;
    return (((_a = a.meta) == null ? void 0 : _a.order) || orderMap.default) - (((_b = b.meta) == null ? void 0 : _b.order) || orderMap.default);
  });
  return plugins2;
}
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function defineNuxtPlugin(plugin2, meta) {
  var _a;
  if (typeof plugin2 === "function") {
    return /* @__PURE__ */ defineNuxtPlugin({ setup: plugin2 }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin2.hooks) {
      nuxtApp.hooks.addHooks(plugin2.hooks);
    }
    if (plugin2.setup) {
      return plugin2.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: (meta == null ? void 0 : meta.name) || plugin2.name || ((_a = plugin2.setup) == null ? void 0 : _a.name),
    order: (meta == null ? void 0 : meta.order) || plugin2.order || orderMap[plugin2.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}
const components = {
  ArticlesList: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ArticlesList-51e60deb.mjs'
    /* webpackChunkName: "components/articles-list" */
  ).then((c) => c.default || c)),
  ArticlesListItem: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ArticlesListItem-7ebfdc5f.mjs'
    /* webpackChunkName: "components/articles-list-item" */
  ).then((c) => c.default || c)),
  ContactForm: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContactForm-1768cb0d.mjs'
    /* webpackChunkName: "components/contact-form" */
  ).then((c) => c.default || c)),
  Gallery: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Gallery-c19e1b1d.mjs'
    /* webpackChunkName: "components/gallery" */
  ).then((c) => c.default || c)),
  Hero: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Hero-c0a447a0.mjs'
    /* webpackChunkName: "components/hero" */
  ).then((c) => c.default || c)),
  Input: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Input-295d755c.mjs'
    /* webpackChunkName: "components/input" */
  ).then((c) => c.default || c)),
  AppFooter: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppFooter;
  }).then((c) => c.default || c)),
  AppHeader: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppHeader;
  }).then((c) => c.default || c)),
  AppLayout: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppLayout;
  }).then((c) => c.default || c)),
  AppLoadingBar: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return AppLoadingBar;
  }).then((c) => c.default || c)),
  Button: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Button-bd4ad977.mjs'
    /* webpackChunkName: "components/button" */
  ).then((c) => c.default || c)),
  ColorModeSwitch: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return ColorModeSwitch;
  }).then((c) => c.default || c)),
  DocumentDrivenNotFound: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/DocumentDrivenNotFound-77302a73.mjs'
    /* webpackChunkName: "components/document-driven-not-found" */
  ).then((c) => c.default || c)),
  MainNav: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return MainNav;
  }).then((c) => c.default || c)),
  SocialIcons: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return SocialIcons;
  }).then((c) => c.default || c)),
  ProseA: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseA-8fc134d0.mjs'
    /* webpackChunkName: "components/prose-a" */
  ).then((c) => c.default || c)),
  ProseBlockquote: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseBlockquote-c23919ba.mjs'
    /* webpackChunkName: "components/prose-blockquote" */
  ).then((c) => c.default || c)),
  ProseCode: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseCode-ccde8b17.mjs'
    /* webpackChunkName: "components/prose-code" */
  ).then((c) => c.default || c)),
  ProseCodeInline: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseCodeInline-7ced61c0.mjs'
    /* webpackChunkName: "components/prose-code-inline" */
  ).then((c) => c.default || c)),
  ProseEm: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseEm-27ec4567.mjs'
    /* webpackChunkName: "components/prose-em" */
  ).then((c) => c.default || c)),
  ProseH1: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH1-ffe8013e.mjs'
    /* webpackChunkName: "components/prose-h1" */
  ).then((c) => c.default || c)),
  ProseH2: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH2-223660b6.mjs'
    /* webpackChunkName: "components/prose-h2" */
  ).then((c) => c.default || c)),
  ProseH3: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH3-d4ebdb68.mjs'
    /* webpackChunkName: "components/prose-h3" */
  ).then((c) => c.default || c)),
  ProseH4: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH4-80ffae41.mjs'
    /* webpackChunkName: "components/prose-h4" */
  ).then((c) => c.default || c)),
  ProseH5: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH5-1b72f162.mjs'
    /* webpackChunkName: "components/prose-h5" */
  ).then((c) => c.default || c)),
  ProseH6: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseH6-d982ca63.mjs'
    /* webpackChunkName: "components/prose-h6" */
  ).then((c) => c.default || c)),
  ProseHr: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseHr-5fe752ec.mjs'
    /* webpackChunkName: "components/prose-hr" */
  ).then((c) => c.default || c)),
  ProseImg: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseImg-9519e386.mjs'
    /* webpackChunkName: "components/prose-img" */
  ).then((c) => c.default || c)),
  ProseLi: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseLi-1fa6202c.mjs'
    /* webpackChunkName: "components/prose-li" */
  ).then((c) => c.default || c)),
  ProseOl: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseOl-8f0c8eee.mjs'
    /* webpackChunkName: "components/prose-ol" */
  ).then((c) => c.default || c)),
  ProseP: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseP-f3b3822f.mjs'
    /* webpackChunkName: "components/prose-p" */
  ).then((c) => c.default || c)),
  ProseStrong: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseStrong-1aba813e.mjs'
    /* webpackChunkName: "components/prose-strong" */
  ).then((c) => c.default || c)),
  ProseTable: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTable-b5264212.mjs'
    /* webpackChunkName: "components/prose-table" */
  ).then((c) => c.default || c)),
  ProseTbody: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTbody-9e1fe458.mjs'
    /* webpackChunkName: "components/prose-tbody" */
  ).then((c) => c.default || c)),
  ProseTd: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTd-eae31ffd.mjs'
    /* webpackChunkName: "components/prose-td" */
  ).then((c) => c.default || c)),
  ProseTh: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTh-3083b637.mjs'
    /* webpackChunkName: "components/prose-th" */
  ).then((c) => c.default || c)),
  ProseThead: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseThead-f272850d.mjs'
    /* webpackChunkName: "components/prose-thead" */
  ).then((c) => c.default || c)),
  ProseTr: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseTr-9cbf0a55.mjs'
    /* webpackChunkName: "components/prose-tr" */
  ).then((c) => c.default || c)),
  ProseUl: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ProseUl-1a677082.mjs'
    /* webpackChunkName: "components/prose-ul" */
  ).then((c) => c.default || c)),
  Alert: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Alert-8da19cca.mjs'
    /* webpackChunkName: "components/alert" */
  ).then((c) => c.default || c)),
  Badge: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Badge-e16f021c.mjs'
    /* webpackChunkName: "components/badge" */
  ).then((c) => c.default || c)),
  ButtonLink: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ButtonLink-f8841160.mjs'
    /* webpackChunkName: "components/button-link" */
  ).then((c) => c.default || c)),
  Callout: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Callout-cb7c3cc8.mjs'
    /* webpackChunkName: "components/callout" */
  ).then((c) => c.default || c)),
  CodeBlock: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/CodeBlock-9b994842.mjs'
    /* webpackChunkName: "components/code-block" */
  ).then((c) => c.default || c)),
  CodeGroup: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/CodeGroup-6f04234c.mjs'
    /* webpackChunkName: "components/code-group" */
  ).then((c) => c.default || c)),
  Container: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return Container;
  }).then((c) => c.default || c)),
  CopyButton: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/CopyButton-0ea7b091.mjs'
    /* webpackChunkName: "components/copy-button" */
  ).then((c) => c.default || c)),
  Ellipsis: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Ellipsis-5c9b3475.mjs'
    /* webpackChunkName: "components/ellipsis" */
  ).then((c) => c.default || c)),
  List: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/List-9acf2063.mjs'
    /* webpackChunkName: "components/list" */
  ).then((c) => c.default || c)),
  NuxtImg: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return NuxtImg;
  }).then((c) => c.default || c)),
  Props: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Props-75af9765.mjs'
    /* webpackChunkName: "components/props" */
  ).then((c) => c.default || c)),
  Sandbox: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Sandbox-b7103d5d.mjs'
    /* webpackChunkName: "components/sandbox" */
  ).then((c) => c.default || c)),
  SourceLink: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/SourceLink-2ec81596.mjs'
    /* webpackChunkName: "components/source-link" */
  ).then((c) => c.default || c)),
  TabsHeader: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/TabsHeader-189d09e7.mjs'
    /* webpackChunkName: "components/tabs-header" */
  ).then((c) => c.default || c)),
  Terminal: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Terminal-53d6e082.mjs'
    /* webpackChunkName: "components/terminal" */
  ).then((c) => c.default || c)),
  VideoPlayer: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/VideoPlayer-b51fe4e7.mjs'
    /* webpackChunkName: "components/video-player" */
  ).then((c) => c.default || c)),
  IconCodeSandBox: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconCodeSandBox-2c594903.mjs'
    /* webpackChunkName: "components/icon-code-sand-box" */
  ).then((c) => c.default || c)),
  IconDocus: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconDocus-3e7fa35b.mjs'
    /* webpackChunkName: "components/icon-docus" */
  ).then((c) => c.default || c)),
  IconNuxt: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconNuxt-fa67c538.mjs'
    /* webpackChunkName: "components/icon-nuxt" */
  ).then((c) => c.default || c)),
  IconNuxtContent: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconNuxtContent-0ba70414.mjs'
    /* webpackChunkName: "components/icon-nuxt-content" */
  ).then((c) => c.default || c)),
  IconNuxtLabs: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconNuxtLabs-7dd518c7.mjs'
    /* webpackChunkName: "components/icon-nuxt-labs" */
  ).then((c) => c.default || c)),
  IconNuxtStudio: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconNuxtStudio-00314f1f.mjs'
    /* webpackChunkName: "components/icon-nuxt-studio" */
  ).then((c) => c.default || c)),
  IconStackBlitz: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconStackBlitz-69a8eb70.mjs'
    /* webpackChunkName: "components/icon-stack-blitz" */
  ).then((c) => c.default || c)),
  IconVueTelescope: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconVueTelescope-564003ff.mjs'
    /* webpackChunkName: "components/icon-vue-telescope" */
  ).then((c) => c.default || c)),
  BlockHero: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/BlockHero-ab7c2627.mjs'
    /* webpackChunkName: "components/block-hero" */
  ).then((c) => c.default || c)),
  Card: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Card-d82cb6b2.mjs'
    /* webpackChunkName: "components/card" */
  ).then((c) => c.default || c)),
  CardGrid: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/CardGrid-23cc9dcf.mjs'
    /* webpackChunkName: "components/card-grid" */
  ).then((c) => c.default || c)),
  VoltaBoard: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/VoltaBoard-98820156.mjs'
    /* webpackChunkName: "components/volta-board" */
  ).then((c) => c.default || c)),
  ComponentPlayground: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ComponentPlayground-c3b13f51.mjs'
    /* webpackChunkName: "components/component-playground" */
  ).then((c) => c.default || c)),
  ComponentPlaygroundData: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ComponentPlaygroundData-c475d8f6.mjs'
    /* webpackChunkName: "components/component-playground-data" */
  ).then((c) => c.default || c)),
  ComponentPlaygroundProps: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ComponentPlaygroundProps-deac6488.mjs'
    /* webpackChunkName: "components/component-playground-props" */
  ).then((c) => c.default || c)),
  ComponentPlaygroundSlots: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ComponentPlaygroundSlots-0dbd767a.mjs'
    /* webpackChunkName: "components/component-playground-slots" */
  ).then((c) => c.default || c)),
  ComponentPlaygroundTokens: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ComponentPlaygroundTokens-548a0a2d.mjs'
    /* webpackChunkName: "components/component-playground-tokens" */
  ).then((c) => c.default || c)),
  PreviewLayout: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/PreviewLayout-d33c55a0.mjs'
    /* webpackChunkName: "components/preview-layout" */
  ).then((c) => c.default || c)),
  TokensPlayground: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/TokensPlayground-6ed6d53d.mjs'
    /* webpackChunkName: "components/tokens-playground" */
  ).then((c) => c.default || c)),
  ContentDoc: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentDoc-33232896.mjs'
    /* webpackChunkName: "components/content-doc" */
  ).then((c) => c.default || c)),
  ContentList: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentList-7295b45c.mjs'
    /* webpackChunkName: "components/content-list" */
  ).then((c) => c.default || c)),
  ContentNavigation: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentNavigation-2ee4c821.mjs'
    /* webpackChunkName: "components/content-navigation" */
  ).then((c) => c.default || c)),
  ContentQuery: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentQuery-ea8d99f0.mjs'
    /* webpackChunkName: "components/content-query" */
  ).then((c) => c.default || c)),
  ContentRenderer: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentRenderer-a868cfc7.mjs'
    /* webpackChunkName: "components/content-renderer" */
  ).then((c) => c.default || c)),
  ContentRendererMarkdown: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentRendererMarkdown-8b0fb622.mjs'
    /* webpackChunkName: "components/content-renderer-markdown" */
  ).then((c) => c.default || c)),
  ContentSlot: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/ContentSlot-2346260f.mjs'
    /* webpackChunkName: "components/content-slot" */
  ).then((c) => c.default || c)),
  DocumentDrivenEmpty: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/DocumentDrivenEmpty-c6b5d06b.mjs'
    /* webpackChunkName: "components/document-driven-empty" */
  ).then((c) => c.default || c)),
  Markdown: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/Markdown-bf21261f.mjs'
    /* webpackChunkName: "components/markdown" */
  ).then((c) => c.default || c)),
  Icon: /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
    return Icon;
  }).then((c) => c.default || c)),
  IconCSS: /* @__PURE__ */ defineAsyncComponent(() => import(
    './_nuxt/IconCSS-82ff92e3.mjs'
    /* webpackChunkName: "components/icon-css" */
  ).then((c) => c.default || c))
};
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const name in components) {
      nuxtApp.vueApp.component(name, components[name]);
      nuxtApp.vueApp.component("Lazy" + name, components[name]);
    }
  }
});
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin2 = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin2.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
const VueReactiveUseHeadPlugin = () => {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
};
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function setResponseStatus(arg1, arg2, arg3) {
  if (arg1 && typeof arg1 !== "number") {
    return setResponseStatus$1(arg1, arg2, arg3);
  }
  return setResponseStatus$1(useRequestEvent(), arg1, arg2);
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global = options.global || typeof name !== "string";
  const mw = typeof name !== "string" ? name : middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      if (isProcessingMiddleware() && !isExternal) {
        setResponseStatus(nuxtApp.ssrContext.event, (options == null ? void 0 : options.redirectCode) || 302);
        return to;
      }
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const _routes = [
  {
    name: "slug",
    path: "/:slug(.*)*",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/document-driven-a2015239.mjs').then((m) => m.default || m)
  },
  {
    name: "__app_config.json",
    path: "/__app_config.json",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/empty-5f0cb977.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const router_jmwsqit4Rs = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      route[key] = computed(() => _route.value[key]);
    }
    nuxtApp._route = reactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
      for (const component of to.matched) {
        const componentMiddleware = component.meta.middleware;
        if (!componentMiddleware) {
          continue;
        }
        if (Array.isArray(componentMiddleware)) {
          for (const entry2 of componentMiddleware) {
            middlewareEntries.add(entry2);
          }
        } else {
          middlewareEntries.add(componentMiddleware);
        }
      }
      for (const entry2 of middlewareEntries) {
        const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
        if (!middleware) {
          throw new Error(`Unknown route middleware: '${entry2}'.`);
        }
        const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error2 = result || createError$1({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            await callWithNuxt(nuxtApp, showError, [error2]);
            return false;
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.afterEach(async (to) => {
      delete nuxtApp._processingMiddleware;
      if (to.matched.length === 0) {
        await callWithNuxt(nuxtApp, showError, [createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      } else {
        const currentURL = to.fullPath || "/";
        if (!isEqual$1(currentURL, initialURL, { trailingSlash: true })) {
          const event = await callWithNuxt(nuxtApp, useRequestEvent);
          const options = { redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302 };
          await callWithNuxt(nuxtApp, navigateTo, [currentURL, options]);
        }
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #$4982
          force: true
        });
      } catch (error2) {
        await callWithNuxt(nuxtApp, showError, [error2]);
      }
    });
    return { provide: { router } };
  }
}, 1);
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName2 = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* @__PURE__ */ defineComponent({
    name: componentName2,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$4 = /* @__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const cfg0 = defineAppConfig({
  alpine: {
    title: "Oleg Rõbnikov",
    description: "An mdx powered blog theme for Nuxt 3.",
    image: {
      src: "/social-card-preview.png",
      alt: "An image showcasing my project.",
      width: 400,
      height: 300
    },
    header: {
      position: "right",
      // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg",
        // path of the logo
        pathDark: "/white-logo.svg",
        // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "Oleg Rõbnikov Web Development"
        // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false,
        // possible value are : true | false
        repository: "https://www.github.com/nuxt-themes/alpine"
        // our github repository
      },
      navigation: true,
      // possible value are : true | false
      alignment: "center",
      // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "Follow me on"
      // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "DiveWithOleg",
      facebook: "vuewebdev",
      github: "Divewitholeg",
      youtube: "vuewebdev",
      linkedin: {
        icon: "uil:linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/olegrybnikov/"
      }
    },
    form: {
      successMessage: "Message sent. Thank you!"
    }
  }
});
const cfg1 = defineAppConfig({
  alpine: {
    title: "Alpine",
    description: "The minimalist blog theme",
    image: {
      src: "/social-card-preview.png",
      alt: "An image showcasing my project.",
      width: 400,
      height: 300
    },
    header: {
      position: "right",
      logo: {
        path: "/logo.svg",
        pathDark: "/logo-dark.svg",
        alt: "alpine"
      }
    },
    footer: {
      credits: {
        enabled: true,
        text: "Alpine",
        repository: "https://www.github.com/nuxt-themes/alpine"
      },
      navigation: true,
      alignment: "center",
      message: "Follow me on"
    },
    socials: {
      twitter: "",
      instagram: "",
      github: "",
      facebook: "",
      medium: "",
      youtube: ""
    },
    form: {
      successMessage: "Message sent. Thank you!"
    }
  }
});
const cfg2 = defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    }
  }
});
const cfg3 = defineAppConfig({});
const inlineConfig = {};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, cfg1, cfg2, cfg3, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
const useContentState = () => {
  const pages = useState("dd-pages", () => ({}));
  const surrounds = useState("dd-surrounds", () => ({}));
  const navigation = useState("dd-navigation");
  const globals = useState("dd-globals", () => ({}));
  return {
    pages,
    surrounds,
    navigation,
    globals
  };
};
const useContent = () => {
  const { navigation, pages, surrounds, globals } = useContentState();
  const _path = computed(() => withoutTrailingSlash(useRoute().path));
  const page = computed(() => pages.value[_path.value]);
  const surround = computed(() => surrounds.value[_path.value]);
  const toc = computed(() => {
    var _a, _b;
    return (_b = (_a = page == null ? void 0 : page.value) == null ? void 0 : _a.body) == null ? void 0 : _b.toc;
  });
  const type = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.type;
  });
  const excerpt = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.excerpt;
  });
  const layout = computed(() => {
    var _a;
    return (_a = page.value) == null ? void 0 : _a.layout;
  });
  const next = computed(() => {
    var _a;
    return (_a = surround.value) == null ? void 0 : _a[1];
  });
  const prev = computed(() => {
    var _a;
    return (_a = surround.value) == null ? void 0 : _a[0];
  });
  return {
    // Refs
    globals,
    navigation,
    surround,
    page,
    // From page
    excerpt,
    toc,
    type,
    layout,
    // From surround
    next,
    prev
  };
};
const navBottomLink = (link) => {
  if (!link.children) {
    return link._path;
  }
  for (const child of (link == null ? void 0 : link.children) || []) {
    const result = navBottomLink(child);
    if (result) {
      return result;
    }
  }
};
const navDirFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path && !file._id) {
      return file.children;
    }
    if (file.children) {
      const result = navDirFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navPageFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path) {
      return file;
    }
    if (file.children) {
      const result = navPageFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navKeyFromPath = (path, key, tree) => {
  let value;
  const goDeep = (path2, tree2) => {
    for (const file of tree2) {
      if (path2 !== "/" && file._path === "/") {
        continue;
      }
      if ((path2 == null ? void 0 : path2.startsWith(file._path)) && file[key]) {
        value = file[key];
      }
      if (file._path === path2) {
        return;
      }
      if (file.children) {
        goDeep(path2, file.children);
      }
    }
  };
  goDeep(path, tree);
  return value;
};
const useContentHelpers = () => {
  return {
    navBottomLink,
    navDirFromPath,
    navPageFromPath,
    navKeyFromPath
  };
};
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const encodeQueryParams = (params) => {
  let encoded = jsonStringify(params);
  encoded = typeof Buffer !== "undefined" ? Buffer.from(encoded).toString("base64") : btoa(encoded);
  encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  const chunks = encoded.match(/.{1,100}/g) || [];
  return chunks.join("/");
};
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  var _a;
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof ((_a = node.children) == null ? void 0 : _a.default) === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
const withContentBase = (url) => withBase(url, useRuntimeConfig().public.content.api.baseURL);
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const addPrerenderPath = (path) => {
  const event = useRequestEvent();
  event.res.setHeader(
    "x-nitro-prerender",
    [
      event.res.getHeader("x-nitro-prerender"),
      path
    ].filter(Boolean).join(",")
  );
};
const shouldUseClientDB = () => {
  useRuntimeConfig().content;
  {
    return false;
  }
};
const get$1 = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get$1(a, key), get$1(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    // locale
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
const createQueryFetch = () => async (query) => {
  const { content } = useRuntimeConfig().public;
  const params = query.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/query/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/query/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const db = await import('./_nuxt/client-db-724c8739.mjs').then((m) => m.useContentDatabase());
    return db.fetch(query);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
function queryContent(query, ...pathParts) {
  const { content } = useRuntimeConfig().public;
  const queryBuilder = createQuery(createQueryFetch(), typeof query !== "string" ? query : {});
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    var _a, _b, _c;
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!((_a = params.sort) == null ? void 0 : _a.length)) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (content.locales.length) {
      const queryLocale = (_c = (_b = params.where) == null ? void 0 : _b.find((w) => w._locale)) == null ? void 0 : _c._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: content.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}
const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig().public;
  if (typeof (queryBuilder == null ? void 0 : queryBuilder.params) !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./_nuxt/client-db-724c8739.mjs').then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
const layouts = {
  article: () => import('./_nuxt/article-91195ceb.mjs').then((m) => m.default || m),
  default: () => import('./_nuxt/default-77195937.mjs').then((m) => m.default || m),
  page: () => import('./_nuxt/page-42ade6df.mjs').then((m) => m.default || m)
};
const documentDriven_9cX98v59ZY = /* @__PURE__ */ defineNuxtPlugin((nuxt) => {
  var _a, _b, _c, _d;
  const moduleOptions = (_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.public) == null ? void 0 : _b.content.documentDriven;
  (_d = (_c = useRuntimeConfig()) == null ? void 0 : _c.public) == null ? void 0 : _d.content.experimental.clientDB;
  const findLayout = (to, page, navigation, globals) => {
    var _a2;
    if (page && (page == null ? void 0 : page.layout)) {
      return page.layout;
    }
    if (to.matched.length && ((_a2 = to.matched[0].meta) == null ? void 0 : _a2.layout)) {
      return to.matched[0].meta.layout;
    }
    if (navigation && page) {
      const { navKeyFromPath: navKeyFromPath2 } = useContentHelpers();
      const layoutFromNav = navKeyFromPath2(page._path, "layout", navigation);
      if (layoutFromNav) {
        return layoutFromNav;
      }
    }
    if (moduleOptions.layoutFallbacks && globals) {
      let layoutFallback;
      for (const fallback of moduleOptions.layoutFallbacks) {
        if (globals[fallback] && globals[fallback].layout) {
          layoutFallback = globals[fallback].layout;
          break;
        }
      }
      if (layoutFallback) {
        return layoutFallback;
      }
    }
    return "default";
  };
  const refresh = async (to, dedup = false) => {
    nuxt.callHook("content:document-driven:start", { route: to, dedup });
    const routeConfig = to.meta.documentDriven || {};
    if (to.meta.documentDriven === false) {
      return;
    }
    const { navigation, pages, globals, surrounds } = useContentState();
    const _path = withoutTrailingSlash(to.path);
    const promises = [];
    if (moduleOptions.navigation && routeConfig.navigation !== false) {
      const navigationQuery = () => {
        const { navigation: navigation2 } = useContentState();
        if (navigation2.value && !dedup) {
          return navigation2.value;
        }
        return fetchContentNavigation().then((_navigation) => {
          navigation2.value = _navigation;
          return _navigation;
        }).catch(() => null);
      };
      promises.push(navigationQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.globals) {
      const globalsQuery = () => {
        const { globals: globals2 } = useContentState();
        if (typeof moduleOptions.globals === "object" && Array.isArray(moduleOptions.globals)) {
          console.log("Globals must be a list of keys with QueryBuilderParams as a value.");
          return;
        }
        return Promise.all(
          Object.entries(moduleOptions.globals).map(
            ([key, query]) => {
              if (!dedup && globals2.value[key]) {
                return globals2.value[key];
              }
              let type = "findOne";
              if (query == null ? void 0 : query.type) {
                type = query.type;
              }
              return queryContent(query)[type]().catch(() => null);
            }
          )
        ).then(
          (values) => {
            return values.reduce(
              (acc, value, index) => {
                const key = Object.keys(moduleOptions.globals)[index];
                acc[key] = value;
                return acc;
              },
              {}
            );
          }
        );
      };
      promises.push(globalsQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.page && routeConfig.page !== false) {
      let where = { _path };
      if (typeof routeConfig.page === "string") {
        where = { _path: routeConfig.page };
      }
      if (typeof routeConfig.page === "object") {
        where = routeConfig.page;
      }
      const pageQuery = () => {
        const { pages: pages2 } = useContentState();
        if (!dedup && pages2.value[_path] && pages2.value[_path]._path === _path) {
          return pages2.value[_path];
        }
        return queryContent().where(where).findOne().catch(() => null);
      };
      promises.push(pageQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.surround && routeConfig.surround !== false) {
      let surround = _path;
      if (["string", "object"].includes(typeof routeConfig.page)) {
        surround = routeConfig.page;
      }
      if (["string", "object"].includes(typeof routeConfig.surround)) {
        surround = routeConfig.surround;
      }
      const surroundQuery = () => {
        const { surrounds: surrounds2 } = useContentState();
        if (!dedup && surrounds2.value[_path]) {
          return surrounds2.value[_path];
        }
        return queryContent().where({
          _partial: { $not: true },
          navigation: { $not: false }
        }).without(["body"]).findSurround(surround).catch(() => null);
      };
      promises.push(surroundQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    return await Promise.all(promises.map((promise) => promise())).then(async ([
      _navigation,
      _globals,
      _page,
      _surround
    ]) => {
      var _a2, _b2;
      if (_navigation) {
        navigation.value = _navigation;
      }
      if (_globals) {
        globals.value = _globals;
      }
      if (_surround) {
        surrounds.value[_path] = _surround;
      }
      const redirectTo = (_page == null ? void 0 : _page.redirect) || ((_b2 = (_a2 = _page == null ? void 0 : _page._dir) == null ? void 0 : _a2.navigation) == null ? void 0 : _b2.redirect);
      if (redirectTo) {
        pages.value[_path] = _page;
        return redirectTo;
      }
      if (_page) {
        const layoutName = findLayout(to, _page, _navigation, _globals);
        const layout = layouts[layoutName];
        if (layout && typeof layout === "function") {
          await layout();
        }
        to.meta.layout = layoutName;
        _page.layout = layoutName;
      }
      pages.value[_path] = _page;
      await nuxt.callHook("content:document-driven:finish", { route: to, dedup, page: _page, navigation: _navigation, globals: _globals, surround: _surround });
    });
  };
  addRouteMiddleware(async (to, from) => {
    if (to.path.includes("favicon.ico")) {
      return;
    }
    const redirect = await refresh(to, false);
    if (redirect) {
      if (hasProtocol(redirect)) {
        return callWithNuxt(nuxt, navigateTo, [redirect, { external: true }]);
      } else {
        return redirect;
      }
    }
  });
  {
    delete nuxt.payload.prerenderedAt;
  }
  nuxt.hook("app:data:refresh", async () => false);
});
const app_config_server_3EJd2il4WQ = /* @__PURE__ */ defineNuxtPlugin(() => {
  const event = useRequestEvent();
  if (event.path === "/__app_config.json") {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.statusCode = 200;
    event.node.res.end(JSON.stringify(useAppConfig(), null, 2));
  }
});
const preview_detector_wuXocrN5Sn = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig().public.studio || {};
  const route = useRoute();
  const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
  async function initializePreview() {
    const useStudio = await import('./_nuxt/useStudio-52c67077.mjs').then((m) => m.useStudio);
    const { mountPreviewUI } = useStudio();
    mountPreviewUI();
    queryContent("/non-existing-path").findOne();
  }
  if (runtimeConfig.apiURL) {
    if (Object.prototype.hasOwnProperty.call(route.query, "preview") && !route.query.preview) {
      return;
    }
    if (!route.query.preview && !previewToken.value) {
      return;
    }
    if (route.query.preview && previewToken.value !== route.query.preview) {
      previewToken.value = String(route.query.preview);
    }
    nuxtApp.hook("app:mounted", async () => {
      await initializePreview();
    });
  }
});
const referencesRegex = new RegExp(
  "\\{([^}]+)\\}",
  "g"
);
const DARK = "@dark";
const LIGHT = "@light";
const INITIAL = "@initial";
function set(object, paths, value, splitter = ".") {
  if (typeof paths === "string") {
    paths = paths.split(splitter);
  }
  const limit = paths.length - 1;
  for (let i = 0; i < limit; ++i) {
    const key2 = paths[i];
    object = object[key2] ?? (object[key2] = {});
  }
  const key = paths[limit];
  object[key] = value;
}
function get(object, paths, splitter = ".") {
  if (typeof paths === "string") {
    paths = paths.split(splitter);
  }
  const limit = paths.length - 1;
  for (let i = 0; i < limit; ++i) {
    const key2 = paths[i];
    object = object[key2] ?? (object[key2] = {});
  }
  const key = paths[limit];
  return object[key];
}
function walkTokens(obj, cb, paths = []) {
  let result = {};
  if (obj.value) {
    result = cb(obj, result, paths);
  } else {
    for (const k in obj) {
      if (obj[k] && typeof obj[k] === "object") {
        result[k] = walkTokens(obj[k], cb, [...paths, k]);
      }
    }
  }
  return result;
}
function normalizeConfig(obj, mqKeys, removeSchemaKeys = false) {
  let result = {};
  if (obj.value) {
    result = obj;
  } else {
    for (const k in obj) {
      if (k === "$schema") {
        if (!removeSchemaKeys) {
          result[k] = obj[k];
        }
        continue;
      }
      if (k === "utils") {
        result[k] = obj[k];
        continue;
      }
      if (obj[k] && (typeof obj[k] === "string" || typeof obj[k] === "number" || typeof obj[k] === "boolean" || typeof obj[k] === "symbol" || typeof obj[k] === "bigint")) {
        result[k] = { value: obj[k] };
      } else if (obj[k] && typeof obj[k] === "object") {
        const keys = Object.keys(obj[k]);
        if (keys.includes("initial") && keys.some((key) => mqKeys.includes(key))) {
          result[k] = { value: obj[k] };
          continue;
        }
        result[k] = normalizeConfig(obj[k], mqKeys, removeSchemaKeys);
      }
    }
  }
  return result;
}
function createTokensHelper(theme2 = {}, options = {}) {
  const defaultHelperOptions = {
    key: "attributes.variable",
    onNotFound: false,
    ...options
  };
  function $tokens(path = void 0, options2) {
    if (!path) {
      return unref(theme2);
    }
    const $tokensOptions = { ...defaultHelperOptions, ...options2 };
    const { key, onNotFound } = $tokensOptions;
    const token = get(unref(theme2), path);
    if (!token && typeof onNotFound === "function") {
      onNotFound(path, $tokensOptions);
      return;
    }
    return key ? token ? token[key] ? token[key] : get(token, key) : token : token;
  }
  return $tokens.bind(this);
}
function pathToVarName(path) {
  if (Array.isArray(path)) {
    path = path.join("-");
  }
  if (path.charAt(0) === "{" && path.charAt(path.length - 1) === "}") {
    path = path.substr(1, path.length - 2);
  }
  return `--${path.split(".").join("-")}`;
}
function resolveCssProperty(property, value, style, selectors, localTokens = [], ctx, loc) {
  var _a;
  const directive = resolveCustomDirectives(property, value, selectors, ctx, loc);
  if (directive) {
    return directive;
  }
  if ((_a = ctx == null ? void 0 : ctx.utils) == null ? void 0 : _a[property]) {
    if (typeof ctx.utils[property] === "function") {
      return ctx.utils[property](value);
    }
    return value ? ctx.utils[property] : {};
  }
  value = castValues(property, value, localTokens, ctx, loc);
  return {
    [property]: value
  };
}
function castValues(property, value, localTokens, ctx, loc) {
  if (Array.isArray(value) || typeof value === "string" || typeof value === "number") {
    if (Array.isArray(value)) {
      value = value.map((v) => castValue(property, v, localTokens, ctx, loc)).join(",");
    } else {
      value = castValue(property, value, localTokens, ctx, loc);
    }
  }
  return value;
}
function castValue(property, value, localTokens, ctx, loc) {
  if (typeof value === "number") {
    return value;
  }
  if (value.match(referencesRegex)) {
    value = resolveReferences(property, value, localTokens, ctx, loc);
  }
  if (value === "{}") {
    return "";
  }
  return value;
}
function resolveReferences(_, value, localTokens, ctx, loc) {
  if (!(typeof value === "string")) {
    return value;
  }
  value = value.replace(
    referencesRegex,
    (_2, tokenPath) => {
      const varName = pathToVarName(tokenPath);
      const variable = `var(${varName})`;
      if (localTokens.includes(varName)) {
        return variable;
      }
      const token = ctx.$tokens(tokenPath, { key: void 0, loc });
      const tokenValue = typeof token === "string" ? token : (token == null ? void 0 : token.variable) || (token == null ? void 0 : token.value);
      if (!tokenValue) {
        return variable;
      }
      return tokenValue;
    }
  );
  return value;
}
function resolveCustomDirectives(property, value, selectors, ctx, loc) {
  if (property.startsWith("@")) {
    const resolveColorScheme = (scheme) => {
      scheme = ctx.options.colorSchemeMode === "class" ? `:root.${scheme}` : `@media (prefers-color-scheme: ${scheme})`;
      const isMedia = scheme.startsWith("@media");
      if (ctx == null ? void 0 : ctx.runtime) {
        return {
          "@media": {
            [scheme]: value
          }
        };
      }
      return {
        [isMedia ? scheme : `${scheme} &`]: value
      };
    };
    if (property === DARK) {
      return resolveColorScheme("dark");
    }
    if (property === LIGHT) {
      return resolveColorScheme("light");
    }
    if (property === INITIAL) {
      const token = ctx.$tokens("media.initial", { key: "value", onNotFound: false, loc });
      return {
        [`@media${token ? ` ${token}` : ""}`]: value
      };
    }
    const mediaQueries = ctx.$tokens("media", { key: void 0, loc });
    if (mediaQueries) {
      const query = property.replace("@", "");
      if (mediaQueries[query]) {
        return {
          [`@media ${mediaQueries[query].value}`]: value
        };
      }
    }
    return {
      [property]: value
    };
  }
}
function resolveThemeRule(mq, content, theme2, colorSchemeMode) {
  var _a;
  let responsiveSelector = "";
  if (mq === "dark" || mq === "light") {
    if (colorSchemeMode === "class") {
      responsiveSelector = `:root.${mq}`;
    } else {
      responsiveSelector = `(prefers-color-scheme: ${mq})`;
    }
  } else if (mq !== "initial" && theme2) {
    const queryToken = (_a = theme2 == null ? void 0 : theme2.media) == null ? void 0 : _a[mq];
    if (queryToken) {
      responsiveSelector = queryToken.value;
    }
  }
  let prefix;
  if (!responsiveSelector) {
    prefix = "@media { :root {";
  } else if (responsiveSelector.startsWith(".")) {
    prefix = `@media { :root${responsiveSelector} {`;
  } else if (responsiveSelector.startsWith(":root")) {
    prefix = `@media { ${responsiveSelector} {`;
  } else {
    prefix = `@media ${responsiveSelector} { :root {`;
  }
  return `${`${`${prefix}--pinceau-mq: ${String(mq)}; ${content}`} } }`}
`;
}
const comma = /\s*,\s*(?![^()]*\))/;
const getResolvedSelectors = (parentSelectors, nestedSelectors) => parentSelectors.reduce(
  (resolvedSelectors, parentSelector) => {
    resolvedSelectors.push(
      ...nestedSelectors.map(
        (selector) => selector.includes("&") ? selector.replace(
          /&/g,
          /[ +>|~]/.test(parentSelector) && /&.*&/.test(selector) ? `:is(${parentSelector})` : parentSelector
        ) : `${parentSelector} ${selector}`
      )
    );
    return resolvedSelectors;
  },
  []
);
const { prototype: { toString } } = Object;
const stringify = (value, replacer = void 0) => {
  const used = /* @__PURE__ */ new WeakSet();
  const write = (cssText, selectors, conditions, name, data, isAtRuleLike, isVariableLike) => {
    for (let i = 0; i < conditions.length; ++i) {
      if (!used.has(conditions[i])) {
        used.add(conditions[i]);
        cssText += `${conditions[i]}{`;
      }
    }
    if (selectors.length && !used.has(selectors)) {
      used.add(selectors);
      cssText += `${selectors}{`;
    }
    if (isAtRuleLike) {
      name = `${name} `;
    } else if (isVariableLike) {
      name = `${name}:`;
    } else {
      name = `${kebabCase(name)}:`;
    }
    cssText += `${name + String(data)};`;
    return cssText;
  };
  const parse2 = (style, selectors, conditions, prevName, prevData) => {
    let cssText = "";
    for (const name in style) {
      const isAtRuleLike = name.charCodeAt(0) === 64;
      const isVariableLike = name.charCodeAt(0) === 45 && name.charCodeAt(1) === 45;
      for (const data of isAtRuleLike && Array.isArray(style[name]) ? style[name] : [style[name]]) {
        if (replacer && (name !== prevName || data !== prevData)) {
          const next = replacer(name, data, style, selectors);
          if (next !== null) {
            cssText += typeof next === "object" && next ? parse2(next, selectors, conditions, name, data) : next == null ? "" : next;
            continue;
          }
        }
        const isObjectLike = typeof data === "object" && data && data.toString === toString;
        if (isObjectLike) {
          if (used.has(selectors)) {
            used.delete(selectors);
            cssText += "}";
          }
          const usedName = Object(name);
          let nextSelectors;
          if (isAtRuleLike) {
            nextSelectors = selectors;
            cssText += parse2(
              data,
              nextSelectors,
              conditions.concat(usedName)
            );
          } else {
            nextSelectors = selectors.length ? getResolvedSelectors(selectors, name.split(comma)) : name.split(comma);
            cssText += parse2(
              data,
              nextSelectors,
              conditions
            );
          }
          if (used.has(usedName)) {
            used.delete(usedName);
            cssText += "}";
          }
          if (used.has(nextSelectors)) {
            used.delete(nextSelectors);
            cssText += "}";
          }
        } else {
          cssText = write(cssText, selectors, conditions, name, data, isAtRuleLike, isVariableLike);
        }
      }
    }
    return cssText;
  };
  return parse2(value, [], []);
};
const HYDRATION_SELECTOR = ".phy[--]";
function usePinceauRuntimeSheet($tokens, initialUtils = {}, colorSchemeMode, appId) {
  const sheet = ref();
  const utils2 = ref(initialUtils);
  const cache = {};
  const stringify$1 = (decl, loc) => stringify(
    decl,
    (property, value, style, selectors) => resolveCssProperty(
      property,
      value,
      style,
      selectors,
      [],
      { $tokens, utils: utils2.value, options: { colorSchemeMode, runtime: true } },
      loc
    )
  );
  function resolveStylesheet() {
    const global = globalThis || window;
    let style;
    let hydratableSheet;
    if (global && global.document) {
      const fullId = `pinceau-runtime${appId ? `-${appId}` : ""}`;
      const doc = global.document;
      style = doc.querySelector(`style#${fullId}`);
      if (!style) {
        const styleNode = doc.createElement("style");
        styleNode.id = fullId;
        styleNode.type = "text/css";
        style = doc.head.appendChild(styleNode);
      }
      hydratableSheet = doc.querySelector(`style#pinceau-runtime-hydratable${appId ? `-${appId}` : ""}`);
    }
    sheet.value = (style == null ? void 0 : style.sheet) || getSSRStylesheet();
    return hydratableSheet ? hydrateStylesheet(hydratableSheet) : void 0;
  }
  function hydrateStylesheet(el) {
    var _a, _b;
    const hydratableRules2 = {};
    for (const _rule of Object.entries(((_a = el == null ? void 0 : el.sheet) == null ? void 0 : _a.cssRules) || ((_b = sheet.value) == null ? void 0 : _b.cssRules) || {})) {
      const [index, rule] = _rule;
      const uids = resolveUid(rule);
      if (!uids || !uids.uid) {
        continue;
      }
      if (!hydratableRules2[uids.uid]) {
        hydratableRules2[uids.uid] = {};
      }
      const newIndex = sheet.value.insertRule(rule.cssText, Number(index));
      hydratableRules2[uids.uid][uids.type] = sheet.value.cssRules.item(newIndex);
    }
    if (el) {
      el.remove();
    }
    return hydratableRules2;
  }
  function toString2() {
    if (!sheet.value) {
      return "";
    }
    return Object.entries(sheet.value.cssRules).reduce(
      (acc, [, rule]) => {
        acc += `${rule == null ? void 0 : rule.cssText} ` || "";
        return acc;
      },
      ""
    );
  }
  function pushDeclaration(uid, type, declaration, previousRule, loc) {
    if (!Object.keys(declaration).length) {
      return;
    }
    const cssText = stringify$1(
      {
        "@media": {
          // Mark inserted declaration with unique id and type of runtime style
          [HYDRATION_SELECTOR]: { "--puid": `${uid}-${type}` },
          ...declaration
        }
      },
      loc
    );
    if (!cssText) {
      return;
    }
    if (previousRule) {
      deleteRule(previousRule);
    }
    const ruleId = sheet.value.insertRule(cssText);
    return sheet.value.cssRules[ruleId];
  }
  function deleteRule(rule) {
    const ruleIndex = Object.values(sheet.value.cssRules).indexOf(rule);
    if (typeof ruleIndex === "undefined" || isNaN(ruleIndex)) {
      return;
    }
    try {
      sheet.value.deleteRule(ruleIndex);
    } catch (e) {
    }
  }
  const hydratableRules = resolveStylesheet();
  return {
    stringify: stringify$1,
    cache,
    pushDeclaration,
    deleteRule,
    sheet,
    toString: toString2,
    hydratableRules
  };
}
function getSSRStylesheet() {
  return {
    cssRules: [],
    insertRule(cssText, index = this.cssRules.length) {
      this.cssRules.splice(index, 1, { cssText });
      return index;
    },
    deleteRule(index) {
      delete this.cssRules[index];
    }
  };
}
function resolveUid(rule) {
  const uidRule = rule.cssRules && rule.cssRules.length ? Object.entries(rule == null ? void 0 : rule.cssRules).find(([_, rule2]) => rule2.selectorText === HYDRATION_SELECTOR) : void 0;
  if (!uidRule) {
    return;
  }
  const uidRegex = /--puid:(.*)?-(c|v|p)?/m;
  const [, uid, type] = uidRule[1].cssText.match(uidRegex);
  if (!uid) {
    return;
  }
  return { uid, type };
}
function usePinceauRuntimeIds(instance, classes, _) {
  var _a, _b, _c;
  let uid;
  const el = (_a = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a.el;
  if (el && el.classList) {
    el.classList.forEach(
      (elClass) => {
        if (uid) {
          return;
        }
        if (elClass.startsWith("pc-")) {
          uid = elClass.split("pc-")[1];
        }
      }
    );
  } else {
    uid = nanoid(6);
  }
  const scopeId = (_c = (_b = instance == null ? void 0 : instance.vnode) == null ? void 0 : _b.type) == null ? void 0 : _c.__scopeId;
  const ids = {
    uid,
    componentId: scopeId ? `[${scopeId}]` : "",
    uniqueClassName: `pc-${uid}`
  };
  classes.value.c = ids.uniqueClassName;
  return computed(() => ids);
}
function usePinceauThemeSheet(initialTheme, tokensHelperConfig = {}, colorSchemeMode) {
  const sheet = ref();
  const theme2 = ref(initialTheme || {});
  tokensHelperConfig = Object.assign(
    {
      key: "variable"
    },
    tokensHelperConfig || {}
  );
  const $tokens = createTokensHelper(
    theme2,
    tokensHelperConfig
  );
  let cache = {};
  resolveStylesheet();
  function findThemeSheet(document2) {
    var _a;
    for (const sheet2 of document2.styleSheets) {
      if ((_a = sheet2 == null ? void 0 : sheet2.ownerNode) == null ? void 0 : _a.textContent.includes("--pinceau-mq")) {
        return sheet2.ownerNode;
      }
    }
  }
  function resolveStylesheet() {
    var _a;
    const global = globalThis || window;
    if (global && global.document) {
      let sheetElement = document.querySelector("#pinceau-theme");
      if (!sheetElement) {
        sheetElement = findThemeSheet(document);
      }
      sheet.value = sheetElement == null ? void 0 : sheetElement.sheet;
      if (sheet.value) {
        hydrateStylesheet((_a = sheet.value) == null ? void 0 : _a.cssRules);
      }
    }
  }
  function hydrateStylesheet(cssRules) {
    cache = {};
    Object.entries(cssRules || {}).forEach(
      ([_, rule]) => {
        var _a, _b;
        if ((rule == null ? void 0 : rule.type) !== 4 && !((_a = rule == null ? void 0 : rule.cssText) == null ? void 0 : _a.includes("--pinceau-mq"))) {
          return false;
        }
        let currentTheme = "initial";
        (_b = rule.cssText.match(/--([\w-]+)\s*:\s*(.+?);/gm)) == null ? void 0 : _b.forEach((match) => {
          var _a2;
          const [variable, value] = match.replace(";", "").split(/:\s(.*)/s);
          if (variable === "--pinceau-mq") {
            currentTheme = value;
            if (!cache[value]) {
              const ruleReference = (_a2 = Object.entries((rule == null ? void 0 : rule.cssRules) || {}).find(([_2, cssRule]) => cssRule == null ? void 0 : cssRule.cssText.includes(`--pinceau-mq: ${value}`))) == null ? void 0 : _a2[1];
              if (ruleReference) {
                cache[value] = ruleReference;
              }
            }
            return;
          }
          const path = [...variable.substring(2).split("-")];
          set(theme2.value, path, getSetValue(path, value, variable, currentTheme));
        });
      }
    );
  }
  function updateTheme(value) {
    var _a;
    const mqKeys = Array.from(/* @__PURE__ */ new Set(["dark", "light", ...Object.keys((value == null ? void 0 : value.media) || {}), ...Object.keys(((_a = theme2.value) == null ? void 0 : _a.media) || {})]));
    const config = normalizeConfig(value || {}, mqKeys, true);
    walkTokens(config, (token, _, paths) => updateToken(paths, token.value));
  }
  function updateToken(path, value, mq = "initial") {
    var _a;
    if (typeof value === "object") {
      Object.entries(value).forEach(([mq2, mqValue]) => updateToken(path, mqValue, mq2));
      return;
    }
    const varName = pathToVarName(path);
    if (!(cache == null ? void 0 : cache[mq])) {
      createMqRule(mq);
    }
    const resolvedValue = resolveReferences(void 0, value, [], { $tokens });
    set(
      theme2.value,
      path,
      getSetValue(path, resolvedValue, varName, mq)
    );
    (_a = cache == null ? void 0 : cache[mq]) == null ? void 0 : _a.style.setProperty(varName, resolvedValue);
  }
  function reactiveToken(path) {
    return computed(
      {
        get() {
          return get(theme2.value, `${path}.value`);
        },
        set(v) {
          updateToken(path, v);
        }
      }
    );
  }
  function getSetValue(path, value, variable, mq = "initial") {
    const setValue = { value, variable: `var(${variable})` };
    const existingValue = get(theme2.value, path);
    if (existingValue && !variable.startsWith("--media")) {
      if (typeof (existingValue == null ? void 0 : existingValue.value) === "object") {
        setValue.value = { ...existingValue.value, [mq]: value };
      } else {
        setValue.value = { initial: existingValue.value, [mq]: value };
      }
    }
    return setValue;
  }
  function createMqRule(mq) {
    if (cache == null ? void 0 : cache[mq]) {
      return cache == null ? void 0 : cache[mq];
    }
    const mqRule = resolveThemeRule(mq, "", theme2.value, colorSchemeMode);
    const newRule = sheet.value.insertRule(mqRule, sheet.value.cssRules.length);
    cache[mq] = sheet.value.cssRules.item(newRule).cssRules[0];
    return cache[mq];
  }
  return {
    $tokens,
    updateToken,
    updateTheme,
    reactiveToken,
    resolveStylesheet,
    theme: theme2
  };
}
function usePinceauComputedStyles(ids, computedStyles, sheet, loc) {
  var _a, _b;
  let rule = (_b = (_a = sheet.hydratableRules) == null ? void 0 : _a[ids.value.uid]) == null ? void 0 : _b.c;
  watch(
    () => computedStyles,
    (newComputedStyles) => {
      newComputedStyles = computedStylesToDeclaration(ids.value, newComputedStyles);
      rule = sheet.pushDeclaration(
        ids.value.uid,
        "c",
        newComputedStyles,
        rule,
        { ...loc, type: "c" }
      );
    },
    {
      immediate: !rule,
      deep: true
    }
  );
  onScopeDispose(() => rule && sheet.deleteRule(rule));
}
function computedStylesToDeclaration(ids, computedStyles) {
  const declaration = {};
  const targetId = `.${ids.uniqueClassName}${ids.componentId}`;
  if (computedStyles && Object.keys(computedStyles).length) {
    declaration[targetId] = declaration[targetId] || {};
    for (const [varName, _value] of Object.entries(computedStyles)) {
      const value = unref(_value);
      if (varName === "css") {
        declaration[targetId] = Object.assign(declaration[targetId], value);
        continue;
      }
      if (typeof value === "object") {
        for (const [mqId, mqPropValue] of Object.entries(value)) {
          const _value2 = unref(mqPropValue);
          if (!_value2) {
            continue;
          }
          if (mqId === "initial") {
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            declaration[targetId][`--${varName}`] = _value2;
          }
          const mediaId = `@${mqId}`;
          if (!declaration[mediaId]) {
            declaration[mediaId] = {};
          }
          if (!declaration[mediaId][targetId]) {
            declaration[mediaId][targetId] = {};
          }
          declaration[mediaId][targetId][`--${kebabCase(varName)}`] = _value2;
        }
      } else {
        const _value2 = unref(value);
        if (_value2) {
          declaration[targetId][`--${kebabCase(varName)}`] = _value2;
        }
      }
    }
  }
  return declaration;
}
const usePinceauVariants = (ids, variants, props, sheet, classes, loc) => {
  var _a, _b;
  let rule = (_b = (_a = sheet.hydratableRules) == null ? void 0 : _a[ids.value.uid]) == null ? void 0 : _b.v;
  const variantsState = computed(() => variants ? resolveVariantsState(ids.value, props, variants) : {});
  const variantsClasses = ref([]);
  watch(
    variantsState,
    ({ cacheId, variantsProps }) => {
      let variantClass;
      if (sheet.cache[cacheId]) {
        const cachedRule = sheet.cache[cacheId];
        rule = cachedRule.rule;
        variantClass = cachedRule.variantClass;
        if (cachedRule == null ? void 0 : cachedRule.classes) {
          variantsClasses.value = cachedRule.classes;
        }
        cachedRule.count++;
      } else {
        variantClass = `pv-${nanoid(6)}`;
        const { declaration, classes: classes2 } = variantsToDeclaration(variantClass, ids.value, variants, variantsProps);
        variantsClasses.value = classes2;
        rule = sheet.pushDeclaration(ids.value.uid, "v", declaration, void 0, { ...loc, type: "v" });
        sheet.cache[cacheId] = { rule, variantClass, classes: classes2, count: 1 };
      }
      classes.value.v = variantClass;
    },
    {
      immediate: true
    }
  );
  onScopeDispose(
    () => {
      var _a2;
      const state = variantsState == null ? void 0 : variantsState.value;
      const cachedRule = (_a2 = sheet.cache) == null ? void 0 : _a2[state.cacheId];
      if (cachedRule) {
        cachedRule.count--;
        if (cachedRule.count <= 0) {
          sheet.deleteRule(cachedRule.rule);
          delete sheet.cache[state.cacheId];
        }
      }
    }
  );
  return { variantsClasses };
};
function variantsToDeclaration(variantClass, ids, variants, props) {
  var _a, _b;
  let classes = [];
  const declaration = {};
  if (props && Object.keys(props).length) {
    const targetId = `.${variantClass}`;
    for (const [propName, propValue] of Object.entries(props)) {
      if (typeof propValue === "object") {
        for (const [mqId, mqPropValue] of Object.entries(propValue)) {
          const _value = (mqPropValue == null ? void 0 : mqPropValue.toString()) || mqPropValue;
          const variantValue = variants[propName][_value];
          if (!variantValue) {
            continue;
          }
          if (!declaration[targetId]) {
            declaration[targetId] = {};
          }
          if (typeof variantValue === "string" || Array.isArray(variantValue) || (variantValue == null ? void 0 : variantValue.$class)) {
            const classAttr = typeof variantValue === "string" || Array.isArray(variantValue) ? variantValue : variantValue.$class;
            classes = [
              ...classes,
              ...typeof classAttr === "string" ? classAttr.split(" ") : classAttr
            ];
            delete variantValue.$class;
          }
          if (mqId === "initial") {
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            declaration[targetId] = defu(declaration[targetId], variantValue);
          }
          const mediaId = `@${mqId}`;
          if (!declaration[mediaId]) {
            declaration[mediaId] = {};
          }
          if (!declaration[mediaId][targetId]) {
            declaration[mediaId][targetId] = {};
          }
          declaration[mediaId][targetId] = defu(declaration[mediaId][targetId], variantValue);
        }
      } else {
        const _value = ((_a = propValue == null ? void 0 : propValue.toString) == null ? void 0 : _a.call(propValue)) || propValue;
        const variantValue = (_b = variants == null ? void 0 : variants[propName]) == null ? void 0 : _b[_value];
        if (!variantValue) {
          continue;
        }
        if (!declaration[targetId]) {
          declaration[targetId] = {};
        }
        declaration[targetId] = defu(declaration[targetId], variantValue);
      }
    }
  }
  return { declaration, classes };
}
function resolveVariantsState(ids, props, variants) {
  if (!props || !variants) {
    return {};
  }
  let cacheId = ids.componentId;
  const variantsProps = Object.entries(props).reduce(
    (acc, [propName, propValue]) => {
      if (!variants[propName]) {
        return acc;
      }
      if (typeof propValue === "object") {
        Object.entries(propValue).forEach(([key, value]) => cacheId += `${propName}:${key}:${value}|`);
      } else {
        cacheId += `${propName}:${propValue}|`;
      }
      acc[propName] = propValue;
      return acc;
    },
    {}
  );
  return { cacheId, variantsProps };
}
function usePinceauCssProp(ids, props, sheet, loc) {
  var _a, _b;
  let rule = (_b = (_a = sheet.hydratableRules) == null ? void 0 : _a[ids.value.uid]) == null ? void 0 : _b.p;
  const css = computed(() => props == null ? void 0 : props.css);
  watch(
    css,
    (newCss) => {
      newCss = transformCssPropToDeclaration(ids.value, newCss);
      if (rule) {
        sheet.deleteRule(rule);
      }
      rule = sheet.pushDeclaration(
        ids.value.uid,
        "p",
        newCss,
        rule,
        { ...loc, type: "c" }
      );
    },
    {
      immediate: !rule
    }
  );
  onScopeDispose(() => rule && sheet.deleteRule(rule));
}
function transformCssPropToDeclaration(ids, css) {
  const declaration = {};
  if (css) {
    const targetId = `.${ids.uniqueClassName}${ids.componentId}`;
    declaration[targetId] = Object.assign(declaration[targetId] || {}, css);
  }
  return declaration;
}
const defaultRuntimeOptions = {
  theme: {},
  utils: {},
  tokensHelperConfig: {},
  multiApp: false,
  colorSchemeMode: "media",
  dev: "prerender" !== "production"
};
const plugin = {
  install(app, options) {
    options = Object.assign(defaultRuntimeOptions, options);
    const { theme: theme2, tokensHelperConfig, dev, multiApp, colorSchemeMode, utils: utils2 } = options;
    const themeSheet = usePinceauThemeSheet(theme2, tokensHelperConfig, colorSchemeMode);
    if (dev && true) {
      import('./_nuxt/debug-43adc91a.mjs').then(({ usePinceauRuntimeDebug }) => usePinceauRuntimeDebug(tokensHelperConfig));
    }
    const multiAppId = multiApp ? nanoid(6) : void 0;
    const runtimeSheet = usePinceauRuntimeSheet(themeSheet.$tokens, utils2, colorSchemeMode, multiAppId);
    function usePinceauRuntime2(props = {}, variants, computedStyles) {
      const instance = getCurrentInstance();
      let loc;
      if (dev && true) {
        const { __file: file, __name: name } = instance.vnode.type;
        loc = { file, name };
      }
      const classes = ref({
        // Variants class
        v: "",
        // Unique class
        c: ""
      });
      const ids = usePinceauRuntimeIds(instance, classes);
      if (computedStyles && Object.keys(computedStyles).length > 0) {
        usePinceauComputedStyles(ids, computedStyles, runtimeSheet, loc);
      }
      let dynamicVariantClasses;
      if (variants && Object.keys(variants).length > 0) {
        const { variantsClasses } = usePinceauVariants(ids, variants, props, runtimeSheet, classes, loc);
        dynamicVariantClasses = variantsClasses;
      }
      if ((props == null ? void 0 : props.css) && Object.keys(props == null ? void 0 : props.css).length > 0) {
        usePinceauCssProp(ids, props, runtimeSheet, loc);
      }
      return { $pinceau: computed(() => {
        var _a;
        return [classes.value.v, classes.value.c, (_a = dynamicVariantClasses == null ? void 0 : dynamicVariantClasses.value) == null ? void 0 : _a.join(" ")].join(" ");
      }) };
    }
    app.config.globalProperties.$pinceauRuntime = usePinceauRuntime2;
    app.config.globalProperties.$pinceauTheme = themeSheet;
    app.config.globalProperties.$pinceauSsr = { get: () => runtimeSheet.toString() };
    app.provide("pinceauRuntime", usePinceauRuntime2);
    app.provide("pinceauTheme", themeSheet);
  }
};
function usePinceauRuntime(props, variants, computedStyles) {
  return inject("pinceauRuntime")(props, variants, computedStyles);
}
function usePinceauTheme() {
  return inject("pinceauTheme");
}
function computedStyle(defaultValue, required = false) {
  return {
    type: [String, Object],
    default: defaultValue,
    required
  };
}
const my = (value) => {
  return {
    marginTop: value,
    marginBottom: value
  };
};
const mx = (value) => {
  return {
    marginLeft: value,
    marginRight: value
  };
};
const py = (value) => {
  return {
    paddingTop: value,
    paddingBottom: value
  };
};
const px = (value) => {
  return {
    paddingLeft: value,
    paddingRight: value
  };
};
const truncate = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
const lineClamp = (lines) => ({
  "overflow": "hidden",
  "display": "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": lines
});
const text = (size) => ({
  fontSize: `{text.${size}.fontSize}`,
  lineHeight: `{text.${size}.lineHeight}`
});
const stateColors = (value) => {
  return {
    color: `{elements.state.${value}.color.primary} !important`,
    backgroundColor: `{elements.state.${value}.backgroundColor.primary} !important`,
    borderColor: `{elements.state.${value}.borderColor.primary} !important`,
    ":deep(p code)": {
      color: `{elements.state.${value}.color.secondary} !important`,
      backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`
    },
    ":deep(code)": {
      color: `{elements.state.${value}.color.primary} !important`,
      backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`
    },
    ":deep(a code)": {
      borderColor: `{elements.state.${value}.borderColor.primary} !important`
    },
    ":deep(a)": {
      borderColor: "currentColor",
      code: {
        backgroundColor: `{elements.state.${value}.backgroundColor.primary} !important`
      },
      "&:hover": {
        color: `{elements.state.${value}.color.secondary} !important`,
        borderColor: "currentColor !important",
        code: {
          backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`,
          color: `{elements.state.${value}.color.secondary} !important`,
          borderColor: `{elements.state.${value}.borderColor.secondary} !important`
        }
      }
    }
  };
};
const utils = { my, mx, py, px, truncate, lineClamp, text, stateColors };
const theme = {
  "media": {
    "xs": {
      "value": "(min-width: 475px)",
      "variable": "var(--media-xs)",
      "raw": "(min-width: 475px)"
    },
    "sm": {
      "value": "(min-width: 640px)",
      "variable": "var(--media-sm)",
      "raw": "(min-width: 640px)"
    },
    "md": {
      "value": "(min-width: 768px)",
      "variable": "var(--media-md)",
      "raw": "(min-width: 768px)"
    },
    "lg": {
      "value": "(min-width: 1024px)",
      "variable": "var(--media-lg)",
      "raw": "(min-width: 1024px)"
    },
    "xl": {
      "value": "(min-width: 1280px)",
      "variable": "var(--media-xl)",
      "raw": "(min-width: 1280px)"
    },
    "2xl": {
      "value": "(min-width: 1536px)",
      "variable": "var(--media-2xl)",
      "raw": "(min-width: 1536px)"
    },
    "rm": {
      "value": "(prefers-reduced-motion: reduce)",
      "variable": "var(--media-rm)",
      "raw": "(prefers-reduced-motion: reduce)"
    },
    "landscape": {
      "value": "only screen and (orientation: landscape)",
      "variable": "var(--media-landscape)",
      "raw": "only screen and (orientation: landscape)"
    },
    "portrait": {
      "value": "only screen and (orientation: portrait)",
      "variable": "var(--media-portrait)",
      "raw": "only screen and (orientation: portrait)"
    }
  },
  "color": {
    "white": {
      "value": "#FFFFFF",
      "variable": "var(--color-white)",
      "raw": "#FFFFFF"
    },
    "black": {
      "value": "#0c0c0d",
      "variable": "var(--color-black)",
      "raw": "#0c0c0d"
    },
    "gray": {
      "50": {
        "value": "#fafafa",
        "variable": "var(--color-gray-50)",
        "raw": "#fafafa"
      },
      "100": {
        "value": "#f4f4f5",
        "variable": "var(--color-gray-100)",
        "raw": "#f4f4f5"
      },
      "200": {
        "value": "#e4e4e7",
        "variable": "var(--color-gray-200)",
        "raw": "#e4e4e7"
      },
      "300": {
        "value": "#D4d4d8",
        "variable": "var(--color-gray-300)",
        "raw": "#D4d4d8"
      },
      "400": {
        "value": "#a1a1aa",
        "variable": "var(--color-gray-400)",
        "raw": "#a1a1aa"
      },
      "500": {
        "value": "#71717A",
        "variable": "var(--color-gray-500)",
        "raw": "#71717A"
      },
      "600": {
        "value": "#52525B",
        "variable": "var(--color-gray-600)",
        "raw": "#52525B"
      },
      "700": {
        "value": "#3f3f46",
        "variable": "var(--color-gray-700)",
        "raw": "#3f3f46"
      },
      "800": {
        "value": "#27272A",
        "variable": "var(--color-gray-800)",
        "raw": "#27272A"
      },
      "900": {
        "value": "#18181B",
        "variable": "var(--color-gray-900)",
        "raw": "#18181B"
      }
    },
    "green": {
      "50": {
        "value": "#d6ffee",
        "variable": "var(--color-green-50)",
        "raw": "#d6ffee"
      },
      "100": {
        "value": "#acffdd",
        "variable": "var(--color-green-100)",
        "raw": "#acffdd"
      },
      "200": {
        "value": "#83ffcc",
        "variable": "var(--color-green-200)",
        "raw": "#83ffcc"
      },
      "300": {
        "value": "#30ffaa",
        "variable": "var(--color-green-300)",
        "raw": "#30ffaa"
      },
      "400": {
        "value": "#00dc82",
        "variable": "var(--color-green-400)",
        "raw": "#00dc82"
      },
      "500": {
        "value": "#00bd6f",
        "variable": "var(--color-green-500)",
        "raw": "#00bd6f"
      },
      "600": {
        "value": "#009d5d",
        "variable": "var(--color-green-600)",
        "raw": "#009d5d"
      },
      "700": {
        "value": "#007e4a",
        "variable": "var(--color-green-700)",
        "raw": "#007e4a"
      },
      "800": {
        "value": "#005e38",
        "variable": "var(--color-green-800)",
        "raw": "#005e38"
      },
      "900": {
        "value": "#003f25",
        "variable": "var(--color-green-900)",
        "raw": "#003f25"
      }
    },
    "yellow": {
      "50": {
        "value": "#fdf6db",
        "variable": "var(--color-yellow-50)",
        "raw": "#fdf6db"
      },
      "100": {
        "value": "#fcedb7",
        "variable": "var(--color-yellow-100)",
        "raw": "#fcedb7"
      },
      "200": {
        "value": "#fae393",
        "variable": "var(--color-yellow-200)",
        "raw": "#fae393"
      },
      "300": {
        "value": "#f8da70",
        "variable": "var(--color-yellow-300)",
        "raw": "#f8da70"
      },
      "400": {
        "value": "#f7d14c",
        "variable": "var(--color-yellow-400)",
        "raw": "#f7d14c"
      },
      "500": {
        "value": "#f5c828",
        "variable": "var(--color-yellow-500)",
        "raw": "#f5c828"
      },
      "600": {
        "value": "#daac0a",
        "variable": "var(--color-yellow-600)",
        "raw": "#daac0a"
      },
      "700": {
        "value": "#a38108",
        "variable": "var(--color-yellow-700)",
        "raw": "#a38108"
      },
      "800": {
        "value": "#6d5605",
        "variable": "var(--color-yellow-800)",
        "raw": "#6d5605"
      },
      "900": {
        "value": "#362b03",
        "variable": "var(--color-yellow-900)",
        "raw": "#362b03"
      }
    },
    "orange": {
      "50": {
        "value": "#ffe9d9",
        "variable": "var(--color-orange-50)",
        "raw": "#ffe9d9"
      },
      "100": {
        "value": "#ffd3b3",
        "variable": "var(--color-orange-100)",
        "raw": "#ffd3b3"
      },
      "200": {
        "value": "#ffbd8d",
        "variable": "var(--color-orange-200)",
        "raw": "#ffbd8d"
      },
      "300": {
        "value": "#ffa666",
        "variable": "var(--color-orange-300)",
        "raw": "#ffa666"
      },
      "400": {
        "value": "#ff9040",
        "variable": "var(--color-orange-400)",
        "raw": "#ff9040"
      },
      "500": {
        "value": "#ff7a1a",
        "variable": "var(--color-orange-500)",
        "raw": "#ff7a1a"
      },
      "600": {
        "value": "#e15e00",
        "variable": "var(--color-orange-600)",
        "raw": "#e15e00"
      },
      "700": {
        "value": "#a94700",
        "variable": "var(--color-orange-700)",
        "raw": "#a94700"
      },
      "800": {
        "value": "#702f00",
        "variable": "var(--color-orange-800)",
        "raw": "#702f00"
      },
      "900": {
        "value": "#381800",
        "variable": "var(--color-orange-900)",
        "raw": "#381800"
      }
    },
    "red": {
      "50": {
        "value": "#ffdbd9",
        "variable": "var(--color-red-50)",
        "raw": "#ffdbd9"
      },
      "100": {
        "value": "#ffb7b3",
        "variable": "var(--color-red-100)",
        "raw": "#ffb7b3"
      },
      "200": {
        "value": "#ff948d",
        "variable": "var(--color-red-200)",
        "raw": "#ff948d"
      },
      "300": {
        "value": "#ff7066",
        "variable": "var(--color-red-300)",
        "raw": "#ff7066"
      },
      "400": {
        "value": "#ff4c40",
        "variable": "var(--color-red-400)",
        "raw": "#ff4c40"
      },
      "500": {
        "value": "#ff281a",
        "variable": "var(--color-red-500)",
        "raw": "#ff281a"
      },
      "600": {
        "value": "#e10e00",
        "variable": "var(--color-red-600)",
        "raw": "#e10e00"
      },
      "700": {
        "value": "#a90a00",
        "variable": "var(--color-red-700)",
        "raw": "#a90a00"
      },
      "800": {
        "value": "#700700",
        "variable": "var(--color-red-800)",
        "raw": "#700700"
      },
      "900": {
        "value": "#380300",
        "variable": "var(--color-red-900)",
        "raw": "#380300"
      }
    },
    "pear": {
      "50": {
        "value": "#f7f8dc",
        "variable": "var(--color-pear-50)",
        "raw": "#f7f8dc"
      },
      "100": {
        "value": "#eff0ba",
        "variable": "var(--color-pear-100)",
        "raw": "#eff0ba"
      },
      "200": {
        "value": "#e8e997",
        "variable": "var(--color-pear-200)",
        "raw": "#e8e997"
      },
      "300": {
        "value": "#e0e274",
        "variable": "var(--color-pear-300)",
        "raw": "#e0e274"
      },
      "400": {
        "value": "#d8da52",
        "variable": "var(--color-pear-400)",
        "raw": "#d8da52"
      },
      "500": {
        "value": "#d0d32f",
        "variable": "var(--color-pear-500)",
        "raw": "#d0d32f"
      },
      "600": {
        "value": "#a8aa24",
        "variable": "var(--color-pear-600)",
        "raw": "#a8aa24"
      },
      "700": {
        "value": "#7e801b",
        "variable": "var(--color-pear-700)",
        "raw": "#7e801b"
      },
      "800": {
        "value": "#545512",
        "variable": "var(--color-pear-800)",
        "raw": "#545512"
      },
      "900": {
        "value": "#2a2b09",
        "variable": "var(--color-pear-900)",
        "raw": "#2a2b09"
      }
    },
    "teal": {
      "50": {
        "value": "#d7faf8",
        "variable": "var(--color-teal-50)",
        "raw": "#d7faf8"
      },
      "100": {
        "value": "#aff4f0",
        "variable": "var(--color-teal-100)",
        "raw": "#aff4f0"
      },
      "200": {
        "value": "#87efe9",
        "variable": "var(--color-teal-200)",
        "raw": "#87efe9"
      },
      "300": {
        "value": "#5fe9e1",
        "variable": "var(--color-teal-300)",
        "raw": "#5fe9e1"
      },
      "400": {
        "value": "#36e4da",
        "variable": "var(--color-teal-400)",
        "raw": "#36e4da"
      },
      "500": {
        "value": "#1cd1c6",
        "variable": "var(--color-teal-500)",
        "raw": "#1cd1c6"
      },
      "600": {
        "value": "#16a79e",
        "variable": "var(--color-teal-600)",
        "raw": "#16a79e"
      },
      "700": {
        "value": "#117d77",
        "variable": "var(--color-teal-700)",
        "raw": "#117d77"
      },
      "800": {
        "value": "#0b544f",
        "variable": "var(--color-teal-800)",
        "raw": "#0b544f"
      },
      "900": {
        "value": "#062a28",
        "variable": "var(--color-teal-900)",
        "raw": "#062a28"
      }
    },
    "lightblue": {
      "50": {
        "value": "#d9f8ff",
        "variable": "var(--color-lightblue-50)",
        "raw": "#d9f8ff"
      },
      "100": {
        "value": "#b3f1ff",
        "variable": "var(--color-lightblue-100)",
        "raw": "#b3f1ff"
      },
      "200": {
        "value": "#8deaff",
        "variable": "var(--color-lightblue-200)",
        "raw": "#8deaff"
      },
      "300": {
        "value": "#66e4ff",
        "variable": "var(--color-lightblue-300)",
        "raw": "#66e4ff"
      },
      "400": {
        "value": "#40ddff",
        "variable": "var(--color-lightblue-400)",
        "raw": "#40ddff"
      },
      "500": {
        "value": "#1ad6ff",
        "variable": "var(--color-lightblue-500)",
        "raw": "#1ad6ff"
      },
      "600": {
        "value": "#00b9e1",
        "variable": "var(--color-lightblue-600)",
        "raw": "#00b9e1"
      },
      "700": {
        "value": "#008aa9",
        "variable": "var(--color-lightblue-700)",
        "raw": "#008aa9"
      },
      "800": {
        "value": "#005c70",
        "variable": "var(--color-lightblue-800)",
        "raw": "#005c70"
      },
      "900": {
        "value": "#002e38",
        "variable": "var(--color-lightblue-900)",
        "raw": "#002e38"
      }
    },
    "blue": {
      "50": {
        "value": "#d9f1ff",
        "variable": "var(--color-blue-50)",
        "raw": "#d9f1ff"
      },
      "100": {
        "value": "#b3e4ff",
        "variable": "var(--color-blue-100)",
        "raw": "#b3e4ff"
      },
      "200": {
        "value": "#8dd6ff",
        "variable": "var(--color-blue-200)",
        "raw": "#8dd6ff"
      },
      "300": {
        "value": "#66c8ff",
        "variable": "var(--color-blue-300)",
        "raw": "#66c8ff"
      },
      "400": {
        "value": "#40bbff",
        "variable": "var(--color-blue-400)",
        "raw": "#40bbff"
      },
      "500": {
        "value": "#1aadff",
        "variable": "var(--color-blue-500)",
        "raw": "#1aadff"
      },
      "600": {
        "value": "#0090e1",
        "variable": "var(--color-blue-600)",
        "raw": "#0090e1"
      },
      "700": {
        "value": "#006ca9",
        "variable": "var(--color-blue-700)",
        "raw": "#006ca9"
      },
      "800": {
        "value": "#004870",
        "variable": "var(--color-blue-800)",
        "raw": "#004870"
      },
      "900": {
        "value": "#002438",
        "variable": "var(--color-blue-900)",
        "raw": "#002438"
      }
    },
    "indigoblue": {
      "50": {
        "value": "#d9e5ff",
        "variable": "var(--color-indigoblue-50)",
        "raw": "#d9e5ff"
      },
      "100": {
        "value": "#b3cbff",
        "variable": "var(--color-indigoblue-100)",
        "raw": "#b3cbff"
      },
      "200": {
        "value": "#8db0ff",
        "variable": "var(--color-indigoblue-200)",
        "raw": "#8db0ff"
      },
      "300": {
        "value": "#6696ff",
        "variable": "var(--color-indigoblue-300)",
        "raw": "#6696ff"
      },
      "400": {
        "value": "#407cff",
        "variable": "var(--color-indigoblue-400)",
        "raw": "#407cff"
      },
      "500": {
        "value": "#1a62ff",
        "variable": "var(--color-indigoblue-500)",
        "raw": "#1a62ff"
      },
      "600": {
        "value": "#0047e1",
        "variable": "var(--color-indigoblue-600)",
        "raw": "#0047e1"
      },
      "700": {
        "value": "#0035a9",
        "variable": "var(--color-indigoblue-700)",
        "raw": "#0035a9"
      },
      "800": {
        "value": "#002370",
        "variable": "var(--color-indigoblue-800)",
        "raw": "#002370"
      },
      "900": {
        "value": "#001238",
        "variable": "var(--color-indigoblue-900)",
        "raw": "#001238"
      }
    },
    "royalblue": {
      "50": {
        "value": "#dfdbfb",
        "variable": "var(--color-royalblue-50)",
        "raw": "#dfdbfb"
      },
      "100": {
        "value": "#c0b7f7",
        "variable": "var(--color-royalblue-100)",
        "raw": "#c0b7f7"
      },
      "200": {
        "value": "#a093f3",
        "variable": "var(--color-royalblue-200)",
        "raw": "#a093f3"
      },
      "300": {
        "value": "#806ff0",
        "variable": "var(--color-royalblue-300)",
        "raw": "#806ff0"
      },
      "400": {
        "value": "#614bec",
        "variable": "var(--color-royalblue-400)",
        "raw": "#614bec"
      },
      "500": {
        "value": "#4127e8",
        "variable": "var(--color-royalblue-500)",
        "raw": "#4127e8"
      },
      "600": {
        "value": "#2c15c4",
        "variable": "var(--color-royalblue-600)",
        "raw": "#2c15c4"
      },
      "700": {
        "value": "#211093",
        "variable": "var(--color-royalblue-700)",
        "raw": "#211093"
      },
      "800": {
        "value": "#160a62",
        "variable": "var(--color-royalblue-800)",
        "raw": "#160a62"
      },
      "900": {
        "value": "#0b0531",
        "variable": "var(--color-royalblue-900)",
        "raw": "#0b0531"
      }
    },
    "purple": {
      "50": {
        "value": "#ead9ff",
        "variable": "var(--color-purple-50)",
        "raw": "#ead9ff"
      },
      "100": {
        "value": "#d5b3ff",
        "variable": "var(--color-purple-100)",
        "raw": "#d5b3ff"
      },
      "200": {
        "value": "#c08dff",
        "variable": "var(--color-purple-200)",
        "raw": "#c08dff"
      },
      "300": {
        "value": "#ab66ff",
        "variable": "var(--color-purple-300)",
        "raw": "#ab66ff"
      },
      "400": {
        "value": "#9640ff",
        "variable": "var(--color-purple-400)",
        "raw": "#9640ff"
      },
      "500": {
        "value": "#811aff",
        "variable": "var(--color-purple-500)",
        "raw": "#811aff"
      },
      "600": {
        "value": "#6500e1",
        "variable": "var(--color-purple-600)",
        "raw": "#6500e1"
      },
      "700": {
        "value": "#4c00a9",
        "variable": "var(--color-purple-700)",
        "raw": "#4c00a9"
      },
      "800": {
        "value": "#330070",
        "variable": "var(--color-purple-800)",
        "raw": "#330070"
      },
      "900": {
        "value": "#190038",
        "variable": "var(--color-purple-900)",
        "raw": "#190038"
      }
    },
    "pink": {
      "50": {
        "value": "#ffd9f2",
        "variable": "var(--color-pink-50)",
        "raw": "#ffd9f2"
      },
      "100": {
        "value": "#ffb3e5",
        "variable": "var(--color-pink-100)",
        "raw": "#ffb3e5"
      },
      "200": {
        "value": "#ff8dd8",
        "variable": "var(--color-pink-200)",
        "raw": "#ff8dd8"
      },
      "300": {
        "value": "#ff66cc",
        "variable": "var(--color-pink-300)",
        "raw": "#ff66cc"
      },
      "400": {
        "value": "#ff40bf",
        "variable": "var(--color-pink-400)",
        "raw": "#ff40bf"
      },
      "500": {
        "value": "#ff1ab2",
        "variable": "var(--color-pink-500)",
        "raw": "#ff1ab2"
      },
      "600": {
        "value": "#e10095",
        "variable": "var(--color-pink-600)",
        "raw": "#e10095"
      },
      "700": {
        "value": "#a90070",
        "variable": "var(--color-pink-700)",
        "raw": "#a90070"
      },
      "800": {
        "value": "#70004b",
        "variable": "var(--color-pink-800)",
        "raw": "#70004b"
      },
      "900": {
        "value": "#380025",
        "variable": "var(--color-pink-900)",
        "raw": "#380025"
      }
    },
    "ruby": {
      "50": {
        "value": "#ffd9e4",
        "variable": "var(--color-ruby-50)",
        "raw": "#ffd9e4"
      },
      "100": {
        "value": "#ffb3c9",
        "variable": "var(--color-ruby-100)",
        "raw": "#ffb3c9"
      },
      "200": {
        "value": "#ff8dae",
        "variable": "var(--color-ruby-200)",
        "raw": "#ff8dae"
      },
      "300": {
        "value": "#ff6694",
        "variable": "var(--color-ruby-300)",
        "raw": "#ff6694"
      },
      "400": {
        "value": "#ff4079",
        "variable": "var(--color-ruby-400)",
        "raw": "#ff4079"
      },
      "500": {
        "value": "#ff1a5e",
        "variable": "var(--color-ruby-500)",
        "raw": "#ff1a5e"
      },
      "600": {
        "value": "#e10043",
        "variable": "var(--color-ruby-600)",
        "raw": "#e10043"
      },
      "700": {
        "value": "#a90032",
        "variable": "var(--color-ruby-700)",
        "raw": "#a90032"
      },
      "800": {
        "value": "#700021",
        "variable": "var(--color-ruby-800)",
        "raw": "#700021"
      },
      "900": {
        "value": "#380011",
        "variable": "var(--color-ruby-900)",
        "raw": "#380011"
      }
    },
    "primary": {
      "50": {
        "value": "#d9f8ff",
        "variable": "var(--color-primary-50)",
        "raw": "#d9f8ff"
      },
      "100": {
        "value": "#b3f1ff",
        "variable": "var(--color-primary-100)",
        "raw": "#b3f1ff"
      },
      "200": {
        "value": "#8deaff",
        "variable": "var(--color-primary-200)",
        "raw": "#8deaff"
      },
      "300": {
        "value": "#66e4ff",
        "variable": "var(--color-primary-300)",
        "raw": "#66e4ff"
      },
      "400": {
        "value": "#40ddff",
        "variable": "var(--color-primary-400)",
        "raw": "#40ddff"
      },
      "500": {
        "value": "#1ad6ff",
        "variable": "var(--color-primary-500)",
        "raw": "#1ad6ff"
      },
      "600": {
        "value": "#00b9e1",
        "variable": "var(--color-primary-600)",
        "raw": "#00b9e1"
      },
      "700": {
        "value": "#008aa9",
        "variable": "var(--color-primary-700)",
        "raw": "#008aa9"
      },
      "800": {
        "value": "#005c70",
        "variable": "var(--color-primary-800)",
        "raw": "#005c70"
      },
      "900": {
        "value": "#002e38",
        "variable": "var(--color-primary-900)",
        "raw": "#002e38"
      }
    },
    "secondary": {
      "50": {
        "value": "var(--color-gray-50)",
        "variable": "var(--color-secondary-50)",
        "raw": "{color.gray.50}"
      },
      "100": {
        "value": "var(--color-gray-100)",
        "variable": "var(--color-secondary-100)",
        "raw": "{color.gray.100}"
      },
      "200": {
        "value": "var(--color-gray-200)",
        "variable": "var(--color-secondary-200)",
        "raw": "{color.gray.200}"
      },
      "300": {
        "value": "var(--color-gray-300)",
        "variable": "var(--color-secondary-300)",
        "raw": "{color.gray.300}"
      },
      "400": {
        "value": "var(--color-gray-400)",
        "variable": "var(--color-secondary-400)",
        "raw": "{color.gray.400}"
      },
      "500": {
        "value": "var(--color-gray-500)",
        "variable": "var(--color-secondary-500)",
        "raw": "{color.gray.500}"
      },
      "600": {
        "value": "var(--color-gray-600)",
        "variable": "var(--color-secondary-600)",
        "raw": "{color.gray.600}"
      },
      "700": {
        "value": "var(--color-gray-700)",
        "variable": "var(--color-secondary-700)",
        "raw": "{color.gray.700}"
      },
      "800": {
        "value": "var(--color-gray-800)",
        "variable": "var(--color-secondary-800)",
        "raw": "{color.gray.800}"
      },
      "900": {
        "value": "var(--color-gray-900)",
        "variable": "var(--color-secondary-900)",
        "raw": "{color.gray.900}"
      }
    }
  },
  "width": {
    "screen": {
      "value": "100vw",
      "variable": "var(--width-screen)",
      "raw": "100vw"
    }
  },
  "height": {
    "screen": {
      "value": "100vh",
      "variable": "var(--height-screen)",
      "raw": "100vh"
    }
  },
  "shadow": {
    "xs": {
      "value": "0px 1px 2px 0px #000000",
      "variable": "var(--shadow-xs)",
      "raw": "0px 1px 2px 0px #000000"
    },
    "sm": {
      "value": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000",
      "variable": "var(--shadow-sm)",
      "raw": "0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000"
    },
    "md": {
      "value": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000",
      "variable": "var(--shadow-md)",
      "raw": "0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000"
    },
    "lg": {
      "value": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000",
      "variable": "var(--shadow-lg)",
      "raw": "0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000"
    },
    "xl": {
      "value": "0px 20px 25px -5px var(--color-gray-400), 0px 8px 10px -6px #000000",
      "variable": "var(--shadow-xl)",
      "raw": "0px 20px 25px -5px {color.gray.400}, 0px 8px 10px -6px #000000"
    },
    "2xl": {
      "value": "0px 25px 50px -12px var(--color-gray-900)",
      "variable": "var(--shadow-2xl)",
      "raw": "0px 25px 50px -12px {color.gray.900}"
    },
    "none": {
      "value": "0px 0px 0px 0px transparent",
      "variable": "var(--shadow-none)",
      "raw": "0px 0px 0px 0px transparent"
    }
  },
  "radii": {
    "none": {
      "value": "0px",
      "variable": "var(--radii-none)",
      "raw": "0px"
    },
    "2xs": {
      "value": "0.125rem",
      "variable": "var(--radii-2xs)",
      "raw": "0.125rem"
    },
    "xs": {
      "value": "0.25rem",
      "variable": "var(--radii-xs)",
      "raw": "0.25rem"
    },
    "sm": {
      "value": "0.375rem",
      "variable": "var(--radii-sm)",
      "raw": "0.375rem"
    },
    "md": {
      "value": "0.5rem",
      "variable": "var(--radii-md)",
      "raw": "0.5rem"
    },
    "lg": {
      "value": "0.75rem",
      "variable": "var(--radii-lg)",
      "raw": "0.75rem"
    },
    "xl": {
      "value": "1rem",
      "variable": "var(--radii-xl)",
      "raw": "1rem"
    },
    "2xl": {
      "value": "1.5rem",
      "variable": "var(--radii-2xl)",
      "raw": "1.5rem"
    },
    "3xl": {
      "value": "1.75rem",
      "variable": "var(--radii-3xl)",
      "raw": "1.75rem"
    },
    "full": {
      "value": "9999px",
      "variable": "var(--radii-full)",
      "raw": "9999px"
    }
  },
  "size": {
    "0": {
      "value": "0px",
      "variable": "var(--size-0)",
      "raw": "0px"
    },
    "2": {
      "value": "2px",
      "variable": "var(--size-2)",
      "raw": "2px"
    },
    "4": {
      "value": "4px",
      "variable": "var(--size-4)",
      "raw": "4px"
    },
    "6": {
      "value": "6px",
      "variable": "var(--size-6)",
      "raw": "6px"
    },
    "8": {
      "value": "8px",
      "variable": "var(--size-8)",
      "raw": "8px"
    },
    "12": {
      "value": "12px",
      "variable": "var(--size-12)",
      "raw": "12px"
    },
    "16": {
      "value": "16px",
      "variable": "var(--size-16)",
      "raw": "16px"
    },
    "20": {
      "value": "20px",
      "variable": "var(--size-20)",
      "raw": "20px"
    },
    "24": {
      "value": "24px",
      "variable": "var(--size-24)",
      "raw": "24px"
    },
    "32": {
      "value": "32px",
      "variable": "var(--size-32)",
      "raw": "32px"
    },
    "40": {
      "value": "40px",
      "variable": "var(--size-40)",
      "raw": "40px"
    },
    "48": {
      "value": "48px",
      "variable": "var(--size-48)",
      "raw": "48px"
    },
    "56": {
      "value": "56px",
      "variable": "var(--size-56)",
      "raw": "56px"
    },
    "64": {
      "value": "64px",
      "variable": "var(--size-64)",
      "raw": "64px"
    },
    "80": {
      "value": "80px",
      "variable": "var(--size-80)",
      "raw": "80px"
    },
    "104": {
      "value": "104px",
      "variable": "var(--size-104)",
      "raw": "104px"
    },
    "200": {
      "value": "200px",
      "variable": "var(--size-200)",
      "raw": "200px"
    },
    "xs": {
      "value": "20rem",
      "variable": "var(--size-xs)",
      "raw": "20rem"
    },
    "sm": {
      "value": "24rem",
      "variable": "var(--size-sm)",
      "raw": "24rem"
    },
    "md": {
      "value": "28rem",
      "variable": "var(--size-md)",
      "raw": "28rem"
    },
    "lg": {
      "value": "32rem",
      "variable": "var(--size-lg)",
      "raw": "32rem"
    },
    "xl": {
      "value": "36rem",
      "variable": "var(--size-xl)",
      "raw": "36rem"
    },
    "2xl": {
      "value": "42rem",
      "variable": "var(--size-2xl)",
      "raw": "42rem"
    },
    "3xl": {
      "value": "48rem",
      "variable": "var(--size-3xl)",
      "raw": "48rem"
    },
    "4xl": {
      "value": "56rem",
      "variable": "var(--size-4xl)",
      "raw": "56rem"
    },
    "5xl": {
      "value": "64rem",
      "variable": "var(--size-5xl)",
      "raw": "64rem"
    },
    "6xl": {
      "value": "72rem",
      "variable": "var(--size-6xl)",
      "raw": "72rem"
    },
    "7xl": {
      "value": "80rem",
      "variable": "var(--size-7xl)",
      "raw": "80rem"
    },
    "full": {
      "value": "100%",
      "variable": "var(--size-full)",
      "raw": "100%"
    }
  },
  "space": {
    "0": {
      "value": "0px",
      "variable": "var(--space-0)",
      "raw": "0px"
    },
    "1": {
      "value": "0.25rem",
      "variable": "var(--space-1)",
      "raw": "0.25rem"
    },
    "2": {
      "value": "0.5rem",
      "variable": "var(--space-2)",
      "raw": "0.5rem"
    },
    "3": {
      "value": "0.75rem",
      "variable": "var(--space-3)",
      "raw": "0.75rem"
    },
    "4": {
      "value": "1rem",
      "variable": "var(--space-4)",
      "raw": "1rem"
    },
    "5": {
      "value": "1.25rem",
      "variable": "var(--space-5)",
      "raw": "1.25rem"
    },
    "6": {
      "value": "1.5rem",
      "variable": "var(--space-6)",
      "raw": "1.5rem"
    },
    "7": {
      "value": "1.75rem",
      "variable": "var(--space-7)",
      "raw": "1.75rem"
    },
    "8": {
      "value": "2rem",
      "variable": "var(--space-8)",
      "raw": "2rem"
    },
    "9": {
      "value": "2.25rem",
      "variable": "var(--space-9)",
      "raw": "2.25rem"
    },
    "10": {
      "value": "2.5rem",
      "variable": "var(--space-10)",
      "raw": "2.5rem"
    },
    "11": {
      "value": "2.75rem",
      "variable": "var(--space-11)",
      "raw": "2.75rem"
    },
    "12": {
      "value": "3rem",
      "variable": "var(--space-12)",
      "raw": "3rem"
    },
    "14": {
      "value": "3.5rem",
      "variable": "var(--space-14)",
      "raw": "3.5rem"
    },
    "16": {
      "value": "4rem",
      "variable": "var(--space-16)",
      "raw": "4rem"
    },
    "20": {
      "value": "5rem",
      "variable": "var(--space-20)",
      "raw": "5rem"
    },
    "24": {
      "value": "6rem",
      "variable": "var(--space-24)",
      "raw": "6rem"
    },
    "28": {
      "value": "7rem",
      "variable": "var(--space-28)",
      "raw": "7rem"
    },
    "32": {
      "value": "8rem",
      "variable": "var(--space-32)",
      "raw": "8rem"
    },
    "36": {
      "value": "9rem",
      "variable": "var(--space-36)",
      "raw": "9rem"
    },
    "40": {
      "value": "10rem",
      "variable": "var(--space-40)",
      "raw": "10rem"
    },
    "44": {
      "value": "11rem",
      "variable": "var(--space-44)",
      "raw": "11rem"
    },
    "48": {
      "value": "12rem",
      "variable": "var(--space-48)",
      "raw": "12rem"
    },
    "52": {
      "value": "13rem",
      "variable": "var(--space-52)",
      "raw": "13rem"
    },
    "56": {
      "value": "14rem",
      "variable": "var(--space-56)",
      "raw": "14rem"
    },
    "60": {
      "value": "15rem",
      "variable": "var(--space-60)",
      "raw": "15rem"
    },
    "64": {
      "value": "16rem",
      "variable": "var(--space-64)",
      "raw": "16rem"
    },
    "72": {
      "value": "18rem",
      "variable": "var(--space-72)",
      "raw": "18rem"
    },
    "80": {
      "value": "20rem",
      "variable": "var(--space-80)",
      "raw": "20rem"
    },
    "96": {
      "value": "24rem",
      "variable": "var(--space-96)",
      "raw": "24rem"
    },
    "128": {
      "value": "32rem",
      "variable": "var(--space-128)",
      "raw": "32rem"
    },
    "px": {
      "value": "1px",
      "variable": "var(--space-px)",
      "raw": "1px"
    },
    "rem": {
      "125": {
        "value": "0.125rem",
        "variable": "var(--space-rem-125)",
        "raw": "0.125rem"
      },
      "375": {
        "value": "0.375rem",
        "variable": "var(--space-rem-375)",
        "raw": "0.375rem"
      },
      "625": {
        "value": "0.625rem",
        "variable": "var(--space-rem-625)",
        "raw": "0.625rem"
      },
      "875": {
        "value": "0.875rem",
        "variable": "var(--space-rem-875)",
        "raw": "0.875rem"
      }
    }
  },
  "borderWidth": {
    "noBorder": {
      "value": "0",
      "variable": "var(--borderWidth-noBorder)",
      "raw": "0"
    },
    "sm": {
      "value": "1px",
      "variable": "var(--borderWidth-sm)",
      "raw": "1px"
    },
    "md": {
      "value": "2px",
      "variable": "var(--borderWidth-md)",
      "raw": "2px"
    },
    "lg": {
      "value": "3px",
      "variable": "var(--borderWidth-lg)",
      "raw": "3px"
    }
  },
  "opacity": {
    "noOpacity": {
      "value": "0",
      "variable": "var(--opacity-noOpacity)",
      "raw": "0"
    },
    "bright": {
      "value": "0.1",
      "variable": "var(--opacity-bright)",
      "raw": "0.1"
    },
    "light": {
      "value": "0.15",
      "variable": "var(--opacity-light)",
      "raw": "0.15"
    },
    "soft": {
      "value": "0.3",
      "variable": "var(--opacity-soft)",
      "raw": "0.3"
    },
    "medium": {
      "value": "0.5",
      "variable": "var(--opacity-medium)",
      "raw": "0.5"
    },
    "high": {
      "value": "0.8",
      "variable": "var(--opacity-high)",
      "raw": "0.8"
    },
    "total": {
      "value": "1",
      "variable": "var(--opacity-total)",
      "raw": "1"
    }
  },
  "font": {
    "sans": {
      "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      "variable": "var(--font-sans)",
      "raw": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
    },
    "serif": {
      "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif",
      "variable": "var(--font-serif)",
      "raw": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
    },
    "mono": {
      "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      "variable": "var(--font-mono)",
      "raw": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    }
  },
  "fontWeight": {
    "thin": {
      "value": "100",
      "variable": "var(--fontWeight-thin)",
      "raw": "100"
    },
    "extralight": {
      "value": "200",
      "variable": "var(--fontWeight-extralight)",
      "raw": "200"
    },
    "light": {
      "value": "300",
      "variable": "var(--fontWeight-light)",
      "raw": "300"
    },
    "normal": {
      "value": "400",
      "variable": "var(--fontWeight-normal)",
      "raw": "400"
    },
    "medium": {
      "value": "500",
      "variable": "var(--fontWeight-medium)",
      "raw": "500"
    },
    "semibold": {
      "value": "600",
      "variable": "var(--fontWeight-semibold)",
      "raw": "600"
    },
    "bold": {
      "value": "700",
      "variable": "var(--fontWeight-bold)",
      "raw": "700"
    },
    "extrabold": {
      "value": "800",
      "variable": "var(--fontWeight-extrabold)",
      "raw": "800"
    },
    "black": {
      "value": "900",
      "variable": "var(--fontWeight-black)",
      "raw": "900"
    }
  },
  "fontSize": {
    "xs": {
      "value": "0.75rem",
      "variable": "var(--fontSize-xs)",
      "raw": "0.75rem"
    },
    "sm": {
      "value": "0.875rem",
      "variable": "var(--fontSize-sm)",
      "raw": "0.875rem"
    },
    "base": {
      "value": "1rem",
      "variable": "var(--fontSize-base)",
      "raw": "1rem"
    },
    "lg": {
      "value": "1.125rem",
      "variable": "var(--fontSize-lg)",
      "raw": "1.125rem"
    },
    "xl": {
      "value": "1.25rem",
      "variable": "var(--fontSize-xl)",
      "raw": "1.25rem"
    },
    "2xl": {
      "value": "1.5rem",
      "variable": "var(--fontSize-2xl)",
      "raw": "1.5rem"
    },
    "3xl": {
      "value": "1.875rem",
      "variable": "var(--fontSize-3xl)",
      "raw": "1.875rem"
    },
    "4xl": {
      "value": "2.25rem",
      "variable": "var(--fontSize-4xl)",
      "raw": "2.25rem"
    },
    "5xl": {
      "value": "3rem",
      "variable": "var(--fontSize-5xl)",
      "raw": "3rem"
    },
    "6xl": {
      "value": "3.75rem",
      "variable": "var(--fontSize-6xl)",
      "raw": "3.75rem"
    },
    "7xl": {
      "value": "4.5rem",
      "variable": "var(--fontSize-7xl)",
      "raw": "4.5rem"
    },
    "8xl": {
      "value": "6rem",
      "variable": "var(--fontSize-8xl)",
      "raw": "6rem"
    },
    "9xl": {
      "value": "8rem",
      "variable": "var(--fontSize-9xl)",
      "raw": "8rem"
    }
  },
  "letterSpacing": {
    "tighter": {
      "value": "-0.05em",
      "variable": "var(--letterSpacing-tighter)",
      "raw": "-0.05em"
    },
    "tight": {
      "value": "-0.025em",
      "variable": "var(--letterSpacing-tight)",
      "raw": "-0.025em"
    },
    "normal": {
      "value": "0em",
      "variable": "var(--letterSpacing-normal)",
      "raw": "0em"
    },
    "wide": {
      "value": "0.025em",
      "variable": "var(--letterSpacing-wide)",
      "raw": "0.025em"
    },
    "wider": {
      "value": "0.05em",
      "variable": "var(--letterSpacing-wider)",
      "raw": "0.05em"
    },
    "widest": {
      "value": "0.1em",
      "variable": "var(--letterSpacing-widest)",
      "raw": "0.1em"
    }
  },
  "lead": {
    "1": {
      "value": ".025rem",
      "variable": "var(--lead-1)",
      "raw": ".025rem"
    },
    "2": {
      "value": ".5rem",
      "variable": "var(--lead-2)",
      "raw": ".5rem"
    },
    "3": {
      "value": ".75rem",
      "variable": "var(--lead-3)",
      "raw": ".75rem"
    },
    "4": {
      "value": "1rem",
      "variable": "var(--lead-4)",
      "raw": "1rem"
    },
    "5": {
      "value": "1.25rem",
      "variable": "var(--lead-5)",
      "raw": "1.25rem"
    },
    "6": {
      "value": "1.5rem",
      "variable": "var(--lead-6)",
      "raw": "1.5rem"
    },
    "7": {
      "value": "1.75rem",
      "variable": "var(--lead-7)",
      "raw": "1.75rem"
    },
    "8": {
      "value": "2rem",
      "variable": "var(--lead-8)",
      "raw": "2rem"
    },
    "9": {
      "value": "2.25rem",
      "variable": "var(--lead-9)",
      "raw": "2.25rem"
    },
    "10": {
      "value": "2.5rem",
      "variable": "var(--lead-10)",
      "raw": "2.5rem"
    },
    "none": {
      "value": "1",
      "variable": "var(--lead-none)",
      "raw": "1"
    },
    "tight": {
      "value": "1.25",
      "variable": "var(--lead-tight)",
      "raw": "1.25"
    },
    "snug": {
      "value": "1.375",
      "variable": "var(--lead-snug)",
      "raw": "1.375"
    },
    "normal": {
      "value": "1.5",
      "variable": "var(--lead-normal)",
      "raw": "1.5"
    },
    "relaxed": {
      "value": "1.625",
      "variable": "var(--lead-relaxed)",
      "raw": "1.625"
    },
    "loose": {
      "value": "2",
      "variable": "var(--lead-loose)",
      "raw": "2"
    }
  },
  "text": {
    "xs": {
      "fontSize": {
        "value": "var(--fontSize-xs)",
        "variable": "var(--text-xs-fontSize)",
        "raw": "{fontSize.xs}"
      },
      "lineHeight": {
        "value": "var(--lead-4)",
        "variable": "var(--text-xs-lineHeight)",
        "raw": "{lead.4}"
      }
    },
    "sm": {
      "fontSize": {
        "value": "var(--fontSize-sm)",
        "variable": "var(--text-sm-fontSize)",
        "raw": "{fontSize.sm}"
      },
      "lineHeight": {
        "value": "var(--lead-5)",
        "variable": "var(--text-sm-lineHeight)",
        "raw": "{lead.5}"
      }
    },
    "base": {
      "fontSize": {
        "value": "var(--fontSize-base)",
        "variable": "var(--text-base-fontSize)",
        "raw": "{fontSize.base}"
      },
      "lineHeight": {
        "value": "var(--lead-6)",
        "variable": "var(--text-base-lineHeight)",
        "raw": "{lead.6}"
      }
    },
    "lg": {
      "fontSize": {
        "value": "var(--fontSize-lg)",
        "variable": "var(--text-lg-fontSize)",
        "raw": "{fontSize.lg}"
      },
      "lineHeight": {
        "value": "var(--lead-7)",
        "variable": "var(--text-lg-lineHeight)",
        "raw": "{lead.7}"
      }
    },
    "xl": {
      "fontSize": {
        "value": "var(--fontSize-xl)",
        "variable": "var(--text-xl-fontSize)",
        "raw": "{fontSize.xl}"
      },
      "lineHeight": {
        "value": "var(--lead-7)",
        "variable": "var(--text-xl-lineHeight)",
        "raw": "{lead.7}"
      }
    },
    "2xl": {
      "fontSize": {
        "value": "var(--fontSize-2xl)",
        "variable": "var(--text-2xl-fontSize)",
        "raw": "{fontSize.2xl}"
      },
      "lineHeight": {
        "value": "var(--lead-8)",
        "variable": "var(--text-2xl-lineHeight)",
        "raw": "{lead.8}"
      }
    },
    "3xl": {
      "fontSize": {
        "value": "var(--fontSize-3xl)",
        "variable": "var(--text-3xl-fontSize)",
        "raw": "{fontSize.3xl}"
      },
      "lineHeight": {
        "value": "var(--lead-9)",
        "variable": "var(--text-3xl-lineHeight)",
        "raw": "{lead.9}"
      }
    },
    "4xl": {
      "fontSize": {
        "value": "var(--fontSize-4xl)",
        "variable": "var(--text-4xl-fontSize)",
        "raw": "{fontSize.4xl}"
      },
      "lineHeight": {
        "value": "var(--lead-10)",
        "variable": "var(--text-4xl-lineHeight)",
        "raw": "{lead.10}"
      }
    },
    "5xl": {
      "fontSize": {
        "value": "var(--fontSize-5xl)",
        "variable": "var(--text-5xl-fontSize)",
        "raw": "{fontSize.5xl}"
      },
      "lineHeight": {
        "value": "var(--lead-none)",
        "variable": "var(--text-5xl-lineHeight)",
        "raw": "{lead.none}"
      }
    },
    "6xl": {
      "fontSize": {
        "value": "var(--fontSize-6xl)",
        "variable": "var(--text-6xl-fontSize)",
        "raw": "{fontSize.6xl}"
      },
      "lineHeight": {
        "value": "var(--lead-none)",
        "variable": "var(--text-6xl-lineHeight)",
        "raw": "{lead.none}"
      }
    }
  },
  "elements": {
    "text": {
      "primary": {
        "color": {
          "static": {
            "value": {
              "initial": "var(--color-gray-900)",
              "dark": "var(--color-gray-50)"
            },
            "variable": "var(--elements-text-primary-color-static)",
            "raw": {
              "initial": "{color.gray.900}",
              "dark": "{color.gray.50}"
            }
          },
          "hover": {}
        }
      },
      "secondary": {
        "color": {
          "static": {
            "value": {
              "initial": "var(--color-gray-500)",
              "dark": "var(--color-gray-400)"
            },
            "variable": "var(--elements-text-secondary-color-static)",
            "raw": {
              "initial": "{color.gray.500}",
              "dark": "{color.gray.400}"
            }
          },
          "hover": {
            "value": {
              "initial": "var(--color-gray-700)",
              "dark": "var(--color-gray-200)"
            },
            "variable": "var(--elements-text-secondary-color-hover)",
            "raw": {
              "initial": "{color.gray.700}",
              "dark": "{color.gray.200}"
            }
          }
        }
      }
    },
    "container": {
      "maxWidth": {
        "value": "64rem",
        "variable": "var(--elements-container-maxWidth)",
        "raw": "64rem"
      },
      "padding": {
        "mobile": {
          "value": "var(--space-6)",
          "variable": "var(--elements-container-padding-mobile)",
          "raw": "{space.6}"
        },
        "xs": {
          "value": "var(--space-8)",
          "variable": "var(--elements-container-padding-xs)",
          "raw": "{space.8}"
        },
        "sm": {
          "value": "var(--space-12)",
          "variable": "var(--elements-container-padding-sm)",
          "raw": "{space.12}"
        },
        "md": {
          "value": "var(--space-16)",
          "variable": "var(--elements-container-padding-md)",
          "raw": "{space.16}"
        }
      }
    },
    "backdrop": {
      "filter": {
        "value": "saturate(200%) blur(20px)",
        "variable": "var(--elements-backdrop-filter)",
        "raw": "saturate(200%) blur(20px)"
      },
      "background": {
        "value": {
          "initial": "#fffc",
          "dark": "#0c0d0ccc"
        },
        "variable": "var(--elements-backdrop-background)",
        "raw": {
          "initial": "#fffc",
          "dark": "#0c0d0ccc"
        }
      }
    },
    "border": {
      "primary": {
        "static": {
          "value": {
            "initial": "var(--color-gray-100)",
            "dark": "var(--color-gray-900)"
          },
          "variable": "var(--elements-border-primary-static)",
          "raw": {
            "initial": "{color.gray.100}",
            "dark": "{color.gray.900}"
          }
        },
        "hover": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "var(--color-gray-800)"
          },
          "variable": "var(--elements-border-primary-hover)",
          "raw": {
            "initial": "{color.gray.200}",
            "dark": "{color.gray.800}"
          }
        }
      },
      "secondary": {
        "static": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "var(--color-gray-800)"
          },
          "variable": "var(--elements-border-secondary-static)",
          "raw": {
            "initial": "{color.gray.200}",
            "dark": "{color.gray.800}"
          }
        },
        "hover": {
          "value": {
            "initial": "",
            "dark": ""
          },
          "variable": "var(--elements-border-secondary-hover)",
          "raw": {
            "initial": "",
            "dark": ""
          }
        }
      }
    },
    "surface": {
      "background": {
        "base": {
          "value": {
            "initial": "var(--color-gray-100)",
            "dark": "var(--color-gray-900)"
          },
          "variable": "var(--elements-surface-background-base)",
          "raw": {
            "initial": "{color.gray.100}",
            "dark": "{color.gray.900}"
          }
        }
      }
    },
    "state": {
      "primary": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-600)",
              "dark": "var(--color-primary-400)"
            },
            "variable": "var(--elements-state-primary-color-primary)",
            "raw": {
              "initial": "{color.primary.600}",
              "dark": "{color.primary.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-700)",
              "dark": "var(--color-primary-200)"
            },
            "variable": "var(--elements-state-primary-color-secondary)",
            "raw": {
              "initial": "{color.primary.700}",
              "dark": "{color.primary.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-50)",
              "dark": "var(--color-primary-900)"
            },
            "variable": "var(--elements-state-primary-backgroundColor-primary)",
            "raw": {
              "initial": "{color.primary.50}",
              "dark": "{color.primary.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-100)",
              "dark": "var(--color-primary-800)"
            },
            "variable": "var(--elements-state-primary-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.primary.100}",
              "dark": "{color.primary.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-100)",
              "dark": "var(--color-primary-800)"
            },
            "variable": "var(--elements-state-primary-borderColor-primary)",
            "raw": {
              "initial": "{color.primary.100}",
              "dark": "{color.primary.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-200)",
              "dark": "var(--color-primary-700)"
            },
            "variable": "var(--elements-state-primary-borderColor-secondary)",
            "raw": {
              "initial": "{color.primary.200}",
              "dark": "{color.primary.700}"
            }
          }
        }
      },
      "info": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-500)",
              "dark": "var(--color-blue-400)"
            },
            "variable": "var(--elements-state-info-color-primary)",
            "raw": {
              "initial": "{color.blue.500}",
              "dark": "{color.blue.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-600)",
              "dark": "var(--color-blue-200)"
            },
            "variable": "var(--elements-state-info-color-secondary)",
            "raw": {
              "initial": "{color.blue.600}",
              "dark": "{color.blue.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-50)",
              "dark": "var(--color-blue-900)"
            },
            "variable": "var(--elements-state-info-backgroundColor-primary)",
            "raw": {
              "initial": "{color.blue.50}",
              "dark": "{color.blue.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-100)",
              "dark": "var(--color-blue-800)"
            },
            "variable": "var(--elements-state-info-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.blue.100}",
              "dark": "{color.blue.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-100)",
              "dark": "var(--color-blue-800)"
            },
            "variable": "var(--elements-state-info-borderColor-primary)",
            "raw": {
              "initial": "{color.blue.100}",
              "dark": "{color.blue.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-200)",
              "dark": "var(--color-blue-700)"
            },
            "variable": "var(--elements-state-info-borderColor-secondary)",
            "raw": {
              "initial": "{color.blue.200}",
              "dark": "{color.blue.700}"
            }
          }
        }
      },
      "success": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-green-500)",
              "dark": "var(--color-green-400)"
            },
            "variable": "var(--elements-state-success-color-primary)",
            "raw": {
              "initial": "{color.green.500}",
              "dark": "{color.green.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-600)",
              "dark": "var(--color-green-200)"
            },
            "variable": "var(--elements-state-success-color-secondary)",
            "raw": {
              "initial": "{color.green.600}",
              "dark": "{color.green.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-green-50)",
              "dark": "var(--color-green-900)"
            },
            "variable": "var(--elements-state-success-backgroundColor-primary)",
            "raw": {
              "initial": "{color.green.50}",
              "dark": "{color.green.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-100)",
              "dark": "var(--color-green-800)"
            },
            "variable": "var(--elements-state-success-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.green.100}",
              "dark": "{color.green.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-green-100)",
              "dark": "var(--color-green-800)"
            },
            "variable": "var(--elements-state-success-borderColor-primary)",
            "raw": {
              "initial": "{color.green.100}",
              "dark": "{color.green.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-200)",
              "dark": "var(--color-green-700)"
            },
            "variable": "var(--elements-state-success-borderColor-secondary)",
            "raw": {
              "initial": "{color.green.200}",
              "dark": "{color.green.700}"
            }
          }
        }
      },
      "warning": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-600)",
              "dark": "var(--color-yellow-400)"
            },
            "variable": "var(--elements-state-warning-color-primary)",
            "raw": {
              "initial": "{color.yellow.600}",
              "dark": "{color.yellow.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-700)",
              "dark": "var(--color-yellow-200)"
            },
            "variable": "var(--elements-state-warning-color-secondary)",
            "raw": {
              "initial": "{color.yellow.700}",
              "dark": "{color.yellow.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-50)",
              "dark": "var(--color-yellow-900)"
            },
            "variable": "var(--elements-state-warning-backgroundColor-primary)",
            "raw": {
              "initial": "{color.yellow.50}",
              "dark": "{color.yellow.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-100)",
              "dark": "var(--color-yellow-800)"
            },
            "variable": "var(--elements-state-warning-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.yellow.100}",
              "dark": "{color.yellow.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-100)",
              "dark": "var(--color-yellow-800)"
            },
            "variable": "var(--elements-state-warning-borderColor-primary)",
            "raw": {
              "initial": "{color.yellow.100}",
              "dark": "{color.yellow.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-200)",
              "dark": "var(--color-yellow-700)"
            },
            "variable": "var(--elements-state-warning-borderColor-secondary)",
            "raw": {
              "initial": "{color.yellow.200}",
              "dark": "{color.yellow.700}"
            }
          }
        }
      },
      "danger": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-red-500)",
              "dark": "var(--color-red-300)"
            },
            "variable": "var(--elements-state-danger-color-primary)",
            "raw": {
              "initial": "{color.red.500}",
              "dark": "{color.red.300}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-600)",
              "dark": "var(--color-red-200)"
            },
            "variable": "var(--elements-state-danger-color-secondary)",
            "raw": {
              "initial": "{color.red.600}",
              "dark": "{color.red.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-red-50)",
              "dark": "var(--color-red-900)"
            },
            "variable": "var(--elements-state-danger-backgroundColor-primary)",
            "raw": {
              "initial": "{color.red.50}",
              "dark": "{color.red.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-100)",
              "dark": "var(--color-red-800)"
            },
            "variable": "var(--elements-state-danger-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.red.100}",
              "dark": "{color.red.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-red-100)",
              "dark": "var(--color-red-800)"
            },
            "variable": "var(--elements-state-danger-borderColor-primary)",
            "raw": {
              "initial": "{color.red.100}",
              "dark": "{color.red.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-200)",
              "dark": "var(--color-red-700)"
            },
            "variable": "var(--elements-state-danger-borderColor-secondary)",
            "raw": {
              "initial": "{color.red.200}",
              "dark": "{color.red.700}"
            }
          }
        }
      }
    }
  },
  "typography": {
    "verticalMargin": {
      "sm": {
        "value": "16px",
        "variable": "var(--typography-verticalMargin-sm)",
        "raw": "16px"
      },
      "base": {
        "value": "32px",
        "variable": "var(--typography-verticalMargin-base)",
        "raw": "32px"
      }
    },
    "letterSpacing": {
      "tight": {
        "value": "-0.025em",
        "variable": "var(--typography-letterSpacing-tight)",
        "raw": "-0.025em"
      },
      "wide": {
        "value": "0.025em",
        "variable": "var(--typography-letterSpacing-wide)",
        "raw": "0.025em"
      }
    },
    "fontSize": {
      "xs": {
        "value": "12px",
        "variable": "var(--typography-fontSize-xs)",
        "raw": "12px"
      },
      "sm": {
        "value": "14px",
        "variable": "var(--typography-fontSize-sm)",
        "raw": "14px"
      },
      "base": {
        "value": "16px",
        "variable": "var(--typography-fontSize-base)",
        "raw": "16px"
      },
      "lg": {
        "value": "18px",
        "variable": "var(--typography-fontSize-lg)",
        "raw": "18px"
      },
      "xl": {
        "value": "20px",
        "variable": "var(--typography-fontSize-xl)",
        "raw": "20px"
      },
      "2xl": {
        "value": "24px",
        "variable": "var(--typography-fontSize-2xl)",
        "raw": "24px"
      },
      "3xl": {
        "value": "30px",
        "variable": "var(--typography-fontSize-3xl)",
        "raw": "30px"
      },
      "4xl": {
        "value": "36px",
        "variable": "var(--typography-fontSize-4xl)",
        "raw": "36px"
      },
      "5xl": {
        "value": "48px",
        "variable": "var(--typography-fontSize-5xl)",
        "raw": "48px"
      },
      "6xl": {
        "value": "60px",
        "variable": "var(--typography-fontSize-6xl)",
        "raw": "60px"
      },
      "7xl": {
        "value": "72px",
        "variable": "var(--typography-fontSize-7xl)",
        "raw": "72px"
      },
      "8xl": {
        "value": "96px",
        "variable": "var(--typography-fontSize-8xl)",
        "raw": "96px"
      },
      "9xl": {
        "value": "128px",
        "variable": "var(--typography-fontSize-9xl)",
        "raw": "128px"
      }
    },
    "fontWeight": {
      "thin": {
        "value": "100",
        "variable": "var(--typography-fontWeight-thin)",
        "raw": "100"
      },
      "extralight": {
        "value": "200",
        "variable": "var(--typography-fontWeight-extralight)",
        "raw": "200"
      },
      "light": {
        "value": "300",
        "variable": "var(--typography-fontWeight-light)",
        "raw": "300"
      },
      "normal": {
        "value": "400",
        "variable": "var(--typography-fontWeight-normal)",
        "raw": "400"
      },
      "medium": {
        "value": "500",
        "variable": "var(--typography-fontWeight-medium)",
        "raw": "500"
      },
      "semibold": {
        "value": "600",
        "variable": "var(--typography-fontWeight-semibold)",
        "raw": "600"
      },
      "bold": {
        "value": "700",
        "variable": "var(--typography-fontWeight-bold)",
        "raw": "700"
      },
      "extrabold": {
        "value": "800",
        "variable": "var(--typography-fontWeight-extrabold)",
        "raw": "800"
      },
      "black": {
        "value": "900",
        "variable": "var(--typography-fontWeight-black)",
        "raw": "900"
      }
    },
    "lead": {
      "none": {
        "value": "1",
        "variable": "var(--typography-lead-none)",
        "raw": "1"
      },
      "tight": {
        "value": "1.25",
        "variable": "var(--typography-lead-tight)",
        "raw": "1.25"
      },
      "snug": {
        "value": "1.375",
        "variable": "var(--typography-lead-snug)",
        "raw": "1.375"
      },
      "normal": {
        "value": "1.5",
        "variable": "var(--typography-lead-normal)",
        "raw": "1.5"
      },
      "relaxed": {
        "value": "1.625",
        "variable": "var(--typography-lead-relaxed)",
        "raw": "1.625"
      },
      "loose": {
        "value": "2",
        "variable": "var(--typography-lead-loose)",
        "raw": "2"
      }
    },
    "font": {
      "display": {
        "value": "var(--font-sans)",
        "variable": "var(--typography-font-display)",
        "raw": "{font.sans}"
      },
      "body": {
        "value": "var(--font-sans)",
        "variable": "var(--typography-font-body)",
        "raw": "{font.sans}"
      },
      "code": {
        "value": "var(--font-mono)",
        "variable": "var(--typography-font-code)",
        "raw": "{font.mono}"
      }
    },
    "color": {
      "primary": {
        "50": {
          "value": "var(--color-primary-50)",
          "variable": "var(--typography-color-primary-50)",
          "raw": "{color.primary.50}"
        },
        "100": {
          "value": "var(--color-primary-100)",
          "variable": "var(--typography-color-primary-100)",
          "raw": "{color.primary.100}"
        },
        "200": {
          "value": "var(--color-primary-200)",
          "variable": "var(--typography-color-primary-200)",
          "raw": "{color.primary.200}"
        },
        "300": {
          "value": "var(--color-primary-300)",
          "variable": "var(--typography-color-primary-300)",
          "raw": "{color.primary.300}"
        },
        "400": {
          "value": "var(--color-primary-400)",
          "variable": "var(--typography-color-primary-400)",
          "raw": "{color.primary.400}"
        },
        "500": {
          "value": "var(--color-primary-500)",
          "variable": "var(--typography-color-primary-500)",
          "raw": "{color.primary.500}"
        },
        "600": {
          "value": "var(--color-primary-600)",
          "variable": "var(--typography-color-primary-600)",
          "raw": "{color.primary.600}"
        },
        "700": {
          "value": "var(--color-primary-700)",
          "variable": "var(--typography-color-primary-700)",
          "raw": "{color.primary.700}"
        },
        "800": {
          "value": "var(--color-primary-800)",
          "variable": "var(--typography-color-primary-800)",
          "raw": "{color.primary.800}"
        },
        "900": {
          "value": "var(--color-primary-900)",
          "variable": "var(--typography-color-primary-900)",
          "raw": "{color.primary.900}"
        }
      },
      "secondary": {
        "50": {
          "value": "var(--color-secondary-50)",
          "variable": "var(--typography-color-secondary-50)",
          "raw": "{color.secondary.50}"
        },
        "100": {
          "value": "var(--color-secondary-100)",
          "variable": "var(--typography-color-secondary-100)",
          "raw": "{color.secondary.100}"
        },
        "200": {
          "value": "var(--color-secondary-200)",
          "variable": "var(--typography-color-secondary-200)",
          "raw": "{color.secondary.200}"
        },
        "300": {
          "value": "var(--color-secondary-300)",
          "variable": "var(--typography-color-secondary-300)",
          "raw": "{color.secondary.300}"
        },
        "400": {
          "value": "var(--color-secondary-400)",
          "variable": "var(--typography-color-secondary-400)",
          "raw": "{color.secondary.400}"
        },
        "500": {
          "value": "var(--color-secondary-500)",
          "variable": "var(--typography-color-secondary-500)",
          "raw": "{color.secondary.500}"
        },
        "600": {
          "value": "var(--color-secondary-600)",
          "variable": "var(--typography-color-secondary-600)",
          "raw": "{color.secondary.600}"
        },
        "700": {
          "value": "var(--color-secondary-700)",
          "variable": "var(--typography-color-secondary-700)",
          "raw": "{color.secondary.700}"
        },
        "800": {
          "value": "var(--color-secondary-800)",
          "variable": "var(--typography-color-secondary-800)",
          "raw": "{color.secondary.800}"
        },
        "900": {
          "value": "var(--color-secondary-900)",
          "variable": "var(--typography-color-secondary-900)",
          "raw": "{color.secondary.900}"
        }
      }
    }
  },
  "prose": {
    "p": {
      "fontSize": {
        "value": "18px",
        "variable": "var(--prose-p-fontSize)",
        "raw": "18px"
      },
      "lineHeight": {
        "value": "var(--typography-lead-normal)",
        "variable": "var(--prose-p-lineHeight)",
        "raw": "{typography.lead.normal}"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-p-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "br": {
        "margin": {
          "value": "var(--typography-verticalMargin-base) 0 0 0",
          "variable": "var(--prose-p-br-margin)",
          "raw": "{typography.verticalMargin.base} 0 0 0"
        }
      }
    },
    "h1": {
      "margin": {
        "value": "0 0 2rem",
        "variable": "var(--prose-h1-margin)",
        "raw": "0 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-5xl)",
        "variable": "var(--prose-h1-fontSize)",
        "raw": "{typography.fontSize.5xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-tight)",
        "variable": "var(--prose-h1-lineHeight)",
        "raw": "{typography.lead.tight}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-bold)",
        "variable": "var(--prose-h1-fontWeight)",
        "raw": "{typography.fontWeight.bold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h1-letterSpacing)",
        "raw": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-3xl)",
        "variable": "var(--prose-h1-iconSize)",
        "raw": "{typography.fontSize.3xl}"
      }
    },
    "h2": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h2-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-4xl)",
        "variable": "var(--prose-h2-fontSize)",
        "raw": "{typography.fontSize.4xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-tight)",
        "variable": "var(--prose-h2-lineHeight)",
        "raw": "{typography.lead.tight}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h2-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h2-letterSpacing)",
        "raw": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-2xl)",
        "variable": "var(--prose-h2-iconSize)",
        "raw": "{typography.fontSize.2xl}"
      }
    },
    "h3": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h3-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-3xl)",
        "variable": "var(--prose-h3-fontSize)",
        "raw": "{typography.fontSize.3xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h3-lineHeight)",
        "raw": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h3-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h3-letterSpacing)",
        "raw": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-xl)",
        "variable": "var(--prose-h3-iconSize)",
        "raw": "{typography.fontSize.xl}"
      }
    },
    "h4": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h4-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-2xl)",
        "variable": "var(--prose-h4-fontSize)",
        "raw": "{typography.fontSize.2xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h4-lineHeight)",
        "raw": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h4-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h4-letterSpacing)",
        "raw": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h4-iconSize)",
        "raw": "{typography.fontSize.lg}"
      }
    },
    "h5": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h5-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-xl)",
        "variable": "var(--prose-h5-fontSize)",
        "raw": "{typography.fontSize.xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h5-lineHeight)",
        "raw": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h5-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h5-iconSize)",
        "raw": "{typography.fontSize.lg}"
      }
    },
    "h6": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h6-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h6-fontSize)",
        "raw": "{typography.fontSize.lg}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-normal)",
        "variable": "var(--prose-h6-lineHeight)",
        "raw": "{typography.lead.normal}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h6-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-base)",
        "variable": "var(--prose-h6-iconSize)",
        "raw": "{typography.fontSize.base}"
      }
    },
    "strong": {
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-strong-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      }
    },
    "img": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-img-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      }
    },
    "a": {
      "textDecoration": {
        "value": "none",
        "variable": "var(--prose-a-textDecoration)",
        "raw": "none"
      },
      "color": {
        "static": {
          "value": {
            "initial": "inherit",
            "dark": "inherit"
          },
          "variable": "var(--prose-a-color-static)",
          "raw": {
            "initial": "inherit",
            "dark": "inherit"
          }
        },
        "hover": {
          "value": {
            "initial": "var(--typography-color-primary-500)",
            "dark": "var(--typography-color-primary-400)"
          },
          "variable": "var(--prose-a-color-hover)",
          "raw": {
            "initial": "{typography.color.primary.500}",
            "dark": "{typography.color.primary.400}"
          }
        }
      },
      "border": {
        "width": {
          "value": "1px",
          "variable": "var(--prose-a-border-width)",
          "raw": "1px"
        },
        "style": {
          "static": {
            "value": "dashed",
            "variable": "var(--prose-a-border-style-static)",
            "raw": "dashed"
          },
          "hover": {
            "value": "solid",
            "variable": "var(--prose-a-border-style-hover)",
            "raw": "solid"
          }
        },
        "color": {
          "static": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-border-color-static)",
            "raw": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          },
          "hover": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-border-color-hover)",
            "raw": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          }
        },
        "distance": {
          "value": "2px",
          "variable": "var(--prose-a-border-distance)",
          "raw": "2px"
        }
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-medium)",
        "variable": "var(--prose-a-fontWeight)",
        "raw": "{typography.fontWeight.medium}"
      },
      "hasCode": {
        "borderBottom": {
          "value": "none",
          "variable": "var(--prose-a-hasCode-borderBottom)",
          "raw": "none"
        }
      },
      "code": {
        "border": {
          "width": {
            "value": "var(--prose-a-border-width)",
            "variable": "var(--prose-a-code-border-width)",
            "raw": "{prose.a.border.width}"
          },
          "style": {
            "value": "var(--prose-a-border-style-static)",
            "variable": "var(--prose-a-code-border-style)",
            "raw": "{prose.a.border.style.static}"
          },
          "color": {
            "static": {
              "value": {
                "initial": "var(--typography-color-secondary-400)",
                "dark": "var(--typography-color-secondary-600)"
              },
              "variable": "var(--prose-a-code-border-color-static)",
              "raw": {
                "initial": "{typography.color.secondary.400}",
                "dark": "{typography.color.secondary.600}"
              }
            },
            "hover": {
              "value": {
                "initial": "var(--typography-color-primary-500)",
                "dark": "var(--typography-color-primary-600)"
              },
              "variable": "var(--prose-a-code-border-color-hover)",
              "raw": {
                "initial": "{typography.color.primary.500}",
                "dark": "{typography.color.primary.600}"
              }
            }
          }
        },
        "color": {
          "static": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-code-color-static)",
            "raw": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          },
          "hover": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-code-color-hover)",
            "raw": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          }
        },
        "background": {
          "static": {},
          "hover": {
            "value": {
              "initial": "var(--typography-color-primary-50)",
              "dark": "var(--typography-color-primary-900)"
            },
            "variable": "var(--prose-a-code-background-hover)",
            "raw": {
              "initial": "{typography.color.primary.50}",
              "dark": "{typography.color.primary.900}"
            }
          }
        }
      }
    },
    "blockquote": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-blockquote-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "padding": {
        "value": "0 0 0 24px",
        "variable": "var(--prose-blockquote-padding)",
        "raw": "0 0 0 24px"
      },
      "quotes": {
        "value": "'201C' '201D' '2018' '2019'",
        "variable": "var(--prose-blockquote-quotes)",
        "raw": "'201C' '201D' '2018' '2019'"
      },
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-500)",
          "dark": "var(--typography-color-secondary-400)"
        },
        "variable": "var(--prose-blockquote-color)",
        "raw": {
          "initial": "{typography.color.secondary.500}",
          "dark": "{typography.color.secondary.400}"
        }
      },
      "border": {
        "width": {
          "value": "4px",
          "variable": "var(--prose-blockquote-border-width)",
          "raw": "4px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-blockquote-border-style)",
          "raw": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-200)",
            "dark": "var(--typography-color-secondary-700)"
          },
          "variable": "var(--prose-blockquote-border-color)",
          "raw": {
            "initial": "{typography.color.secondary.200}",
            "dark": "{typography.color.secondary.700}"
          }
        }
      }
    },
    "ul": {
      "listStyleType": {
        "value": "disc",
        "variable": "var(--prose-ul-listStyleType)",
        "raw": "disc"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-ul-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "padding": {
        "value": "0 0 0 21px",
        "variable": "var(--prose-ul-padding)",
        "raw": "0 0 0 21px"
      },
      "li": {
        "markerColor": {
          "value": {
            "initial": "var(--typography-color-secondary-400)",
            "dark": "var(--typography-color-secondary-500)"
          },
          "variable": "var(--prose-ul-li-markerColor)",
          "raw": {
            "initial": "{typography.color.secondary.400}",
            "dark": "{typography.color.secondary.500}"
          }
        }
      }
    },
    "ol": {
      "listStyleType": {
        "value": "decimal",
        "variable": "var(--prose-ol-listStyleType)",
        "raw": "decimal"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-ol-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "padding": {
        "value": "0 0 0 21px",
        "variable": "var(--prose-ol-padding)",
        "raw": "0 0 0 21px"
      },
      "li": {
        "markerColor": {
          "value": {
            "initial": "var(--typography-color-secondary-500)",
            "dark": "var(--typography-color-secondary-500)"
          },
          "variable": "var(--prose-ol-li-markerColor)",
          "raw": {
            "initial": "{typography.color.secondary.500}",
            "dark": "{typography.color.secondary.500}"
          }
        }
      }
    },
    "li": {
      "margin": {
        "value": "var(--typography-verticalMargin-sm) 0",
        "variable": "var(--prose-li-margin)",
        "raw": "{typography.verticalMargin.sm} 0"
      },
      "listStylePosition": {
        "value": "outside",
        "variable": "var(--prose-li-listStylePosition)",
        "raw": "outside"
      }
    },
    "hr": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-hr-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "style": {
        "value": "solid",
        "variable": "var(--prose-hr-style)",
        "raw": "solid"
      },
      "width": {
        "value": "1px",
        "variable": "var(--prose-hr-width)",
        "raw": "1px"
      },
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-200)",
          "dark": "var(--typography-color-secondary-800)"
        },
        "variable": "var(--prose-hr-color)",
        "raw": {
          "initial": "{typography.color.secondary.200}",
          "dark": "{typography.color.secondary.800}"
        }
      }
    },
    "table": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-table-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "textAlign": {
        "value": "left",
        "variable": "var(--prose-table-textAlign)",
        "raw": "left"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-sm)",
        "variable": "var(--prose-table-fontSize)",
        "raw": "{typography.fontSize.sm}"
      },
      "lineHeight": {
        "value": "inherit",
        "variable": "var(--prose-table-lineHeight)",
        "raw": "inherit"
      }
    },
    "thead": {
      "border": {
        "width": {
          "value": "0px",
          "variable": "var(--prose-thead-border-width)",
          "raw": "0px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-thead-border-style)",
          "raw": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-300)",
            "dark": "var(--typography-color-secondary-600)"
          },
          "variable": "var(--prose-thead-border-color)",
          "raw": {
            "initial": "{typography.color.secondary.300}",
            "dark": "{typography.color.secondary.600}"
          }
        }
      },
      "borderBottom": {
        "width": {
          "value": "1px",
          "variable": "var(--prose-thead-borderBottom-width)",
          "raw": "1px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-thead-borderBottom-style)",
          "raw": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-300)",
            "dark": "var(--typography-color-secondary-600)"
          },
          "variable": "var(--prose-thead-borderBottom-color)",
          "raw": {
            "initial": "{typography.color.secondary.300}",
            "dark": "{typography.color.secondary.600}"
          }
        }
      }
    },
    "th": {
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-600)",
          "dark": "var(--typography-color-secondary-400)"
        },
        "variable": "var(--prose-th-color)",
        "raw": {
          "initial": "{typography.color.secondary.600}",
          "dark": "{typography.color.secondary.400}"
        }
      },
      "padding": {
        "value": "0 var(--typography-verticalMargin-sm) var(--typography-verticalMargin-sm) var(--typography-verticalMargin-sm)",
        "variable": "var(--prose-th-padding)",
        "raw": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-th-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      }
    },
    "tbody": {
      "tr": {
        "borderBottom": {
          "width": {
            "value": "1px",
            "variable": "var(--prose-tbody-tr-borderBottom-width)",
            "raw": "1px"
          },
          "style": {
            "value": "dashed",
            "variable": "var(--prose-tbody-tr-borderBottom-style)",
            "raw": "dashed"
          },
          "color": {
            "value": {
              "initial": "var(--typography-color-secondary-300)",
              "dark": "var(--typography-color-secondary-700)"
            },
            "variable": "var(--prose-tbody-tr-borderBottom-color)",
            "raw": {
              "initial": "{typography.color.secondary.300}",
              "dark": "{typography.color.secondary.700}"
            }
          }
        }
      },
      "td": {
        "padding": {
          "value": "var(--typography-verticalMargin-sm)",
          "variable": "var(--prose-tbody-td-padding)",
          "raw": "{typography.verticalMargin.sm}"
        }
      },
      "code": {
        "inline": {
          "fontSize": {
            "value": "var(--typography-fontSize-sm)",
            "variable": "var(--prose-tbody-code-inline-fontSize)",
            "raw": "{typography.fontSize.sm}"
          }
        }
      }
    },
    "code": {
      "block": {
        "fontSize": {
          "value": "var(--typography-fontSize-sm)",
          "variable": "var(--prose-code-block-fontSize)",
          "raw": "{typography.fontSize.sm}"
        },
        "margin": {
          "value": "var(--typography-verticalMargin-base) 0",
          "variable": "var(--prose-code-block-margin)",
          "raw": "{typography.verticalMargin.base} 0"
        },
        "border": {
          "width": {
            "value": "1px",
            "variable": "var(--prose-code-block-border-width)",
            "raw": "1px"
          },
          "style": {
            "value": "solid",
            "variable": "var(--prose-code-block-border-style)",
            "raw": "solid"
          },
          "color": {
            "value": {
              "initial": "var(--typography-color-secondary-200)",
              "dark": "var(--typography-color-secondary-800)"
            },
            "variable": "var(--prose-code-block-border-color)",
            "raw": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.800}"
            }
          }
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-700)",
            "dark": "var(--typography-color-secondary-200)"
          },
          "variable": "var(--prose-code-block-color)",
          "raw": {
            "initial": "{typography.color.secondary.700}",
            "dark": "{typography.color.secondary.200}"
          }
        },
        "backgroundColor": {
          "value": {
            "initial": "var(--typography-color-secondary-100)",
            "dark": "var(--typography-color-secondary-900)"
          },
          "variable": "var(--prose-code-block-backgroundColor)",
          "raw": {
            "initial": "{typography.color.secondary.100}",
            "dark": "{typography.color.secondary.900}"
          }
        },
        "pre": {
          "padding": {
            "value": "var(--typography-verticalMargin-sm)",
            "variable": "var(--prose-code-block-pre-padding)",
            "raw": "{typography.verticalMargin.sm}"
          }
        }
      },
      "inline": {
        "borderRadius": {
          "value": "0.375rem",
          "variable": "var(--prose-code-inline-borderRadius)",
          "raw": "0.375rem"
        },
        "padding": {
          "value": "0.25rem 0.375rem 0.25rem 0.375rem",
          "variable": "var(--prose-code-inline-padding)",
          "raw": "0.25rem 0.375rem 0.25rem 0.375rem"
        },
        "fontSize": {
          "value": "var(--typography-fontSize-sm)",
          "variable": "var(--prose-code-inline-fontSize)",
          "raw": "{typography.fontSize.sm}"
        },
        "fontWeight": {
          "value": "var(--typography-fontWeight-normal)",
          "variable": "var(--prose-code-inline-fontWeight)",
          "raw": "{typography.fontWeight.normal}"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-700)",
            "dark": "var(--typography-color-secondary-200)"
          },
          "variable": "var(--prose-code-inline-color)",
          "raw": {
            "initial": "{typography.color.secondary.700}",
            "dark": "{typography.color.secondary.200}"
          }
        },
        "backgroundColor": {
          "value": {
            "initial": "var(--typography-color-secondary-100)",
            "dark": "var(--typography-color-secondary-900)"
          },
          "variable": "var(--prose-code-inline-backgroundColor)",
          "raw": {
            "initial": "{typography.color.secondary.100}",
            "dark": "{typography.color.secondary.900}"
          }
        }
      }
    }
  },
  "alpine": {
    "backdrop": {
      "backgroundColor": {
        "value": {
          "initial": "#f4f4f5b3",
          "dark": "#18181bb3"
        },
        "variable": "var(--alpine-backdrop-backgroundColor)",
        "raw": {
          "initial": "#f4f4f5b3",
          "dark": "#18181bb3"
        }
      }
    },
    "readableLine": {
      "value": "68ch",
      "variable": "var(--alpine-readableLine)",
      "raw": "68ch"
    }
  }
};
const pinceau_nuxt_plugin_server_KEuz79zT4K = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(plugin, { colorSchemeMode: "class", theme, utils });
  nuxtApp.hook("app:rendered", async (app) => {
    app.ssrContext.event.pinceauContent = app.ssrContext.event.pinceauContent || {};
    const content = app.ssrContext.nuxt.vueApp.config.globalProperties.$pinceauSsr.get();
    app.ssrContext.event.pinceauContent.runtime = content;
  });
});
const preference = "system";
const componentName = "ColorScheme";
const plugin_server_XNCxeHyTuP = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const _plugins = [
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  router_jmwsqit4Rs,
  documentDriven_9cX98v59ZY,
  app_config_server_3EJd2il4WQ,
  preview_detector_wuXocrN5Sn,
  pinceau_nuxt_plugin_server_KEuz79zT4K,
  plugin_server_XNCxeHyTuP
];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: {
      type: String,
      required: false,
      default: "div"
    },
    ...{ "padded": { "required": false, "type": [Boolean, Object], "default": true }, "fluid": { "required": false, "type": [Boolean, Object], "default": false } }
  },
  setup(__props) {
    const __$pProps = __props;
    const __$pVariants = { "padded": { "true": { "px": "{elements.container.padding.mobile}", "@xs": { "px": "{elements.container.padding.xs}" }, "@sm": { "px": "{elements.container.padding.sm}" }, "@md": { "px": "{elements.container.padding.md}" } } }, "fluid": { "true": {}, "false": { "maxWidth": "{elements.container.maxWidth}" } } };
    const { $pinceau } = usePinceauRuntime(__$pProps, __$pVariants, void 0);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        class: ["container", [unref($pinceau)]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Container.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-a8d7e2a7"]]);
const Container = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$3
});
const _sfc_main$b = {
  __name: "AppLoadingBar",
  __ssrInlineRender: true,
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const props = __props;
    const nuxtApp = useNuxtApp();
    const data = reactive({
      percent: 0,
      show: false,
      canSucceed: true
    });
    let _timer = null;
    let _throttle = null;
    let _cut;
    function clear() {
      _timer && clearInterval(_timer);
      _throttle && clearTimeout(_throttle);
      _timer = null;
    }
    function start() {
      if (data.show) {
        return;
      }
      clear();
      data.percent = 0;
      data.canSucceed = true;
      if (props.throttle) {
        _throttle = setTimeout(startTimer, props.throttle);
      } else {
        startTimer();
      }
    }
    function increase(num) {
      data.percent = Math.min(100, Math.floor(data.percent + num));
    }
    function finish() {
      data.percent = 100;
      hide();
    }
    function hide() {
      clear();
      setTimeout(() => {
        data.show = false;
        setTimeout(() => {
          data.percent = 0;
        }, 400);
      }, 500);
    }
    function startTimer() {
      data.show = true;
      _cut = 1e4 / Math.floor(props.duration);
      _timer = setInterval(() => {
        increase(_cut);
      }, 100);
    }
    nuxtApp.hook("content:middleware:start", start);
    nuxtApp.hook("page:start", start);
    nuxtApp.hook("page:finish", finish);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nuxt-progress", {
          "nuxt-progress-failed": !unref(data).canSucceed
        }],
        style: {
          width: `${unref(data).percent}%`,
          left: unref(data).left,
          height: `${props.height}px`,
          opacity: unref(data).show ? 1 : 0,
          backgroundSize: `${100 / unref(data).percent * 100}% auto`
        }
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/AppLoadingBar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AppLoadingBar = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$b
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "MainNav",
  __ssrInlineRender: true,
  emits: ["linkClick"],
  setup(__props, { emit: emits }) {
    const { navigation } = useContent();
    function handleClick() {
      emits("linkClick");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-92df8ecc><ul data-v-92df8ecc><!--[-->`);
      ssrRenderList(unref(navigation), (link) => {
        _push(`<li data-v-92df8ecc>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link._path,
          onClick: handleClick
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="underline-fx" data-v-92df8ecc${_scopeId}></span> ${ssrInterpolate(link.title)}`);
            } else {
              return [
                createVNode("span", { class: "underline-fx" }),
                createTextVNode(" " + toDisplayString(link.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/MainNav.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-92df8ecc"]]);
const MainNav = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$2
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    src: {
      type: [String, Object],
      default: null
    }
  },
  setup(props) {
    const srcWithBase = (src) => {
      if (src && src.startsWith("/") && !src.startsWith("//")) {
        return withBase(src, useRuntimeConfig().app.baseURL);
      }
      return src;
    };
    const imgSrc = computed(() => {
      let src = props.src;
      try {
        src = JSON.parse(src);
      } catch (e) {
        src = props.src;
      }
      if (typeof src === "string") {
        return srcWithBase(props.src);
      }
      return {
        light: srcWithBase(src.light),
        dark: srcWithBase(src.dark)
      };
    });
    return {
      imgSrc
    };
  },
  render({ imgSrc }) {
    if (typeof imgSrc === "string") {
      return h("img", { src: imgSrc, ...this.$attrs });
    }
    const nodes = [];
    if (imgSrc.light) {
      nodes.push(h("img", { src: imgSrc.light, class: ["dark-img"], ...this.$attrs }));
    }
    if (imgSrc.dark) {
      nodes.push(h("img", { src: imgSrc.dark, class: ["light-img"], ...this.$attrs }));
    }
    return nodes;
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const NuxtImg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$9
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const alpine = useAppConfig().alpine;
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainNav = __nuxt_component_1$2;
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_NuxtImg = _sfc_main$9;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: unref(alpine).header.position || "left"
      }, _attrs))} data-v-bac1380c><div class="menu" data-v-bac1380c><button aria-label="Navigation Menu" data-v-bac1380c><svg width="24" height="24" viewBox="0 0 68 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-bac1380c><path d="M8 34C8 32.1362 8 31.2044 8.30448 30.4693C8.71046 29.4892 9.48915 28.7105 10.4693 28.3045C11.2044 28 12.1362 28 14 28C15.8638 28 16.7956 28 17.5307 28.3045C18.5108 28.7105 19.2895 29.4892 19.6955 30.4693C20 31.2044 20 32.1362 20 34C20 35.8638 20 36.7956 19.6955 37.5307C19.2895 38.5108 18.5108 39.2895 17.5307 39.6955C16.7956 40 15.8638 40 14 40C12.1362 40 11.2044 40 10.4693 39.6955C9.48915 39.2895 8.71046 38.5108 8.30448 37.5307C8 36.7956 8 35.8638 8 34Z" data-v-bac1380c></path><path d="M28 34C28 32.1362 28 31.2044 28.3045 30.4693C28.7105 29.4892 29.4892 28.7105 30.4693 28.3045C31.2044 28 32.1362 28 34 28C35.8638 28 36.7956 28 37.5307 28.3045C38.5108 28.7105 39.2895 29.4892 39.6955 30.4693C40 31.2044 40 32.1362 40 34C40 35.8638 40 36.7956 39.6955 37.5307C39.2895 38.5108 38.5108 39.2895 37.5307 39.6955C36.7956 40 35.8638 40 34 40C32.1362 40 31.2044 40 30.4693 39.6955C29.4892 39.2895 28.7105 38.5108 28.3045 37.5307C28 36.7956 28 35.8638 28 34Z" data-v-bac1380c></path><path d="M48 34C48 32.1362 48 31.2044 48.3045 30.4693C48.7105 29.4892 49.4892 28.7105 50.4693 28.3045C51.2044 28 52.1362 28 54 28C55.8638 28 56.7956 28 57.5307 28.3045C58.5108 28.7105 59.2895 29.4892 59.6955 30.4693C60 31.2044 60 32.1362 60 34C60 35.8638 60 36.7956 59.6955 37.5307C59.2895 38.5108 58.5108 39.2895 57.5307 39.6955C56.7956 40 55.8638 40 54 40C52.1362 40 51.2044 40 50.4693 39.6955C49.4892 39.2895 48.7105 38.5108 48.3045 37.5307C48 36.7956 48 35.8638 48 34Z" data-v-bac1380c></path></svg></button></div><div class="${ssrRenderClass([[unref(show) && "show"], "overlay"])}" data-v-bac1380c>`);
      _push(ssrRenderComponent(_component_MainNav, {
        onLinkClick: ($event) => show.value = !unref(show)
      }, null, _parent));
      _push(`</div><div class="logo" data-v-bac1380c>`);
      if (unref(alpine).header.logo) {
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                class: "dark-img",
                src: unref(alpine).header.logo.pathDark,
                alt: unref(alpine).header.logo.alt,
                width: "89",
                height: "31"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtImg, {
                class: "light-img",
                src: unref(alpine).header.logo.path,
                alt: unref(alpine).header.logo.alt,
                width: "89",
                height: "31"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  class: "dark-img",
                  src: unref(alpine).header.logo.pathDark,
                  alt: unref(alpine).header.logo.alt,
                  width: "89",
                  height: "31"
                }, null, 8, ["src", "alt"]),
                createVNode(_component_NuxtImg, {
                  class: "light-img",
                  src: unref(alpine).header.logo.path,
                  alt: unref(alpine).header.logo.alt,
                  width: "89",
                  height: "31"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "fallback"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(alpine).title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(alpine).title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div><div class="main-nav" data-v-bac1380c>`);
      _push(ssrRenderComponent(_component_MainNav, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/AppHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-bac1380c"]]);
const AppHeader = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2$1
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const props = __props;
    const nuxtApp = useNuxtApp();
    const appConfig2 = useAppConfig();
    ((_a = appConfig2 == null ? void 0 : appConfig2.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig2.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const icon = computed(() => {
      var _a2;
      return (_a2 = state.value) == null ? void 0 : _a2[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a2, _b, _c;
      if (!props.size && typeof ((_a2 = appConfig2.nuxtIcon) == null ? void 0 : _a2.size) === "boolean" && !((_b = appConfig2.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a2;
      return ((_a2 = appConfig2 == null ? void 0 : appConfig2.nuxtIcon) == null ? void 0 : _a2.class) ?? "icon";
    });
    async function loadIconComponent() {
      var _a2;
      if (component.value) {
        return;
      }
      if (!((_a2 = state.value) == null ? void 0 : _a2[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-e610b8e3></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: unref(icon),
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-e610b8e3>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e610b8e3"]]);
const Icon = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$1
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SocialIcons",
  __ssrInlineRender: true,
  props: {
    socials: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const builtInSocials = ["twitter", "facebook", "instagram", "youtube", "github", "medium"];
    const icons = computed(() => {
      return Object.entries(props.socials).map(([key, value]) => {
        if (typeof value === "object") {
          return value;
        } else if (typeof value === "string" && value && builtInSocials.includes(key)) {
          return {
            href: `https://${key}.com/${value}`,
            icon: `uil:${key}`,
            label: value
          };
        } else {
          return null;
        }
      }).filter(Boolean);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<!--[-->`);
      ssrRenderList(unref(icons), (icon) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: icon.label,
          rel: "noopener noreferrer",
          title: icon.label,
          "aria-label": icon.label,
          href: icon.href,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (icon.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: icon.icon
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                icon.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: icon.icon
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/SocialIcons.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7a4dc737"]]);
const SocialIcons = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2
});
const __nuxt_component_0$2 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$5 = {
  name: componentName,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "span"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ClientOnly, mergeProps({
    placeholder: $props.placeholder,
    "placeholder-tag": $props.tag
  }, _attrs), {}, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ColorModeSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ColorScheme = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<button${ssrRenderAttrs(mergeProps({ "aria-label": "Color Mode" }, _attrs))} data-v-4743d311>`);
      _push(ssrRenderComponent(_component_ColorScheme, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(colorMode).preference === "dark") {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only" data-v-4743d311${_scopeId}>Dark mode</span><!--]-->`);
            } else if (unref(colorMode).preference === "light") {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only" data-v-4743d311${_scopeId}>Light mode</span><!--]-->`);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:desktop" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only" data-v-4743d311${_scopeId}>System mode</span><!--]-->`);
            }
          } else {
            return [
              unref(colorMode).preference === "dark" ? (openBlock(), createBlock(Fragment$1, { key: 0 }, [
                createVNode(_component_Icon, { name: "uil:moon" }),
                createVNode("span", { class: "sr-only" }, "Dark mode")
              ], 64)) : unref(colorMode).preference === "light" ? (openBlock(), createBlock(Fragment$1, { key: 1 }, [
                createVNode(_component_Icon, { name: "uil:sun" }),
                createVNode("span", { class: "sr-only" }, "Light mode")
              ], 64)) : (openBlock(), createBlock(Fragment$1, { key: 2 }, [
                createVNode(_component_Icon, { name: "uil:desktop" }),
                createVNode("span", { class: "sr-only" }, "System mode")
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/ColorModeSwitch.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4743d311"]]);
const ColorModeSwitch = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3$1
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const alpine = useAppConfig().alpine;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_MainNav = __nuxt_component_1$2;
      const _component_SocialIcons = __nuxt_component_2;
      const _component_ColorModeSwitch = __nuxt_component_3$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: [
          unref(alpine).footer.alignment
        ]
      }, _attrs))} data-v-2e0b0b29>`);
      if ((_b = (_a = unref(alpine).footer) == null ? void 0 : _a.credits) == null ? void 0 : _b.enabled) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "credits",
          to: unref(alpine).footer.credits.repository
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d;
            if (_push2) {
              _push2(`${ssrInterpolate((_b2 = (_a2 = unref(alpine).footer) == null ? void 0 : _a2.credits) == null ? void 0 : _b2.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString((_d = (_c2 = unref(alpine).footer) == null ? void 0 : _c2.credits) == null ? void 0 : _d.text), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(alpine).footer.navigation) {
        _push(`<div class="navigation" data-v-2e0b0b29>`);
        _push(ssrRenderComponent(_component_MainNav, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = unref(alpine).footer) == null ? void 0 : _c.message) {
        _push(`<p class="message" data-v-2e0b0b29>${ssrInterpolate(unref(alpine).footer.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="icons" data-v-2e0b0b29>`);
      if (unref(alpine).socials && Object.entries(unref(alpine).socials)) {
        _push(`<div class="social" data-v-2e0b0b29>`);
        _push(ssrRenderComponent(_component_SocialIcons, {
          socials: unref(alpine).socials
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="color-mode-switch" data-v-2e0b0b29>`);
      _push(ssrRenderComponent(_component_ColorModeSwitch, null, null, _parent));
      _push(`</div></div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2e0b0b29"]]);
const AppFooter = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3
});
const useContentHead = (_content, to = useRoute()) => {
  const content = unref(_content);
  const config = /* @__PURE__ */ useRuntimeConfig();
  const refreshHead = (data = content) => {
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, (data == null ? void 0 : data.head) || {});
    head.meta = [...head.meta || []];
    head.link = [...head.link || []];
    const title = head.title || (data == null ? void 0 : data.title);
    if (title) {
      head.title = title;
      if (!head.meta.some((m) => m.property === "og:title")) {
        head.meta.push({
          name: "og:title",
          content: title
        });
      }
    }
    const host = config.public.content.host;
    if (host) {
      const _url = joinURL(host ?? "/", config.app.baseURL, to.fullPath);
      const url = config.public.content.trailingSlash ? withTrailingSlash(_url) : withoutTrailingSlash(_url);
      if (!head.meta.some((m) => m.property === "og:url")) {
        head.meta.push({
          name: "og:url",
          content: url
        });
      }
      if (!head.link.some((m) => m.rel === "canonical")) {
        head.link.push({
          rel: "canonical",
          href: url
        });
      }
    }
    const description = (head == null ? void 0 : head.description) || (data == null ? void 0 : data.description);
    if (description && head.meta.filter((m) => m.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    if (description && !head.meta.some((m) => m.property === "og:description")) {
      head.meta.push({
        name: "og:description",
        content: description
      });
    }
    const image = (head == null ? void 0 : head.image) || (data == null ? void 0 : data.image);
    if (image && head.meta.filter((m) => m.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          // @ts-ignore - We expect `head.image` from Nuxt configurations...
          content: host && !hasProtocol(image) ? new URL(joinURL(config.app.baseURL, image), host).href : image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            const isAbsoluteURL = hasProtocol(image.src);
            const imageURL = isAbsoluteURL ? image.src : joinURL(config.app.baseURL, image.src ?? "/");
            head.meta.push({
              property: "og:image",
              content: host && !isAbsoluteURL ? new URL(imageURL, host).href : imageURL
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:image:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    {
      useHead(head);
    }
  };
  watch(() => unref(_content), refreshHead, { immediate: true });
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    padded: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const alpine = useAppConfig().alpine;
    useHead({
      meta: [
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    useContentHead(alpine);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Container = __nuxt_component_0$3;
      const _component_AppLoadingBar = _sfc_main$b;
      const _component_AppHeader = __nuxt_component_2$1;
      const _component_AppFooter = __nuxt_component_3;
      _push(ssrRenderComponent(_component_Container, mergeProps({ class: "app-layout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLoadingBar, null, null, _parent2, _scopeId));
            if (unref(alpine).header) {
              _push2(ssrRenderComponent(_component_AppHeader, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(alpine).footer) {
              _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_AppLoadingBar),
              unref(alpine).header ? (openBlock(), createBlock(_component_AppHeader, { key: 0 })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              unref(alpine).footer ? (openBlock(), createBlock(_component_AppFooter, { key: 1 })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/AppLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-19c29c62"]]);
const AppLayout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = /* @__PURE__ */ defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-component-e32e0a00.mjs').then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-9e1e0f22.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { ensureArray as A, sortList as B, apply as C, withoutKeys as D, withKeys as E, createQuery as F, useHead as G, _export_sfc as _, __nuxt_component_0$4 as a, _sfc_main$9 as b, createError as c, useAppConfig as d, entry$1 as default, useRuntimeConfig as e, usePinceauRuntime as f, useUnwrap as g, __nuxt_component_1$1 as h, computedStyle as i, useColorMode as j, usePinceauTheme as k, useRoute as l, useContentHead as m, useState as n, useContent as o, fetchContentNavigation as p, queryContent as q, useCookie as r, callWithNuxt as s, layouts as t, useNuxtApp as u, appLayoutTransition as v, _wrapIf as w, useRequestEvent as x, get$1 as y, assertArray as z };
//# sourceMappingURL=server.mjs.map
