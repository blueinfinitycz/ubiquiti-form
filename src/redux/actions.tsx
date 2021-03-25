import { FORM_SUBMIT_URL, FORM_TABLE_URL, REQUEST_END, REQUEST_ERROR, REQUEST_START } from '../globalVariables';
import { IFormData } from '../types/form';

const requestStart = () => ({ type: REQUEST_START });
const requestEnd = (data?: {}) => ({ type: REQUEST_END, payload: data });
const requestError = (message: string) => ({ type: REQUEST_ERROR, payload: message });

export const sendNameAndHeight = (data: IFormData) => {
  console.log('NAME&HEIGHT: ', data);
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(requestStart());
    try {
      fetch(FORM_SUBMIT_URL, {
        method: 'post',
        headers: { 'cache-control': 'no-cache', 'content-type': 'application/json' },
        body: JSON.stringify({ name: 'jarda', height: 465 }),
      }).then((e) => {
        console.log('DATA: ', e);
        const res = { uploadId: 'd84fcfc1-1e57-4e6a-939b-5f197fc83aee' };
        dispatch(requestEnd());
        // c onst uploadId = JSON.parse(e).uploadId;
        // fetch(fileUploadURL(res.uploadId), { method: 'post', body: data.file }).then((evt: any) => console.log('RESPONSE: ', evt));
      });
    } catch (e) {
      dispatch(requestError(e.message));
    }
  };
};

export const getTableData = () => {
  console.log('get table data');
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(requestStart());
    console.log('zkousim');
    try {
      console.log(FORM_TABLE_URL);
      // fetch(FORM_TABLE_URL).then((e) => console.log('DATA TABLE: ', e));
      const jsonData = [
        {
          name: 'John Doe',
          height: 1,
          file: 'hello.txt',
        },
        {
          name: 'John Doe2',
          height: 2,
          file: 'hello.txt',
        },
        {
          name: 'John Doe3',
          height: 1,
          file: 'hello.txt',
        },
        {
          name: 'John Doe',
          height: 1,
          file: 'hello.txt',
        },
        {
          name: 'John Doe',
          height: 1,
          file: 'hello.txt',
        },
      ];
      dispatch(requestEnd(jsonData));
    } catch (e) {
      dispatch(requestError(e.message));
    }
  };
};
