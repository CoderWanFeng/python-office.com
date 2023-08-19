import {
  flowRendererV2,
  flowStyles
} from "./chunk-BDYK4NR5.js";
import "./chunk-IFLAE5A4.js";
import {
  flowDb,
  parser$1
} from "./chunk-KG3RURTT.js";
import "./chunk-NA67CTZW.js";
import "./chunk-6YUMIBN3.js";
import "./chunk-OWRK7G5Y.js";
import "./chunk-YEREVEHW.js";
import "./chunk-O3FZQPKF.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-PZ7WHCJZ.js";
import {
  __toESM
} from "./chunk-HM4MQYWN.js";

// node_modules/mermaid/dist/flowDiagram-v2-e4ef3cbe.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-e4ef3cbe-YSBPUYHX.js.map
