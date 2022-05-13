import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IHasNotifications } from '../interfaces/has-notifications.interface';
import * as i0 from "@angular/core";
/**
 * Models the inputs for the default reusable form.
 */
export interface IDefaultFormInputs {
    hideCancelBtn?: boolean;
    hideSubmitBtn?: boolean;
    submitBtnTxt?: string;
    cancelBtnTxt?: string;
}
/**
 * Provides a base for defining a reusable form.
 */
export declare abstract class DefaultFormBaseComponent implements IHasNotifications {
    isSaving: boolean;
    abstract readonly form: FormGroup;
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
    static ɵdir: i0.ɵɵDirectiveDeclaration<DefaultFormBaseComponent, never, never, { "hideCancelBtn": "hideCancelBtn"; "hideSubmitBtn": "hideSubmitBtn"; "submitBtnTxt": "submitBtnTxt"; "cancelBtnTxt": "cancelBtnTxt"; }, { "onSave": "onSave"; "onCancel": "onCancel"; "onValueChanged": "onValueChanged"; "onValidation": "onValidation"; }, never>;
}
//# sourceMappingURL=default-form-base-component.d.ts.map