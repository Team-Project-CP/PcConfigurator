/**
 * stripeUtils.js
 *
 * Utility functions for integrating Stripe Checkout in the application.
 */

import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the public key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

/**
 * Creates a Stripe Checkout session and redirects the user to the Stripe payment page.
 *
 * @param {Array<Object>} items - Array of items to purchase. Each item should include price and quantity.
 * @returns {Promise<void>} Resolves when the redirect is initiated or throws on error.
 */
export const createCheckoutSession = async (items) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const session = await response.json();
    console.log('Stripe session response:', session);
    if (!session.id) {
      throw new Error(session.error || 'No session id returned from Stripe');
    }

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error('Error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

/**
 * Formats a number as a USD currency string.
 *
 * @param {number} price - The price value to format.
 * @returns {string} The formatted price string (e.g., "$1,234.56").
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}; 