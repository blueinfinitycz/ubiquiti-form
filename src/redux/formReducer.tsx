import { FORM_SUBMIT } from '../globalVariables';

// interface IState {
//   [index: number]: { name: string; height: number; file: string };
// }

// const initialState: IState = {
//   [{ name: '', height: 0, file: '' }];
// };

interface IAction {
  type: string;
  payload: { uploadId: number | null };
}

// const initialAction: IAction = {
//   type: FORM_SUBMIT,
//   payload: { uploadId: null },
// };

// export const reducer = (state: IState = initialState, action: IAction = initialAction) => {
const reducer = (state: any, action: IAction) => {
  if (action.type === FORM_SUBMIT) {
    return { ...state, payload: action.payload };
  }
  return { ...state };
};

export default reducer;
