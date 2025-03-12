require("dotenv").config();

const config = {
    PORT: process.env.PORT || 3001,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    BASE_URL: process.env.BASE_URL || "http://localhost:3001",
};

if (!config.STRIPE_SECRET_KEY) {
    throw new Error(" ERROR: STRIPE_SECRET_KEY environment değişkeni bulunamadı!");
}

module.exports = config;
