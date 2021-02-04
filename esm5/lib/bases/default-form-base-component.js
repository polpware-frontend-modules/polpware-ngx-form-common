import { Input, Output, EventEmitter } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mb3JtLWJhc2UtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9kZWZhdWx0LWZvcm0tYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWU1RDs7R0FFRztBQUNIO0lBQUE7UUFPSSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUVoQyxpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUd2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBVzlDO0lBVFUsbURBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scURBQWtCLEdBQXpCLFVBQTBCLENBQU07UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztvR0FoQ2lCLHdCQUF3QjtpRUFBeEIsd0JBQXdCO21DQWxCOUM7Q0FtREMsQUFqQ0QsSUFpQ0M7U0FqQ3FCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElIYXNOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9oYXMtbm90aWZpY2F0aW9ucy5pbnRlcmZhY2UnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBNb2RlbHMgdGhlIGlucHV0cyBmb3IgdGhlIGRlZmF1bHQgcmV1c2FibGUgZm9ybS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlZmF1bHRGb3JtSW5wdXRzIHtcclxuICAgIGhpZGVDYW5jZWxCdG46IGJvb2xlYW47XHJcbiAgICBoaWRlU3VibWl0QnRuOiBib29sZWFuO1xyXG4gICAgc3VibWl0QnRuVHh0OiBzdHJpbmc7XHJcbiAgICBjYW5jZWxCdG5UeHQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgYmFzZSBmb3IgZGVmaW5pbmcgYSByZXVzYWJsZSBmb3JtLiBcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJSGFzTm90aWZpY2F0aW9ucyB7XHJcblxyXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3QgcmVhZG9ubHkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBoaWRlQ2FuY2VsQnRuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgaGlkZVN1Ym1pdEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIHN1Ym1pdEJ0blR4dDogc3RyaW5nID0gJ1N1Ym1pdCc7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgY2FuY2VsQnRuVHh0OiBzdHJpbmcgPSAnQ2FuY2VsJztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uU2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgb25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uVmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblZhbGlkYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgcHVibGljIG5vdGlmeVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5vblZhbGlkYXRpb24uZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbGlkOiB0aGlzLmZvcm0udmFsaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm90aWZ5VmFsdWVDaGFuZ2VzKGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQuZW1pdChhKTtcclxuICAgIH1cclxufVxyXG4iXX0=