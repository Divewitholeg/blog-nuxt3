import { u as useNuxtApp, e as useRuntimeConfig, n as useState, r as useCookie, s as callWithNuxt, d as useAppConfig, _ as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, onUnmounted, createApp } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/index.mjs';
import { r as refreshNuxtData } from './asyncData-fec32712.mjs';
import defu from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/defu/dist/defu.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'file:///home/holydiver/Documents/FIE/nuxt/blog/node_modules/vue/server-renderer/index.mjs';
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
  __name: "ContentPreviewMode",
  __ssrInlineRender: true,
  props: {
    previewToken: {
      type: Object,
      required: true
    },
    apiURL: {
      type: String,
      required: true
    },
    syncPreview: {
      type: Function,
      required: true
    },
    requestPreviewSyncAPI: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const previewClasses = ["__nuxt_preview", "__preview_enabled"];
    useNuxtApp();
    const open = ref(true);
    const refreshing = ref(false);
    const previewReady = ref(false);
    const error = ref("");
    onUnmounted(() => {
      document.body.classList.remove(...previewClasses);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1cc9470d>`);
      if (open.value) {
        _push(`<div id="__nuxt_preview" class="${ssrRenderClass({ __preview_ready: previewReady.value, __preview_refreshing: refreshing.value })}" data-v-1cc9470d>`);
        if (previewReady.value) {
          _push(`<!--[--><svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1cc9470d><path d="M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z" fill="currentColor" data-v-1cc9470d></path></svg><span data-v-1cc9470d>Preview mode enabled</span><button data-v-1cc9470d> Close </button><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (open.value && !previewReady.value && !error.value) {
        _push(`<div data-v-1cc9470d><div id="__preview_background" data-v-1cc9470d></div><div id="__preview_loader" data-v-1cc9470d><svg id="__preview_loading_icon" width="32" height="32" viewBox="0 0 24 24" data-v-1cc9470d><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" data-v-1cc9470d></path></svg><p data-v-1cc9470d>Initializing the preview...</p><button data-v-1cc9470d> Cancel </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div data-v-1cc9470d><div id="__preview_background" data-v-1cc9470d></div><div id="__preview_loader" data-v-1cc9470d><p data-v-1cc9470d>${ssrInterpolate(error.value)}</p><button data-v-1cc9470d> Exit preview </button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentPreviewMode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1cc9470d"]]);
const mergeDraft = (dbFiles = [], draftAdditions, draftDeletions) => {
  const additions = [...draftAdditions || []];
  const deletions = [...draftDeletions || []];
  const mergedFiles = JSON.parse(JSON.stringify(dbFiles));
  for (const addition of additions) {
    if (addition.oldPath) {
      deletions.splice(deletions.findIndex((d) => d.path === addition.oldPath), 1);
      const oldPathExistInCache = additions.find((a) => a.path === addition.oldPath);
      if (oldPathExistInCache) {
        mergedFiles.push({ path: addition.path, parsed: addition.parsed });
      } else {
        const file = mergedFiles.find((f) => f.path === addition.oldPath);
        if (file) {
          file.path = addition.path;
          if (addition.parsed) {
            file.parsed = addition.parsed;
          } else if (addition.pathMeta) {
            ["_file", "_path", "_id", "_locale"].forEach((key) => {
              file.parsed[key] = addition.pathMeta[key];
            });
          }
        }
      }
    } else if (addition.new) {
      mergedFiles.push({ path: addition.path, parsed: addition.parsed });
    } else {
      const file = mergedFiles.find((f) => f.path === addition.path);
      if (file) {
        Object.assign(file, { path: addition.path, parsed: addition.parsed });
      }
    }
  }
  for (const deletion of deletions) {
    mergedFiles.splice(mergedFiles.findIndex((f) => f.path === deletion.path), 1);
  }
  const comperable = new Intl.Collator(void 0, { numeric: true });
  mergedFiles.sort((a, b) => comperable.compare(a.path, b.path));
  return mergedFiles;
};
const StudioConfigRoot = ".studio";
const StudioConfigFiles = {
  appConfig: `${StudioConfigRoot}/app.config.json`,
  tokensConfig: `${StudioConfigRoot}/tokens.config.json`
};
const createSingleton = (fn) => {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn();
    }
    return instance;
  };
};
function deepDelete(obj, newObj) {
  for (const key in obj) {
    const val = newObj[key];
    if (!(key in newObj)) {
      delete obj[key];
    }
    if (val !== null && typeof val === "object") {
      deepDelete(obj[key], newObj[key]);
    }
  }
}
function deepAssign(obj, newObj) {
  for (const key in newObj) {
    const val = newObj[key];
    if (val !== null && typeof val === "object") {
      obj[key] = obj[key] || {};
      deepAssign(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
}
const useDefaultAppConfig = createSingleton(() => JSON.parse(JSON.stringify(useAppConfig())));
const useStudio = () => {
  const nuxtApp = useNuxtApp();
  const runtimeConfig = useRuntimeConfig().public.studio || {};
  const initialAppConfig = useDefaultAppConfig();
  let initialTokensConfig;
  const storage = useState("studio-client-db", () => null);
  const dbFiles = useState("studio-preview-db-files", () => []);
  nuxtApp.hook("content:storage", (_storage) => {
    storage.value = _storage;
  });
  const syncPreviewFiles = async (contentStorage, files, ignoreBuiltContents = true) => {
    const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
    const keys = await contentStorage.getKeys(`${previewToken.value}:`);
    await Promise.all(keys.map((key) => contentStorage.removeItem(key)));
    const sources = new Set(files.map((file) => file.parsed._id.split(":").shift()));
    await contentStorage.setItem(`${previewToken.value}$`, JSON.stringify({ ignoreSources: Array.from(sources) }));
    await Promise.all(
      files.map((item) => contentStorage.setItem(`${previewToken.value}:${item.parsed._id}`, JSON.stringify(item.parsed)))
    );
  };
  const syncPreviewAppConfig = (appConfig) => {
    const _appConfig = callWithNuxt(nuxtApp, useAppConfig);
    deepAssign(_appConfig, defu(appConfig, initialAppConfig));
    if (!appConfig) {
      deepDelete(_appConfig, initialAppConfig);
    }
  };
  const syncPreviewTokensConfig = (tokensConfig) => {
    var _a, _b, _c, _d;
    const themeSheet = (_d = (_c = (_b = (_a = nuxtApp == null ? void 0 : nuxtApp.vueApp) == null ? void 0 : _a._context) == null ? void 0 : _b.config) == null ? void 0 : _c.globalProperties) == null ? void 0 : _d.$pinceauTheme;
    if (!themeSheet || !(themeSheet == null ? void 0 : themeSheet.updateTheme)) {
      return;
    }
    if (!initialTokensConfig) {
      initialTokensConfig = JSON.parse(JSON.stringify((themeSheet == null ? void 0 : themeSheet.theme.value) || {}));
    }
    callWithNuxt(
      nuxtApp,
      themeSheet.updateTheme,
      [
        defu(tokensConfig, initialTokensConfig)
      ]
    );
  };
  const syncPreview = async (data) => {
    dbFiles.value = data.files = data.files || dbFiles.value || [];
    if (!storage.value) {
      return false;
    }
    const mergedFiles = mergeDraft(data.files, data.additions, data.deletions);
    const contentFiles = mergedFiles.filter((item) => !item.path.startsWith(StudioConfigRoot));
    await syncPreviewFiles(storage.value, contentFiles, (data.files || []).length !== 0);
    const appConfig = mergedFiles.find((item) => item.path === StudioConfigFiles.appConfig);
    syncPreviewAppConfig(appConfig == null ? void 0 : appConfig.parsed);
    const tokensConfig = mergedFiles.find((item) => item.path === StudioConfigFiles.tokensConfig);
    syncPreviewTokensConfig(tokensConfig == null ? void 0 : tokensConfig.parsed);
    requestRerender();
    return true;
  };
  const requestPreviewSynchronization = async () => {
    const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
    await $fetch("api/projects/preview/sync", {
      baseURL: runtimeConfig.apiURL,
      method: "POST",
      params: {
        token: previewToken.value
      }
    });
  };
  const mountPreviewUI = () => {
    const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
    const el = document.createElement("div");
    el.id = "__nuxt_preview_wrapper";
    document.body.appendChild(el);
    createApp(ContentPreviewMode, {
      previewToken,
      apiURL: runtimeConfig.apiURL,
      syncPreview,
      requestPreviewSyncAPI: requestPreviewSynchronization
    }).mount(el);
  };
  const findContentWithId = async (path) => {
    var _a, _b, _c;
    const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
    if (!path) {
      return null;
    }
    path = path.replace(/\/$/, "");
    let content = await ((_a = storage.value) == null ? void 0 : _a.getItem(`${previewToken.value}:${path}`));
    if (!content) {
      content = await ((_b = storage.value) == null ? void 0 : _b.getItem(`cached:${path}`));
    }
    if (!content) {
      content = content = await ((_c = storage.value) == null ? void 0 : _c.getItem(path));
    }
    return content;
  };
  const updateContent = (content) => {
    var _a;
    const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
    if (!storage.value) {
      return;
    }
    storage.value.setItem(`${previewToken.value}:${(_a = content.parsed) == null ? void 0 : _a._id}`, JSON.stringify(content.parsed));
  };
  const removeContentWithId = async (path) => {
    var _a;
    const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
    await ((_a = storage.value) == null ? void 0 : _a.removeItem(`${previewToken.value}:${path}`));
  };
  const requestRerender = () => {
    callWithNuxt(nuxtApp, refreshNuxtData);
  };
  return {
    apiURL: runtimeConfig.apiURL,
    contentStorage: storage,
    syncPreviewFiles,
    syncPreviewAppConfig,
    syncPreviewTokensConfig,
    requestPreviewSynchronization,
    mountPreviewUI,
    findContentWithId,
    updateContent,
    removeContentWithId,
    requestRerender
  };
};

export { useStudio };
//# sourceMappingURL=useStudio-52c67077.mjs.map
