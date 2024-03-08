type Matcher = {
  [key: string]: { message: string; codeStatus: number }
};

export const errorValidation = (errorMessage: string, codeStatus: number) => {
  const matcher: Matcher = {};

  const defaultError = {
    message: "SOMETHING_WENT_WRONG",
    statusCode: 500
  };

  return matcher[errorMessage] ?? defaultError;
};
