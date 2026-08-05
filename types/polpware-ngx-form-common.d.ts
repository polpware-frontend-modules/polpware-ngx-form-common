import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

/**
 * Models different kinds of messages.
 *
 * Note that we on purpose use lowercase letters to
 * be consistent with the bootstrap alert types (Particularly
 * from ngx-bootstrap library). By doing so, we may directly
 * transform this alert type into the bootstrap one.
 */
declare enum AlertTypeEnum {
    none = 0,
    info = 1,
    warning = 2,
    success = 3,
    danger = 4,
    other = 5
}
interface IHasAlertInfo {
    alertMessage: string;
    alertSubMessage: string;
    alertType: AlertTypeEnum;
    alertDismissible: boolean;
}

/**
 * Models the submission state of a request.
 */
declare enum SubmissionStateEnum {
    None = 0,
    Processing = 1,
    Success = 2,
    Failure = 3,
    Other = 4
}
interface IHasSubmissionState {
    submissionState: SubmissionStateEnum;
}

/**
 * Defines the sorts of notifications a form may support.
 */
interface IHasNotifications {
    notifyValidation(): void;
    notifyValueChanges(a: any): void;
}

/**
 * Models the inputs for the default reusable form.
 */
interface IDefaultFormInputs {
    hideCancelBtn?: boolean;
    hideSubmitBtn?: boolean;
    submitBtnTxt?: string;
    cancelBtnTxt?: string;
}
/**
 * Provides a base for defining a reusable form.
 */
declare abstract class DefaultFormBaseComponent implements IHasNotifications {
    isSaving: boolean;
    abstract readonly form: UntypedFormGroup;
    hideCancelBtn: boolean;
    hideSubmitBtn: boolean;
    submitBtnTxt: string;
    cancelBtnTxt: string;
    readonly onSave: EventEmitter<any>;
    readonly onCancel: EventEmitter<any>;
    readonly onValueChanged: EventEmitter<any>;
    readonly onValidation: EventEmitter<any>;
    notifyValidation(): void;
    notifyValueChanges(a: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultFormBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DefaultFormBaseComponent, never, never, { "hideCancelBtn": { "alias": "hideCancelBtn"; "required": false; }; "hideSubmitBtn": { "alias": "hideSubmitBtn"; "required": false; }; "submitBtnTxt": { "alias": "submitBtnTxt"; "required": false; }; "cancelBtnTxt": { "alias": "cancelBtnTxt"; "required": false; }; }, { "onSave": "onSave"; "onCancel": "onCancel"; "onValueChanged": "onValueChanged"; "onValidation": "onValidation"; }, never, never, true, never>;
}

export { AlertTypeEnum, DefaultFormBaseComponent, SubmissionStateEnum };
export type { IDefaultFormInputs, IHasAlertInfo, IHasNotifications, IHasSubmissionState };
//# sourceMappingURL=polpware-ngx-form-common.d.ts.map
