/**
 * Opóźnia wykonanie kodu o podaną liczbę milisekund
 * @param ms - Czas opóźnienia w milisekundach
 * @returns Promise, która rozwiązuje się po upływie czasu
 * @example
 * await delay(1000); // Opóźnienie o 1 sekundę
 */
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
