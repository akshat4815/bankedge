exports.handler = async (event, context) => {
    // Check if the path is /success
    if (event.path === "/success") {
        return {
            statusCode: 301,
            headers: {
                Location: "/success.html",
            },
            body: "Redirecting...",
        };
    }
    // If it's not /success, return a 404
    return {
        statusCode: 404,
        body: "Not Found",
    };
};
