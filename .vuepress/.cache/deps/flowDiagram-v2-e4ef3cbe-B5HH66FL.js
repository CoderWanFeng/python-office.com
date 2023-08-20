import {
  flowRendererV2,
  flowStyles
} from "./chunk-JZ2NOJ56.js";
import "./chunk-IZR423AF.js";
import {
  flowDb,
  parser$1
} from "./chunk-5OMBD4A4.js";
import "./chunk-4JMSTK7S.js";
import "./chunk-SHHR4OQP.js";
import "./chunk-SSXL5IQU.js";
import "./chunk-5MAU6IJA.js";
import "./chunk-FDSAO26X.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-4QTAVOE5.js";
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
//# sourceMappingURL=flowDiagram-v2-e4ef3cbe-B5HH66FL.js.map
