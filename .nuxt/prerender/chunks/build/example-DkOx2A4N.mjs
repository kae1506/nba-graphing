import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/h3/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/ufo/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/destr/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/hookable/dist/index.mjs';
import 'file:///Users/keshava/Documents/Code/JavaScript%20Projects/nba_web/nba_graphing/node_modules/ofetch/dist/node.mjs';
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

const _imports_0 = "" + buildAssetsURL("statVsStat.DXtB3-Pq.png");
const _imports_1 = "" + buildAssetsURL("lineGraph.ly_ZLtmQ.png");
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

export { example as default };
//# sourceMappingURL=example-DkOx2A4N.mjs.map
