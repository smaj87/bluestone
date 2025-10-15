import { ErrorInfo } from 'utils/react';

export const reportCatchError = async (error: Error, info: ErrorInfo) => {
  // eslint-disable-next-line
  console.log(error, info);
};

export const reportCatchErrorFromAction = async (error: Error) => {
  // eslint-disable-next-line
  console.log(error);
};
