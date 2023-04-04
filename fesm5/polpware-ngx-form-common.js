import { EventEmitter, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, Output } from '@angular/core';

/**
 * Models different kinds of messages.
 *
 * Note that we on purpose use lowercase letters to
 * be consistent with the bootstrap alert types (Particularly
 * from ngx-bootstrap library). By doing so, we may directly
 * transform this alert type into the bootstrap one.
 */
var AlertTypeEnum;
(function (AlertTypeEnum) {
    AlertTypeEnum[AlertTypeEnum["none"] = 0] = "none";
    AlertTypeEnum[AlertTypeEnum["info"] = 1] = "info";
    AlertTypeEnum[AlertTypeEnum["warning"] = 2] = "warning";
    AlertTypeEnum[AlertTypeEnum["success"] = 3] = "success";
    AlertTypeEnum[AlertTypeEnum["danger"] = 4] = "danger";
    AlertTypeEnum[AlertTypeEnum["other"] = 5] = "other";
})(AlertTypeEnum || (AlertTypeEnum = {}));

/**
 * Models the submission state of a request.
 */
var SubmissionStateEnum;
(function (SubmissionStateEnum) {
    SubmissionStateEnum[SubmissionStateEnum["None"] = 0] = "None";
    SubmissionStateEnum[SubmissionStateEnum["Processing"] = 1] = "Processing";
    SubmissionStateEnum[SubmissionStateEnum["Success"] = 2] = "Success";
    SubmissionStateEnum[SubmissionStateEnum["Failure"] = 3] = "Failure";
    SubmissionStateEnum[SubmissionStateEnum["Other"] = 4] = "Other";
})(SubmissionStateEnum || (SubmissionStateEnum = {}));

/**
 * Provides a base for defining a reusable form.
 */
var DefaultFormBaseComponent = /** @class */ (function () {
    function DefaultFormBaseComponent() {
        this.hideCancelBtn = false;
        this.hideSubmitBtn = false;
        this.submitBtnTxt = 'Submit';
        this.cancelBtnTxt = 'Cancel';
        this.onSave = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.onValidation = new EventEmitter();
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
    DefaultFormBaseComponent.ɵdir = ɵɵdefineDirective({ type: DefaultFormBaseComponent, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt" }, outputs: { onSave: "onSave", onCancel: "onCancel", onValueChanged: "onValueChanged", onValidation: "onValidation" } });
    return DefaultFormBaseComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultFormBaseComponent, [{
        type: Directive
    }], null, { hideCancelBtn: [{
            type: Input
        }], hideSubmitBtn: [{
            type: Input
        }], submitBtnTxt: [{
            type: Input
        }], cancelBtnTxt: [{
            type: Input
        }], onSave: [{
            type: Output
        }], onCancel: [{
            type: Output
        }], onValueChanged: [{
            type: Output
        }], onValidation: [{
            type: Output
        }] }); })();

/*
 * Public API Surface of ngx-form-common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertTypeEnum, DefaultFormBaseComponent, SubmissionStateEnum };
//# sourceMappingURL=polpware-ngx-form-common.js.map
