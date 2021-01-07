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

/*
 * Public API Surface of ngx-form-common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertTypeEnum, SubmissionStateEnum };
//# sourceMappingURL=polpware-ngx-form-common.js.map
