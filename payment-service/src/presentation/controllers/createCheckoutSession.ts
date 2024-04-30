import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { verifyToken } from "../../utils/jwt/verifyToken";
import stripe from "stripe";
import { handlePaymentSuccessWebhook } from "../../utils/stripe/handlePaymentSuccessWebhook";

export const createCheckoutSessionController = (
  dependencies: IDependencies
) => {
  
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stripeInstance = new stripe(String(process.env.STRIPE_SECRET));
      const { cost, selectedSeats, totalAmount, theatreName } = req.body;

      const lineItems = [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: "Total Amount",
            },
            unit_amount: Math.floor(totalAmount * 100), 
          },
          quantity: 1,
        },
      ]

      const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/paymentSuccess",
        cancel_url: "http://futstore.me",
      });
      // handlePaymentSuccessWebhook(session.id);
      res.status(200).json({ success: true, id: session.id ,message:"payment response"});
      const paymentIntent = await stripeInstance.paymentIntents.retrieve(session.id);
      console.log("🚀 ~ file: createCheckoutSession.ts:41 ~ return ~ paymentIntent:", paymentIntent)
    } catch (error: any) {
      next(error);
    }
  };
};
