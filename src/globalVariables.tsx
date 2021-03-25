export const REQUEST_START = 'REQUEST_START';
export const REQUEST_END = 'REQUEST_END';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const FORM_SUBMIT = 'FORM_SUBMIT';
export const FORM_SUBMIT_URL = 'http://file-upload.ubncloud.com/submit';
export const FORM_TABLE_URL = 'http://file-upload.ubncloud.com/data';
export const fileUploadURL = (hash: string) => `'http://file-upload.ubncloud.com/upload/${hash}`;
