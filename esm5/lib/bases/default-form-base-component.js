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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mb3JtLWJhc2UtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9kZWZhdWx0LWZvcm0tYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWU1RDs7R0FFRztBQUNIO0lBQUE7UUFPSSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUVoQyxpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUd2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBVzlDO0lBVFUsbURBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scURBQWtCLEdBQXpCLFVBQTBCLENBQU07UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztvR0FoQ2lCLHdCQUF3QjtpRUFBeEIsd0JBQXdCO21DQWxCOUM7Q0FtREMsQUFqQ0QsSUFpQ0M7U0FqQ3FCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElIYXNOb3RpZmljYXRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9oYXMtbm90aWZpY2F0aW9ucy5pbnRlcmZhY2UnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBNb2RlbHMgdGhlIGlucHV0cyBmb3IgdGhlIGRlZmF1bHQgcmV1c2FibGUgZm9ybS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlZmF1bHRGb3JtSW5wdXRzIHtcclxuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xyXG4gICAgaGlkZVN1Ym1pdEJ0bj86IGJvb2xlYW47XHJcbiAgICBzdWJtaXRCdG5UeHQ/OiBzdHJpbmc7XHJcbiAgICBjYW5jZWxCdG5UeHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhIGJhc2UgZm9yIGRlZmluaW5nIGEgcmV1c2FibGUgZm9ybS4gXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUhhc05vdGlmaWNhdGlvbnMge1xyXG5cclxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IHJlYWRvbmx5IGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgaGlkZUNhbmNlbEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIGhpZGVTdWJtaXRCdG46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBzdWJtaXRCdG5UeHQ6IHN0cmluZyA9ICdTdWJtaXQnO1xyXG4gICAgQElucHV0KClcclxuICAgIGNhbmNlbEJ0blR4dDogc3RyaW5nID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgb25WYWxpZGF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHB1YmxpYyBub3RpZnlWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMub25WYWxpZGF0aW9uLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWxpZDogdGhpcy5mb3JtLnZhbGlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vdGlmeVZhbHVlQ2hhbmdlcyhhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoYSk7XHJcbiAgICB9XHJcbn1cclxuIl19