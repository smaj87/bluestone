import { memo } from 'utils/react';

const ErrorPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
    <div className="text-center px-6 py-12">
      {/* Tekstowa ikona błędu */}
      <div className="mb-8">
        <span className="text-9xl">❌</span>
      </div>

      {/* Nagłówek */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Błąd aplikacji
      </h1>

      {/* Dodatkowy opis */}
      <p className="text-lg text-red-500 mb-8 max-w-md mx-auto">
        Przepraszamy, coś poszło nie tak. Spróbuj odświeżyć stronę lub wróć
        później.
      </p>

      {/* Przycisk odświeżenia */}
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        onClick={() => window.location.reload()}
        type="button"
      >
        Odśwież stronę
      </button>
    </div>
  </div>
);

export default memo(ErrorPage);
