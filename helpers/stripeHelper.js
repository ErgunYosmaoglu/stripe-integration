require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function createCheckoutSession(product) {
    return await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: { name: product.name },
                    unit_amount: product.price,
                },
                quantity: 1,
            },
        ],
        success_url: `${process.env.BASE_URL}/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/`,
    });
}

module.exports = { createCheckoutSession };
