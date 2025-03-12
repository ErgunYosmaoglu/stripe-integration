const rateLimit = require("express-rate-limit");

const rateLimiter = (timeWindowMinutes, maxRequests, errorMessage) => {
    return rateLimit({
        windowMs: timeWindowMinutes * 60 * 1000,
        max: maxRequests,
        message: errorMessage || "Çok fazla istek gönderildi, lütfen daha sonra tekrar deneyin!",
        headers: true,
    });
};

module.exports = { rateLimiter };
