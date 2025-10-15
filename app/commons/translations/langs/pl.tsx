import {
  Offer,
  Order,
} from 'commons/share_app/components/OrderAndDelivery/types';
import { NewslettersSortType } from 'commons/share_app/containers/Newsletters/types';
import { OrderStatus } from 'commons/share_app/containers/Orders/types';

export default {
  appOnet: 'Strona główna Onet.pl',
  appOnetProduct: 'Strona główna Onet Poczty',
  appGazeta: 'Strona główna Gazeta',
  appGazetaProduct: 'Strona główna Poczty Gazeta.pl',
  logoOnetAlt: 'Logo Onet',
  logoOnetProductAlt: 'Logo Onet Poczta',
  logoGazetaAlt: 'Logo Gazeta',
  logoGazetaProductAlt: 'Logo Gazeta Poczta',

  landmarkAriaLabelSidebar: 'Wybór powiązanych aplikacji',

  ariaUserMenu: 'Menu użytkownika',

  today: 'dziś',
  yesterday: 'wczoraj',
  to: 'do',
  or: 'lub',
  where: 'Gdzie',

  ctaCopy: 'Kopiuj',
  ctaCopyContent: 'Skopiuj do schowka',
  ctaCancel: 'Anuluj',
  ctaSave: 'Zapisz',
  ctaSend: 'Wyślij',
  ctaSendSchedule: 'Zaplanuj wysyłkę',
  ctaCancelSchedule: 'Anuluj wysyłkę',
  ctaSchedule: 'Zaplanuj',
  ctaAdd: 'Dodaj',
  ctaAddFolder: 'Dodaj folder',
  ctaEdit: 'Edytuj',
  ctaDelete: 'Usuń',
  ctaClose: 'Zamknij',
  ctaOpen: 'Otwórz',
  ctaBack: 'Powrót',
  ctaYes: 'Tak',
  ctaNo: 'Nie',
  ctaReset: 'Resetuj',
  ctaRefresh: 'Odśwież',
  ctaChange: 'Zmień',
  ctaBackToHomePage: 'Przejdź do strony głównej',
  ctaUserMenu: 'Menu użytkownika',
  ctaLogout: 'Wyloguj',
  ctaSwitchAccount: 'Przełącz konto',
  ctaReportProblem: 'Zgłoś problem',
  ctaAccountSettings: 'Ustawienia konta',
  ctaMore: 'Więcej',
  ctaLearnMore: 'Dowiedz się więcej',
  ctaTryAgain: 'Spróbuj ponownie',
  ctaOk: 'Ok',
  ctaChangeMode: ({ isDarkMode }: { isDarkMode: boolean }) =>
    `Wybrany motyw: ${isDarkMode ? 'ciemny' : 'jasny'}. Ustaw motyw: ${isDarkMode ? 'jasny' : 'ciemny'}`,
  ctaAll: 'Wszystkie',
  ctaShowCode: 'Pokaż kod',
  ctaCopyCode: 'Skopiuj kod',
  ctaCopyAndGoToCouponUrl: 'Skopiuj kod i przejdź do promocji',
  ctaShowOthers: 'Wyświetl pozostałe',
  ctaHideOthers: 'Ukryj pozostałe',
  ctaShowLess: 'Zwiń',
  ctaShowMore: 'Rozwiń',
  ctaAdjust: 'Dostosuj',
  ctaConfirmSelected: 'Potwierdź wybrane opcje',
  ctaSwitchOff: 'Wyłącz',
  ctaSwitchOn: 'Włącz',
  ctaBackModal: 'Wróć',
  ctaReply: 'Odpisz',
  ctaReplyAll: 'Wszystkim',
  ctaForward: 'Przekaż',
  ctaShowAllProducts: ({ productsAmount }: { productsAmount: number }) =>
    `Pokaż produkty (${productsAmount})`,
  ctaShowMessages: 'Pokaż wiadomości',
  ctaCheckAll: 'Zaznacz wszystkie',
  ctaUncheckAll: 'Odznacz wszystkie',
  ctaOpenSearch: 'Otwórz wyszukiwarkę',
  ctaOpenSidebar: 'Otwórz menu aplikacji',
  ctaCloseSearch: 'Zamknij wyszukiwarkę',
  ctaCloseSidebar: 'Zamknij menu aplikacji',
  ctaNewMail: 'Napisz wiadomość',
  ctaSearch: 'Szukaj',
  ctaClear: 'Wyczyść',
  ctaGoTo: 'Przejdź',
  ctaWhySmart: 'Dlaczego to widzę?',
  ctaNextMail: 'Następna wiadomość',
  ctaNextMailShort: 'Następna',
  ctaPrevMail: 'Poprzednia wiadomość',
  ctaPrevMailShort: 'Poprzednia',
  ctaMarked: 'Zaznaczony',
  ctaUnmarked: 'Odznaczony',
  ctaMarkFavourite: 'Oznacz wiadomość',
  ctaUnMarkFavourite: 'Usuń oznaczenie',
  ctaNextPage: ({ page }: { page?: number }) => `Następna strona: ${page}`,
  ctaPreviousPage: ({ page }: { page?: number }) =>
    `Poprzednia strona: ${page}`,
  ctaSeen: 'Przeczytana',
  ctaUnseen: 'Nieprzeczytana',
  ctaShow: 'Pokaż',
  ctaBcc: 'Ukryta kopia',
  ctaPrint: 'Drukuj',
  ctaSpam: 'SPAM',
  ctaNoSpam: 'Nie SPAM',
  ctaMarkAsSpam: 'Oznacz jako SPAM',
  ctaMarkAsNotSpam: 'To nie SPAM',
  ctaDownload: 'Pobierz',
  ctaDownloadAttachment: 'Pobierz załącznik',
  ctaGoToMail: 'Idź do wiadomości',
  ctaGoToMailShort: 'Idź do',
  ctaUnsubscribe: 'Wypisz się',
  ctaShowHistory: 'Pokaż historię korespondencji',
  ctaMoveTo: 'Przenieś',
  ctaShowProducts: 'Pokaż produkty',
  ctaNotificationBell: ({ counter }: { counter?: number }) =>
    `Powiadomienia${counter ? ` (nieprzeczytane: ${counter})` : ''}`,
  ctaGoToMainContent: 'Przejdź do treści',

  thankYou: 'Dziękujemy!',
  showMore: 'Pokaż więcej',
  showLess: 'Pokaż mniej',
  empty: 'Brak',
  isFetching: 'Trwa ładowanie',
  ad: 'Reklama',
  webmail: 'Poczta',
  contacts: 'Kontakty',
  calendar: 'Kalendarz',
  webmailPlus: 'Poczta Plus',
  settings: 'Ustawienia',
  courier: 'Zamów kuriera',
  help: 'Pomoc',
  newspaperAd: 'Gazetka reklamowa',
  coupons: 'Kupony',
  coupon: 'Kupon',
  recommend: 'Polecane',
  newsletters: 'Newslettery',

  modalConfirmationIrreversible: 'Operacja jest nieodwracalna.',
  modalConfirmationTitle: 'Potwierdzenie',

  modalUserMenuTitle: 'Menu użytkownika',

  modalScheduleTitle: 'Zaplanuj wysyłkę wiadomości',

  modalEditScheduleTitle: 'Edycja zaplanowanej wiadomości',
  modalEditScheduleDescription:
    'Edycja zaplanowanej wiadomości anuluje jej wysyłkę. Czy chcesz kontynuować?',

  webmailBannerAlt01: 'Baner promocyjny: Poczta Plus',
  webmailBannerAlt02: 'Baner promocyjny: Poczta Biznes',
  webmailBannerDesc01:
    'Poczta Plus: Bez maili reklamowych, bez banerów, większa pojemność. Już od 8.25zł / miesiąc',
  webmailBannerDesc02:
    'Poczta Biznes: Poczta bez reklam i dostęp m.in. do treści Forbes i Business Insider.',

  labelAttachment: 'Wiadomość z załącznikiem',
  labelFolder: 'Folder',
  labelMarkMailAs: 'Oznacz wiadomość jako',

  fromToNumber: ({ from, to }: { from: number; to: number }) =>
    `od ${from} do ${to}`,
  fromNumber: ({ number }: { number: number }) => `od ${number}`,

  expiredSessionTitle: 'Sesja wygasła!',
  expiredSessionDescription:
    'Twoja sesja wygasła. Odśwież ją klikając w przycisk poniżej.',

  appErrorMessage: 'Wystąpił błąd wewnętrzny aplikacji.',
  appErrorApologize: 'Przepraszamy.',

  poweredBy: 'Powered by',
  developedBy: 'Developed by',
  regulation: 'Regulamin',
  appVersion: ({ value }: { value?: string }) => `Wersja aplikacji: ${value}`,

  fetchingMessage: 'Pobieranie danych',

  offlineMessage:
    'Brak dostępu do internetu. Sprawdź swoje połączenie i spróbuj ponownie.',

  orders: 'Zamówienia',
  ordersHeaderTitle: 'Zamówienia i przesyłki',
  ordersBeta: 'beta',
  ordersHeaderInfo: 'Masz wpływ na to, jak ulepszymy funkcje zakupowe.',
  ordersHeaderInfoShops: 'Dlaczego nie widzę wszystkich swoich zamówień?',
  ordersHeaderReportShops: 'Zostaw opinię / zgłoś problem',
  ordersHeaderLinkInfo: 'Wyłącz funkcje zakupowe',
  ordersEnable: 'Pokaż listę zamówień',
  ordersError: 'Wystąpił błąd podczas pobierania zamówień',
  ordersEmptyList: () => (
    <>
      Brak zamówień spełniających
      <br />
      wybrane kryteria
    </>
  ),
  ordersEmptyAllLists: () => (
    <>
      <b>Coś tu pusto!</b>
      <br />
      <br />
      Wiesz, czego tu brakuje? Ciebie!
      <br />
      Zrób pierwsze zakupy i zobacz, jak
      <br />
      uporządkujemy Twoje
      <br />
      powiadomienia zakupowe.
    </>
  ),
  ordersInProgress: 'W trakcie',
  ordersPickupAvailable: 'Gotowe do odbioru',
  ordersDone: 'Zakończone',
  ordersFetchingStatuses: 'Pobieram aktualne statusy zamówień.',
  ordersFetchingStatusesError: 'Pobieranie statusów zamówień nie powiodło się.',
  ordersLoadMore: 'Załaduj więcej',
  orderBackToList: 'Wróć do listy zamówień',
  orderError: 'Błąd podczas pobierania zamówienia',
  orderNotFound: 'Brak zamówienia o podanym numerze.',
  orderFromSingle: 'od',
  orderThrought: 'przez',
  orderDeliveryMethod: 'forma dostawy',
  orderOrdered: 'zamówiono',
  orderCreated: 'utworzono',
  orderTotalPrice: 'Łącznie z przesyłką',
  orderAddress: 'ADRES DORĘCZENIA',
  orderDeliveryNumber: 'NUMER PRZESYŁKI',
  orderCarrierPhoneNumber: 'Kontakt z kurierem',
  orderPhoneNumber: 'Numer telefonu',
  orderPickupCode: 'Kod odbioru',
  orderSendingCode: 'Kod nadania',
  orderDeliveryTrack: 'Śledz Przesyłkę',
  orderEdit: 'Edytuj zamówienie',
  orderChangeStatusToClosed: 'Oznacz jako zakończone',
  orderChangeStatusModalText:
    'Czy napewno chcesz oznaczyć to zamówienia jako zakończone?',
  ordersUpdated: 'Zamówienia zostały zaktualizowane',
  orderUpdateError: 'Wystąpił błąd podczas aktualizacji',

  getOrderTabStatus: ({ orderStatus }: { orderStatus: OrderStatus }) =>
    orderStatus
      ? {
          _OrderProcessing: 'W przygotowaniu',
          _OrderInTransit: 'W transporcie',
          _OrderDelivered: 'Zakończona',
          _OrderCancelled: 'Anulowana',
          _OrderPaymentDue: 'Opłacona',
          _OrderPickupAvailable: 'Do odbioru',
          _OrderProblem: 'Problem z zamówieniem',
          _OrderReturned: 'Zwrócona',
          _OrderNew: 'Nowe zamówienie',
          _OrderDelayed: 'Opóźniona',
        }[`_${orderStatus}`]
      : '',

  getOrderStatus: ({ orderStatus }: { orderStatus: Order['orderStatus'] }) =>
    orderStatus
      ? {
          _processing: 'Przygotowywanie przesyłki',
          _pickupavailable: 'Możliwość odbioru',
          _delivered: 'Dostarczono',
          _intransit: 'W drodze',
          _cancelled: 'Anulowana',
          _problem: 'Problem z zamówieniem',
          _returned: 'Zwrócona',
          _paymentdue: 'Oczekiwanie na płatność',
        }[`_${orderStatus}`]
      : '',

  orderFrom: 'Zamówienie od',
  orderPrice: 'Całkowity koszt',
  orderDetails: 'Szczegóły zamówienia',
  parcelDeliveryDetails: 'Szczegóły przesyłki',
  ctaTrackPackage: 'Śledź przesyłkę',
  deliveryAddress: 'Adres doręczenia',
  deliveryDate: 'Doręczenie:',
  deliveryFrom: 'Przesyłka od',
  deliveryNumber: 'przesyłka nr',

  weekDayName: ({ day, isShort = false }: { day: number; isShort?: boolean }) =>
    (isShort
      ? ['ndz', 'pon', 'wt', 'śr', 'czw', 'pt', 'sob']
      : [
          'niedziela',
          'poniedziałek',
          'wtorek',
          'środa',
          'czwartek',
          'piątek',
          'sobota',
        ])[day] || 'unknown',

  monthName: ({
    isShort = false,
    month,
  }: {
    month: number;
    isShort?: boolean;
  }) =>
    (isShort
      ? [
          'sty',
          'lut',
          'mar',
          'kwi',
          'maj',
          'cze',
          'lip',
          'sie',
          'wrz',
          'paź',
          'lis',
          'gru',
        ]
      : [
          'styczeń',
          'luty',
          'marzec',
          'kwiecień',
          'maj',
          'czerwiec',
          'lipiec',
          'sierpień',
          'wrzesień',
          'październik',
          'listopad',
          'grudzień',
        ])[month] || 'unknown',

  monthNameInFullDate: ({ month }: { month: number }) =>
    [
      'stycznia',
      'lutego',
      'marca',
      'kwietnia',
      'maja',
      'czerwca',
      'lipca',
      'sierpnia',
      'września',
      'października',
      'listopada',
      'grudnia',
    ][month] || 'unknown',

  langLabels: ({
    isShort = false,
    lang,
  }: {
    lang: string;
    isShort?: boolean;
  }) =>
    (isShort ? { _pl: 'PL', _uk: 'UA' } : { _pl: 'Polski', _uk: 'Українська' })[
      lang
    ] || '',

  appSettings: 'Ustawienia aplikacji',
  setTheme: 'Dostosuj wygląd',
  themeDark: 'Ciemny',
  themeLight: 'Jasny',

  selectThemeMode: 'Motyw',
  selectThemeColor: 'Kolor przewodni',
  selectThemeBackground: 'Tło (tylko w wersji na komputer)',

  colorYellow: 'Żółty',
  colorBlue: 'Niebieski',
  colorGreen: 'Zielony',
  colorRed: 'Czerwony',
  colorMagenta: 'Magenta',
  colorAzure: 'Błękitny',

  backgroundEmpty: 'Brak',
  backgroundBeach: 'Plaża',
  backgroundMountain: 'Góry',

  notificationThemeUpdateError: 'Wystąpił problem podczas aktualizacji motywu.',
  notificationLangUpdateError: 'Wystąpił problem podczas aktualizacji języka.',

  weather: 'Pogoda',

  noAdsWebmail: 'Poczta bez reklam',
  ctaCheck: 'Sprawdź',

  paidPlanEnd: ({ counter }: { counter: number }) =>
    counter === 1 ? (
      <>
        <span>{counter}</span> dzień do końca poczty płatnej
      </>
    ) : (
      <>
        <span>{counter}</span> dni do końca poczty płatnej
      </>
    ),
  paidPlanEndToday: 'Twój pakiet dziś się kończy',
  ctaRenew: 'Przedłuż',

  maximumNumber: ({ max }: { max: number }) =>
    `Maksymalna ilość znaków to: ${max}`,
  genericError: 'Niepoprawny format.',
  groupExist: 'Istnieje już taka grupa',

  searchListsPlaceholder: 'Szukaj wiadomości',
  courierTooltipMsg:
    'Porównaj kurierów i wysyłaj paczki bez wychodzenia z domu.',
  checkedMessagesCounter: ({ counter }: { counter: number }) =>
    `Wybrano: ${counter}`,

  newslettersText1: () => (
    <>
      Rozwiązaliśmy problem skrzynek przepełnionych newsletterami.
      <br />W tym folderze jednym kliknięciem wypiszesz się z newsletterów od
      wybranego nadawcy i usuniesz poprzednie wiadomości od niego.
    </>
  ),
  newslettersText2:
    'Jeżeli chcesz dalej mieć kontakt z wybraną firmą - w nowym folderze będziesz mieć szybki dostęp do treści, które Cię interesują.',
  newsletterRemoveMailsModalTitle: 'Usuń wszystkie wiadomości',
  newsletterRemoveMailsModalText:
    'Czy chcesz dodatkowo usunąć wszystkie wiadomości, które do tej pory otrzymałeś od ',
  newsletterRemoveMails: 'Tak, usuń wiadomości',
  newslettersEmptyTitle: 'Nie masz jeszcze żadnych subskrypcji',
  newslettersEmptyText:
    'Chcesz być na bieżąco z najlepszymi ofertami? Zapisz się do newsletterów ze swoich ulubionych sklepów i nie przegap już żadnej okazji',
  newslettersEnable: 'Pokaż newslettery',
  smartFunctionsText:
    'Włącz inteligentne funkcje, żeby skorzystać z rozwiązania',
  newslettersErrorMsg: 'Wystąpił błąd podczas aktualizacji.',
  newslettersError: 'Wystąpił błąd podczas pobierania newsletterów',
  newslettersUnsubscribeTitle: 'Wypisz się z newslettera',
  newslettersRedirectText:
    'Aby zrezygnować z otrzymywania podobnych wiadomości zostaniesz przeniesiony na zewnętrzną witrynę. Postępuj zgodnie z instrukcjami.',
  newslettersRedirectToAllTitle: 'Zarządzaj newsletterami',
  newslettersRedirectToAllText:
    'Zobacz listę wszystkich newsletterów, z których możesz się wypisać.',
  newslettersRedirectToAllCheckbox: 'Nie pokazuj więcej tego komunikatu',
  newslettersRedirectToAllButton: 'Przejdź do newsletterów',
  newsletterCounter: ({ counter }: { counter: number }) =>
    `${counter} ${
      counter === 1 ? 'wiadomość' : 'wiadomości'
    } w ciągu ostatnich 30 dni`,

  newsletterDeleteOlderThan: ({ daysCount }: { daysCount: number }) =>
    `Usuń wiadomości starsze niż ${daysCount} dni`,
  newsletterDeleteOlderThanModalTitle: 'Usuń wiadomości',
  newsletterDeleteOlderThanModalText: ({ daysCount }: { daysCount: number }) =>
    `Czy chcesz usunąć wszystkie wiadomości starsze niż ${daysCount} dni, które otrzymałeś/aś od `,
  newsletterReportProblemModalTitle: 'Zgłoś problem z wypisaniem',
  newsletterReportProblemModalText: `Czy chcesz zgłosić problem z wypisaniem się z newslettera od nadawcy `,
  reportProblemSuccess: 'Dziękujemy za zgłoszenie!',
  newsletterDeleteSucces: ({ counter }: { counter: number }) =>
    `Wybrane wiadomości (${counter}) zostały przeniesione do folderu 'Kosz'.`,
  newsletterItemCounter: ({
    counter,
    seener,
  }: {
    counter: number;
    seener: number;
  }) =>
    `${seener} z ${counter} ${
      counter === 1 ? 'wiadomość' : 'wiadomości'
    } otwarto w ciągu ostatnich 30 dni.`,

  orderModalTitle: 'Zakupione produkty',

  couponsDescription:
    'Tu znajdziesz wszystkie aktualne kupony rabatowe, promocje i oferty z Twoich wiadomości, a także od naszych partnerów.',
  couponsEnable: 'Pokaż kupony',
  couponsEmptyTitle: 'Nie masz jeszcze żadnych kuponów',
  couponsEmptyDescription:
    'Zaglądaj tu regularnie, na pewno wkrótce się pojawią. Zapisz się na newslettery ulubionych sklepów i podawaj swój adres Onet Poczty robiąc zakupy online, żeby otrzymywać kupony.',
  couponsError: 'Wystąpił błąd podczas pobierania Kuponów',
  couponsDiscountsCurrentTitle: 'Kupony z Twoich wiadomości',
  couponsDefaultTitle: 'Najpopularniejsze marki',
  couponsExpiredTodayAndNew: 'Wygasające dzisiaj i nowe',
  couponsFilterFrom: 'Filtruj kupony od',
  copyInfo: 'Skopiowano!',
  validUntil: ({ date }: { date: string }) => `Do ${date}`,
  couponsExpired: 'Do ',
  couponsPlaceholder: 'Zobacz ofertę',
  cashbackDescription:
    'Tu znajdziesz oferty, dzięki którym możesz otrzymać zwrot pieniędzy za zakupy online w swoich ulubionych sklepach.',
  cashbackTextHeadline: ({ price }: { price: string }) =>
    `do ${price || ''}% zwrotu`,

  cashbackTextHeadline2: ({ price }: { price: string }) =>
    `${price || ''} zwrotu`,
  cashbacksEnable: 'Pokaż listę ofert cashback',
  cashbacksEmptyTitle: 'Nie masz jeszcze żadnych ofert z cashback',
  cashbacksEmptyDescription:
    'Zaglądaj tu regularnie, żeby zobaczyć aktualne oferty. Podaj swój adres Onet Poczty w ulubionych sklepach internetowych i wracaj do nas, żeby zobaczyć aktualne oferty.',
  cashbacksError: 'Wystąpił błąd podczas pobierania ofert z cashback',
  cashbacksGoTo: 'Aktywuj Cashback',
  cashbacksShow: 'Pokaż oferty',
  cashbackDiscount: ({ value }: { value?: string }) => (
    <>
      <b>do {value}</b>% zwrotu
    </>
  ),
  cashbackDiscount2: ({ value }: { value?: string }) => (
    <>
      <b>{value}</b> zwrotu
    </>
  ),

  logoGoodie: 'Logo Goodie',

  cashbackGoodieInfoTitle: ' Zrób pierwsze zakupy i odbierz 20 zł w prezencie',
  cashbackGoodieInfoContent:
    'Oferta dla nowych użytkowników goodie, którzy zarejestrują konto za pośrednictwem Onet Poczty i dokonają jednej lub więcej transakcji za min, 200 zł. Szczegóły w ',
  cashbackGoodieInfoLink: 'regulaminie.',
  cashbackTandW: 'Transakcje i wypłaty',
  cashbackDefaultHiWTitle1: 'zarejestruj się',
  cashbackDefaultHiWContent1:
    'Kliknij "Aktywuj cashback" lub "Przejdź" na liście ofert, aby skorzystać z usługi.',
  cashbackDefaultHiWTitle2: 'rób zakupy',
  cashbackDefaultHiWContent2:
    'Przekierujemy Cię na stronę goodie. Tam wybierz sklep i dokonaj zakupu, klikając "Przejdź do sklepu".',
  cashbackDefaultHiWTitle3: 'sprawdzaj transakcje',
  cashbackDefaultHiWContent3:
    'Kliknij "Transakcje i wypłaty", aby sprawdzić status zwrotów i wypłacać cashback na konto bankowe.',
  cashbackDefaultHiWTitle4: 'zyskuj kolejne zwroty',
  cashbackDefaultHiWContent4:
    'Podawaj adres Onet Poczty robiąc zakupy i wracaj do tego folderu po nowe oferty.',
  schemaCashbackPlaceholder:
    'W tym sklepie odzyskasz część wydanych pieniędzy za zakupy',
  cashback: 'Cashback',
  cashbackOrganicTitle: 'Cashback z Twoich wiadomości',
  cashbackDefaultTitle: 'Najpopularniejsze sklepy',
  promoCardOmnibusPrice: 'Najniższa cena z ostatnich 30 dni: ',

  ariaShowProductDetails: ({
    productName,
  }: {
    productName?: Offer['itemOffered']['name'];
  }) => `Wyświetl szczegóły produktu: ${productName}`,

  userConfigAgreementsModalTitleOnet: 'Zanim przejdziesz do Onet Poczty',
  userConfigAgreementsModalTitleGazeta: 'Zanim przejdziesz do Poczty Gazety',
  userConfigAgreementsModalCtaActivateAllAndExit:
    'Włącz wszystkie i przejdź do poczty',
  userConfigAgreementsModalSmartFunctionsTitle:
    'Włącz inteligentne funkcje i korzystaj m.in. z:',
  userConfigAgreementsModalSmartFunctionsListItem1:
    'Automatycznego porządkowania skrzynki pocztowej. Twoje wiadomości będą trafiać do dedykowanych folderów (np.: oferty, społeczności, powiadomienia, e-recepty, e-płatności).',
  userConfigAgreementsModalSmartFunctionsListItem2:
    'Zaawansowanego antyspamu opartego o uczenie maszynowe. To oznacza jeszcze mniej niechcianych wiadomości w skrzynce i większe bezpieczeństwo.',
  userConfigAgreementsModalSmartFunctionsListItem3:
    'Łatwego dostępu do kuponów rabatowych, Twoich rezerwacji, biletów i płatności za rachunki. Bezpośrednio z wiadomości e-mail.',
  userConfigAgreementsModalSmartFunctionsListItem4:
    'Atrakcyjnych ofert, dopasowanych do tego, co lubisz i z których korzystasz.',
  userConfigAgreementsModalSmartFunctionsListItem5:
    'Możliwości szybkiego wypisywania się z newsletterów, którymi już nie jesteś zainteresowany.',
  userConfigAgreementsModalSmartFunctionsText:
    'Abyśmy mogli włączyć inteligentne funkcje potrzebujemy Twojej zgody na automatyczną analizę w powyższym celu treści maili komercyjnych, przychodzących na Twoją skrzynkę. Informacji, o które prosimy, nie pozyskujemy z wiadomości od osób prywatnych. Nie udostępniamy ich też podmiotom trzecim. Wyrażenie zgody następuje poprzez aktywację przycisku “WŁĄCZ”.',
  userConfigAgreementsModalSmartFunctionsDisableInfoGazeta:
    'Brak tej zgody spowoduje wyłączenie niektórych funkcji, w tym tych wymienionych powyżej, lub ograniczenie ich przydatności. Możesz to ponownie włączyć w ustawieniach Poczty Gazety.',
  userConfigAgreementsModalSmartFunctionsDisableInfoOnet:
    'Brak tej zgody spowoduje wyłączenie niektórych funkcji, w tym tych wymienionych powyżej, lub ograniczenie ich przydatności. Możesz to ponownie włączyć w ustawieniach Onet Poczty.',
  userConfigAgreementsModalPrivacyPolicyText1Onet:
    'Wyrażone zgody możesz w każdej chwili wycofać poprzez odznaczenie odpowiedniej opcji w ustawieniach Onet Poczty.',
  userConfigAgreementsModalPrivacyPolicyText1Gazeta:
    'Wyrażone zgody możesz w każdej chwili wycofać poprzez odznaczenie odpowiedniej opcji w ustawieniach Poczty Gazety.',
  userConfigAgreementsModalPrivacyPolicyText2Onet:
    'Administratorem danych osobowych jest Ringier Axel Springer Polska sp. z o.o. z siedzibą w Warszawie, ul. Domaniewska 49.',
  userConfigAgreementsModalPrivacyPolicyText2Gazeta:
    'Administratorem danych osobowych jest Agora S.A. z siedzibą w Warszawie, ul. Czerska 8/10.',
  userConfigAgreementsModalPrivacyPolicyText3:
    'Podanie danych jest dobrowolne, a osobie podającej dane przysługuje prawo dostępu do danych, prawo sprostowania danych, prawo ograniczenia przetwarzania, prawo usunięcia danych, wyrażenie sprzeciwu wobec przetwarzania, a także prawo złożenia skargi do organu nadzorczego ochrony danych osobowych.',
  userConfigAgreementsModalPrivacyPolicyText3Expanded:
    'Podanie danych jest dobrowolne, a osobie podającej dane przysługuje prawo dostępu do danych, prawo sprostowania danych, prawo ograniczenia przetwarzania, prawo usunięcia danych, wyrażenie sprzeciwu wobec przetwarzania, a także prawo złożenia skargi do organu nadzorczego ochrony danych osobowych - Prezesa Urzędu Ochrony Danych Osobowych.',
  userConfigAgreementsModalPrivacyPolicyText4:
    'W zakresie, w jakim ww. dane są przetwarzane w celu realizacji Usługi lub są przetwarzane na podstawie zgody, przysługuje Ci także prawo do przenoszenia danych. Udzielone zgody możesz wycofać w każdej chwili, przy czym, jeśli taka zgoda była udzielona w zamian za udzielenie rabatu lub innego rodzaju profitu to jej wycofanie może wiązać się ze zmianą warunków umowy. Wycofanie zgody nie ma wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem.',
  userConfigAgreementsModalPrivacyPolicyText5:
    'Dane przez Ciebie podane oraz zebrane informacje o Twojej aktywności będą przetwarzane w celu marketingowym Administratora, wobec czego możesz wyrazić sprzeciw. Szczegółowe informacje znajdziesz w',
  userConfigAgreementsModalPrivacyPolicyPrivacyPolicy: 'Polityce Prywatności',

  replyAllInfo: ({ content, count }: { content?: object; count: number }) => (
    <>
      do {content || count} {count === 1 ? 'kontaktu' : 'kontaktów'}
    </>
  ),

  labelNew: 'Nowe',
  labelNew2: 'Nowa',
  labelDate: 'Data',
  labelHour: 'Godzina',

  emojiModalTitle: 'Emotikony',

  ctaNewMailContactsFilterFavorite: 'Ulubione',
  ctaNewMailContactsFilterFromPhone: 'Z telefonu',

  mailScheduleDateError: 'Błędna data',

  // NEWMAIL Squire

  // fonts
  _font_serif: 'Szeryfowa',
  _font_noSerif: 'Bezszeryfowa',
  _font_wide: 'Szeroka',
  _font_narrow: 'Wąska',
  _font_equalSpace: 'Stała szerokość',
  _font_tahoma: 'Tahoma',
  _font_verdana: 'Verdana',

  // font sizes
  _fontSize_sm: 'Mały',
  _fontSize_md: 'Średni',
  _fontSize_lg: 'Duży',
  _fontSize_xlg: 'Bardzo duży',

  // text colors
  _black: 'Czarny',
  _grey: 'Szary',
  _lightgrey: 'Jasny szary',
  _white: 'Biały',
  _darkred: 'Ciemny czerwony',
  _red: 'Czerwony',
  _pink: 'Różowy',
  _purple: 'Fioletowy',
  _darkblue: 'Ciemny niebieski',
  _blue: 'Niebieski',
  _lightblue: 'Jasny niebieski',
  _darkgreen: 'Ciemny zielony',
  _green: 'Zielony',
  _lightgreen: 'Jasny zielony',
  _orange: 'Pomarańczowy',
  _yellow: 'Żółty',

  editor: 'Edytor',
  editImage: 'Edytuj obraz',
  clipboardAccessTitle: 'Brak dostępu do schowka',
  clipboardAccessText:
    'Aby wkleić obrazek, zezwól na dostęp do schowka lub użyj skrótów klawiszowych:',
  clipboardAccessAction: 'Akcja',
  clipboardAccessShortcuts: 'Skróty klawiszowe',
  clipboardAccessShortcut: 'Skrót klawiaturowy',
  clipboardAccessPasteLabel: 'Wklej',
  clipboardAccessPasteAction: 'ctrl/cmd + v',
  clipboardAccessPasteWithoutFormattingLabel: 'Wklej bez formatowania',
  clipboardAccessPasteWithoutFormattingAction: 'ctrl/cmd + shift + v',
  clipboardAccessCutLabel: 'Wytnij',
  clipboardAccessCutAction: 'ctrl/cmd + x',
  clipboardAccessCopyAction: 'ctrl/cmd + c',
  imageConversionTitle: 'Wybierz rozmiar obrazka',
  imageConversionText: 'Wstawiasz duży obrazek. Czy chcesz go zmniejszyć?',
  ctaCurrentQualityInfo: 'Oryginalny obrazek',
  ctaLowQualityInfo: 'Mały obrazek',
  ctaMidQualityInfo: 'Średni obrazek',
  ctaHighQualityInfo: 'Duży obrazek',
  editLink: 'Edytuj link',
  bold: 'Pogrubienie',
  italic: 'Kursywa',
  strikethrough: 'Przekreślenie',
  underline: 'Podkreślenie',
  addImage: 'Wstaw obrazek',
  addLink: 'Wstaw link',
  addAttachment: 'Dodaj załącznik',
  emptyFolderTitle: 'Folder jest pusty',
  textFontSize: 'Rozmiar tekstu',
  fontFamily: ({ value }: { value: string }) => `Czcionka: ${value}`,
  setColor: 'Ustaw kolor',
  insertList: 'Wstaw listę',
  insertOrderedList: 'Wstaw listę numerowaną',
  scaleImage: 'Skaluj obrazek',

  linkEditDisplayText: 'Tekst do wyświetlenia',
  linkEditTitle: 'Tytuł',
  linkEditType: 'Rodzaj linku',
  linkEditTypeUrl: 'Url',
  linkEditTypeMail: 'E-mail',
  linkEditEmail: 'Adres e-mail',
  linkEditUrl: 'Adres url',
  linkEditTarget: 'Otwórz link w...',
  linkEditTargetSelf: 'Bieżące okno',
  linkEditTargetBlank: 'Nowe okno',
  imageEditDescription: 'Alternatywny opis',
  imageEditWidth: 'Szerokość (px)',
  imageEditWidthInfo: ({ value }: { value: number }) =>
    `Maksymalna szerokość to ${value}px`,
  imageEditHeight: 'Wysokość (px)',
  imageEditHeightInfo: ({ value }: { value: number }) =>
    `Maksymalna wysokość to ${value}px`,
  imageKeepRatio: 'Zachowaj proporcje',
  urlValidationError: 'Wpisz poprawny link.',
  ctaCheckFavourite: 'Oznacz jako ulubioną',
  ctaUncheckFavourite: 'Usuń z ulubionych',
  ctaMailDetails: 'Szczegóły wiadomości',
  ctaMailHeaders: 'Nagłówki wiadomości',

  labelSendBy: ({ value }: { value?: string }) => (
    <>
      <b>wysłane przez</b> {value}
    </>
  ),
  labelSendTo: ({ value }: { value?: string }) => `do ${value}`,
  labelSendToMany: ({ value }: { value: number }) =>
    `do wielu odbiorców (${value})`,

  embeddedImages: 'Osadzone obrazy',
  images: 'Obrazki',
  replyTo: 'Odpowiedz do',
  securities: 'Zabezpieczenia',

  attachmentsTitle: 'Załączniki',
  attachmentPreviewUnavailable: 'Podgląd niedostępny dla tego pliku.',
  ctaShowPreview: 'Pokaż podgląd',
  ctaDownloadAll: ({ value }: { value?: string }) =>
    `Pobierz wszystkie (${value})`,
  fileSize: ({ value }: { value?: object }) => (
    <>Ten plik ma rozmiar {value}.</>
  ),
  defaultFileName: 'Nazwa załącznika',
  ctaAttachmentDownload: ({ name }: { name?: string }) =>
    `Pobierz załącznik: ${name}`,
  ctaAttachmentPreview: ({ name }: { name?: string }) =>
    `Podgląd załącznika: ${name}`,
  attachmentsCounter: ({ value }: { value?: number }) =>
    `Liczba załączników: ${value}`,
  attachmentCaptionAudio: ({ name }: { name?: string }) =>
    `Załącznik audio o nazwie: ${name}`,
  attachmentCaptionVideo: ({ name }: { name?: string }) =>
    `Załącznik wideo o nazwie: ${name}`,
  attachmentTranscriptionNotAvailableVideo:
    'Transkrypcja wideo nie jest dostępna.',
  attachmentTranscriptionNotAvailableAudio:
    'Transkrypcja audio nie jest dostępna.',
  attachmentPreviewError: 'Nie możemy wyświetlić podglądu załącznika',
  ctaRetry: 'Ponów',
  ctaBackToMailsList: 'Wróć do listy wiadomości',
  readMailContentFetchingError:
    'Wystąpił problem z pobraniem treści wiadomości',
  readMailIframeTitle: 'Treść wiadomości',

  titleSort: 'Sortuj',
  sortBy: 'Sortuj po',
  howItWorks: 'Zobacz jak to działa',
  howItWorksCouponsTitle:
    'Tu znajdziesz kody rabatowe, promocje i oferty ze swoich wiadomości.',
  howItWorksCouponsSubTitle: 'Chcesz więcej ofert?',
  howItWorksCouponsIcon1Title: 'Zapisz się na newslettery',
  howItWorksCouponsIcon1:
    'Dodaj swój adres e-mail do list mailingowych w ulubionych sklepach.',
  howItWorksCouponsIcon2Title: 'Wybierz się na zakupy',
  howItWorksCouponsIcon2:
    'Przy robieniu zakupów pamiętaj o korzystaniu z tego adresu e-mail.',
  howItWorksCouponsIcon3Title: 'Wracaj do nas',
  howItWorksCouponsIcon3:
    'Odwiedzaj ten folder, oferty zmieniają się regularnie.',
  howItWorksCahbacksTitle: 'Jak skorzystać z usługi zwrotu za zakupy?',

  getSort: ({ sort }: { sort: NewslettersSortType }) =>
    sort
      ? {
          _sort_from: 'Nazwie nadawcy',
          _sort_count: 'Najczęściej wysyłane',
          _sort_seenRatio: 'Najczęściej czytane',
        }[`_sort_${sort}`]
      : '',

  readMailTitle: 'Detal wiadomości',
  'ReadMail/Swipeable/emptyNextContent': 'Brak nowszych',
  'ReadMail/Swipeable/emptyPrevContent': 'Brak starszych',
  'ReadMail/labelToMe': 'mnie',
  'ReadMail/ctaAlwaysShowImages': 'Zawsze pokazuj',
  'ReadMail/ctaGoToAttachments': 'Przejdź do załączników',
  'ReadMail/ctaHideImages': 'Ukryj obrazki',
  'ReadMail/ctaHideImagesNow': 'ukrywaj obrazki od teraz',
  'ReadMail/ctaMarkAsRead': 'Oznacz jako przeczytaną',
  'ReadMail/ctaSendReadConfirmation': 'Wyślij potwierdzenie',
  'ReadMail/ctaShowImages': 'Pokaż obrazki',
  'ReadMail/defaultTitle': ({ host }: { host: string }) =>
    `Detal wiadomości - Poczta w ${host}`,
  'ReadMail/labelAskForConfirmation':
    'Nadawca prosi o potwierdzenie odbioru tej wiadomości.',
  'ReadMail/labelImagesAreHidden': 'Obrazki nie są wyświetlane.',
  'ReadMail/labelImagesAreShown': 'Obrazki są wyświetlane.',
  'ReadMail/labelImagesFromSenderAlwaysVisible':
    'Obrazki od tego nadawcy są zawsze wyświetlane',
  'ReadMail/labelMailbox': 'Skrzynka',
  'ReadMail/labelReceive': 'Otrzymano',
  'ReadMail/labelSent': 'Wysłano',
  sizeLabel: 'Rozmiar',
  'ReadMail/modalConfirmationText': 'Czy na pewno chcesz usunąć wiadomość(i)?',
  'ReadMail/title': ({ host, subject }: { host: string; subject: string }) =>
    `${subject} - Poczta w ${host}`,
  'ReadMail/Alerts/fraudDescripion':
    'Ta wiadomość wygląda na podejrzaną. Istnieje ryzyko, że zostanie wykorzystana do oszustwa.',
  'ReadMail/Alerts/securityErrorDescription':
    'Nadawca tej wiadomości nie spełnia naszych wymogów bezpieczeństwa.',
  'ReadMail/SecurityMessage/securityError':
    'Brak wielu zabezpieczeń wiadomości, w tym SPF, DKIM i DMARC.',
  'ReadMail/SecurityMessage/securitySuccess':
    'Wiadomość została podpisana przez nadawcę. Nadawca posiada zabezpieczenia domeny.',
  'ReadMail/SecurityMessage/securityWarning':
    'Wiadomość ma poprawne tylko zabezpieczenia SPF. E-mail nie został podpisany przez nadawcę.',
  'ReadMail/SecurityMessage/securitySoftWarning':
    'Nadawca tej wiadomości nie spełnia naszych wymogów bezpieczeństwa. Dowiedz się więcej.',

  'ReadMailToolbar/ctaMarkAsUnread': 'Oznacz jako nieprzeczytaną',
  'ReadMailToolbar/ctaUnsubscribe': 'Wypisz z newslettera',

  'Schema/Orders/newView': 'Moje zamówienia',
  'Schema/Orders/inOnePlace': 'Teraz zamówienia w jednym miejscu!',
  'Schema/Orders/inOnePlaceText':
    'Twoje zamówienia w jednym miejscu, gdzie szybko sprawdzisz najważniejsze dane, takie jak status przesyłki.',
  'Schema/Orders/inOnePlaceDelivery': 'Teraz przesyłki w jednym miejscu!',
  'Schema/Orders/inOnePlaceDeliveryText':
    'Miej swoje przesyłki pod kontrolą – sprawdzaj status w jednym miejscu.',

  'Schema/Payments/turnOnInProgressText':
    'Trwa przygotowywanie pierwszej płatności...',
  'Schema/Payments/turnOnText': 'Opłacaj wygodnie rachunki w swojej skrzynce',
  'Schema/Payments/turnOnBtnLabel': 'Włącz usługę',
  'Schema/Payments/ctaPay': 'Zapłać',
  'Schema/Payments/ctaPayInvoice': 'Opłać fakturę',
  'Schema/Payments/dateInPast': 'Termin płatności minął',
  'Schema/Payments/labelAmount': ({ value }: { value?: string }) => (
    <>
      Kwota: <b>{value}</b>
    </>
  ),
  'Schema/Payments/labelDeadline': ({ value }: { value?: string }) => (
    <>
      Termin: <b>{value}</b>
    </>
  ),
  'Schema/Payments/labelDaysLeft': 'Termin płatności mija',
  'Schema/Payments/labelPayDate': ({ value }: { value?: string }) => (
    <>Data płatności: {value}</>
  ),
  'Schema/Payments/statusLabel': 'Status',
  'Schema/Payments/statusSuccess': 'Zapłacone',
  Schema: ({
    defaultValue = '',
    label,
  }: {
    defaultValue?: string;
    label: string;
  }) =>
    ({
      _ctaCall: 'Zadzwoń',
      _ctaCheckIn: 'Przejdź do odprawy',
      _ctaModify: 'Edytuj rezerwację',
      _ctaConfirm: 'Potwierdź rezerwację',
      _ctaCancel: 'Anuluj rezerwację',
      _ctaEventUrl: 'Strona wydarzenia',
      _ctaGoToPage: 'Przejdź do strony',
      _ctaOpenPage: 'Otwórz stronę w nowym oknie',
      _ctaTrackingOrder: 'Śledzenie zamówienia',
      _ctaViewTicket: 'Zobacz bilet',
    })[label] || defaultValue,
  'Schema/ctaGoToPage': 'Przejdź do strony',
  'Schema/labelAirlines': 'Linia lotnicza',
  'Schema/labelAirport': 'Lotnisko',
  'Schema/labelCheckIn': 'Odprawa',
  'Schema/labelEvent': 'Wydarzenie',
  'Schema/labelFlight': 'Lot',
  'Schema/labelFlightNumber': 'Numer lotu',
  'Schema/labelLine': 'Linia',
  'Schema/labelReservation': 'Rezerwacja',
  'Schema/labelReservationNumber': 'Numer rezerwacji',
  'Schema/labelTransit': 'Przejazd',
  'Schema/labelTransportCompany': 'Firma przewozowa',
  'Schema/labelCarRental': 'Wynajem auta',
  'Schema/hidePassengers': 'Ukryj pasażerów',
  'Schema/showPassengers': 'Pokaż pasażerów',
  'Schema/couponsTitleNoSender': 'Aktualne promocje',
  'Schema/validUntil': 'Do ',
  'Schema/checkIn': 'Zameldowanie',
  'Schema/checkOut': 'Wymeldowanie',
  'Schema/restaurantLabel': 'Restauracja',

  omnibusPriceDescription: 'Najniższa cena w ciągu ostatnich 30 dni:',
  cheaper: 'taniej',
  recommended: 'polecane',
  logo: 'Logo',

  'containers/NewMail/labelByField': ({
    defaultValue = '',
    field,
  }: {
    defaultValue?: string;
    field: string;
  }) =>
    ({
      _Attachments: 'Załączniki',
      _ChooseSignature: 'Wybierz podpis:',
      _From: 'Od',
      _Shortbcc: 'UDW',
      _Shortcc: 'DW',
      _Shortto: 'Do',
      _Subject: 'Temat',
      _bcc: 'Ukryta kopia',
      _cc: 'Kopia do',
      _to: 'Do',
    })[field] || defaultValue,

  'BottomNavigation/ButtonGoTop/ctaGoTop': 'Wróć na początek strony',
  'BottomNavigation/ButtonNewMailMobile/ctaNew': 'Napisz',

  attachmentsListTitle: 'Lista załączników',
  attachmentsErrorPageTitle: 'Wystąpił problem z pobraniem listy załączników',
  attachmentsEmptyPageTitle: 'Brak załączników',

  newMailTitle: 'Nowa wiadomość',
  mailsListTitle: 'Lista wiadomości',
  mailsErrorPageTitle: 'Wystąpił problem z pobraniem wiadomości',

  mautic: 'Społeczność',
  mauticHeader: 'Testuj nowości przed innymi!',
  mauticContent:
    'Wypróbuj nowe rozwiązania Onet Poczty przed innymi. Za chwilę włączymy Ci nowy widok związany z zakupami online, nad którym ostatnio pracowaliśmy – żadna poczta e-mail nie ma czegoś takiego!',
  mauticContent2: 'Odpowiedz na poniższe pytania i testuj.',
  mauticRightHeader1: 'Kogo szukamy?',
  mauticRightSubHeader1: 'Regularnie kupujących, którzy:',
  mauticRightFirsContent1: 'używają do swoich zakupów tego adresu e-mail',
  mauticRightFirsContent2: 'chcą monitorować status swoich zamówień',
  mauticRightFirsContent3: 'potrzebują porządku w informacjach zakupowych',
  mauticRightHeader2: 'Co zyskujesz?',
  mauticRightSecondContent1: 'ekskluzywny dostęp do nowych funkcji',
  mauticRightSecondContent2: 'realny wpływ na rozwój Onet Poczty',
  mauticRightSecondContent3: 'zwiększoną satysfakcję z użytkowania skrzynki',
  mauticRightHeader3: 'Twoje zadanie',
  mauticRightThirdContent1: 'Wypełnij krótki formularz i dziel się opinią.',
  mauticThxPageHeader: 'Dziękujemy za zgłoszenie!',
  mauticThxPageContent2:
    'Dziękujemy za Twoje zaangażowanie w tworzeniu lepszego produktu.',
  mauticThxPageContent3: 'Zespół Onet Poczty',
  mauticFormNotPublished: 'Nie znaleziono formularza.',
  mauticFormValidationError: 'Uzupełnij to pole.',
  mauticOrdersThxPageCta: 'Wróć do zamówień',
  mauticOrdersThxPageHeader: 'Dziękujemy za opinię!',

  notificationBellTitle: 'Powiadomienia',
  notificationBellErrorTitle: 'Wystąpił problem z pobraniem powiadomień',
  notificationBellEmptyTitle: 'Brak powiadomień',
  notificationBellTypeCounter: ({ value }: { value?: number }) =>
    `Powiadomienie wystąpiło ${value} razy`,

  notificationBellSingleTitle: ({
    defaultValue = '',
    value,
  }: {
    defaultValue?: string;
    value: string;
  }) =>
    ({
      _onetkonto_password_changed: 'Twoje hasło zostało zmienione',
      _onetkonto_profile_data_changed: 'Twoje dane profilowe zostały zmienione',
      _onetkonto_new_device_login:
        'Zauważyliśmy logowanie do Twojego konta z nowego urządzenia',
      _onetkonto_contact_data_changed:
        'Twoje dane kontaktowe zostały zmienione',
      _onetkonto_password_is_leaked: 'Twoje hasło wyciekło',
      _onetkonto_wellcome: 'Nowość!',
    })[value] || defaultValue,

  notificationBellSingleDescription: ({
    defaultValue = '',
    value,
  }: {
    defaultValue?: string;
    value: string;
  }) =>
    ({
      _onetkonto_password_changed: 'To nie Ty? Sprawdź co możesz zrobić.',
      _onetkonto_profile_data_changed: 'To nie Ty? Sprawdź co możesz zrobić.',
      _onetkonto_new_device_login: 'To nie Ty? Sprawdź co możesz zrobić.',
      _onetkonto_contact_data_changed: 'To nie Ty? Sprawdź co możesz zrobić.',
      _onetkonto_password_is_leaked: 'Sprawdź co możesz zrobić.',
      _onetkonto_wellcome:
        'Od teraz będziemy Cię powiadamiać o zmianach i podejrzanych aktywnościach na Twoim koncie.',
    })[value] || defaultValue,

  ordersDelivered: ({
    pickupAvailableOrdersNumber,
  }: {
    pickupAvailableOrdersNumber: number;
  }) => `Masz przesyłki (${pickupAvailableOrdersNumber}) do odbioru.`,
  isDataCorrect: 'Czy udało Ci się znaleźć potrzebne informacje o zamówieniu?',

  paymentFeedbackTitle: 'Twoja opinia jest dla nas ważna!',
  paymentFeedbackContent:
    'Pomóż nam ulepszyć usługę opłacania rachunków, dzieląc się swoimi wrażeniami. Twoja opinia ma znaczenie!',
  paymentFeedbackButtonLabel: 'Zostaw opinię',
  ordersRegistrationPageTitle: 'Zamówienia w jednym miejscu',
  ordersRegistrationPageContent1: 'Zakupy w jednym wątku',
  ordersRegistrationPageContent2: 'Aktualny status przesyłki',
  ordersRegistrationPageContent3: 'Szybki dostęp do historii zamówień',
  ordersRegistrationPageContent4: 'Działa automatycznie',
  ordersRegistrationPageContent5: 'Gotowy od pierwszego zakupu',
  ordersRegistrationPageThxHeader: 'Trwa uruchamianie nowego widoku Zamówień.',
  ordersRegistrationPageThxContent:
    'Przygotowujemy dla Ciebie nowy widok Zamówień – proces może zająć kilka minut. W tym czasie możesz przejść do listy zamówień. Dziękujemy za cierpliwość!',
  ordersCancellationPageThxHeader: 'Funkcje zakupowe zostały wyłączone',
  ordersCancellationPageThxContent:
    'Dziękujemy za Twoje zaangażowanie w tworzenie lepszego produktu',
  products: 'Produkty',
  ordersNewViewTitle: 'Witaj w widoku Zamówień!',
  ordersNewViewContent:
    'Tutaj znajdziesz listę swoich zamówień. Jeśli jest pusta, to doskonały moment, aby rozpocząć zakupy!',

  surveyBusinessArticleTitle: 'Co zyskasz z planem Biznes',
  surveyBusinessArticleListItem1: ({ value }: { value?: string }) => (
    <>
      pocztę email w atrakcyjnej domenie <b>{value || '@biznes.pl'}</b>
    </>
  ),
  surveyBusinessArticleListItem2: 'całkowity brak reklam',
  surveyBusinessArticleListItem3: '1 TB pojemności skrzynki',
  surveyBusinessArticleListItem4: 'blokowanie niechcianych nadawców',
  surveyBusinessArticleListItem5:
    'zgodność z RODO - możliwość zawarcia indywidualnej umowy powierzenia przetwarzania danych',
  surveyBusinessArticleListItem6: 'dedykowaną pomoc Biura Obsługi Klienta',

  nextMonthDayPicker: 'Następny',
  prevMonthDayPicker: 'Poprzedni',
};
