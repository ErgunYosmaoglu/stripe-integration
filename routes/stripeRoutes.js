const express = require("express");
const router = express.Router();
const StripeController = require("../controllers/StripeController");
const { rateLimiter } = require("../middlewares/rateLimit");

router.get("/success", StripeController.displaySuccessPage);
router.post("/create-session", rateLimiter(10, 3, "Çok fazla ödeme denemesi yaptınız, lütfen daha sonra tekrar deneyin!"), StripeController.createCheckoutSession);
module.exports = router;
