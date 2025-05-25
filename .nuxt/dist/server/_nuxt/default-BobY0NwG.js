import { _ as __nuxt_component_0$1 } from "./nuxt-link-BlW2A0Rq.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/hookable/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/unctx/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/radix3/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/defu/dist/defu.mjs";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<strong${_scopeId}>NBA Graphing</strong>`);
      } else {
        return [
          createVNode("strong", null, "NBA Graphing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><ul><li>Reset</li></ul></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/nav-bar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNavBar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppNavBar, null, null, _parent));
  _push(`<main class="container">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-BobY0NwG.js.map
