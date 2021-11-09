"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unAuthorizedResponse = exports.validResponse = exports.internalErrorResponse = void 0;
var internalErrorResponse = function (arg) {
    return {
        statusCode: 500,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
            message: "General Error",
            error: arg ? arg.message : null,
        }, null, 2),
    };
};
exports.internalErrorResponse = internalErrorResponse;
var unAuthorizedResponse = function (arg) {
    return {
        statusCode: 401,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(arg, null, 2),
    };
};
exports.unAuthorizedResponse = unAuthorizedResponse;
var validResponse = function (body) { return ({
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(body, null, 2),
}); };
exports.validResponse = validResponse;
//# sourceMappingURL=responses.js.map