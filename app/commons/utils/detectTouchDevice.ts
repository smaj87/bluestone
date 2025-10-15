// WAŻNE te sprawdzanie mozna uzywac przy mniej istotnych funkcjonalnosciach ze wzgledu na to, ze WIN 10 czasami wysyła info o tym, ze jest to urzadzenie dotykowe, a nie jest
// oraz są tez komputery z dotykowym ekranem, wiec nie mozna do konca ufac tylko temu sprawdzeniu, tylko dorzucic trzeba jeszcze isMobile przy pisaniu warunku
const isTouchDevice = () =>
  'ontouchstart' in window || navigator.maxTouchPoints > 0;

export default isTouchDevice;
