import { CLEAR_FORM, SET_FORM_DATA } from './constants';
import {
  EditImageFormAction,
  EditImageFormData,
  EditImageFormState,
} from './types';

export const initialState: EditImageFormState = {
  formData: {
    width: 0,
    height: 0,
    alt: '',
    persistScale: false,
  },
};

export default (
  state = initialState,
  action: EditImageFormAction,
): EditImageFormState => {
  switch (action.type) {
    case SET_FORM_DATA: {
      const formData = { ...state.formData };

      (Object.keys(action.formData) as Array<keyof EditImageFormData>).forEach(
        (field) => {
          // @ts-ignore
          formData[field] =
            action.formData[field] ?? initialState.formData[field];
        },
      );

      return {
        ...state,
        formData,
      };
    }
    case CLEAR_FORM: {
      return initialState;
    }
    default:
      return state;
  }
};
