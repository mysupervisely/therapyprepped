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
  '3-day': { label: '3-Day Pass', amountCents: 1900, days: 3, mode: 'payment' },
  '7-day': { label: '7-Day Pass', amountCents: 2900, days: 7, mode: 'payment' },
  '14-day': { label: '14-Day Pass', amountCents: 3900, days: 14, mode: 'payment' },
  '30-day': { label: '30-Day Pass', amountCents: 5900, days: 30, mode: 'payment' },
  'monthly': { label: 'Monthly Subscription', amountCents: 5900, days: 30, mode: 'subscription' },
};
