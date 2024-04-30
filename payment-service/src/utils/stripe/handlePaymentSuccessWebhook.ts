import Stripe from "stripe";

export async function handlePaymentSuccessWebhook(sessionId: string) {
  const stripeInstance = new Stripe(String(process.env.STRIPE_SECRET));

  try {
    const paymentIntent = await stripeInstance.paymentIntents.retrieve(sessionId);
    console.log("🚀 ~ file: handlePaymentSuccessWebhook.ts:8 ~ handlePaymentSuccessWebhook ~ paymentIntent:", paymentIntent)

    if (paymentIntent.status === "succeeded") {
      const cost = paymentIntent.amount / 100; // Assuming amount is in cents
      const selectedSeats = paymentIntent.metadata.selectedSeats?.split(",") || []; 
      const totalAmount = paymentIntent.amount / 100;
      const theatreName = paymentIntent.metadata.theatreName; 

      // Call your Mongoose use case to save the data
      // await addTheatreMovieUseCase.execute({ cost, selectedSeats, totalAmount, theatreName });

      console.log("Payment successful and data saved to database!");
    } else {
      console.log(`Payment status: ${paymentIntent.status}`); // Log for debugging other payment states
    }
  } catch (error) {
    console.error("Error handling payment success webhook:", error);
  }
}
