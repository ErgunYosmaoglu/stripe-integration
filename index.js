const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const stripeRoutes = require("./routes/stripeRoutes");
const StripeController = require("./controllers/StripeController");
const { rateLimiter } = require("./middlewares/rateLimit");
const config = require("./config/config");
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", rateLimiter(1, 5, "çok fazla istek attınız."), StripeController.getProducts);

app.use("/stripe", stripeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
