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
DefaultFormBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DefaultFormBaseComponent, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt" }, outputs: { onSave: "onSave", onCancel: "onCancel", onValueChanged: "onValueChanged", onValidation: "onValidation" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultFormBaseComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mb3JtLWJhc2UtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uL3NyYy9saWIvYmFzZXMvZGVmYXVsdC1mb3JtLWJhc2UtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBZXZFOztHQUVHO0FBRUgsTUFBTSxPQUFnQix3QkFBd0I7SUFEOUM7UUFRSSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUVoQyxpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUd2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBVzlDO0lBVFUsZ0JBQWdCO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtCQUFrQixDQUFDLENBQU07UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0dBaENpQix3QkFBd0I7MkVBQXhCLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBRDdDLFNBQVM7Z0JBUU4sYUFBYTtrQkFEWixLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLO1lBR04sWUFBWTtrQkFEWCxLQUFLO1lBR04sWUFBWTtrQkFEWCxLQUFLO1lBSUcsTUFBTTtrQkFEZCxNQUFNO1lBR0UsUUFBUTtrQkFEaEIsTUFBTTtZQUdFLGNBQWM7a0JBRHRCLE1BQU07WUFHRSxZQUFZO2tCQURwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJSGFzTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaGFzLW5vdGlmaWNhdGlvbnMuaW50ZXJmYWNlJztcclxuXHJcblxyXG4vKipcclxuICogTW9kZWxzIHRoZSBpbnB1dHMgZm9yIHRoZSBkZWZhdWx0IHJldXNhYmxlIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEZWZhdWx0Rm9ybUlucHV0cyB7XHJcbiAgICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbjtcclxuICAgIGhpZGVTdWJtaXRCdG4/OiBib29sZWFuO1xyXG4gICAgc3VibWl0QnRuVHh0Pzogc3RyaW5nO1xyXG4gICAgY2FuY2VsQnRuVHh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBiYXNlIGZvciBkZWZpbmluZyBhIHJldXNhYmxlIGZvcm0uIFxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUhhc05vdGlmaWNhdGlvbnMge1xyXG5cclxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IHJlYWRvbmx5IGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgaGlkZUNhbmNlbEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIGhpZGVTdWJtaXRCdG46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBzdWJtaXRCdG5UeHQ6IHN0cmluZyA9ICdTdWJtaXQnO1xyXG4gICAgQElucHV0KClcclxuICAgIGNhbmNlbEJ0blR4dDogc3RyaW5nID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgb25WYWxpZGF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHB1YmxpYyBub3RpZnlWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMub25WYWxpZGF0aW9uLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWxpZDogdGhpcy5mb3JtLnZhbGlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vdGlmeVZhbHVlQ2hhbmdlcyhhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoYSk7XHJcbiAgICB9XHJcbn1cclxuIl19