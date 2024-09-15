"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
function handleError(err, context) {
    if (err instanceof Error) {
        // Handle the instance of Error
        throw new Error(`${context}: ${err.message}`);
    }
    else {
        //Handle unexpected error types
        throw new Error(`${context}: An unexpected error occurred`);
    }
}
