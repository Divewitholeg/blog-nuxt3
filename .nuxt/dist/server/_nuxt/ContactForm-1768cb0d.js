import __nuxt_component_0 from "./Input-295d755c.js";
import __nuxt_component_1 from "./Button-bd4ad977.js";
import { d as useAppConfig, e as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "destr";
import "devalue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "ohash";
import "cookie-es";
import "nanoid";
import "scule";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: {
    submitButtonText: {
      type: String,
      default: "Send message"
    },
    fields: {
      type: Array,
      default: () => [
        {
          type: "text",
          model: "name",
          name: "Name",
          placeholder: "Your name",
          required: true,
          layout: "default"
        },
        {
          type: "email",
          model: "email",
          name: "Email",
          placeholder: "Your email",
          required: true,
          layout: "default"
        },
        {
          type: "text",
          model: "text",
          name: "Subject",
          required: false,
          layout: "default"
        },
        {
          type: "textarea",
          model: "message",
          name: "Message",
          placeholder: "Your message",
          required: true,
          layout: "big"
        }
      ]
    }
  },
  setup(__props) {
    const props = __props;
    useAppConfig().alpine;
    const { FORMSPREE_URL } = useRuntimeConfig().public;
    if (!FORMSPREE_URL) {
      console.warn("No FORMSPREE_URL provided");
    }
    const status = ref();
    const form = reactive(props.fields.map((v) => ({ ...v, data: "" })));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = __nuxt_component_0;
      const _component_Button = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "contact-form",
        method: "POST",
        action: unref(FORMSPREE_URL)
      }, _attrs))} data-v-7f28306c><div class="inputs" data-v-7f28306c><!--[-->`);
      ssrRenderList(unref(form), (field, index) => {
        _push(ssrRenderComponent(_component_Input, {
          key: index,
          modelValue: field.data,
          "onUpdate:modelValue": ($event) => field.data = $event,
          field
        }, null, _parent));
      });
      _push(`<!--]--></div><div data-v-7f28306c>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        disabled: !unref(FORMSPREE_URL)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(status) ? unref(status) : __props.submitButtonText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(status) ? unref(status) : __props.submitButtonText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const ContactForm_vue_vue_type_style_index_0_scoped_7f28306c_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/content/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f28306c"]]);
export {
  ContactForm as default
};
//# sourceMappingURL=ContactForm-1768cb0d.js.map
