(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-form-common', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-form-common'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

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

    /**
     * Provides a base for defining a reusable form.
     */
    var DefaultFormBaseComponent = /** @class */ (function () {
        function DefaultFormBaseComponent() {
            this.hideCancelBtn = false;
            this.hideSubmitBtn = false;
            this.submitBtnTxt = 'Submit';
            this.cancelBtnTxt = 'Cancel';
            this.onSave = new core.EventEmitter();
            this.onCancel = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.onValidation = new core.EventEmitter();
        }
        DefaultFormBaseComponent.prototype.notifyValidation = function () {
            this.onValidation.emit({
                valid: this.form.valid
            });
        };
        DefaultFormBaseComponent.prototype.notifyValueChanges = function (a) {
            this.onValueChanged.emit(a);
        };
        DefaultFormBaseComponent.ɵfac = function DefaultFormBaseComponent_Factory(t) { return new (t || DefaultFormBaseComponent)(); };
        DefaultFormBaseComponent.ɵdir = core.ɵɵdefineDirective({ type: DefaultFormBaseComponent, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt" }, outputs: { onSave: "onSave", onCancel: "onCancel", onValueChanged: "onValueChanged", onValidation: "onValidation" } });
        return DefaultFormBaseComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DefaultFormBaseComponent, [{
            type: core.Directive
        }], null, { hideCancelBtn: [{
                type: core.Input
            }], hideSubmitBtn: [{
                type: core.Input
            }], submitBtnTxt: [{
                type: core.Input
            }], cancelBtnTxt: [{
                type: core.Input
            }], onSave: [{
                type: core.Output
            }], onCancel: [{
                type: core.Output
            }], onValueChanged: [{
                type: core.Output
            }], onValidation: [{
                type: core.Output
            }] }); })();

    exports.DefaultFormBaseComponent = DefaultFormBaseComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-form-common.umd.js.map
