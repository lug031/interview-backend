export function apiResponseBadRequestError() {
  return {
    statusCode: 400,
    isBase64Encoded: false,
  };
}

export function apiResponseOk(data: any) {
  return {
    statusCode: 200,
    isBase64Encoded: false,
    body: JSON.stringify(data),
  };
}
