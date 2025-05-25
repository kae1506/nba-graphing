import { _ as __nuxt_component_0$1 } from './nuxt-link-BlW2A0Rq.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/ufo/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/h3/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/destr/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/hookable/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/ohash/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/klona/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/defu/dist/defu.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/scule/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/unctx/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/pathe/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/vue-router/dist/vue-router.node.mjs';

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

export { _default as default };
//# sourceMappingURL=default-BobY0NwG.mjs.map
