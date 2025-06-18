import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div
        className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center animate-fade-in-up"
      >
        <div className="mb-6">
          <div
            className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto animate-scale-in"
          >
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Оплата успешно завершена!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Спасибо за ваш заказ. Мы отправим вам подтверждение на email.
        </p>
        <Link href="/">
          <button
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-all duration-200 hover:scale-102 active:scale-98"
          >
            Вернуться на главную
          </button>
        </Link>
      </div>
    </div>
  );
} 