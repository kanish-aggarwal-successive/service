class SystemResponse {

    getInstance = () => {
        return new SystemResponse();
    }

    getErrorResponse = (message, error, code) => {
        return {
            message: message,
            status: code,
            error: error || {},
        }
    }

    notFoundError = (message, error) => {
        return SystemResponse.getInstance().getErrorResponse(message, error, 404);
    }
}

export default SystemResponse;