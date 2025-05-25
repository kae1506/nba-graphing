import { _ as __nuxt_component_0 } from "./nuxt-link-BlW2A0Rq.js";
import { shallowRef, ref, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/hookable/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/unctx/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/radix3/dist/index.mjs";
import "/Users/keshava/Documents/Code/JavaScript Projects/nba_web/nba_graphing/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let chartComponent = shallowRef(null);
    const playerIndex = [
      "Stephen Curry",
      "LeBron James",
      "Kevin Durant",
      "Kawhi Leonard",
      "Giannis Antetokounmpo",
      "James Harden",
      "Luka Dončić",
      "Nikola Jokić",
      "Joel Embiid",
      "Anthony Davis",
      "Damian Lillard",
      "Chris Paul",
      "Jayson Tatum",
      "Zion Williamson",
      "Jimmy Butler",
      "Paul George",
      "Kyrie Irving",
      "Russell Westbrook",
      "Anthony Edwards",
      "Trae Young",
      "Devin Booker"
    ];
    let players = ref([]);
    let newPlayer = ref("");
    const chartOptions = ref({
      chart: {
        id: "vuechart-example"
      },
      xaxis: {
        show: true,
        showAlways: true,
        axisBorder: {
          show: true,
          color: "#78909C"
        },
        title: {
          text: "PPG",
          style: {
            color: "white",
            fontSize: "18px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-title"
          }
        },
        tickPlacement: "between",
        tickAmount: 10,
        labels: {
          formatter: function(val) {
            return parseFloat(val).toFixed(2);
          }
        }
      },
      yaxis: {
        show: true,
        showAlways: true,
        axisBorder: {
          show: true,
          color: "#78909C"
        },
        title: {
          text: "APG",
          style: {
            color: "white",
            fontSize: "18px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-title"
          }
        }
      },
      theme: {
        palette: "palette5",
        // default palette
        monochrome: {
          enabled: false,
          // color: '#255aee',
          shadeTo: "light",
          shadeIntensity: 0.65
        }
      },
      grid: {
        show: false,
        padding: {
          left: 20,
          right: 100
        }
      },
      chart: {
        foreColor: "white"
      }
    });
    let dataObtained = ref(false);
    let submitClicked = ref(false);
    let typeOfGraph = ref("");
    let series = ref([]);
    let xStatName = ref(null);
    let yStatName = ref(null);
    let season = ref(null);
    let lineStatName = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Make any NBA graph, fully customisable and fast.</h1><p>COMING SOON: yearly line graphs, advanced metrics, redesign</p><div class="example-container">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/example" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See an example`);
          } else {
            return [
              createTextVNode("See an example")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(dataObtained) && unref(submitClicked)) {
        _push(`<div class="graph-container">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(chartComponent)), {
          options: unref(chartOptions),
          series: unref(series),
          class: "chart"
        }, null), _parent);
        _push(`</div>`);
      } else if (!unref(submitClicked)) {
        _push(`<div><div><div class="form-container"><label>Choose a graph type:</label><select><option value="statVsStat"${ssrIncludeBooleanAttr(Array.isArray(unref(typeOfGraph)) ? ssrLooseContain(unref(typeOfGraph), "statVsStat") : ssrLooseEqual(unref(typeOfGraph), "statVsStat")) ? " selected" : ""}>Stat vs Stat</option><option value="lineGraphSeason"${ssrIncludeBooleanAttr(Array.isArray(unref(typeOfGraph)) ? ssrLooseContain(unref(typeOfGraph), "lineGraphSeason") : ssrLooseEqual(unref(typeOfGraph), "lineGraphSeason")) ? " selected" : ""}>Line Graph Season</option></select></div></div>`);
        if (unref(typeOfGraph) == "statVsStat") {
          _push(`<div class="form-container"><div class="label-container"><div class="labels"><label>Choose a stat for X Axis:</label></div><div class="labels"><label>Choose a stat for Y Axis:</label></div></div><div class="options-container"><div class="x-options"><select><option value="PPG"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "PPG") : ssrLooseEqual(unref(xStatName), "PPG")) ? " selected" : ""}>PPG</option><option value="APG"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "APG") : ssrLooseEqual(unref(xStatName), "APG")) ? " selected" : ""}>APG</option><option value="RPG"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "RPG") : ssrLooseEqual(unref(xStatName), "RPG")) ? " selected" : ""}>RPG</option><option value="SPG"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "SPG") : ssrLooseEqual(unref(xStatName), "SPG")) ? " selected" : ""}>SPG</option><option value="BPG"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "BPG") : ssrLooseEqual(unref(xStatName), "BPG")) ? " selected" : ""}>BPG</option><option value="TPG"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "TPG") : ssrLooseEqual(unref(xStatName), "TPG")) ? " selected" : ""}>TPG</option><option value="FGp"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "FGp") : ssrLooseEqual(unref(xStatName), "FGp")) ? " selected" : ""}>FG%</option><option value="ThPp"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "ThPp") : ssrLooseEqual(unref(xStatName), "ThPp")) ? " selected" : ""}>3P%</option><option value="FTp"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "FTp") : ssrLooseEqual(unref(xStatName), "FTp")) ? " selected" : ""}>FT%</option><option value="eFGp"${ssrIncludeBooleanAttr(Array.isArray(unref(xStatName)) ? ssrLooseContain(unref(xStatName), "eFGp") : ssrLooseEqual(unref(xStatName), "eFGp")) ? " selected" : ""}>eFG%</option></select></div><div class="y-options"><select><option value="PPG"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "PPG") : ssrLooseEqual(unref(yStatName), "PPG")) ? " selected" : ""}>PPG</option><option value="APG"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "APG") : ssrLooseEqual(unref(yStatName), "APG")) ? " selected" : ""}>APG</option><option value="RPG"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "RPG") : ssrLooseEqual(unref(yStatName), "RPG")) ? " selected" : ""}>RPG</option><option value="SPG"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "SPG") : ssrLooseEqual(unref(yStatName), "SPG")) ? " selected" : ""}>SPG</option><option value="BPG"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "BPG") : ssrLooseEqual(unref(yStatName), "BPG")) ? " selected" : ""}>BPG</option><option value="TPG"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "TPG") : ssrLooseEqual(unref(yStatName), "TPG")) ? " selected" : ""}>TPG</option><option value="FGp"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "FGp") : ssrLooseEqual(unref(yStatName), "FGp")) ? " selected" : ""}>FG%</option><option value="ThPp"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "ThPp") : ssrLooseEqual(unref(yStatName), "ThPp")) ? " selected" : ""}>3P%</option><option value="FTp"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "FTp") : ssrLooseEqual(unref(yStatName), "FTp")) ? " selected" : ""}>FT%</option><option value="eFGp"${ssrIncludeBooleanAttr(Array.isArray(unref(yStatName)) ? ssrLooseContain(unref(yStatName), "eFGp") : ssrLooseEqual(unref(yStatName), "eFGp")) ? " selected" : ""}>eFG%</option></select></div></div><div class="season-container"><label>Choose Season:</label><div class="season-options"><select><option value="2025"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2025") : ssrLooseEqual(unref(season), "2025")) ? " selected" : ""}>2025</option><option value="2024"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2024") : ssrLooseEqual(unref(season), "2024")) ? " selected" : ""}>2024</option><option value="2023"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2023") : ssrLooseEqual(unref(season), "2023")) ? " selected" : ""}>2023</option><option value="2022"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2022") : ssrLooseEqual(unref(season), "2022")) ? " selected" : ""}>2022</option><option value="2021"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2021") : ssrLooseEqual(unref(season), "2021")) ? " selected" : ""}>2021</option><option value="2020"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2020") : ssrLooseEqual(unref(season), "2020")) ? " selected" : ""}>2020</option><option value="2019"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2019") : ssrLooseEqual(unref(season), "2019")) ? " selected" : ""}>2019</option><option value="2018"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2018") : ssrLooseEqual(unref(season), "2018")) ? " selected" : ""}>2018</option><option value="2017"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2017") : ssrLooseEqual(unref(season), "2017")) ? " selected" : ""}>2017</option><option value="2016"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2016") : ssrLooseEqual(unref(season), "2016")) ? " selected" : ""}>2016</option><option value="2015"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2015") : ssrLooseEqual(unref(season), "2015")) ? " selected" : ""}>2015</option><option value="2014"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2014") : ssrLooseEqual(unref(season), "2014")) ? " selected" : ""}>2014</option><option value="2013"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2013") : ssrLooseEqual(unref(season), "2013")) ? " selected" : ""}>2013</option><option value="2012"${ssrIncludeBooleanAttr(Array.isArray(unref(season)) ? ssrLooseContain(unref(season), "2012") : ssrLooseEqual(unref(season), "2012")) ? " selected" : ""}>2012</option></select></div></div></div>`);
        } else if (unref(typeOfGraph) == "lineGraphSeason") {
          _push(`<div><div><p>Note: This graph can currently only support 5 players at a time.</p><label>Choose a stat: </label><select><option value="PPG"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "PPG") : ssrLooseEqual(unref(lineStatName), "PPG")) ? " selected" : ""}>PPG</option><option value="APG"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "APG") : ssrLooseEqual(unref(lineStatName), "APG")) ? " selected" : ""}>APG</option><option value="RPG"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "RPG") : ssrLooseEqual(unref(lineStatName), "RPG")) ? " selected" : ""}>RPG</option><option value="SPG"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "SPG") : ssrLooseEqual(unref(lineStatName), "SPG")) ? " selected" : ""}>SPG</option><option value="BPG"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "BPG") : ssrLooseEqual(unref(lineStatName), "BPG")) ? " selected" : ""}>BPG</option><option value="TPG"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "TPG") : ssrLooseEqual(unref(lineStatName), "TPG")) ? " selected" : ""}>TPG</option><option value="FGp"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "FGp") : ssrLooseEqual(unref(lineStatName), "FGp")) ? " selected" : ""}>FG%</option><option value="ThPp"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "ThPp") : ssrLooseEqual(unref(lineStatName), "ThPp")) ? " selected" : ""}>3P%</option><option value="FTp"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "FTp") : ssrLooseEqual(unref(lineStatName), "FTp")) ? " selected" : ""}>FT%</option><option value="eFGp"${ssrIncludeBooleanAttr(Array.isArray(unref(lineStatName)) ? ssrLooseContain(unref(lineStatName), "eFGp") : ssrLooseEqual(unref(lineStatName), "eFGp")) ? " selected" : ""}>eFG%</option></select></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="player-container"><label>Add Players:</label><div class="player-input-container"><input type="text"${ssrRenderAttr("value", unref(newPlayer))} placeholder="Enter player name"><button class="player-button">Add Player</button></div><label>Or Control/Command-Click to choose from these: </label><div class="player-list-options"><select multiple><!--[-->`);
        ssrRenderList(playerIndex, (player, index) => {
          _push(`<option class="list-item"${ssrRenderAttr("value", player)}${ssrIncludeBooleanAttr(Array.isArray(unref(players)) ? ssrLooseContain(unref(players), player) : ssrLooseEqual(unref(players), player)) ? " selected" : ""}>${ssrInterpolate(player)}</option>`);
        });
        _push(`<!--]--></select></div><div class="player-list"><ul><!--[-->`);
        ssrRenderList(unref(players), (player, index) => {
          _push(`<li>${ssrInterpolate(player)}</li>`);
        });
        _push(`<!--]--></ul></div></div><div class="submit-container"><button>Submit</button></div></div>`);
      } else {
        _push(`<div><div class="loading-container"><p>Waiting for Data....</p></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-YALk4UDb.js.map
