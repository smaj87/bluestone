// eslint-disable-next-line no-unused-vars
import {
  Offer,
  Order,
} from 'commons/share_app/components/OrderAndDelivery/types';
import { NewslettersSortType } from 'commons/share_app/containers/Newsletters/types';
import { OrderStatus } from 'commons/share_app/containers/Orders/types';
import { CommonsTranslations } from 'commons/translations/types';

const uk: CommonsTranslations = {
  appOnet: 'Домашня сторінка Onet.pl',
  appOnetProduct: 'Домашня сторінка Onet Poczta',
  appGazeta: 'Домашня сторінка Gazeta.pl',
  appGazetaProduct: 'Домашня сторінка Poczta Gazeta',
  logoOnetAlt: 'Логотип Onet',
  logoOnetProductAlt: 'Логотип Onet Poczta',
  logoGazetaAlt: 'Логотип Gazeta',
  logoGazetaProductAlt: 'Логотип Gazeta Poczta',

  landmarkAriaLabelSidebar: 'Вибір пов’язаних додатків',

  ariaUserMenu: 'Меню користувача',

  today: 'Сьогодні',
  yesterday: 'Вчора',
  to: 'це',
  or: 'або',
  where: 'Де',
  ctaCopy: 'Копія',
  ctaCopyContent: 'Копіювати', // from chatGPT
  ctaCancel: 'Скасувати',
  ctaSave: 'Збережи',
  ctaSend: 'Надіслати',
  ctaSendSchedule: 'Плануйте відправлення', // from chatGPT
  ctaCancelSchedule: 'Скасувати відправлення', // from chatGPT
  ctaSchedule: '', // from chatGPT
  ctaEdit: 'Редагувати',
  ctaAdd: 'Додати',
  ctaAddFolder: 'Добавити папку',
  ctaDelete: 'Видалити',
  ctaClose: 'Закрити',
  ctaOpen: 'відчинений',
  ctaBack: 'Повернення',
  ctaYes: 'Так',
  ctaNo: 'НІ',
  ctaReset: 'Скинути',
  ctaRefresh: 'Оновити',
  ctaChange: 'змінити',
  ctaBackToHomePage: 'Перейдіть на головну сторінку',
  ctaUserMenu: 'Меню користувача', // from chatGPT
  ctaLogout: 'Вийти',
  ctaSwitchAccount: 'PЗмінити обліковий запис',
  ctaReportProblem: 'Повідомити про проблему',
  ctaAccountSettings: 'Налаштування аккаунта',
  ctaMore: 'Більше',
  ctaLearnMore: 'Дізнайтесь більше',
  ctaTryAgain: 'Cпробуйте ще раз',
  ctaOk: 'Ok',
  ctaChangeMode: ({ isDarkMode }: { isDarkMode: boolean }) =>
    `${isDarkMode ? 'Вибрано темну тему' : 'Вибрано світлу тему'}. ${isDarkMode ? 'Встановіть світлу тему' : 'Встановити темну тему'}`,
  ctaAll: 'Все',
  ctaShowCode: 'Показати код',
  ctaCopyCode: 'Копіювати код',
  ctaCopyAndGoToCouponUrl: 'Скопіюйте код і перейдіть до промоції.',
  ctaShowOthers: 'Переглянути інші',
  ctaHideOthers: 'Сховай інших',
  ctaShowLess: 'Згорнути',
  ctaShowMore: 'Розгорніть',
  ctaAdjust: 'Налаштувати',
  ctaConfirmSelected: 'Підтвердьте свій вибір',
  ctaSwitchOff: 'Вимкнути',
  ctaSwitchOn: 'Ввімкнути',
  ctaBackModal: 'Поверніться',
  ctaReply: 'Відписати',
  ctaReplyAll: 'Усім',
  ctaForward: 'Переказати',
  ctaShowAllProducts: ({ productsAmount }: { productsAmount: number }) =>
    `Показати товари (${productsAmount})`,
  ctaShowMessages: 'Показати повідомлення',
  ctaCheckAll: 'Зазначити усі',
  ctaUncheckAll: 'Відзначити усі',
  ctaOpenSearch: 'відкрити пошукову систему',
  ctaOpenSidebar: 'Відкрийте меню програми',
  ctaCloseSearch: 'закрити пошукову систему',
  ctaCloseSidebar: 'Закрити меню програми',
  ctaNewMail: 'Напиши повідомлення',
  ctaSearch: 'Пошук',
  ctaClear: 'Видалити',
  ctaGoTo: 'Перейдіть до',
  ctaWhySmart: 'Чому я це бачу?',
  ctaNextMail: 'Наступне повідомлення',
  ctaNextMailShort: 'Наступне',
  ctaPrevMail: 'Попереднє повідомлення',
  ctaPrevMailShort: 'Попереднє',
  ctaMarked: 'Відмічений', // chatgpt
  ctaUnmarked: 'Позначений', // chatgpt
  ctaMarkFavourite: 'Позначити повідомлення', // chatgpt
  ctaUnMarkFavourite: 'Видалити позначку', // chatgpt
  ctaNextPage: ({ page }: { page?: number }) => `Наступна сторінка: ${page}`,
  ctaPreviousPage: ({ page }: { page?: number }) =>
    `Попередня сторінка: ${page}`,
  ctaSeen: 'Прочитана',
  ctaUnseen: 'Непрочитана',
  ctaShow: 'Показати',
  ctaBcc: 'Схована копія',
  ctaPrint: 'Друкувати',
  ctaSpam: 'СПАМ',
  ctaNoSpam: 'Не СПАМ',
  ctaMarkAsSpam: 'Познач як СПАМ',
  ctaMarkAsNotSpam: 'Це не СПАМ',
  ctaDownload: 'Завантажити',
  ctaDownloadAttachment: 'Завантажити прикріплений файл',
  ctaGoToMail: 'Йти до списку',
  ctaGoToMailShort: 'Йти до',
  ctaUnsubscribe: 'Відписатися',
  ctaShowHistory: 'Показати історію переписки',
  ctaMoveTo: 'Перенести',
  ctaShowProducts: 'Показати товари',
  ctaNotificationBell: ({ counter }: { counter?: number }) =>
    `Сповіщення${counter ? ` (непрочитані: ${counter})` : ''}`, // chat GPT
  ctaGoToMainContent: 'Перейти до вмісту', // chat GPT

  thankYou: 'дякую!',
  showMore: 'Показати більше',
  showLess: 'Показати менше',
  empty: 'брак',
  isFetching: '',
  ad: 'Pеклама',
  webmail: 'Пошта',
  contacts: 'Контакти',
  calendar: 'Календар',
  webmailPlus: 'Poczta Plus',
  settings: 'Налаштування',
  courier: "Замовити кур'єра",
  help: 'Допомога',
  newspaperAd: 'Рекламний журнал',
  coupons: 'Купони',
  coupon: 'Купон',
  recommend: 'Polecane',
  newsletters: 'Новини',

  modalConfirmationIrreversible: 'Операція незворотна.',
  modalConfirmationTitle: 'Підтвердження',

  modalUserMenuTitle: 'Меню користувача', // from chatGPT

  modalScheduleTitle: 'Заплануйте відправлення повідомлення', // from chatGPT

  modalEditScheduleTitle: 'Редагування запланованого повідомлення', // from chatGPT
  modalEditScheduleDescription:
    'Редагування запланованого повідомлення скасує його відправлення. Хочете продовжити?', // from chatGPT

  webmailBannerAlt01: 'Рекламний банер: Poczta Plus',
  webmailBannerAlt02: 'Рекламний банер: Poczta Biznes',
  webmailBannerDesc01:
    'Poczta Plus: Poczta без реклами та необмежений доступ до статей з різних редакцій в Onet Premium. Лише 9,92 zł на місяць при річній оплаті.',
  webmailBannerDesc02:
    'Poczta Biznes: Poczta без реклами та доступ, зокрема, до контенту Forbes і Business Insider.',

  labelAttachment: 'Повідомлення з вкладенням', // from chatGPT
  labelFolder: 'Папка', // from chatGPT
  labelMarkMailAs: 'Tегувати повідомлення як', // from chatGPT

  fromToNumber: ({ from, to }: { from: number; to: number }) =>
    `від ${from} до ${to}`,
  fromNumber: ({ number }: { number: number }) => `від ${number}`,

  expiredSessionTitle: 'Сеанс закінчився!',
  expiredSessionDescription:
    'Ваш сеанс закінчився. Оновіть його, натиснувши кнопку нижче.',

  appErrorMessage: 'Сталася внутрішня помилка програми.',
  appErrorApologize: 'Ми вибачаємося',

  poweredBy: 'Працює на',
  developedBy: 'Розроблено',
  regulation: 'Cтатут',
  appVersion: ({ value }: { value?: string }) => `Версія застосунку: ${value}`,

  fetchingMessage: 'Завантаження даних',

  offlineMessage:
    'Brak dostępu do internetu. Sprawdź swoje połączenie i spróbuj ponownie.', // TODO

  orders: 'Замовлення',
  ordersHeaderTitle: 'Замовлення та доставки',
  ordersBeta: 'beta',
  ordersHeaderInfo:
    'Ви маєте ранній доступ до нових функцій. Якщо у вас є зауваження, проблеми, ви бачите якусь помилку або хочете відписатися від програми ',
  ordersHeaderInfoShops: 'Чому я не бачу своїх/усіх замовлень?',
  ordersHeaderReportShops: 'Залишити відгук / повідомити про проблему',
  ordersHeaderLinkInfo: 'Як я можу відмовитися від участі у програмі?',
  ordersEnable: 'Показати список замовлень',
  ordersError: 'Виникла помилка під час завантаження замовлень',
  ordersEmptyList: () => (
    <>
      Немає прийнятних замовлень
      <br />
      обрані критерії
    </>
  ),
  ordersEmptyAllLists: () => (
    <>
      <b>Тут щось порожньо!</b>
      <br />
      Знаєте, чого тут не вистачає? Ви! Зробіть свої перші покупки та подивіться
      як ми організуємо/покажемо ваші повідомлення про покупки.
    </>
  ),
  ordersInProgress: 'Протягом',
  ordersPickupAvailable: 'Готовий до збору',
  ordersDone: 'Виконано',
  ordersFetchingStatuses: 'Завантажую поточні статуси замовлень.',
  ordersFetchingStatusesError: 'Не вдалося отримати статуси замовлення.',
  ordersLoadMore: 'Завантажте більше',
  orderBackToList: 'Повернутися до списку замовлень',
  orderError: 'Помилка завантаження замовлення',
  orderNotFound:
    'Немає замовлення з вказаним номером.Немає замовлення з вказаним номером.',
  orderFromSingle: 'Від',
  orderThrought: 'за',
  orderDeliveryMethod: 'форма доставки',
  orderOrdered: 'замовив',
  orderCreated: 'створений',
  orderTotalPrice: 'Включно з доставкою',
  orderAddress: 'АДРЕСА ДОСТАВКИ',
  orderDeliveryNumber: 'НОМЕР ВІДСТЕЖЕННЯ',
  orderCarrierPhoneNumber: 'Контакт з курєром',
  orderPhoneNumber: 'Номер телефону',
  orderPickupCode: 'Код отримання',
  orderSendingCode: 'Код відправлення',
  orderDeliveryTrack: 'Відстежуйте свою посилку',
  orderEdit: 'Редагувати порядок',
  orderChangeStatusToClosed: 'Позначити як завершене',
  orderChangeStatusModalText:
    'Ви впевнені, що хочете позначити це замовлення як виконане ?',
  ordersUpdated: 'Замовлення оновлено',
  orderUpdateError: 'Під час оновлення сталася помилка',

  getOrderTabStatus: ({ orderStatus }: { orderStatus: OrderStatus }) =>
    orderStatus
      ? {
          _OrderProcessing: 'Підготовка вантажу',
          _OrderInTransit: 'В дорозі',
          _OrderDelivered: 'Завершено',
          _OrderCancelled: 'Скасовано',
          _OrderPaymentDue: 'Оплачено',
          _OrderPickupAvailable: 'До отримання',
          _OrderProblem: 'Проблема з замовленням',
          _OrderReturned: 'Повернуто',
          _OrderNew: 'Нове замовленняe',
          _OrderDelayed: 'Затримується',
        }[`_${orderStatus}`]
      : '',

  getOrderStatus: ({ orderStatus }: { orderStatus: Order['orderStatus'] }) =>
    orderStatus
      ? {
          _processing: 'Підготовка вантажу',
          _pickupavailable: 'Можна зібрати',
          _delivered: 'Надано',
          _intransit: 'В дорозі',
          _cancelled: 'Скасовано',
          _problem: 'Проблема із замовленням',
          _returned: 'Повернуто',
          _paymentdue: 'Очікування платежу',
        }[`_${orderStatus}`]
      : '',

  orderFrom: 'Замовлення від',
  orderPrice: 'Загальна вартість',
  orderDetails: 'Деталі замовлення',
  parcelDeliveryDetails: 'Деталі доставки',
  ctaTrackPackage: 'Відстежуйте своє відправлення',
  deliveryAddress: 'Адреса доставки',
  deliveryDate: 'Доставка:',
  deliveryFrom: 'Доставка з',
  deliveryNumber: 'przesyłka nr',

  weekDayName: ({ day, isShort = false }: { day: number; isShort?: boolean }) =>
    (isShort
      ? ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
      : [
          'неділя',
          'понеділок',
          'вівторок',
          'Середа',
          'четвер',
          "П'ятниця",
          'Субота',
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
          'січ',
          'лют',
          'бер',
          'квіт',
          'трав',
          'черв',
          'лип',
          'серп',
          'вер',
          'жовт',
          'лист',
          'груд',
        ]
      : [
          'січня',
          'Лютий',
          'березень',
          'квітень',
          'Може',
          'червень',
          'липень',
          'серпень',
          'Вересень',
          'жовтень',
          'Листопад',
          'Грудень',
        ])[month] || 'unknown',

  monthNameInFullDate: ({ month }: { month: number }) =>
    [
      'січня',
      'лютого',
      'березня',
      'квітня',
      'травня',
      'червня',
      'липня',
      'серпня',
      'вересня',
      'жовтня',
      'листопада',
      'грудня',
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

  appSettings: 'Налаштування програми',
  setTheme: 'Налаштуйте зовнішній вигляд',
  themeDark: 'Темний',
  themeLight: 'Cвітло',

  selectThemeMode: 'Режим',
  selectThemeColor: 'Колір',
  selectThemeBackground: 'Фон',

  colorYellow: 'Жовтий',
  colorBlue: 'Синій',
  colorGreen: 'Зелений',
  colorRed: 'Червоний',
  colorMagenta: 'Маджента',
  colorAzure: 'Синій',

  backgroundEmpty: 'брак',
  backgroundBeach: 'Пляжний',
  backgroundMountain: 'Гори',

  notificationThemeUpdateError: 'Виникла проблема з оновленням теми.',
  notificationLangUpdateError: 'Виникла проблема з оновленням мови.',

  weather: 'Погода',

  noAdsWebmail: 'Пошта без реклами', // copilot
  ctaCheck: 'Перевірте', // copilot

  paidPlanEnd: ({ counter }: { counter: number }) =>
    counter === 1 ? (
      <>
        <span>{counter}</span> день до кінця платної розсилки
      </>
    ) : (
      <>
        <span>{counter}</span> дні до кінця платної розсилки
      </>
    ), // chat GPT
  paidPlanEndToday: 'Твій пакет закінчується сьогодні', // chat GPT
  ctaRenew: 'Продовжити', // chat GPT

  maximumNumber: ({ max }: { max: number }) =>
    `Максимальна кількість символів: ${max}`,
  genericError: 'Недійсний формат.',
  groupExist: 'Вже є така група',

  searchListsPlaceholder: 'Шукати листи',
  courierTooltipMsg:
    "Порівняйте кур'єрів та відправляйте посилки, не виходячи з дому.",
  checkedMessagesCounter: ({ counter }: { counter: number }) =>
    `Вибрано: ${counter}`,

  newslettersText1: () => (
    <>
      Ми вирішили проблему переповнених поштових скриньок з розсилками.
      <br />У цій папці одним клацанням ви можете відписатися від розсилок від
      обраного відправника та видалити попередні повідомлення від нього.
    </>
  ),
  newslettersText2:
    'Якщо ви хочете продовжувати контактувати з обраною компанією - у новій папці ви будете мати швидкий доступ до контенту, який вас цікавить.',
  newsletterRemoveMailsModalTitle: 'Відписано від розсилки',
  newsletterRemoveMailsModalText:
    'Ви скасували підписку на розсилку. Ви хочете видалити всі отримані повідомлення',
  newsletterRemoveMails: 'Так, видалити повідомлення',
  newslettersEmptyTitle: 'У вас ще немає підписок',
  newslettersEmptyText:
    'Бажаєте отримувати інформацію про найкращі пропозиції? Підпишіться на розсилку улюблених магазинів і не пропустіть жодної можливості',
  newslettersEnable: 'Показати новини',
  smartFunctionsText:
    'Увімкніть інтелігенті функції, щоб скористатися рішенням',
  newslettersErrorMsg: 'Під час оновлення сталася помилка.',
  newslettersError:
    'Під час завантаження інформаційних бюлетенів сталася помилка',
  newslettersUnsubscribeTitle: 'Скасувати підписку',
  newslettersRedirectText:
    'Щоб завершити процес скасування підписки, відвідайте веб-сайт партнера.',
  newslettersRedirectToAllTitle: 'Керуйте інформаційними бюлетенями',
  newslettersRedirectToAllText:
    'Перегляньте список усіх інформаційних бюлетенів, від яких ви можете скасувати підписку.',
  newslettersRedirectToAllCheckbox: 'Більше не показувати це повідомлення',
  newslettersRedirectToAllButton: 'Перейдіть до інформаційних бюлетенів',
  newsletterCounter: ({ counter }: { counter: number }) =>
    `${counter} повідомлення за останні 30 днів`,

  newsletterItemCounter: ({
    counter,
    seener,
  }: {
    counter: number;
    seener: number;
  }) => `${seener} з ${counter} повідомлення за останні 30 днів.`,

  newsletterDeleteOlderThan: ({ daysCount }: { daysCount: number }) =>
    `Видалити повідомлення старші за ${daysCount} днів`, // from chatGPT
  newsletterDeleteOlderThanModalTitle: 'Видалити всі повідомлення', // from chatGPT
  newsletterDeleteOlderThanModalText: ({ daysCount }: { daysCount: number }) =>
    `Ви хочете видалити всі повідомлення старші за ${daysCount} днів, які ви отримали від `, // from chatGPT
  newsletterReportProblemModalTitle: 'Повідомити про проблему з виведенням', // from chatGPT
  newsletterReportProblemModalText: `Збираєтеся заявити про проблему з відпискою від розсилки від `, // from chatGPT
  reportProblemSuccess: 'Дякуємо за звернення!', // from chatGPT
  newsletterDeleteSucces: ({ counter }: { counter: number }) =>
    `Вибраніповідомлення(${counter}) були переміщені до папки ‘Кошик’.`, // from chatGPT
  orderModalTitle: 'Придбані продукти',

  couponsDescription:
    'Тут ви знайдете всі актуальні купони на знижки, акції та пропозиції з ваших повідомлень, а також від наших партнерів.',
  couponsEnable: 'Показати купони',
  couponsEmptyTitle: 'У вас ще немає купонів',
  couponsEmptyDescription:
    'Заходьте сюди регулярно, я впевнений, що вони скоро повернуться. Підпишіться на розсилку від улюблених магазинів і вказуйте свою адресу Onet Пошти, роблячи покупки онлайн, щоб отримувати купони.',
  couponsError: 'Під час завантаження купонів сталася помилка',
  couponsDiscountsCurrentTitle: 'Купони з твоїх повідомлень', // from chatGPT
  couponsDefaultTitle: 'Найпопулярніші бренди', // from chatGPT
  couponsExpiredTodayAndNew: 'Термін дії закінчується сьогодні та новий', // from chatGPT
  couponsFilterFrom: 'Фільтрувати купони від', // from chatGPT
  validUntil: ({ date }: { date: string }) => `Дійсний до: ${date}`,

  copyInfo: 'Скопійовано!', // from chatGPT
  couponsExpired: 'Дійсний до ',
  couponsPlaceholder: 'Подивіться пропозицію', // from chatGPT
  cashbackDescription:
    'Тут ви знайдете пропозиції з кешбеком з ваших повідомлень.',
  cashbackTextHeadline: ({ price }: { price: string }) =>
    `${price || ''}% кешбеку`,

  cashbackTextHeadline2: ({ price }: { price: string }) =>
    `${price || ''} кешбеку`,
  cashbacksEnable: 'Показати список пропозицій з кешбеком',
  cashbacksEmptyTitle: 'У вас ще немає пропозицій з кешбеком',
  cashbacksEmptyDescription:
    'Заходьте сюди регулярно, я впевнений, що вони скоро повернуться. Підпишіться на розсилку від улюблених магазинів і вказуйте свою адресу Onet Пошти, роблячи покупки онлайн, щоб отримувати пропозиції з кешбеком і відновлювати навіть 25% витрат за покупки онлайн.',
  cashbacksError: 'Сталася помилка під час отримання пропозицій з кешбеком',
  cashbacksGoTo: 'Активуй Кешбек',
  cashbacksShow: 'Показати пропозиції', // from chatGPT
  cashbackDiscount: ({ value }: { value?: string }) => (
    <>
      <b>{value}</b>% кешбеку
    </>
  ), // z cashbackTextHeadline
  cashbackDiscount2: ({ value }: { value?: string }) => (
    <>
      <b>{value}</b>% кешбеку
    </>
  ), // z cashbackTextHeadline2

  logoGoodie: 'Логотип Goodie',

  cashbackGoodieInfoTitle:
    ' Зроби першу покупку та отримай 20 злотих у подарунок.', // from chatGPT
  cashbackGoodieInfoContent:
    'Ось переклад українською: Пропозиція для нових користувачів goodie, які зареєструють обліковий запис через Onet Poczty і здійснять одну або більше транзакцій на суму не менше 200 злотих. Деталі в ', // from chatGPT
  cashbackGoodieInfoLink: 'правилах.', // from chatGPT
  cashbackTandW: 'Транзакції та виплати', // from chatGPT

  cashbackDefaultHiWTitle1: 'зареєструйся', // from chatGPT
  cashbackDefaultHiWContent1:
    'Натисніть "Активувати кешбек" або "Перейти" у списку пропозицій, щоб скористатися послугою.', // from chatGPT
  cashbackDefaultHiWTitle2: 'роби покупки', // from chatGPT
  cashbackDefaultHiWContent2:
    'Ми перенаправимо вас на сайт goodie. Там виберіть магазин і зробіть покупку, натиснувши "Перейти до магазину".', // from chatGPT
  cashbackDefaultHiWTitle3: 'перевіряйте транзакції', // from chatGPT
  cashbackDefaultHiWContent3:
    'Натисніть "Транзакції та виплати", щоб перевірити статус повернень і вивести кешбек на банківський рахунок.', // from chatGPT
  cashbackDefaultHiWTitle4: 'отримуйте наступні повернення', // from chatGPT
  cashbackDefaultHiWContent4:
    'Вказуйте адресу в Onet Poczcie під час покупок і повертайтеся до цієї папки за новими пропозиціями.', // from chatGPT

  schemaCashbackPlaceholder:
    'У цьому магазині ви зможете повернути частину грошей, витрачених на покупки',
  cashback: 'Кешбек',
  cashbackOrganicTitle: 'Кешбек з вашого повідомлення', // from chatGPT
  cashbackDefaultTitle: 'Найпопулярніші магазини', // from chatGPT
  promoCardOmnibusPrice: 'Найнижча ціна за останні 30 днів: ', // from chatGPT

  ariaShowProductDetails: ({
    productName,
  }: {
    productName?: Offer['itemOffered']['name'];
  }) => `Показати деталі продукту: ${productName}`,

  userConfigAgreementsModalTitleOnet: 'Перед тим, як піти в Onet Poczta',
  userConfigAgreementsModalTitleGazeta: 'Перед походом на пошту',
  userConfigAgreementsModalCtaActivateAllAndExit:
    'Вмикайте все і заходите в пошту',
  userConfigAgreementsModalSmartFunctionsTitle:
    'Увімкніть інтелектуальні функції та скористайтеся, зокрема, такими можливостями:',
  userConfigAgreementsModalSmartFunctionsListItem1:
    'Автоматичне сортування поштової скриньки. Ваші повідомлення будуть розміщуватися в окремих папках (наприклад, пропозиції, спільноти, сповіщення, електронні рецепти, електронні платежі).',
  userConfigAgreementsModalSmartFunctionsListItem2:
    'Покращеного антиспаму, заснованого на машинному навчанні. Це означає ще менше небажаних повідомлень у вашій скринці і більшу безпеку.',
  userConfigAgreementsModalSmartFunctionsListItem3:
    'Легкого доступу до знижок купонів, вашого бронювання, квитків та оплати рахунків. Прямо з електронного листа.',
  userConfigAgreementsModalSmartFunctionsListItem4:
    'Привабливі пропозиції, адаптовані до того, що вам подобається та використовуєте кьорю.',
  userConfigAgreementsModalSmartFunctionsListItem5:
    'Можливості швидко скасувати підписку на розсилки, які вас більше не цікавлять.',
  userConfigAgreementsModalSmartFunctionsText:
    'Щоб увімкнути інтелектуальні функції, нам потрібна ваша згода на автоматичний аналіз комерційних електронних листів, які надходять у вашу папку "Вхідні". Зверніть увагу, що ми не отримуємо інформацію про країну від окремих осіб. Ми також не передаємо їх третім особам. Згода надається за допомогою кнопки «Включити».',
  userConfigAgreementsModalSmartFunctionsDisableInfoGazeta:
    'Інакше деякі функції, зокрема перелічені вище, будуть вимкнені або обмежені. Ви можете знову ввімкнути його в налаштуваннях пошти.',
  userConfigAgreementsModalSmartFunctionsDisableInfoOnet:
    'Якщо цього не зробити, певні функції, включно з переліченими вище, будуть вимкнені або обмежені. Ви можете повторно ввімкнути його в налаштуваннях Onet Poczta.',
  userConfigAgreementsModalPrivacyPolicyText1Onet:
    'Ви можете будь-коли відкликати свою згоду, знявши відповідну опцію в налаштуваннях Onet Poczta.',
  userConfigAgreementsModalPrivacyPolicyText1Gazeta:
    'Ви можете будь-коли відкликати свою згоду, знявши відповідну опцію в налаштуваннях Пошти.',
  userConfigAgreementsModalPrivacyPolicyText2Onet:
    'Адміністратором персональних даних є Ringier Axel Springer Polska sp. z o.o. з зареєстрованим офісом у Варшаві, вул. Доманєвська 49.',
  userConfigAgreementsModalPrivacyPolicyText2Gazeta:
    'Адміністратором персональних даних є Agora S.A. з зареєстрованим офісом у Варшаві, вул. Черська 8/10.',
  userConfigAgreementsModalPrivacyPolicyText3:
    'Надання даних є добровільним, і особа, яка надає дані, має право на доступ до даних, право на виправлення даних, право на обмеження обробки, право на видалення даних, висловлення заперечень щодо обробки, а також право подати скаргу до орган нагляду за захистом персональних даних.',
  userConfigAgreementsModalPrivacyPolicyText3Expanded:
    'Надання даних є добровільним, і особа, яка надає дані, має право на доступ до даних, право на виправлення даних, право на обмеження обробки, право на видалення даних, висловлення заперечень щодо обробки, а також право подати скаргу до орган нагляду за захистом персональних даних - Президент Управління захисту персональних даних.',
  userConfigAgreementsModalPrivacyPolicyText4:
    'У тій мірі, в якій зазначено вище дані обробляються з метою надання Сервісу або обробляються на основі згоди, ви також маєте право передавати дані. Ви можете відкликати свою згоду в будь-який момент, але якщо така згода була надана в обмін на знижку або інший вид прибутку, її відкликання може призвести до зміни умов договору. Відкликання згоди не впливає на законність обробки на основі згоди до її відкликання.',
  userConfigAgreementsModalPrivacyPolicyText5:
    'Надані вами дані та зібрана інформація про вашу діяльність будуть оброблені для маркетингових цілей Адміністратора, проти яких ви можете заперечити. Детальну інформацію можна знайти в',
  userConfigAgreementsModalPrivacyPolicyPrivacyPolicy:
    'Політика конфіденційності',

  replyAllInfo: ({ content, count }: { content?: object; count: number }) => (
    <>
      до {content || count} {count === 1 ? 'контакту' : 'контактів'}
    </>
  ),

  labelNew: 'Нове',
  labelNew2: 'Нова',
  labelDate: 'Дата',
  labelHour: 'Час',

  emojiModalTitle: 'Емоджі',

  ctaNewMailContactsFilterFavorite: 'Улюблені',
  ctaNewMailContactsFilterFromPhone: 'З телефону',

  mailScheduleDateError: 'Неправильна дата',

  // NEWMAIL

  // fonts
  _font_serif: 'З шрифтом засічки', // From chatgpt
  _font_noSerif: 'Без засічок', // From chatgpt
  _font_wide: 'Широка', // From chatgpt
  _font_narrow: 'Вузька', // From chatgpt
  _font_equalSpace: 'Фіксована ширина', // From chatgpt
  _font_tahoma: 'Tahoma', // From chatgpt
  _font_verdana: 'Verdana', // From chatgpt

  // font sizes
  _fontSize_sm: 'Малий', // From chatgpt
  _fontSize_md: 'Середній', // From chatgpt
  _fontSize_lg: 'Великий', // From chatgpt
  _fontSize_xlg: 'Дуже великий', // From chatgpt

  // text colors
  _black: 'Чорний', // From chatgpt
  _grey: 'Сірий', // From chatgpt
  _lightgrey: 'Світло-сірий', // From chatgpt
  _white: 'Білий', // From chatgpt
  _darkred: 'Темно-червоний', // From chatgpt
  _red: 'Червоний', // From chatgpt
  _pink: 'Рожевий', // From chatgpt
  _purple: 'Фіолетовий', // From chatgpt
  _darkblue: 'Темно-синій', // From chatgpt
  _blue: 'Синій', // From chatgpt
  _lightblue: 'Світло-синій', // From chatgpt
  _darkgreen: 'Темно-зелений', // From chatgpt
  _green: 'Зелений', // From chatgpt
  _lightgreen: 'Світло-зелений', // From chatgpt
  _orange: 'Помаранчевий', // From chatgpt
  _yellow: 'Жовтий', // From chatgpt

  editor: 'Pедактор ', // From chatgpt
  editImage: 'Редагувати зображення', // From chatgpt
  clipboardAccessTitle: 'Відсутній доступ до буфера обміну', // From chatgpt
  clipboardAccessText:
    'Щоб вставити зображення, дозвольте доступ до буфера обміну або використовуйте гарячі клавіші:', // From chatgpt
  clipboardAccessAction: 'Дія', // From chatgpt
  clipboardAccessShortcuts: 'Комбінації клавіш', // From chatgpt
  clipboardAccessShortcut: 'Гаряча клавіша', // From chatgpt
  clipboardAccessPasteLabel: 'Вставити', // From chatgpt
  clipboardAccessPasteAction: 'ctrl/cmd + v',
  clipboardAccessPasteWithoutFormattingLabel: 'Вставити без форматування', // From chatgpt
  clipboardAccessPasteWithoutFormattingAction: 'ctrl/cmd + shift + v',
  clipboardAccessCutLabel: 'Вирізати', // From chatgpt
  clipboardAccessCutAction: 'ctrl/cmd + x',
  clipboardAccessCopyAction: 'ctrl/cmd + c',
  imageConversionTitle: 'Оберіть розмір зображення', // From chatgpt
  imageConversionText: 'Ви вставляєте велике зображення. Хочете його зменшити?', // From chatgpt
  ctaCurrentQualityInfo: 'Оригінальне зображення', // From chatgpt
  ctaLowQualityInfo: 'Маленьке зображення', // From chatgpt
  ctaMidQualityInfo: 'Середнє зображення', // From chatgpt
  ctaHighQualityInfo: 'Велике зображення', // From chatgpt
  editLink: 'Редагувати посилання', // From chatgpt
  bold: 'Жирний', // From chatgpt
  italic: 'Курсив', // From chatgpt
  strikethrough: 'Перекреслений', // From chatgpt
  underline: 'Підкреслений', // From chatgpt
  addImage: 'Додати зображення', // From chatgpt
  addLink: 'Додати посилання', // From chatgpt
  addAttachment: 'Додати вкладення', // From chatgpt
  emptyFolderTitle: 'Папка порожня', // From chatgpt
  textFontSize: 'Розмір тексту', // From chatgpt
  fontFamily: ({ value }: { value: string }) => `${value}`,
  setColor: 'Встановіть колір', // From chatgpt
  insertList: 'Вставити список', // From chatgpt
  insertOrderedList: 'Вставити нумерований список', // From chatgpt
  scaleImage: 'Масштабувати зображення', // From chatgpt

  linkEditDisplayText: 'Текст для відображення', // From chatgpt
  linkEditTitle: 'Заголовок', // From chatgpt
  linkEditType: 'Тип посилання', // From chatgpt
  linkEditTypeUrl: 'Url', // From chatgpt
  linkEditTypeMail: 'E-mail', // From chatgpt
  linkEditEmail: 'Адреса e-mail', // From chatgpt
  linkEditUrl: 'Адреса url', // From chatgpt
  linkEditTarget: 'Відкрити посилання в...', // From chatgpt
  linkEditTargetSelf: 'Поточне вікно', // from chatGPT
  linkEditTargetBlank: 'Нове вікно', // from chatGPT
  imageEditDescription: 'Альтернативний опис', // from chatGPT
  imageEditWidth: 'Ширина (px)', // from chatGPT
  imageEditWidthInfo: ({ value }: { value: number }) =>
    `Максимальна ширина - ${value}px`, // from chatGPT
  imageEditHeight: 'Висота  (px)', // from chatGPT
  imageEditHeightInfo: ({ value }: { value: number }) =>
    `Максимальна висота - ${value}px`, // from chatGPT
  imageKeepRatio: 'Зберегти пропорції', // from chatGPT
  urlValidationError: 'Введіть правильне посилання.', // from chatGPT
  ctaCheckFavourite: 'Позначити як улюблене', // from chatGPT
  ctaUncheckFavourite: 'Видалити з улюблених', // from chatGPT
  ctaMailDetails: 'Деталі повідомлення', // from chatGPT
  ctaMailHeaders: 'Заголовки новин', // from chatGPT

  labelSendBy: ({ value }: { value?: string }) => (
    <>
      <b>відправлено через</b> {value}
    </>
  ), // from chatGPT
  labelSendTo: ({ value }: { value?: string }) => `це ${value}`, // from chatGPT
  labelSendToMany: ({ value }: { value: number }) =>
    `це багато отримувачів (${value})`, // from chatGPT

  embeddedImages: 'Вбудовані зображення', // from chatGPT
  images: 'Зображення', // from chatGPT
  replyTo: 'Відповідь до', // from chatGPT
  securities: 'Захисти', // from, chatGPT

  attachmentsTitle: 'Вкладення',
  attachmentPreviewUnavailable:
    'Попередній перегляд недоступний для цього файлу.', // from copilot
  ctaShowPreview: 'Показати попередній перегляд',
  ctaDownloadAll: ({ value }: { value?: string }) =>
    `Завантажити усі (${value})`,
  fileSize: ({ value }: { value?: object }) => (
    <>Цей файл має розмір {value}.</>
  ), // from copliot
  defaultFileName: "Ім'я вкладення", // from ReadMail/labelAttachName
  ctaAttachmentDownload: ({ name }: { name?: string }) =>
    `Завантажте вкладення: ${name}`, // from copilot
  ctaAttachmentPreview: ({ name }: { name?: string }) =>
    `Попередній перегляд вкладень: ${name}`, // from copilot
  attachmentsCounter: ({ value }: { value?: number }) =>
    `Кількість вкладень: ${value}`, // from copilot
  attachmentCaptionAudio: ({ name }: { name?: string }) =>
    `Аудіофайл з назвою: ${name}`, // from chat gpt
  attachmentCaptionVideo: ({ name }: { name?: string }) =>
    `Відеофайл з назвою: ${name}`, // from chat gpt
  attachmentTranscriptionNotAvailableVideo: 'Транскрипція відео недоступна.', // from chat gpt
  attachmentTranscriptionNotAvailableAudio: 'Транскрипція аудіо недоступна.', // from chat gpt
  attachmentPreviewError:
    'Ми не можемо відобразити попередній перегляд вкладення', // from copilot
  ctaRetry: 'Повторіть', // from copilot
  ctaBackToMailsList: 'Поверніться до списку повідомлень', // from copilot
  readMailContentFetchingError:
    'Виникла проблема з завантаженням вмісту повідомлення', // from copilot
  readMailIframeTitle: 'Зміст повідомлення', // from chat gpt

  titleSort: 'Сортуй', // from chatGPT
  sortBy: 'Сортуй по', // from chatGPT

  howItWorks: 'Подивіться, як це працює', // from chatGPT
  howItWorksCouponsTitle:
    'Тут ви знайдете знижкові коди, акції та пропозиції з ваших повідомлень.', // from chatGPT
  howItWorksCouponsSubTitle: 'ХОЧЕТЕ БІЛЬШЕ ПРОПОЗИЦІЙ?', // from chatGPT
  howItWorksCouponsIcon1Title: 'ПІДПИШІТЬСЯ НА РОЗСИЛКУ', // from chatGPT
  howItWorksCouponsIcon1:
    'Додайте свою адресу електронної пошти до списків розсилки улюблених магазинів.', // from chatGPT
  howItWorksCouponsIcon2Title: 'ВІДПРАВТЕСЯ НА ПОКУПКИ', // from chatGPT
  howItWorksCouponsIcon2:
    'Під час покупок пам’ятайте про використання цієї електронної адреси.', // from chatGPT
  howItWorksCouponsIcon3Title: 'ПОВЕРТАЙТЕСЯ ДО НАС', // from chatGPT
  howItWorksCouponsIcon3:
    'Відвідуйте цю папку, пропозиції регулярно змінюються.', // from chatGPT
  howItWorksCahbacksTitle:
    'Тут ви знайдете пропозиції з кешбеком з ваших повідомлень.', // from chatGPT

  getSort: ({ sort }: { sort: NewslettersSortType }) =>
    sort
      ? {
          _sort_from: `Ім'я відправника`, // from chatGPT
          _sort_count: 'Найчастіше відправлені', // from chatGPT
          _sort_seenRatio: 'Найчастіше читані', // from chatGPT
        }[`_sort_${sort}`]
      : '',

  readMailTitle: 'Деталь повідомлення', // copilot

  'ReadMail/Swipeable/emptyNextContent': 'Немає нових',
  'ReadMail/Swipeable/emptyPrevContent': 'Немає старших',
  'ReadMail/labelToMe': 'До мене',
  'ReadMail/ctaAlwaysShowImages': 'Завжди показувати',
  'ReadMail/ctaGoToAttachments': 'Перейти до вкладень',
  'ReadMail/ctaHideImages': 'Приховай зображення',
  'ReadMail/ctaHideImagesNow': 'приховати зображення з цього моменту',
  'ReadMail/ctaMarkAsRead': 'Позначити як прочитане',
  'ReadMail/ctaSendReadConfirmation': 'Надіслати підтвердження',
  'ReadMail/ctaShowImages': 'Показати зображення',
  'ReadMail/defaultTitle': ({ host }: { host: string }) =>
    `Деталь повідомлення - Пошта в ${host}`, // copilot
  'ReadMail/labelAskForConfirmation':
    'Відправник просить підтвердити отримання цього повідомлення.',
  'ReadMail/labelImagesAreHidden': 'Зображення не відображаються.',
  'ReadMail/labelImagesAreShown': 'Зображення відображаються.',
  'ReadMail/labelImagesFromSenderAlwaysVisible':
    'Зображення від цього відправника завжди відображаються',
  'ReadMail/labelMailbox': 'Скринька',
  'ReadMail/labelReceive': 'Отримано',
  'ReadMail/labelSent': 'Відправлено',
  sizeLabel: 'Розмір',
  'ReadMail/modalConfirmationText':
    'Ви впевнені, що хочете видалити це повідомлення?',
  'ReadMail/title': ({ host, subject }: { host: string; subject: string }) =>
    `${subject} - Пошта в ${host}`,
  'ReadMail/Alerts/fraudDescripion':
    'Це повідомлення здається відозрілим. Є ризик ії використання для шахрайства.',
  'ReadMail/Alerts/securityErrorDescription':
    'Віправник цього повідомлення не відповідає нашим вимогам безпеки.',
  'ReadMail/SecurityMessage/securityError':
    'Відстутність багатьох забезпечень повідомлень, серед яких SPF, DKIM i DMARC.',
  'ReadMail/SecurityMessage/securitySuccess':
    'Повідомлення було підписано відправником. Відправник має запезпечення домени.',
  'ReadMail/SecurityMessage/securityWarning':
    'Повідомлення має правильне тільки запезпечення SPF. E-mail не був підписаний відправником.',
  'ReadMail/SecurityMessage/securitySoftWarning':
    'Відправник цього повідомлення не відповідає нашим вимогам безпеки. Дізнатися більше.',

  'ReadMailToolbar/ctaMarkAsUnread': 'означити як непрочитану',
  'ReadMailToolbar/ctaUnsubscribe': 'Відписатися від розсилки',

  'Schema/Orders/newView': 'Перегляд нового замовлення',
  'Schema/Orders/inOnePlace': 'Тепер замовлення в одному місці!',
  'Schema/Orders/inOnePlaceText':
    'Ваші замовлення в одному місці, де ви можете швидко перевірити найважливіші дані, такі як статус відправлення.',
  'Schema/Orders/inOnePlaceDelivery': 'Теперь всі ваші посилки в одному місці!',
  'Schema/Orders/inOnePlaceDeliveryText':
    'Тримайте свої відправлення під контролем – перевіряйте статус в одному місці!',

  'Schema/Payments/turnOnInProgressText': 'Перший платіж готується...',
  'Schema/Payments/turnOnText': 'Сплачуйте рахунки зручно у своїй скриньці',
  'Schema/Payments/turnOnBtnLabel': 'Увімкніть послугу',
  'Schema/Payments/ctaPay': 'Оплатити',
  'Schema/Payments/ctaPayInvoice': 'Оплатіть рахунок', // from chatGPT
  'Schema/Payments/dateInPast': 'Темрін оплати пройшов',
  'Schema/Payments/labelAmount': ({ value }: { value?: string }) => (
    <>
      Сума: <b>{value}</b>
    </>
  ),
  'Schema/Payments/labelDeadline': ({ value }: { value?: string }) => (
    <>
      Дедлайн: <b>{value}</b>
    </>
  ),
  'Schema/Payments/labelDaysLeft': 'Термін оплати проходить',
  'Schema/Payments/labelPayDate': ({ value }: { value?: string }) => (
    <>Дата оплати: {value}</>
  ),
  'Schema/Payments/statusLabel': 'Статус',
  'Schema/Payments/statusSuccess': 'Фактура сплачена',
  Schema: ({
    defaultValue = '',
    label,
  }: {
    defaultValue?: string;
    label: string;
  }) =>
    ({
      _ctaCall: 'Зателефонувати',
      _ctaCheckIn: 'Перейти до відправи',
      _ctaModify: 'Редагувати бронювання',
      _ctaConfirm: 'Підтвердити бронювання',
      _ctaCancel: 'Анулювати бронювання',
      _ctaEventUrl: 'Сторінка події',
      _ctaGoToPage: 'Перейти до сторінки',
      _ctaOpenPage: 'Відкрити сторінку в новому вікні',
      _ctaTrackingOrder: 'Відстеження замовлення',
      _ctaViewTicket: 'Подивитися квиток',
    })[label] || defaultValue,
  'Schema/ctaGoToPage': 'Перейти до сторінки',
  'Schema/labelAirlines': 'Авіакомпанія',
  'Schema/labelAirport': 'Аеропорт',
  'Schema/labelCheckIn': 'Відправлення',
  'Schema/labelEvent': 'Подія',
  'Schema/labelFlight': 'Рейс',
  'Schema/labelFlightNumber': 'Номер рейсу',
  'Schema/labelLine': 'Лінія',
  'Schema/labelReservation': 'Резервація',
  'Schema/labelReservationNumber': 'Номер резервації',
  'Schema/labelTransit': 'Транзит',
  'Schema/labelTransportCompany': 'Транспортна компанія',
  'Schema/labelCarRental': 'Прокат автомобілів',
  'Schema/hidePassengers': 'Приховати пасажирів',
  'Schema/showPassengers': 'Показати пасажирів',
  'Schema/couponsTitleNoSender': 'Поточні акції',
  'Schema/validUntil': 'До ',
  'Schema/checkIn': 'Реєстрація',
  'Schema/checkOut': 'Виїзд',
  'Schema/restaurantLabel': 'Ресторан',

  omnibusPriceDescription: 'Найнижча ціна за останні 30 днів:', // chatgpt 4
  cheaper: 'дешевше', // chatgtp 4
  recommended: 'pекомендується', // chatgpt 4
  logo: 'Емблема', // chatgtp 4

  'containers/NewMail/labelByField': ({
    defaultValue = '',
    field,
  }: {
    defaultValue?: string;
    field: string;
  }) =>
    ({
      _Attachments: 'Вкладення',
      _ChooseSignature: 'Вибрати підпис:',
      _From: 'Від',
      _Shortbcc: 'Прихована копія',
      _Shortcc: 'Копія',
      _Shortto: 'До',
      _Subject: 'Тема',
      _bcc: 'Прихована копія',
      _cc: 'Копія до',
      _to: 'До',
    })[field] || defaultValue,

  'BottomNavigation/ButtonGoTop/ctaGoTop': 'Повернись на початок сторінки',
  'BottomNavigation/ButtonNewMailMobile/ctaNew': 'Напиши',

  attachmentsListTitle: 'Перелік додатків', // copilot
  attachmentsErrorPageTitle:
    'Виникла проблема із завантаженням списку вкладень', // copilot
  attachmentsEmptyPageTitle: 'Відсутність прикріплених файлів',

  newMailTitle: 'Нове повідомлення',
  mailsListTitle: 'Список повідомлень', // copilot
  mailsErrorPageTitle: 'Сталася помилка під час завантаження повідомлення', // copilot

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
  mauticFormNotPublished: 'Не знайдено форму.',
  mauticFormValidationError: 'Заповніть це поле.',
  mauticOrdersThxPageCta: 'Повернутися до замовлень',
  mauticOrdersThxPageHeader: 'Дякуємо за відгук!',

  notificationBellTitle: 'Повідомлення',
  notificationBellErrorTitle: 'Виникла проблема із завантаженням сповіщень', // copilot
  notificationBellEmptyTitle: 'Немає сповіщень', // copilot
  notificationBellTypeCounter: ({ value }: { value?: number }) =>
    `Сповіщення відбулося ${value} разів`, // copilot

  notificationBellSingleTitle: ({
    defaultValue = '',
    value,
  }: {
    defaultValue?: string;
    value: string;
  }) =>
    ({
      _onetkonto_password_changed: 'Ваш пароль був змінений', // copilot
      _onetkonto_profile_data_changed: 'Ваші дані профілю були змінені', // copilot
      _onetkonto_new_device_login:
        'Ми помітили вхід до вашого облікового запису з нового пристрою', // copilot
      _onetkonto_contact_data_changed: 'Ваші контактні дані були змінені', // copilot
      _onetkonto_password_is_leaked: 'Ваш пароль просочився', // copilot
      _onetkonto_wellcome: 'Новинка!', // copilot
    })[value] || defaultValue,

  notificationBellSingleDescription: ({
    defaultValue = '',
    value,
  }: {
    defaultValue?: string;
    value: string;
  }) =>
    ({
      _onetkonto_password_changed: 'Це не ти? Перевірте, що ви можете зробити.', // copilot
      _onetkonto_profile_data_changed:
        'Це не ти? Перевірте, що ви можете зробити.', // copilot
      _onetkonto_new_device_login: 'Це не ти? Перевірте, що ви можете зробити.', // copilot
      _onetkonto_contact_data_changed:
        'Це не ти? Перевірте, що ви можете зробити.', // copilot
      _onetkonto_password_is_leaked: 'Перевірте, що ви можете зробити.', // copilot
      _onetkonto_wellcome:
        'Відтепер ми будемо повідомляти тебе про зміни та підозрілу активність на твоєму акаунті.', // copilot
    })[value] || defaultValue,
  ordersDelivered: ({
    pickupAvailableOrdersNumber,
  }: {
    pickupAvailableOrdersNumber: number;
  }) => `У вас є (${pickupAvailableOrdersNumber}) посилок для отримання.`,
  isDataCorrect: 'Чи вдалося вам знайти потрібну інформацію про замовлення?',

  paymentFeedbackTitle: 'Ваша думка для нас важлива!', // copilot
  paymentFeedbackContent:
    'Допоможіть нам покращити послугу оплати рахунків, поділившись своїми враженнями. Ваша думка має значення!', // copilot
  paymentFeedbackButtonLabel: 'Залиште відгук', // copilot
  ordersRegistrationPageTitle: 'Однакові замовлення в одному місці.',
  ordersRegistrationPageContent1: 'Покупки в одному потоці',
  ordersRegistrationPageContent2: 'Актуальний статус відправлення',
  ordersRegistrationPageContent3: 'Швидкий доступ до історії замовлень',
  ordersRegistrationPageContent4: 'Працює автоматично',
  ordersRegistrationPageContent5: 'Готовий з першої покупки',
  ordersRegistrationPageThxHeader: 'Запускаємо новий вигляд Замовлення',
  ordersRegistrationPageThxContent:
    'Ми саме готуємо новий вигляд Ваших Замовлень. Це може зайняти кілька хвилин. Ми повідомимо Вас, коли все буде готово!',
  ordersCancellationPageThxHeader: 'Функції покупок вимкнено',
  ordersCancellationPageThxContent:
    'Дякуємо за вашу відданість справі створення кращого продукту.',

  products: 'PПродукти',
  ordersNewViewTitle: 'Ласкаво просимо до перегляду замовлень!',
  ordersNewViewContent:
    'Тут ви знайдете список своїх замовлень. Якщо він порожній, це чудовий час для початку покупок!',

  surveyBusinessArticleTitle: 'Що ви отримаєте з планом Biznes',
  surveyBusinessArticleListItem1: ({ value }: { value?: string }) => (
    <>
      електронну пошту в привабливому домені <b>{value || '@biznes.pl'}</b>
    </>
  ),
  surveyBusinessArticleListItem2: 'повна відсутність реклами',
  surveyBusinessArticleListItem3: '1 ТБ обсягу поштової скриньки',
  surveyBusinessArticleListItem4: 'блокування небажаних відправників',
  surveyBusinessArticleListItem5:
    'відповідність GDPR — можливість укладення індивідуального договору на обробку персональних даних',
  surveyBusinessArticleListItem6:
    'спеціалізовану підтримку Служби обслуговування клієнтів',

  nextMonthDayPicker: 'Далі',
  prevMonthDayPicker: 'Назад',
};

export default uk;
