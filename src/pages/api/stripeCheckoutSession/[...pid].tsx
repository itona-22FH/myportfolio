import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.NEXT_STRIPE_APIKEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { pid } = req.query;

  if (req.method === "POST" && pid) {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "jpy",
              product_data: {
                name: pid[0],
              },
              unit_amount: pid[1],
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000",
        cancel_url: "http://localhost:3000",
      });

      res.status(200).redirect(session.url);

    } catch (error: any) {
      res.status(400).json({ error: error.message });
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "test" });
  }
}
