import { Input, Output, EventEmitter, Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Provides a base for defining a reusable form.
 */
export class DefaultFormBaseComponent {
    constructor() {
        this.hideCancelBtn = false;
        this.hideSubmitBtn = false;
        this.submitBtnTxt = 'Submit';
        this.cancelBtnTxt = 'Cancel';
        this.onSave = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.onValidation = new EventEmitter();
    }
    notifyValidation() {
        this.onValidation.emit({
            valid: this.form.valid
        });
    }
    notifyValueChanges(a) {
        this.onValueChanged.emit(a);
    }
}
DefaultFormBaseComponent.ɵfac = function DefaultFormBaseComponent_Factory(t) { return new (t || DefaultFormBaseComponent)(); };
DefaultFormBaseComponent.ɵdir = i0.ɵɵdefineDirective({ type: DefaultFormBaseComponent, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt" }, outputs: { onSave: "onSave", onCancel: "onCancel", onValueChanged: "onValueChanged", onValidation: "onValidation" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mb3JtLWJhc2UtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9kZWZhdWx0LWZvcm0tYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFldkU7O0dBRUc7QUFFSCxNQUFNLE9BQWdCLHdCQUF3QjtJQUQ5QztRQVFJLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGlCQUFZLEdBQVcsUUFBUSxDQUFDO1FBRWhDLGlCQUFZLEdBQVcsUUFBUSxDQUFDO1FBR3ZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0FXOUM7SUFUVSxnQkFBZ0I7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsQ0FBTTtRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnR0FoQ2lCLHdCQUF3Qjs2REFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FEN0MsU0FBUzs7a0JBT0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSUhhc05vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2hhcy1ub3RpZmljYXRpb25zLmludGVyZmFjZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIE1vZGVscyB0aGUgaW5wdXRzIGZvciB0aGUgZGVmYXVsdCByZXVzYWJsZSBmb3JtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGVmYXVsdEZvcm1JbnB1dHMge1xyXG4gICAgaGlkZUNhbmNlbEJ0bj86IGJvb2xlYW47XHJcbiAgICBoaWRlU3VibWl0QnRuPzogYm9vbGVhbjtcclxuICAgIHN1Ym1pdEJ0blR4dD86IHN0cmluZztcclxuICAgIGNhbmNlbEJ0blR4dD86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgYmFzZSBmb3IgZGVmaW5pbmcgYSByZXVzYWJsZSBmb3JtLiBcclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUhhc05vdGlmaWNhdGlvbnMge1xyXG5cclxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IHJlYWRvbmx5IGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgaGlkZUNhbmNlbEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIGhpZGVTdWJtaXRCdG46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBzdWJtaXRCdG5UeHQ6IHN0cmluZyA9ICdTdWJtaXQnO1xyXG4gICAgQElucHV0KClcclxuICAgIGNhbmNlbEJ0blR4dDogc3RyaW5nID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgb25WYWxpZGF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHB1YmxpYyBub3RpZnlWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMub25WYWxpZGF0aW9uLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWxpZDogdGhpcy5mb3JtLnZhbGlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vdGlmeVZhbHVlQ2hhbmdlcyhhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoYSk7XHJcbiAgICB9XHJcbn1cclxuIl19