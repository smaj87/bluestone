/**
 * Konfiguracja bazy danych i symulacji opóźnień sieciowych
 */
export const dbConfig = {
  // Włącz/wyłącz symulację opóźnień sieciowych
  simulateNetworkDelay: true,

  // Czas opóźnienia w milisekundach (domyślnie 500ms)
  delayMs: 500,

  // Opcjonalnie: losowe opóźnienie między min a max
  randomDelay: true,
  minDelayMs: 200,
  maxDelayMs: 2500,
};

/**
 * Pobiera czas opóźnienia na podstawie konfiguracji
 */
export const getDelayMs = () => {
  if (!dbConfig.simulateNetworkDelay) {
    return 0;
  }

  if (dbConfig.randomDelay) {
    return (
      Math.random() * (dbConfig.maxDelayMs - dbConfig.minDelayMs) +
      dbConfig.minDelayMs
    );
  }

  return dbConfig.delayMs;
};
