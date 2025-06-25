import { useState } from 'react';
import { createCheckoutSession, formatPrice } from '@/lib/stripe/stripeUtils';

/**
 * PaymentButton component
 *
 * Renders a styled button that initiates a payment process for the provided items using Stripe Checkout.
 * Shows a loading spinner while processing the payment.
 *
 * @param {Object} props - Component props
 * @param {Array<{price: number, quantity?: number}>} props.items - Array of items to be purchased. Each item should have a price and optional quantity.
 * @param {string} [props.className] - Additional CSS classes for the button.
 * @returns {JSX.Element} The payment button element.
 */
export default function PaymentButton({ items, className = '' }) {
  // State to track loading status during payment processing
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handles the payment process by creating a Stripe Checkout session.
   * Shows a loading spinner and handles errors.
   */
  const handlePayment = async () => {
    try {
      setIsLoading(true);
      await createCheckoutSession(items);
    } catch (error) {
      // Log and alert on payment error
      console.error('Payment error:', error);
      alert('Произошла ошибка при обработке платежа. Пожалуйста, попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate the total amount for all items
  const totalAmount = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className={`relative inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-200 hover:scale-102 active:scale-98 ${className}`}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Обработка...
        </span>
      ) : (
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
          </svg>
          Pay {formatPrice(totalAmount)}
        </span>
      )}
    </button>
  );
} 