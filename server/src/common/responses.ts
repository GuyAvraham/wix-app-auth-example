const internalErrorResponse = (
  arg: { message: { content: string; success: boolean } } | undefined
) => {
  return {
    statusCode: 500,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(
      {
        message: "General Error",
        error: arg ? arg.message : null,
      },
      null,
      2
    ),
  };
};

const unAuthorizedResponse = (arg) => {
  return {
    statusCode: 401,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(arg, null, 2),
  };
};

const validResponse = (body) => ({
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  body: JSON.stringify(body, null, 2),
});

export { internalErrorResponse, validResponse, unAuthorizedResponse };
