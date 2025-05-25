import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/hookable/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/unctx/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/radix3/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/defu/dist/defu.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/ufo/dist/index.mjs";
const _imports_0 = "" + __buildAssetsURL("statVsStat.DXtB3-Pq.png");
const _imports_1 = "" + __buildAssetsURL("lineGraph.ly_ZLtmQ.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1a805ec2><h1 data-v-1a805ec2>NBA Player Comparison</h1><div class="container" data-v-1a805ec2><div class="img-container" data-v-1a805ec2><p data-v-1a805ec2>Stat vs Stat Graphs Example: Points per game vs Assists per game for the year 2025</p><img${ssrRenderAttr("src", _imports_0)} alt="Stat vs Stat Graph" data-v-1a805ec2></div><div class="img-container" data-v-1a805ec2><p data-v-1a805ec2>Line Graph Example: Points per game over the nth seasons of their career</p><img${ssrRenderAttr("src", _imports_1)} alt="line Graph example" data-v-1a805ec2></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/example.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const example = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1a805ec2"]]);
export {
  example as default
};
//# sourceMappingURL=example-DkOx2A4N.js.map
