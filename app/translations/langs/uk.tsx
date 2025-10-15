import { ReactNode } from 'commons/utils/react';

import { AppTranslations } from 'translations/types';

const uk: AppTranslations = {
  landmarkAriaLabelSettingsPanelHeader: 'Панель налаштувань', // chat GPT

  ctaMarkAsBlockedSender: 'Заблокувати відправника',

  'commonModules/SkinProvider/SkinChanger/SAVE_FAILURE':
    'Не вдалося зберегти стиль',
  'commonModules/SkinProvider/SkinChanger/chooseSkin': 'Виберіть стиль',
  _sBeach: 'Пляж',
  _sClouds: 'Хмари',
  _sDark: 'Темна',
  _sDepth: 'Глибина',
  _sForest: 'Сірий ліс',
  _sGazeta: 'Основний',
  _sGraffiti: 'Графіті',
  _sIndygo: 'Зоряна ніч',
  _sJeans: 'Джинс',
  _sLeaves: 'Листя',
  _sLightBlue: 'Синя',
  _sMagenta: 'Фуксія',
  _sRed: 'Червона',
  _sYellow: 'Жовта',
  _sYellowDefault: 'Основний',
  'commonModules/WithCalendar/notificationErrorCreateEvent':
    'Помилка при додаванні події в календар.',
  'commonModules/WithCalendar/notificationErrorFetchCalendar':
    'Помилка при завантаженні календаря.',
  'components/Banners/Onboarding/title': 'Завершіть налаштування Onet Пошти',
  'components/Banners/Onboarding/titleGazeta':
    'Завершіть налаштування Пошти Gazeta',
  'components/Banners/Onboarding/titleCompleted': 'Налаштування завершено!',
  'components/Banners/Onboarding/stepsFinished': ({
    all,
    finished,
  }: {
    all: string;
    finished: string;
  }) => `Завершено ${finished} з ${all} кроків`,
  'components/Banners/Onboarding/setAdditionalData': 'Вкажіть допоміжні дані',
  'components/Banners/Onboarding/setAdditionalDataDescription':
    'Завдяки ним зможете легко відновити доступ до пошти, якщо забудете пароль.',
  'components/Banners/Onboarding/changeSkinDescription':
    'Оберіть один із наших скінів та проявіть себе.',
  'components/Banners/Onboarding/addSignature': 'Додайте підпис',
  'components/Banners/Onboarding/addSignatureDescription':
    'Дозвольте іншим зрозуміти, хто до них пише, додавши свій унікальний підпис.',
  'components/Banners/Onboarding/notifyFriends': 'Повідомте друзів.',
  'components/Banners/Onboarding/notifyFriendsDescription':
    'Оберіть осіб, яким хочете повідомити про свою нову електронну адресу.',
  'components/Banners/Onboarding/completed':
    'Чудово! Твоя Onet Пошта готова до роботи.',
  'components/Banners/Onboarding/completedGazeta':
    'Чудово! Твоя Пошта Gazeta готова до роботи.',
  'components/Banners/Onboarding/ctaReject':
    'Не хочу відправлять зараз жодних повідомлень',
  'components/Banners/Onboarding/addUserNameLabel':
    'Впишіть назву, яку в полі “Від” побачать отримувачі Вашого повідомлення.',
  'components/Banners/Onboarding/addUserNamePlaceholder': "Ім'я та прізвище",
  'components/Banners/Onboarding/addUserDefaultNameInfo':
    'Як початкову назву ми використали тут ім’я та прізвище, вказані під час реєстрації.',
  'components/Banners/Onboarding/addSignatureLabel':
    'У листуванні з друзями, родиною чи співробітниками можете використовувати підписи, які автоматично додаватимуться до листів, які Ви висилатимете.',
  'components/Banners/Onboarding/addFriendsText':
    'Впишіть електронні адреси своїх знайомих, аби вони отримали від Вас це повідомлення.',
  'components/Banners/Onboarding/addFriendsLabel': ({
    limit,
  }: {
    limit: string;
  }) => `Впишіть електронні адреси своїх знайомих (максимум: ${limit})`,
  'components/Banners/Onboarding/addFriendsMessage':
    'Таке повідомлення ми відправимо Вашим знайомим (Ви можете його редагувати).',
  'components/Banners/Onboarding/errorFieldIsEmpty':
    'Поле не може бути порожнім.',
  'components/Banners/Onboarding/signatureLabel': 'Підпис',
  'components/Banners/Onboarding/allTheBest': 'Всього найкращого',
  'components/Banners/Onboarding/notificationText1': 'Привіт,',
  'components/Banners/Onboarding/notificationText2':
    'це моя нова електронна адреса. Можеш контактувати зі мною, пишучи на цю адресу.',
  'components/Banners/Onboarding/notificationSubject':
    'Моя нова поштова скринька',
  'components/Banners/Payment/cleanDesc': 'Рахунки в одному місці.',
  'components/Banners/Payment/cleanTitle': 'Порядок',
  'components/Banners/Payment/comfortDesc':
    'Вистачить, якщо натиснеш "Заповнити"',
  'components/Banners/Payment/comfortTitle': 'Зручність',
  'components/Banners/Payment/ctaActivate': 'Активувати',
  'components/Banners/Payment/fastTitle': 'Швидкість',
  'components/Banners/Payment/fastDesc':
    'Оплачуючи рахунок маєш всі дані заповнені',
  'components/Banners/Payment/header': 'Активуй папку електроної оплати',
  'components/Banners/Payment/headerInvoice': 'Активуй послугу"Оплачую з Onet"',
  'components/Banners/Payment/safeDesc':
    'Pезпечно платиш одразу з почтової скриньки',
  'components/Banners/Payment/safeTitle': 'Безпека',
  'components/Banners/Payment/terms':
    'Включення послуги "Оплата з Onet" означає Вашу згоду на надання даних про дебіторську заборгованість, що зберігаються в рахунку / рахунку ( файл .pdf), який впливає на ваш обліковий запис електронної пошти та адресу вашої електронної пошти нашому партнеру-національній організації платіжної BillBird S. A. (www.billbird.pl/kontakt), з метою актуалізації інформації про дебіторську заборгованість та її можливої оплати. Ви можете відкликати свою згоду в будь-який час, відключивши Сервіс "Оплата з Onet" в Налаштуваннях Onet Mail. Відкликання згоди не впливає на законність обробки, яка була зроблена на підставі вашої згоди до його відкликання.',
  'components/ChangeListView/labelViewBasic': 'Стандартний вигляд',
  'components/ChangeListView/labelViewExtend': 'Розширений вигляд',
  'components/ChangeListView/labelViewShort': 'Скорочений вигляд',
  'components/Dropdowns/DropdownCheckedMails/ctaUncheckTicked': 'Зняти галочку',
  'components/Dropdowns/DropdownCheckedMails/tickOnPage':
    'Позначити на сторінці',
  'components/Dropdowns/DropdownListMore/changeListView':
    'Змінити вигляд списку',
  'components/Dropdowns/DropdownListMore/ctaTickRead': 'Прочитане',
  'components/Dropdowns/DropdownListMore/ctaTickUnRead': 'Непрочитане',
  'components/Dropdowns/DropdownListMore/tickAs': 'Зняти галочку',
  'components/Dropdowns/DropdownListMoveTo/ctaMoveToTitle':
    'Przenieś wiadomość do folderu...', // TODO
  'components/Dropdowns/DropdownListMoveTo/labelCustomFolders': 'Твоя папка',
  'components/Dropdowns/DropdownListMoveTo/labelSmartFolders': 'Smart папка',
  'components/Dropdowns/DropdownSortList/ctaFilter': 'Фільтрувати',
  'components/Dropdowns/DropdownSortList/ctaFilters': ({
    defaultValue = '',
    filter,
  }: {
    defaultValue?: string;
    filter: string;
  }) =>
    ({
      _All: 'Всі',
      _Answered: 'відповів',
      _Atch: 'З вкладеннями',
      _DateNewest: 'Дата: від найновішого з верху',
      _Deleted: 'Видалений',
      _Flagged: 'Обраний',
      _Forwarded: 'Переданий',
      _HighPrior: 'Пріоритетний',
      _ReadReceipt: 'Отримано одержувачем',
      _Seen: 'Прочитане',
      _SortOldest: 'Дата: від найстарішого з верху',
      _TrustedSender: 'Довірений відправник',
      _UnSeen: 'Непрочитана',
      _UnSubHeader: 'Непрочитане',
    })[filter] || defaultValue,
  'components/Dropdowns/DropdownSortList/orderBy': 'Послідовність', // from chatGPT
  'components/Dropdowns/DropdownSortList/ctaDirAsc': 'Зростання', // from chatGPT
  'components/Dropdowns/DropdownSortList/ctaDirDesc': 'Спадання', // from chatGPT
  'components/Dropdowns/DropdownSortList/ctaSortByDate': 'Даті', // from chatGPT
  'components/Dropdowns/DropdownSortList/ctaSortByFrom': 'Відправником', // from chatGPT
  'components/Dropdowns/DropdownSortList/ctaSortByName': 'Назвою', // from chatGPT
  'components/Dropdowns/DropdownSortList/ctaSortBySubject': 'Темою', // from chatGPT
  'components/Dropdowns/DropdownSortList/ctaSortBySize': 'Розміром', // from chatGPT
  'components/Dropdowns/DropdownSendMail/ctaOption': 'Варіанти доставки',
  'components/Dropdowns/DropdownSender/labelAliases': 'Альтернативні адреси',
  'components/Dropdowns/DropdownSender/labelPopsyncs':
    'Зовнішні облікові записи',
  'components/Dropdowns/DropdownSender/aliasVerificationMessage':
    'Триває перевірка альтернативної адреси. Перевірте деталі в налаштуваннях.',
  'components/EpaymentsFolderTooltip/title':
    'Тут знаходяться всі повідомлення які містять рахунки',
  'components/EprescriptionFolderTooltip/title':
    'Тут знаходяться всі повідомлення які містять електронні направлення',
  'components/InfoBar/MailList/correspondenceHistory': ({
    value,
  }: {
    value: string;
  }) => (
    <>
      Історія переписки для: <b>{value}</b>
    </>
  ),
  'components/InfoBar/MailList/ctaEmptyTrash': 'Очистити корзину',
  'components/InfoBar/MailList/ctaRemoveSPAM': 'Видалити SPAM',
  'components/InfoBar/MailList/emptyTrashInfo':
    'Повідомлення старші ніж 21 день будуть автоматично видалені',
  'components/InfoBar/MailList/noEmailAddress':
    'відсутність електронного адресу',
  'components/InfoBar/MailList/noSearchQuery': 'відсутність питання',
  'components/InfoBar/MailList/removeSpamInfo':
    'Повідомлення старші ніж 30 днів будуть автоматично видаленні',
  'components/InfoBar/MailList/searchResults': ({
    value,
  }: {
    value: string;
  }) => (
    <>
      Результат пошуку для: <b>{value}</b>
    </>
  ),
  'components/InfoBar/MailList/SmartInfo':
    'Ми можемо краще сортувати електронні листи в різні спеціальні папки',
  'components/InfoBar/MailList/CtaConfirmSmart': 'Увімкнути',
  'components/InfoBar/MailList/CtaTellMeMoreSmart': 'Дізнайтеся більше',
  'components/EnableEPaymentsModal/header': 'Активуй папку електроної оплати',
  'components/EnableEPaymentsModal/ctaActivate': 'активувати',
  'components/LeaveSiteModal/ctaConfirm': 'Так',
  'components/Lists/AttachmentList/ctaShowAttachmentsFromSender':
    'Показати прикріплені файли від отримувача',
  'components/Lists/FolderList/AddFolder/errorMessage': ({
    chars,
  }: {
    chars: string;
  }) => `Не прийняті знаки: ${chars}`,
  'components/Lists/FolderList/AddFolder/label': 'Назва теки',
  'components/Lists/FolderList/AddFolder/placeholder': 'Вписати назву папки',
  'components/Lists/FolderList/CustomItem/ctaEdit': 'Редактувати папку',
  'components/Lists/FolderList/CustomItem/ctaRemove': 'Видалити папку',
  'components/Lists/FolderList/ItemLink/notification': ({
    counter,
  }: {
    counter: string | number;
  }) => `Нове: ${counter}`,
  'components/Lists/FolderList/ListAttachments/groupName': ({
    defaultValue = '',
    groupName,
  }: {
    defaultValue?: string;
    groupName: string;
  }) =>
    ({
      _Archive: 'Архів',
      _Document: 'Документи',
      _Music: 'Музика',
      _Other: 'Інше',
      _Photo: 'Фото',
      _Presentation: 'Презентації',
      _Video: 'Відео',
    })[groupName] || defaultValue,
  'components/Lists/FolderList/ListCustom/ctaFoldersSettings': 'Опції папок',
  'components/Lists/FolderList/ListCustom/ctaManage': 'Керувати',
  'components/Lists/FolderList/ListCustom/ctaToggleFolders':
    'Показати/заховати папки',
  'components/Lists/FolderList/ListCustom/folders': 'Папки',
  'components/Lists/FolderList/ListCustom/noFolders': '(Не існує)',
  'components/Lists/FolderList/ListPopsync/connectionError':
    'Відсутність з’єднання з скринькою. Перевірте налаштування.',
  'components/Lists/FolderList/ListPopsync/verificationError':
    'Ящик не підтверджено. Перевірте налаштування.', // chat GPT
  'components/Lists/FolderList/ListPopsync/ctaDownload':
    'Завантажити повідомлення',
  'components/Lists/FolderList/ListPopsync/ctaSynchronization':
    'Триває синхронізація. Просимо, зачекати',
  'components/Lists/FolderList/ListPopsync/ctaTogglePopsync':
    'Показати/заховатизовнішні скриньки',
  'components/Lists/FolderList/ListSystem/ctaClearFolder': ({
    folderName,
  }: {
    folderName: string;
  }) => `Очистити ${folderName}`,
  'components/Lists/FolderList/ListShopping/shopping': 'Шопінг',
  'components/Lists/MailList/ctaUnsubscribeTitle':
    'Натиснути якщо не хочеш отримувати повідомлення від цього відправника',
  'components/Loaders/saving': 'Триває зберігання',
  'components/Loaders/sending': 'Триває надсилання',
  'components/Modals/MailProtocolsModal/ctaSkip': '',
  'components/Modals/MailProtocolsModal/ctaSwitchOffAll': '',
  'components/Modals/MailProtocolsModal/ctaSwitchOffGoNext': '',
  'components/Modals/MailProtocolsModal/introDescription': '',
  'components/Modals/MailProtocolsModal/editProtocolsDescription': () => <></>,
  'components/Modals/MailProtocolsModal/editProtocolsDescriptionGazeta': () => (
    <></>
  ),
  'components/Modals/MailProtocolsModal/imapTitle': '',
  'components/Modals/MailProtocolsModal/imapDescription': '',
  'components/Modals/MailProtocolsModal/imapDescriptionGazeta': '',
  'components/Modals/MailProtocolsModal/imapDisableInfo': '',
  'components/Modals/MailProtocolsModal/imapDisableInfoGazeta': '',
  'components/Modals/MailProtocolsModal/smtpTitle': '',
  'components/Modals/MailProtocolsModal/smtpDescription': '',
  'components/Modals/MailProtocolsModal/smtpDisableInfo': '',
  'components/Modals/MailProtocolsModal/smtpDisableInfoGazeta': '',
  'components/Modals/MailProtocolsModal/pop3Title': '',
  'components/Modals/MailProtocolsModal/pop3Description': '',
  'components/Modals/MailProtocolsModal/pop3DescriptionGazeta': '',
  'components/Modals/MailProtocolsModal/pop3DisableInfo': '',
  'components/Modals/MailProtocolsModal/pop3DisableInfoGazeta': '',
  'components/Modals/CustomFolderRemoveModal/onRemoveDeleteAll':
    'видалити папку з повідомленнями',
  'components/Modals/CustomFolderRemoveModal/onRemoveMoveMailsToReceived':
    'перенести повідомлення до скриньки отримувача',
  'components/Modals/CustomFolderRemoveModal/removeFolderConfirmation': ({
    value,
  }: {
    value: JSX.Element;
  }) => <>Чи справді хочеш видалити папку {value}?</>,
  'components/Modals/CustomFolderRemoveModal/removeFolderError':
    'З’явилась помилка під час видання папки. Спробуй ще раз.',
  'components/Modals/CustomFolderRemoveModal/removeFolderTitle':
    'Видалення папки',
  'components/Modals/BlockSenderByAddress/blockSenderDescription': ({
    value,
  }: {
    value: JSX.Element;
  }) => (
    <>
      Наступні повідомлення з адреси {value} автоматично потраплять до кошика.
    </>
  ), // from MS Copilot
  'components/Modals/BlockDomain/blockDomainTitle':
    'Заблокувати домен відправника', // from MS Copilot
  'components/Modals/BlockDomain/blockDomainDescription': ({
    value,
  }: {
    value: JSX.Element;
  }) => (
    <>
      Наступні повідомлення з домену {value} автоматично потраплять до кошика.
    </>
  ), // from MS Copilot
  'components/Modals/BlockAddressModal/changeSettingsDescription':
    'Ви можете це змінити, видаливши правило в Налаштуваннях, у підменю Правила та перенаправлення.', // from MS Copilot
  'components/Modals/BlockAddressModal/ctaBlock': 'Блокувати', // from MS Copilot
  'components/Modals/CustomFolderRemoveModal/removeFolderWithMails': ({
    value,
  }: {
    value: JSX.Element;
  }) => <>Папка вміщає повідомлення ({value}). Що хочеш з ними зробити?</>,
  'components/Modals/ExternalStorageModal/boxPoint1': "Натисни з Box'a.",
  'components/Modals/ExternalStorageModal/boxPoint2':
    ' Уввійти або зареєструвати профіль Box.',
  'components/Modals/ExternalStorageModal/boxPoint3': 'Натисни Додати файл.',
  'components/Modals/ExternalStorageModal/boxPoint4':
    "Додай файл з комп'ютера у новій вкладці.",
  'components/Modals/ExternalStorageModal/boxPoint5':
    'Повернись до вкладки з Onet Pocztą.',
  'components/Modals/ExternalStorageModal/boxPoint6':
    'Додай файл у діалоговому вікні Box.',
  'components/Modals/ExternalStorageModal/boxPoint7':
    'Лінк до файлу буде у Твоєму повідомленні.',
  'components/Modals/ExternalStorageModal/boxReady': 'Готово!',
  'components/Modals/ExternalStorageModal/boxTitle':
    'Додавання файлів за допомогою Box',
  'components/Modals/ExternalStorageModal/ctaBox': 'З Box',
  'components/Modals/ExternalStorageModal/ctaDropbox': 'З Dropbox',
  'components/Modals/ExternalStorageModal/ctaHowItWorks': 'Як це працює',
  'components/Modals/ExternalStorageModal/description':
    "Файли перевищують об'єм 50 MB. До їх наслилання використай один з дисків:!",
  'components/Modals/ExternalStorageModal/dropboxPoint1':
    'Клікни на кнопку Dropbox.',
  'components/Modals/ExternalStorageModal/dropboxPoint2':
    'Логін або реєстрація у Dropbox.',
  'components/Modals/ExternalStorageModal/dropboxPoint3':
    'Натисни кнопку "Надіслати".',
  'components/Modals/ExternalStorageModal/dropboxPoint4':
    "Додай файл з комп'ютера.",
  'components/Modals/ExternalStorageModal/dropboxPoint5':
    'Обери файл в діалогому вікні Dropbox.',
  'components/Modals/ExternalStorageModal/dropboxTitle':
    'Додавання файлів за допомогою Dropbox',
  'components/Modals/ExternalStorageModal/title': 'Ой!',
  'components/Modals/MobileSenderModal/senderAccountTitle': 'Оберати адресу',
  'components/Modals/SystemFolderEmptyModal/description': ({
    folder,
  }: {
    folder: ReactNode;
  }) => <>Чи дійсно хочеш усунути усі повідомлення з папки {folder}?</>,
  'components/Modals/SystemFolderEmptyModal/emptyFolderError':
    'Сталася помилка під час зпустошення папки. Спробуй ще раз.',
  'components/Modals/OrdersChangeToDeliveredModal/title':
    'Недійсний статус замовленняa',
  'components/Modals/OrdersChangeToDeliveredModal/text': () => (
    <>
      Деякі з ваших замовлень застрягли у старих статусах — з ними нічого не
      відбувалося протягом 30 днів. <br />
      Ви хочете перемістити їх до <b> &quot;Виконано&quot;</b> ?
    </>
  ),
  'components/NewMail/Contact/addContactError':
    'Не вдалося додати новго контакту/ів.',
  'components/NewMail/Contact/noContactsWithEmail':
    'Відсутність адреси email у зазначених контактах',
  'components/Rows/MailListRow/labelNew': 'Нова',
  'components/Rows/MailListRow/mailAnswered': 'Ви відповіли на повідомлення', // from chatGPT
  'components/Rows/MailListRow/mailForwarded': 'Ви переслали повідомлення', // from chatGPT
  'components/Rows/MailListRow/coupon': 'Повідомлення з купоном на знижку',
  'components/Rows/MailListRow/promoCard': 'Повідомлення про пропозицію',
  'components/Rows/MailListRow/cashback': 'Повідомлення від CashBack',
  'components/Rows/RowCounter/counter': ({
    from,
    to,
    total,
  }: {
    from: number;
    to: number;
    total: number;
  }) => `${from}-${to} z ${total}`,
  'components/Rows/RowEmpty/customFolderSetRuleLink':
    'встановити зараз правило',
  'components/Rows/RowEmpty/customFolderTitle':
    'Встановити правило для цієї папки, щоб вибрані повідомлення попадали до неї автоматично.',
  'components/SendOptionsMenu/labelConfirmRead': 'Підтверження прочитання',
  'components/SignatureMenu/noSignature': 'без підпису',
  'components/Toolbars/MailListToolbarTop/titleMoveTo':
    'Перемістити повідомлення',
  'components/Toolbars/MailListToolbarTop/titleMoveToCounter': ({
    counter,
  }: {
    counter: number;
  }) => `Перемістити повідомлення (${counter})`,
  'components/Toolbars/MailListToolbarTop/titleMoveToMultiCounter': ({
    counter,
  }: {
    counter: number;
  }) => `Перемістити повідомлення (${counter})`,
  'components/Toolbars/NewMailToolbar/ctaSendOptions': 'Опції',
  'components/Tooltip/TooltipFraudSuspicion/description':
    'Це повідомлення здається відозрілим. Є ризик ії використання для шахрайства.',
  'components/Tooltip/TooltipFraudSuspicion/title': 'Підозріле поведомлення',
  'components/Tooltips/TooltipPaymentsInfo/text':
    'Завдяки функції E-оплати швидко і беспечно сплатиш свої рахунки на рівні скриньки e-mail.',
  'components/Tooltips/TooltipPaymentsInfo/title': 'E-оплати',
  'components/Tooltips/TooltipTrustedSender/description':
    'Цей знак означає, що ми зверифікували цього віправника. Завдяки цьому можеш бути упевнений, що ніхто за ним не приховується!',
  'components/Tooltips/TooltipSendError/title': 'Увага',
  'components/Tooltips/TooltipSendError/titleExtended': 'Увага',
  'components/Tooltips/TooltipSendError/description':
    'Виникла проблема з доставкою цього повідомлення одному або декільком одержувачам.',
  'components/TrustedSenderInfo/title': 'Довірений відправник',
  'components/modules/CreateEventInCalendar/ctaGoToEvent': 'Перейти до події',
  'components/modules/CreateEventInCalendar/ctaSetRemind':
    'Встановити нагадування',
  'components/modules/CreateEventInCalendar/ctaIsFetching': 'Завантажити',
  'container/Mails/addRuleSuccessNotification': 'Нове правило додано',
  'container/Mails/ctaRemoveTitle': 'Усунунти зазначене',
  'containers/AttachmentsList/title': ({
    groupName,
    host,
  }: {
    groupName: string;
    host: string;
  }) => `Додатки ${groupName} - Poczta в ${host}`,
  'containers/FolderList/correspondenceHistory': 'Історія переписки',
  'containers/FolderList/searchResults': 'Результат пошуку',
  'containers/MailList/title': ({
    folderInfo,
    host,
  }: {
    folderInfo: string;
    host: string;
  }) => `${folderInfo}Листа повідомлень - Poczta w ${host}`,
  'containers/NewMail/ByType': ({
    defaultValue = '',
    type,
  }: {
    defaultValue?: string;
    type: string;
  }) =>
    ({
      _NowaWiadomosc: 'Нове повідомлення',
      _Odpowiedz: 'Відповісти',
      _OdpowiedzWszystkim: 'Відповісти усім',
      _Przekaz: 'Переказати',
    })[type] || defaultValue,
  'containers/NewMail/addSignatureAnchor': 'Натисни і додай новий.',
  'containers/NewMail/contactsFetchError':
    'Сталася помилка при завантаженні листи контактів. Стпробуй ще раз за хвилину.',
  'containers/NewMail/ctaAddPriority': 'Додати пріорітет',
  'containers/NewMail/ctaBccShort': 'Схована копія',
  'containers/NewMail/ctaCancelUpload': 'Анулювати завантаження додатку',
  'containers/NewMail/ctaCc': 'Копя до',
  'containers/NewMail/ctaCcShort': 'Копія',
  'containers/NewMail/ctaExternalLinkTitle': ({ sender }: { sender: string }) =>
    `Користувач ${sender} ділиться додаткому через онлайн диск:`,
  'containers/NewMail/ctaRemoveFile': 'Усунунти додаток',
  'containers/NewMail/last': 'останній',
  'containers/NewMail/ctaSaveDraft': 'Записати',
  'containers/NewMail/ctaSaveDraftDate': ({
    date,
    minutesAgo,
  }: {
    date: string;
    minutesAgo: string;
  }) => `Записати чернетку, записано ${date} ${minutesAgo}`,
  'containers/NewMail/ctaSaveDraftDateMobile': ({ date }: { date: string }) =>
    `Записати (${date})`,
  'containers/NewMail/ctaSaveDraftMinutesAgo': ({
    minutesAgo,
  }: {
    minutesAgo: number;
  }) => `(${minutesAgo} min. temu)`,
  'containers/NewMail/ctaUploadAddImage': 'Додати зображення',
  'containers/NewMail/ctaUploadDragDropFile': 'Помістіть вибраний файл тут',
  'containers/NewMail/ctaUploadFilesProgress': (count: number) =>
    `Залишилось: ${count}`, // copilot
  'containers/NewMail/ctaUploadFromComputer': 'з компютера',
  'containers/NewMail/ctaUploadUseBox': 'з Box',
  'containers/NewMail/ctaUploadUseDropbox': 'з Dropbox',
  'containers/NewMail/emptyContactsList': 'Немає контактів.',
  'containers/NewMail/emptySignature': ({
    addSignatureAnchor,
  }: {
    addSignatureAnchor: ReactNode;
  }) => <>Немає підписів. {addSignatureAnchor}</>,
  'containers/NewMail/fetchSignsError': 'Не вдалося отримати підписи.',
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
  'containers/NewMail/modalConfirmationSendAttachment':
    'Зміст повідомлення вказує на бажання відправити вкладення. Ви все одно хочете відправити його?',
  'containers/NewMail/modalConfirmationSendAttachmentSubject':
    'Немає теми. Зміст повідомлення вказує на бажання відправити вкладення. Ви все одно хочете відправити повідомлення?',
  'containers/NewMail/modalConfirmationSendSubject':
    'Ви впевнені, що хочете відправити лист без теми?',
  'containers/NewMail/modalLeaveDescription':
    'Внесені зміни будуть втрачені. Ви хочете залишити сторінку?',
  'containers/NewMail/replyHeader': ({
    date,
    userName,
  }: {
    date: string;
    userName: string;
  }) => `Дня ${date} користувач ${userName} написав:`,
  'containers/NewMail/saveDraftError': 'Зберегти чернетку не вдалося.',
  'containers/NewMail/sendMessageError':
    'Не вдалося відправити лист. Спробуйте ще раз.',
  'containers/NewMail/sendSuccessNotification': 'E-mail було надіслано',
  'containers/NewMail/sendDelaySuccessNotification':
    'Заплановано відправлення листа',
  'containers/NewMail/sendMailError422Notification':
    'Проблема з одним із ваших облікових записів',
  'containers/NewMail/revertSendingLabel': 'Скасувати',
  'containers/NewMail/title': ({ host }: { host: string }) =>
    `Нове повідомлення - Пошта в ${host}`,
  'containers/NewMail/uploadFileError': ({ filename }: { filename: string }) =>
    `Не вдалося додати файл ${filename}.`,
  'containers/NewMail/uploadFilesError':
    'Проблема при додаванні вкладень. Спробуйте ще раз.',
  'containers/NewMail/uploadSizeLimitError':
    'Перевищено граничний розмір вкладень.',
  'containers/WithFolder/deleteFolderErrorNotification': ({
    folderName,
  }: {
    folderName: string;
  }) => `Не вдалося видалити папку ${folderName}. Спробуйте ще раз.`,
  'containers/WithFolder/emptyFolderErrorNotification': ({
    folderName,
  }: {
    folderName: string;
  }) => `Не вдалося очистити папку ${folderName}. Спробуйте ще раз.`,
  'containers/WithFolder/emptyFolderSuccessNotification': ({
    folderName,
  }: {
    folderName: string;
  }) => `Папка з ім'ям ${folderName} була спустошена.`,
  'containers/WithFolder/folderListFetchingErrorNotification':
    'Виникла проблема при завантаженні списку папок. Спробуйте ще раз.',
  'containers/WithFolder/popSyncFetchingErrorNotification':
    'Виникла проблема при синхронізації зовнішніх скриньок. Спробуйте ще раз.',
  'containers/WithFolder/saveFolderErrorNotification': ({
    folderName,
  }: {
    folderName: string;
  }) =>
    `Не вдалося зберегти папку ${folderName}. Спробуйте ще раз. Переконайтеся, що папка з вказаним ім'ям не існує.`,
  'components/ElementsPerPage/show': 'Показати',
  'components/ElementsPerPage/messages': 'повідомлень',
  'components/ElementsPerPage/attachments': 'вкладень',
  folderName: ({
    defaultValue = '',
    key,
  }: {
    defaultValue?: string;
    key: string;
  }) =>
    ({
      _inbox: 'Отримане',
      _offers: 'Пропозиції',
      _social: 'Cоцмережі',
      _notification: 'Повідомлення',
      _eprescriptions: 'E-рецепти',
      _epayments: 'Е-оплати',
      _drafts: 'Чернетки',
      _other: 'Інше',
      _sent: 'Надіслані',
      _spam: 'СПАМ',
      _trash: 'Корзина',
    })[key] || defaultValue,
  'containers/MailList/me': 'Я',

  advancedAttachmentFiltersLabel: 'Розширений фільтр',
  advancedAttachmentFiltersHeader: 'Розширений фільтр',
  senderName: 'Назва Відправкика',
  writeSenderName: 'Введи назву Відправника',
  attachmentType: 'Тип додатку',
  attachmentSizeWithMB: 'Розмір додатку (в MB (мегабайтах))',
  receiveDate: 'Дата отримання',
  to7Days: 'до 7 днів',
  toMonth: 'до місяця',
  toHalfYear: 'до пів року',
  olderThanHalfYear: 'Понад пів року',

  addRulesError: 'Сталася помилка під часи видання правила. Спробуй ще раз.',
  addRulesSuccess:
    'Додано автоматичне правило переміщення повідомлень до Смітника через 30 днів.', // copilot
  skinsRemoveBannerTitle: 'Зміни в кольорових мотивах Poczta Onet', // chat 3.5
  skinsRemoveBannerDescription:
    'Вже незабаром деякі з існуючих кольорових мотивів будуть вилучені. Це чудова нагода переглянути доступні кольорові теми та вибрати нову, яка тобі найбільше подобається!', // chat 3.5

  adBlockTitle_v1: 'Хороша пошта не є безкоштовною', // copilot
  adBlockDescriptionSentence1_v1:
    'Реклама дозволяє нам підтримувати Onet Пошту і розвивати її для вас.', // copilot
  adBlockDescriptionSentence2_v1: 'Тому вимкніть AdBlock.', // copilot
  adBlockTitle_v2: 'Ми розуміємо, що вам не подобається реклама', // copilot
  adBlockDescriptionSentence1_v2:
    'Але без неї ми не можемо підтримувати та розвивати Onet Пошту.', // copilot
  adBlockDescriptionSentence2_v2: 'Тому вимкніть AdBlock або \u000a', // copilot
  adBlockDescriptionSentence2Link_v2: 'придбайте пошту без реклами', // copilot

  settingsUrlRulesAndRedirections: 'Правила і перенаправлення', // settings
  settingsUrlRules: 'Правилаповідомлень', // settings

  noSender: '(немає відправника)', // chatgpt
  noRecipient: '(немає одержувача)', // chatgtp
  noSubject: '(немає теми)', // chatgtp

  removeDraftConfirmationText:
    'Операція видалить чернетку та всі зміни. Ви впевнені?', // chatgpt - sonnet 4

  'components/Lists/MailList/ctaMarkAsSpamSender':
    'Зазначити як відправника спаму',
  'components/Lists/MailList/ctaMarkAsConfirmedSender':
    'Зазначити як довіреного відправника',

  scheduledSendLabel: 'Заплановані відправлення', // chat
  scheduledSendCancelError:
    'Помилка скасування відправлення. Спробуйте ще раз.', // chat
  scheduledSendCancelSuccess: 'Відправлення скасовано', // chat
  onlyDrafts: 'Тільки чернетки', // chat
  noDraftError: 'Цей лист не є чернеткою', // chat

  shareDaemonDefaultBody: ({ count }: { count: number }) =>
    `Надсилаю за attachments: ${count}`, // copilot
};

export default uk;
