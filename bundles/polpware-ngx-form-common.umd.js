(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-form-common', ['exports'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-form-common'] = {})));
}(this, (function (exports) { 'use strict';

    /**
     * Models different kinds of messages.
     *
     * Note that we on purpose use lowercase letters to
     * be consistent with the bootstrap alert types (Particularly
     * from ngx-bootstrap library). By doing so, we may directly
     * transform this alert type into the bootstrap one.
     */

    (function (AlertTypeEnum) {
        AlertTypeEnum[AlertTypeEnum["none"] = 0] = "none";
        AlertTypeEnum[AlertTypeEnum["info"] = 1] = "info";
        AlertTypeEnum[AlertTypeEnum["warning"] = 2] = "warning";
        AlertTypeEnum[AlertTypeEnum["success"] = 3] = "success";
        AlertTypeEnum[AlertTypeEnum["danger"] = 4] = "danger";
        AlertTypeEnum[AlertTypeEnum["other"] = 5] = "other";
    })(exports.AlertTypeEnum || (exports.AlertTypeEnum = {}));

    /**
     * Models the submission state of a request.
     */

    (function (SubmissionStateEnum) {
        SubmissionStateEnum[SubmissionStateEnum["None"] = 0] = "None";
        SubmissionStateEnum[SubmissionStateEnum["Processing"] = 1] = "Processing";
        SubmissionStateEnum[SubmissionStateEnum["Success"] = 2] = "Success";
        SubmissionStateEnum[SubmissionStateEnum["Failure"] = 3] = "Failure";
        SubmissionStateEnum[SubmissionStateEnum["Other"] = 4] = "Other";
    })(exports.SubmissionStateEnum || (exports.SubmissionStateEnum = {}));

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-form-common.umd.js.map
