# Bluestone

## Uruchomienie

1. Sklonuj repozytorium:
   ```sh
   git clone https://github.com/smaj87/bluestone.git
   ```
2. Przejdź do katalogu projektu:
   ```sh
   cd bluestone
   ```
3. Zainstaluj zależności:
   ```sh
   npm install
   ```
4. Uruchom aplikację w trybie deweloperskim:
   ```sh
   npm start
   ```
   - Uruchomienie lokalnej wersji produkcyjnej na zbudowanych plikach:
     ```sh
     npm run start:prod
     ```
   - Samodzielny build aplikacji z bundle-analyzerem:
     ```sh
     npm run build
     ```

## Wymagania i architektura

1. **Wymagania**:
   - Node.js w wersji 22 lub wyższej

2. **Baza danych**:
   - Wykorzystywana jest przeglądarkowa baza danych **IndexedDB**
   - Wszystkie serwisy do bazy są owrapowane symulacją sieci (network simulation)

3. **Stan aplikacji**:
   - Zarządzanie stanem realizowane jest przez **Redux**
