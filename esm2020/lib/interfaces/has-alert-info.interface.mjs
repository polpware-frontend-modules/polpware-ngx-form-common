/**
 * Models different kinds of messages.
 *
 * Note that we on purpose use lowercase letters to
 * be consistent with the bootstrap alert types (Particularly
 * from ngx-bootstrap library). By doing so, we may directly
 * transform this alert type into the bootstrap one.
 */
export var AlertTypeEnum;
(function (AlertTypeEnum) {
    AlertTypeEnum[AlertTypeEnum["none"] = 0] = "none";
    AlertTypeEnum[AlertTypeEnum["info"] = 1] = "info";
    AlertTypeEnum[AlertTypeEnum["warning"] = 2] = "warning";
    AlertTypeEnum[AlertTypeEnum["success"] = 3] = "success";
    AlertTypeEnum[AlertTypeEnum["danger"] = 4] = "danger";
    AlertTypeEnum[AlertTypeEnum["other"] = 5] = "other";
})(AlertTypeEnum || (AlertTypeEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLWFsZXJ0LWluZm8uaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uL3NyYy9saWIvaW50ZXJmYWNlcy9oYXMtYWxlcnQtaW5mby5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBTixJQUFZLGFBT1g7QUFQRCxXQUFZLGFBQWE7SUFDckIsaURBQVEsQ0FBQTtJQUNSLGlEQUFRLENBQUE7SUFDUix1REFBVyxDQUFBO0lBQ1gsdURBQVcsQ0FBQTtJQUNYLHFEQUFVLENBQUE7SUFDVixtREFBUyxDQUFBO0FBQ2IsQ0FBQyxFQVBXLGFBQWEsS0FBYixhQUFhLFFBT3hCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNb2RlbHMgZGlmZmVyZW50IGtpbmRzIG9mIG1lc3NhZ2VzLlxuICpcbiAqIE5vdGUgdGhhdCB3ZSBvbiBwdXJwb3NlIHVzZSBsb3dlcmNhc2UgbGV0dGVycyB0byBcbiAqIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgYm9vdHN0cmFwIGFsZXJ0IHR5cGVzIChQYXJ0aWN1bGFybHkgXG4gKiBmcm9tIG5neC1ib290c3RyYXAgbGlicmFyeSkuIEJ5IGRvaW5nIHNvLCB3ZSBtYXkgZGlyZWN0bHkgXG4gKiB0cmFuc2Zvcm0gdGhpcyBhbGVydCB0eXBlIGludG8gdGhlIGJvb3RzdHJhcCBvbmUuXG4gKi9cbmV4cG9ydCBlbnVtIEFsZXJ0VHlwZUVudW0ge1xuICAgIG5vbmUgPSAwLFxuICAgIGluZm8gPSAxLFxuICAgIHdhcm5pbmcgPSAyLFxuICAgIHN1Y2Nlc3MgPSAzLFxuICAgIGRhbmdlciA9IDQsXG4gICAgb3RoZXIgPSA1XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUhhc0FsZXJ0SW5mbyB7XG4gICAgYWxlcnRNZXNzYWdlOiBzdHJpbmc7XG4gICAgYWxlcnRTdWJNZXNzYWdlOiBzdHJpbmc7XG4gICAgYWxlcnRUeXBlOiBBbGVydFR5cGVFbnVtO1xuICAgIGFsZXJ0RGlzbWlzc2libGU6IGJvb2xlYW47XG59ICAgIFxuIl19