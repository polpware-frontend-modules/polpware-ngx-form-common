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
    static { this.ɵfac = function DefaultFormBaseComponent_Factory(t) { return new (t || DefaultFormBaseComponent)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DefaultFormBaseComponent, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt" }, outputs: { onSave: "onSave", onCancel: "onCancel", onValueChanged: "onValueChanged", onValidation: "onValidation" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultFormBaseComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mb3JtLWJhc2UtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uL3NyYy9saWIvYmFzZXMvZGVmYXVsdC1mb3JtLWJhc2UtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBZXZFOztHQUVHO0FBRUgsTUFBTSxPQUFnQix3QkFBd0I7SUFEOUM7UUFRSSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUVoQyxpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUd2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBVzlDO0lBVFUsZ0JBQWdCO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtCQUFrQixDQUFDLENBQU07UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQzt5RkFoQ2lCLHdCQUF3QjtvRUFBeEIsd0JBQXdCOztpRkFBeEIsd0JBQXdCO2NBRDdDLFNBQVM7Z0JBUU4sYUFBYTtrQkFEWixLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLO1lBR04sWUFBWTtrQkFEWCxLQUFLO1lBR04sWUFBWTtrQkFEWCxLQUFLO1lBSUcsTUFBTTtrQkFEZCxNQUFNO1lBR0UsUUFBUTtrQkFEaEIsTUFBTTtZQUdFLGNBQWM7a0JBRHRCLE1BQU07WUFHRSxZQUFZO2tCQURwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSUhhc05vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2hhcy1ub3RpZmljYXRpb25zLmludGVyZmFjZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIE1vZGVscyB0aGUgaW5wdXRzIGZvciB0aGUgZGVmYXVsdCByZXVzYWJsZSBmb3JtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGVmYXVsdEZvcm1JbnB1dHMge1xyXG4gICAgaGlkZUNhbmNlbEJ0bj86IGJvb2xlYW47XHJcbiAgICBoaWRlU3VibWl0QnRuPzogYm9vbGVhbjtcclxuICAgIHN1Ym1pdEJ0blR4dD86IHN0cmluZztcclxuICAgIGNhbmNlbEJ0blR4dD86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIGEgYmFzZSBmb3IgZGVmaW5pbmcgYSByZXVzYWJsZSBmb3JtLiBcclxuICovXHJcbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElIYXNOb3RpZmljYXRpb25zIHtcclxuXHJcbiAgICBpc1NhdmluZzogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBmb3JtOiBVbnR5cGVkRm9ybUdyb3VwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBoaWRlQ2FuY2VsQnRuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgaGlkZVN1Ym1pdEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KClcclxuICAgIHN1Ym1pdEJ0blR4dDogc3RyaW5nID0gJ1N1Ym1pdCc7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgY2FuY2VsQnRuVHh0OiBzdHJpbmcgPSAnQ2FuY2VsJztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uU2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgb25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIHJlYWRvbmx5IG9uVmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSBvblZhbGlkYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgcHVibGljIG5vdGlmeVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5vblZhbGlkYXRpb24uZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbGlkOiB0aGlzLmZvcm0udmFsaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm90aWZ5VmFsdWVDaGFuZ2VzKGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQuZW1pdChhKTtcclxuICAgIH1cclxufVxyXG4iXX0=