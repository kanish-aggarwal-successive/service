class SystemResponse {

    getInstance = () => {
        return new SystemResponse();
    }

    getErrorResponse = (message, error, code) => {
        return {
            message: message,
            status: code,
            error: error || {},
            timestamp: new Date()
        }
    }

    notFoundError = (message, error) => {
        return SystemResponse.getInstance().getErrorResponse(message, error, 500);
    }
}

export default SystemResponse;