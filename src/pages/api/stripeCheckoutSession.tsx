import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.NEXT_STRIPE_APIKEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { planTitle, planPrice } = req.body;
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "jpy",
              unit_amount: planPrice,
              product_data: {
                name: planTitle,
              },
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000",
        cancel_url: "http://localhost:3000",
      });

      return res.status(200).json({ stripeSessionUrl: session.url });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "test" });
  }
}
