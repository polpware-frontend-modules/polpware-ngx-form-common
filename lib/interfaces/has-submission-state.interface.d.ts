/**
 * Models the submission state of a request.
 */
export declare enum SubmissionStateEnum {
    None = 0,
    Processing = 1,
    Success = 2,
    Failure = 3,
    Other = 4
}
export interface IHasSubmissionState {
    submissionState: SubmissionStateEnum;
}
//# sourceMappingURL=has-submission-state.interface.d.ts.map