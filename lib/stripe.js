import Stripe from 'stripe';

let stripeInstance;

export function getStripe() {
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
    });
  }
  return stripeInstance;
}

export const PLANS = {
  '3-day': { label: '3-Day Pass', amountCents: 900, days: 3 },
  '7-day': { label: '7-Day Pass', amountCents: 1900, days: 7 },
  '14-day': { label: '14-Day Pass', amountCents: 2900, days: 14 },
  '30-day': { label: '30-Day Pass', amountCents: 4900, days: 30 },
};
