import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.NEXT_STRIPE_APIKEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "jpy",
              product_data: {
                name: "テストプラン"
              },
              unit_amount: 2000,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000",
        cancel_url: "http://localhost:3000",
      });
      res.redirect(200, session.url);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "test" });
  }
}

