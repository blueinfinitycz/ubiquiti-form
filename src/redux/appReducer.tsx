import { REQUEST_END, REQUEST_ERROR, REQUEST_START } from '../globalVariables';

export interface IState {
  isLoading: boolean;
  error: number;
  payload?: {};
}

const init: IState = {
  isLoading: false,
  error: 0,
  payload: [],
};

interface IAction {
  type: string;
  payload: any;
}

const reducer = (state = init, action: IAction) => {
  switch (action.type) {
    case REQUEST_START:
      return { ...state, isLoading: true };
      break;
    case REQUEST_END:
      return { ...state, isLoading: false, payload: action.payload };
      break;
    case REQUEST_ERROR:
      return { ...state, isLoading: false, error: 1 };
      break;
    default:
      return { ...state };
  }
};

export default reducer;
