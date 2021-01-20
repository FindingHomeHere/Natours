/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(process.env.STRIPE_PUBLIC_KEY);

export const bookTour = async tourId => {
  try {
    // Get checkout session from api
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // create checkout form + charge card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.error(err);
    showAlert('error', err);
  }
};
