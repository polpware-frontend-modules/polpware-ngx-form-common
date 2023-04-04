import { Input, Output, EventEmitter, Directive } from '@angular/core';
import * as i0 from "@angular/core";
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
    DefaultFormBaseComponent.ɵdir = i0.ɵɵdefineDirective({ type: DefaultFormBaseComponent, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt" }, outputs: { onSave: "onSave", onCancel: "onCancel", onValueChanged: "onValueChanged", onValidation: "onValidation" } });
    return DefaultFormBaseComponent;
}());
export { DefaultFormBaseComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultFormBaseComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mb3JtLWJhc2UtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9kZWZhdWx0LWZvcm0tYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFldkU7O0dBRUc7QUFDSDtJQUFBO1FBUUksa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0IsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFFaEMsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFHdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQVc5QztJQVRVLG1EQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHFEQUFrQixHQUF6QixVQUEwQixDQUFNO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7b0dBaENpQix3QkFBd0I7aUVBQXhCLHdCQUF3QjttQ0FuQjlDO0NBb0RDLEFBbENELElBa0NDO1NBakNxQix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUQ3QyxTQUFTOztrQkFPTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFHTCxNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJSGFzTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaGFzLW5vdGlmaWNhdGlvbnMuaW50ZXJmYWNlJztcclxuXHJcblxyXG4vKipcclxuICogTW9kZWxzIHRoZSBpbnB1dHMgZm9yIHRoZSBkZWZhdWx0IHJldXNhYmxlIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEZWZhdWx0Rm9ybUlucHV0cyB7XHJcbiAgICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbjtcclxuICAgIGhpZGVTdWJtaXRCdG4/OiBib29sZWFuO1xyXG4gICAgc3VibWl0QnRuVHh0Pzogc3RyaW5nO1xyXG4gICAgY2FuY2VsQnRuVHh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBiYXNlIGZvciBkZWZpbmluZyBhIHJldXNhYmxlIGZvcm0uIFxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJSGFzTm90aWZpY2F0aW9ucyB7XHJcblxyXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3QgcmVhZG9ubHkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBoaWRlQ2FuY2VsQnRuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgaGlkZVN1Ym1pdEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIHN1Ym1pdEJ0blR4dDogc3RyaW5nID0gJ1N1Ym1pdCc7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgY2FuY2VsQnRuVHh0OiBzdHJpbmcgPSAnQ2FuY2VsJztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uU2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgb25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uVmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblZhbGlkYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgcHVibGljIG5vdGlmeVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5vblZhbGlkYXRpb24uZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbGlkOiB0aGlzLmZvcm0udmFsaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm90aWZ5VmFsdWVDaGFuZ2VzKGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQuZW1pdChhKTtcclxuICAgIH1cclxufVxyXG4iXX0=