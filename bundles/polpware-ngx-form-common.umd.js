(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-form-common', ['exports'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-form-common'] = {})));
}(this, (function (exports) { 'use strict';

    (function (AlertTypeEnum) {
        AlertTypeEnum[AlertTypeEnum["none"] = 0] = "none";
        AlertTypeEnum[AlertTypeEnum["info"] = 1] = "info";
        AlertTypeEnum[AlertTypeEnum["warning"] = 2] = "warning";
        AlertTypeEnum[AlertTypeEnum["running"] = 3] = "running";
        AlertTypeEnum[AlertTypeEnum["success"] = 4] = "success";
        AlertTypeEnum[AlertTypeEnum["error"] = 5] = "error";
    })(exports.AlertTypeEnum || (exports.AlertTypeEnum = {}));

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-form-common.umd.js.map
