require("dotenv").config();
const { createCheckoutSession } = require("../helpers/stripeHelper");
const products = require("../mock/data");

exports.getProducts = (req, res) => {
    res.render("index", { products });
};

exports.createCheckoutSession = async (req, res) => {
    try {
        const { product_id } = req.body;
        const product = products.find(p => p.id == product_id);
        if (!product) {
            return res.status(400).json({ error: "Ürün bulunamadı!" });
        }

        res.json({ checkoutUrl: (await createCheckoutSession(product)).url });

    } catch (error) {
        res.status(500).json({ error: "Ödeme işlemi başarısız!" });
    }
};

exports.displaySuccessPage = (req, res) => {
    res.render("success");
};
