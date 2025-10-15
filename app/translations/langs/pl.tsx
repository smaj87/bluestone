import { ReactNode } from 'commons/utils/react';

/* eslint-disable react/prop-types, react/react-in-jsx-scope */
export default {
  landmarkAriaLabelSettingsPanelHeader: 'Panel ustawień',

  ctaMarkAsBlockedSender: 'Zablokuj nadawcę',

  'commonModules/SkinProvider/SkinChanger/SAVE_FAILURE':
    'Nie udało się zapisać skórki.',
  'commonModules/SkinProvider/SkinChanger/chooseSkin': 'Wybierz skórkę',
  _sBeach: 'Plaża',
  _sClouds: 'Chmury',
  _sDark: 'Ciemna',
  _sDepth: 'Głębia',
  _sForest: 'Szary las',
  _sGazeta: 'Podstawowa',
  _sGraffiti: 'Graffiti',
  _sIndygo: 'Gwiaździsta noc',
  _sJeans: 'Jeans',
  _sLeaves: 'Liście',
  _sLightBlue: 'Niebieska',
  _sMagenta: 'Magenta',
  _sRed: 'Czerwona',
  _sYellow: 'Żółta',
  _sYellowDefault: 'Podstawowa',
  'commonModules/WithCalendar/notificationErrorCreateEvent':
    'Błąd przy dodawaniu wydarzenia do kalendarza.',
  'commonModules/WithCalendar/notificationErrorFetchCalendar':
    'Błąd przy pobieraniu kalendarza.',
  'components/Banners/Onboarding/title': 'Dokończ konfigurację Onet Poczty',
  'components/Banners/Onboarding/titleGazeta':
    'Dokończ konfigurację Poczty Gazeta',
  'components/Banners/Onboarding/titleCompleted': 'Konfiguracja zakończona!',
  'components/Banners/Onboarding/stepsFinished': ({
    all,
    finished,
  }: {
    all: string;
    finished: string;
  }) => `Ukończono ${finished} z ${all} kroków`,
  'components/Banners/Onboarding/setAdditionalData': 'Ustaw dane pomocnicze',
  'components/Banners/Onboarding/setAdditionalDataDescription':
    'Dzięki temu łatwo odzyskasz dostęp do poczty, gdy zapomnisz hasła.',
  'components/Banners/Onboarding/changeSkinDescription':
    'Wybierz jedną z naszych skórek i wyraź siebie.',
  'components/Banners/Onboarding/addSignature': 'Ustaw podpis',
  'components/Banners/Onboarding/addSignatureDescription':
    'Daj znać innym, kto do nich pisze, ustawiając swój unikatowy podpis.',
  'components/Banners/Onboarding/notifyFriends': 'Powiadom znajomych',
  'components/Banners/Onboarding/notifyFriendsDescription':
    'Wybierz osoby, którym chcesz dać znać, że masz nowy adres e-mail.',
  'components/Banners/Onboarding/completed':
    'Świetnie! Twoja Onet Poczta jest gotowa do pracy.',
  'components/Banners/Onboarding/completedGazeta':
    'Świetnie! Twoja Poczta Gazeta jest gotowa do pracy.',
  'components/Banners/Onboarding/ctaReject':
    'Nie chcę teraz wysyłać żadnych maili',
  'components/Banners/Onboarding/addUserNameLabel':
    'Wpisz nazwę, którą w polu “Od” zobaczą odbiorcy Twoich wiadomości.',
  'components/Banners/Onboarding/addUserNamePlaceholder': 'Imię i nazwisko',
  'components/Banners/Onboarding/addUserDefaultNameInfo':
    'Domyślnie wpisaliśmy tutaj imię i nazwisko podane podczas zakładania konta.',
  'components/Banners/Onboarding/addSignatureLabel':
    'W korespondencji z przyjaciółmi, rodziną, czy współpracownikami możesz używać podpisów, które będą atomatycznie dołączone do wysyłanych przez Ciebie wiadomości.',
  'components/Banners/Onboarding/addFriendsText':
    'Wpisz adresy e-mail swoich znajomych, otrzymają oni od Ciebie poniższą wiadomość.',
  'components/Banners/Onboarding/addFriendsLabel': ({
    limit,
  }: {
    limit: string;
  }) => `Wpisz adresy e-mail swoich znajomych (maksymalnie ${limit})`,
  'components/Banners/Onboarding/addFriendsMessage':
    'Taką wiadomość wyślemy do Twoich znajomych (możesz ją edytować)',
  'components/Banners/Onboarding/errorFieldIsEmpty': 'Pole nie może być puste',
  'components/Banners/Onboarding/signatureLabel': 'Podpis',
  'components/Banners/Onboarding/allTheBest': 'Pozdrawiam',
  'components/Banners/Onboarding/notificationText1': 'Cześć',
  'components/Banners/Onboarding/notificationText2':
    'to mój nowy e-mail. Możesz skontaktować się ze mną, pisząc na ten adres.',
  'components/Banners/Onboarding/notificationSubject':
    'Moja nowa skrzynka pocztowa',
  'components/Banners/Payment/cleanDesc': 'Rachunki w jednym miejscu.',
  'components/Banners/Payment/cleanTitle': 'Porządek',
  'components/Banners/Payment/comfortDesc': 'Wystarczy, że klikniesz "zapłać".',
  'components/Banners/Payment/comfortTitle': 'Wygoda',
  'components/Banners/Payment/ctaActivate': 'Aktywuj',
  'components/Banners/Payment/fastTitle': 'Szybkość',
  'components/Banners/Payment/fastDesc':
    'Opłacając rachunek masz już uzupełnione wszystkie dane.',
  'components/Banners/Payment/header': 'Aktywuj folder E-płatności',
  'components/Banners/Payment/headerInvoice': 'Aktywuj usługę "Płacę z Onet"',
  'components/Banners/Payment/safeDesc':
    'Płacisz bezpiecznie bezpośrednio ze skrzynki.',
  'components/Banners/Payment/safeTitle': 'Bezpieczeństwo',
  'components/Banners/Payment/terms':
    'Włączenie usługi „Płacę z Onet” oznacza Twoją zgodę na udostępnienie danych o należnościach zapisanych w rachunku/fakturze (plik .pdf) wpływającym na Twoje konto poczty elektronicznej oraz Twojego adresu e-mail naszemu partnerowi – krajowej instytucji płatniczej BillBird S.A. (www.billbird.pl/kontakt) dla celów opracowania informacji o należności oraz jej ewentualnego opłacenia. Zgodę możesz wycofać w dowolnym momencie poprzez wyłączenie usługi „Płacę z Onet” w ustawieniach Onet Poczty. Wycofanie zgody nie ma wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie Twojej zgody przed jej wycofaniem.',
  'components/ChangeListView/labelViewBasic': 'Widok podstawowy',
  'components/ChangeListView/labelViewExtend': 'Widok rozszerzony',
  'components/ChangeListView/labelViewShort': 'Widok ze skrótem',
  'components/Dropdowns/DropdownCheckedMails/ctaUncheckTicked':
    'Odznacz zaznaczone',
  'components/Dropdowns/DropdownCheckedMails/tickOnPage': 'Zaznacz na stronie',
  'components/Dropdowns/DropdownListMore/changeListView': 'Zmień widok listy',
  'components/Dropdowns/DropdownListMore/ctaTickRead': 'Przeczytane',
  'components/Dropdowns/DropdownListMore/ctaTickUnRead': 'Nieprzeczytane',
  'components/Dropdowns/DropdownListMore/tickAs': 'Oznacz jako',
  'components/Dropdowns/DropdownListMoveTo/ctaMoveToTitle':
    'Przenieś wiadomość do folderu...',
  'components/Dropdowns/DropdownListMoveTo/labelCustomFolders': 'Twoje foldery',
  'components/Dropdowns/DropdownListMoveTo/labelSmartFolders': 'Smart foldery',
  'components/Dropdowns/DropdownSortList/ctaFilter': 'Filtruj',
  'components/Dropdowns/DropdownSortList/ctaFilters': ({
    defaultValue = '',
    filter,
  }: {
    defaultValue?: string;
    filter: string;
  }) =>
    ({
      _All: 'Wszystkie',
      _Answered: 'Odpowiedziane',
      _Atch: 'Z załącznikami',
      _DateNewest: 'Data: najnowsze na górze',
      _Deleted: 'Usunięte',
      _Flagged: 'Ulubione',
      _Forwarded: 'Przekazane',
      _HighPrior: 'Priorytetowe',
      _ReadReceipt: 'Odebrane przez odbiorce',
      _Seen: 'Przeczytane',
      _SortOldest: 'Data: najstarsze na górze',
      _TrustedSender: 'Zaufany nadawca',
      _UnSeen: 'Nieprzeczytane',
      _UnSubHeader: 'Subskrypcje',
    })[filter] || defaultValue,
  'components/Dropdowns/DropdownSortList/orderBy': 'Kolejność',
  'components/Dropdowns/DropdownSortList/ctaDirAsc': 'Rosnąco',
  'components/Dropdowns/DropdownSortList/ctaDirDesc': 'Malejąco',
  'components/Dropdowns/DropdownSortList/ctaSortByDate': 'Dacie',
  'components/Dropdowns/DropdownSortList/ctaSortByFrom': 'Nadawcy',
  'components/Dropdowns/DropdownSortList/ctaSortByName': 'Nazwie',
  'components/Dropdowns/DropdownSortList/ctaSortBySubject': 'Temacie',
  'components/Dropdowns/DropdownSortList/ctaSortBySize': 'Rozmiarze',
  'components/Dropdowns/DropdownSendMail/ctaOption': 'Opcje wysyłki',
  'components/Dropdowns/DropdownSender/labelAliases': 'Adresy alternatywne',
  'components/Dropdowns/DropdownSender/labelPopsyncs': 'Konta zewnętrzne',
  'components/Dropdowns/DropdownSender/aliasVerificationMessage':
    'Trwa weryfikacja alternatywnego adresu. Sprawdź szczegóły w ustawieniach.',
  'components/EpaymentsFolderTooltip/title':
    'Tu znajdą się wszystkie wiadomości zawierające rachunki.',
  'components/EprescriptionFolderTooltip/title':
    'Tu znajdą się wszystkie wiadomości zawierające e-recepty.',
  'components/InfoBar/MailList/correspondenceHistory': ({
    value,
  }: {
    value: string;
  }) => (
    <>
      Historia korespondencji dla: <b>{value}</b>
    </>
  ),
  'components/InfoBar/MailList/ctaEmptyTrash': 'Opróżnij kosz',
  'components/InfoBar/MailList/ctaRemoveSPAM': 'Usuń SPAM',
  'components/InfoBar/MailList/emptyTrashInfo':
    'Wiadomości starsze niż 21 dni zostaną usunięte automatycznie.',
  'components/InfoBar/MailList/noEmailAddress': 'brak adresu email',
  'components/InfoBar/MailList/noSearchQuery': 'brak zapytania',
  'components/InfoBar/MailList/removeSpamInfo':
    'Wiadomości starsze niż 30 dni zostaną usunięte automatycznie.',
  'components/InfoBar/MailList/searchResults': ({
    value,
  }: {
    value: string;
  }) => (
    <>
      Wyniki wyszukiwania dla: <b>{value}</b>
    </>
  ),
  'components/InfoBar/MailList/SmartInfo':
    'Możemy lepiej sortować wiadomości e-mail do różnych dedykowanych folderów.',
  'components/InfoBar/MailList/CtaConfirmSmart': 'Włącz',
  'components/InfoBar/MailList/CtaTellMeMoreSmart': 'Dowiedz się więcej',
  'components/EnableEPaymentsModal/header': 'Aktywuj folder E-płatności',
  'components/EnableEPaymentsModal/ctaActivate': 'Aktywuj',
  'components/LeaveSiteModal/ctaConfirm': 'Tak',
  'components/Lists/AttachmentList/ctaShowAttachmentsFromSender':
    'Pokaż załączniki od tego nadawcy',
  'components/Lists/FolderList/AddFolder/errorMessage': ({
    chars,
  }: {
    chars: string;
  }) => `Nieakceptowane znaki: ${chars}`,
  'components/Lists/FolderList/AddFolder/label': 'Nazwa folderu',
  'components/Lists/FolderList/AddFolder/placeholder': 'Wpisz nazwę folderu',
  'components/Lists/FolderList/CustomItem/ctaEdit': 'Edytuj folder',
  'components/Lists/FolderList/CustomItem/ctaRemove': 'Usuń folder',
  'components/Lists/FolderList/ItemLink/notification': ({
    counter,
  }: {
    counter: string | number;
  }) => `Nowe: ${counter}`,
  'components/Lists/FolderList/ListAttachments/groupName': ({
    defaultValue = '',
    groupName,
  }: {
    defaultValue?: string;
    groupName: string;
  }) =>
    ({
      _Archive: 'Archiwa',
      _Document: 'Dokumenty',
      _Music: 'Muzyka',
      _Other: 'Inne',
      _Photo: 'Zdjęcia',
      _Presentation: 'Prezentacje',
      _Video: 'Wideo',
    })[groupName] || defaultValue,
  'components/Lists/FolderList/ListCustom/ctaFoldersSettings': 'Opcje folderów',
  'components/Lists/FolderList/ListCustom/ctaManage': 'Zarządzaj',
  'components/Lists/FolderList/ListCustom/ctaToggleFolders':
    'Pokaż/ukryj foldery',
  'components/Lists/FolderList/ListCustom/folders': 'Foldery',
  'components/Lists/FolderList/ListCustom/noFolders': '(brak)',
  'components/Lists/FolderList/ListPopsync/connectionError':
    'Brak połączenia ze skrzynką. Sprawdź ustawienia.',
  'components/Lists/FolderList/ListPopsync/verificationError':
    'Skrzynka niezweryfikowana. Sprawdź ustawienia.',
  'components/Lists/FolderList/ListPopsync/ctaDownload': 'Pobierz maile',
  'components/Lists/FolderList/ListPopsync/ctaSynchronization':
    'Trwa synchronizacja. Proszę czekać',
  'components/Lists/FolderList/ListPopsync/ctaTogglePopsync':
    'Pokaż/ukryj zewnętrzne skrzynki',
  'components/Lists/FolderList/ListSystem/ctaClearFolder': ({
    folderName,
  }: {
    folderName: string;
  }) => `Opróżnij ${folderName}`,
  'components/Lists/FolderList/ListShopping/shopping': 'Zakupy',
  'components/Lists/MailList/ctaUnsubscribeTitle':
    'Kliknij jeżeli nie chcesz otrzymywać wiadomości od tego nadawcy',
  'components/Loaders/saving': 'Trwa zapisywanie',
  'components/Loaders/sending': 'Trwa wysyłanie',
  'components/Modals/MailProtocolsModal/ctaSkip': 'Pomiń',
  'components/Modals/MailProtocolsModal/ctaSwitchOffAll':
    'Wyłącz wszystkie i przejdź do poczty',
  'components/Modals/MailProtocolsModal/ctaSwitchOffGoNext':
    'Wyłącz i przejdź dalej',
  'components/Modals/MailProtocolsModal/introDescription':
    'Niektóre włączone opcje w Twojej skrzynce mogą zmniejszać bezpieczeństwo. Widzimy, że z nich nie korzystasz, dlatego rekomendujemy ich wyłączenie. Poniżej więcej informacji.',
  'components/Modals/MailProtocolsModal/editProtocolsDescription': () => (
    <>
      Obecnie masz włączony dostęp do swojej skrzynki również poprzez protokoły
      SMTP, POP3, IMAP. Są to protokoły, które umożliwiają korzystanie z Onet
      Poczty np.: za pomocą programów pocztowych takich jak Outlook czy
      Thunderbird.
      <br />
      Widzimy, że obecnie korzystasz z Onet Poczty wyłącznie logując się na
      stronie WWW.
      <br />
      Wyłącz wspomniane protokoły, aby zwiększyć bezpieczeństwo swojej skrzynki.
      Zawsze możesz te opcje włączyć ponownie z poziomu ustawień Onet Poczty.
    </>
  ),
  'components/Modals/MailProtocolsModal/editProtocolsDescriptionGazeta': () => (
    <>
      Obecnie masz włączony dostęp do swojej skrzynki również poprzez protokoły
      SMTP, POP3, IMAP. Są to protokoły, które umożliwiają korzystanie z Poczty
      Gazeta np.: za pomocą programów pocztowych takich jak Outlook czy
      Thunderbird.
      <br />
      Widzimy, że obecnie korzystasz z Poczty Gazeta wyłącznie logując się na
      stronie WWW.
      <br />
      Wyłącz wspomniane protokoły, aby zwiększyć bezpieczeństwo swojej skrzynki.
      Zawsze możesz te opcje włączyć ponownie z poziomu ustawień Poczty Gazeta.
    </>
  ),
  'components/Modals/MailProtocolsModal/imapTitle': 'IMAP',
  'components/Modals/MailProtocolsModal/imapDescription':
    'Protokół ten zapewnia pełną synchronizację wiadomości e-mail i folderów Onet Poczty w każdym podpiętym urządzeniu i programie pocztowym z którego korzystasz.',
  'components/Modals/MailProtocolsModal/imapDescriptionGazeta':
    'Protokół ten zapewnia pełną synchronizację wiadomości e-mail i folderów Poczty Gazeta w każdym podpiętym urządzeniu i programie pocztowym z którego korzystasz.',
  'components/Modals/MailProtocolsModal/imapDisableInfo':
    'Włączenie tej opcji zmniejsza bezpieczeństwo Twojej skrzynki. Jeżeli nie rozumiesz czym jest IMAP \u2028to wyłącz tę opcję. Możesz ją ponownie włączyć w ustawieniach Onet Poczty.',
  'components/Modals/MailProtocolsModal/imapDisableInfoGazeta':
    'Włączenie tej opcji zmniejsza bezpieczeństwo Twojej skrzynki. Jeżeli nie rozumiesz czym jest IMAP \u2028to wyłącz tę opcję. Możesz ją ponownie włączyć w ustawieniach Poczty Gazeta.',
  'components/Modals/MailProtocolsModal/smtpTitle': 'SMTP',
  'components/Modals/MailProtocolsModal/smtpDescription':
    'Protokół SMTP umożliwia wysyłanie wiadomości e-mail za pomocą takich aplikacji jak np.: Outlook czy Thunderbird. Odpowiednie dane konfiguracyjne powinny zostać wprowadzone w urządzeniu lub programie pocztowym, z którego korzystasz.',
  'components/Modals/MailProtocolsModal/smtpDisableInfo':
    'Włączenie tej opcji zmniejsza bezpieczeństwo Twojej skrzynki. Jeżeli nie rozumiesz czym jest SMTP \u2028to wyłącz tę opcję. Możesz ją ponownie włączyć w ustawieniach Onet Poczty.',
  'components/Modals/MailProtocolsModal/smtpDisableInfoGazeta':
    'Włączenie tej opcji zmniejsza bezpieczeństwo Twojej skrzynki. Jeżeli nie rozumiesz czym jest SMTP \u2028to wyłącz tę opcję. Możesz ją ponownie włączyć w ustawieniach Poczty Gazeta.',
  'components/Modals/MailProtocolsModal/pop3Title': 'POP3',
  'components/Modals/MailProtocolsModal/pop3Description':
    'Protokół POP3 umożliwia pobieranie wiadomości e-mail z serwera Onet Poczty na komputer, wprost do twojego programu pocztowego, takiego jak np.: Outlook czy Thunderbird. Idealny dla osób chcących korzystać z Onet Poczty lokalnie, na jednym komputerze.',
  'components/Modals/MailProtocolsModal/pop3DescriptionGazeta':
    'Protokół POP3 umożliwia pobieranie wiadomości e-mail z serwera Poczty Gazeta na komputer, wprost do twojego programu pocztowego, takiego jak np.: Outlook czy Thunderbird. Idealny dla osób chcących korzystać z Poczty Gazeta lokalnie, na jednym komputerze.',
  'components/Modals/MailProtocolsModal/pop3DisableInfo':
    'Włączenie tej opcji zmniejsza bezpieczeństwo Twojej skrzynki. Jeżeli nie rozumiesz czym jest POP3 \u2028to wyłącz tę opcję. Możesz ją ponownie włączyć w ustawieniach Onet Poczty.',
  'components/Modals/MailProtocolsModal/pop3DisableInfoGazeta':
    'Włączenie tej opcji zmniejsza bezpieczeństwo Twojej skrzynki. Jeżeli nie rozumiesz czym jest POP3 \u2028to wyłącz tę opcję. Możesz ją ponownie włączyć w ustawieniach Poczty Gazeta.',
  'components/Modals/CustomFolderRemoveModal/onRemoveDeleteAll':
    'usuń folder razem z wiadomościami',
  'components/Modals/CustomFolderRemoveModal/onRemoveMoveMailsToReceived':
    'przenieś wiadomości do skrzynki odbiorczej',
  'components/Modals/CustomFolderRemoveModal/removeFolderConfirmation': ({
    value,
  }: {
    value: JSX.Element;
  }) => <>Czy na pewno chcesz usunąć folder {value}?</>,
  'components/Modals/CustomFolderRemoveModal/removeFolderError':
    'Wystąpił błąd podczas usuwania folderu. Spróbuj ponownie.',
  'components/Modals/CustomFolderRemoveModal/removeFolderTitle':
    'Usuwanie folderu',
  'components/Modals/BlockSenderByAddress/blockSenderDescription': ({
    value,
  }: {
    value: JSX.Element;
  }) => <>Kolejne wiadomości z adresu {value} automatycznie trafią do Kosza.</>,
  'components/Modals/BlockDomain/blockDomainTitle': 'Zablokuj domenę nadawcy',
  'components/Modals/BlockDomain/blockDomainDescription': ({
    value,
  }: {
    value: JSX.Element;
  }) => <>Kolejne wiadomości z domeny {value} automatycznie trafią do Kosza.</>,
  'components/Modals/BlockAddressModal/changeSettingsDescription':
    'Możesz to zmienić, usuwając regułę w Ustawieniach, w podmenu Reguły i przekierowania.',
  'components/Modals/BlockAddressModal/ctaBlock': 'Zablokuj',
  'components/Modals/CustomFolderRemoveModal/removeFolderWithMails': ({
    value,
  }: {
    value: JSX.Element;
  }) => <>Folder zawiera wiadomości ({value}). Co chcesz z nimi zrobić?</>,
  'components/Modals/ExternalStorageModal/boxPoint1':
    "Kliknij przycisk z Box'a.",
  'components/Modals/ExternalStorageModal/boxPoint2':
    'Zaloguj się lub zarejstruj do konta Box.',
  'components/Modals/ExternalStorageModal/boxPoint3':
    'Kliknij przycisk Dodaj plik.',
  'components/Modals/ExternalStorageModal/boxPoint4':
    'Dodaj plik z komputera w nowej zakładce.',
  'components/Modals/ExternalStorageModal/boxPoint5':
    'Wróć do zakładki z Onet Pocztą.',
  'components/Modals/ExternalStorageModal/boxPoint6':
    'Dodaj plik w oknie dialogowym Boxa.',
  'components/Modals/ExternalStorageModal/boxPoint7':
    'Link do pliku znajdzie się w Twojej wiadomości.',
  'components/Modals/ExternalStorageModal/boxReady': 'Gotowe!',
  'components/Modals/ExternalStorageModal/boxTitle':
    "Dodawanie plików przez Box'a",
  'components/Modals/ExternalStorageModal/ctaBox': "Z Box'a",
  'components/Modals/ExternalStorageModal/ctaDropbox': "Z Dropbox'a",
  'components/Modals/ExternalStorageModal/ctaHowItWorks': 'Jak to działa',
  'components/Modals/ExternalStorageModal/description':
    'Pliki przekraczają wielkość 50 MB. Do ich wysyłania użyj jednego z dysków:!',
  'components/Modals/ExternalStorageModal/dropboxPoint1':
    'Kliknij przycisk z Dropboxa.',
  'components/Modals/ExternalStorageModal/dropboxPoint2':
    'Zaloguj się lub zarejestruj do konta Dropbox.',
  'components/Modals/ExternalStorageModal/dropboxPoint3':
    'Kliknij przycisk "Prześlij".',
  'components/Modals/ExternalStorageModal/dropboxPoint4':
    'Dodaj plik z komputera.',
  'components/Modals/ExternalStorageModal/dropboxPoint5':
    'Wybierz plik w oknie dialogowym Dropboxa.',
  'components/Modals/ExternalStorageModal/dropboxTitle':
    'Dodawanie plików przez Dropboxa',
  'components/Modals/ExternalStorageModal/title': 'Oj!',
  'components/Modals/MobileSenderModal/senderAccountTitle': 'Wybierz adres',
  'components/Modals/SystemFolderEmptyModal/description': ({
    folder,
  }: {
    folder: ReactNode;
  }) => (
    <>Czy na pewno chcesz usunąć wszystkie wiadomości z folderu {folder}?</>
  ),
  'components/Modals/SystemFolderEmptyModal/emptyFolderError':
    'Wystąpił błąd podczas opróżniania folderu. Spróbuj ponownie.',
  'components/Modals/OrdersChangeToDeliveredModal/title':
    'Nieaktualny status zamówienia',
  'components/Modals/OrdersChangeToDeliveredModal/text': () => (
    <>
      Niektóre Twoje zamówienia utknęły w starych statusach – od 30 dni nic się
      z nimi nie dzieje. <br />
      <br />
      Czy chcesz je przenieść do <b>&quot;Zakończone&quot;</b>?
    </>
  ),
  'components/NewMail/Contact/addContactError':
    'Nie udało się dodać nowego kontaktu/ów.',
  'components/NewMail/Contact/noContactsWithEmail':
    'Brak adresów email w zaznaczonych kontaktach',
  'components/Rows/MailListRow/labelNew': 'Nowa',
  'components/Rows/MailListRow/mailAnswered': 'Odpowiedziałeś na wiadomość',
  'components/Rows/MailListRow/mailForwarded': 'Przekazałeś wiadomość',
  'components/Rows/MailListRow/coupon': 'Wiadomość z kuponem rabatowym',
  'components/Rows/MailListRow/promoCard': 'Wiadomość z ofertą',
  'components/Rows/MailListRow/cashback': 'Wiadomość z Cashback',
  'components/Rows/RowCounter/counter': ({
    from,
    to,
    total,
  }: {
    from: number;
    to: number;
    total: number;
  }) => `${from}-${to} z ${total}`,
  'components/Rows/RowEmpty/customFolderSetRuleLink': 'ustaw teraz regułę',
  'components/Rows/RowEmpty/customFolderTitle':
    'Ustaw regułę dla tego folderu, tak aby wybrane wiadomości trafiały tu automatycznie.',
  'components/SendOptionsMenu/labelConfirmRead': 'Potwierdzenie przeczytania',
  'components/SignatureMenu/noSignature': 'bez podpisu',
  'components/Toolbars/MailListToolbarTop/titleMoveTo': 'Przenieś wiadomość',
  'components/Toolbars/MailListToolbarTop/titleMoveToCounter': ({
    counter,
  }: {
    counter: number;
  }) => `Przenieś wiadomość (${counter})`,
  'components/Toolbars/MailListToolbarTop/titleMoveToMultiCounter': ({
    counter,
  }: {
    counter: number;
  }) => `Przenieś wiadomości (${counter})`,
  'components/Toolbars/NewMailToolbar/ctaSendOptions': 'Opcje',
  'components/Tooltip/TooltipFraudSuspicion/description':
    'Ta wiadomość wygląda na podejrzaną. Istnieje ryzyko, że zostanie użyta do oszustwa.',
  'components/Tooltip/TooltipFraudSuspicion/title': 'Podejrzana wiadomość',
  'components/Tooltips/TooltipPaymentsInfo/text':
    'Dzięki funkcji E-płatności sprawnie i bezpiecznie opłacisz rachunki z poziomu swojej skrzynki e-mail.',
  'components/Tooltips/TooltipPaymentsInfo/title': 'E-płatności',
  'components/Tooltips/TooltipTrustedSender/description':
    'Ta ikona oznacza, iż zweryfikowaliśmy tego nadawcę. Dzięki temu masz pewność, że nikt się pod niego nie podszył!',
  'components/Tooltips/TooltipSendError/title': 'Uwaga',
  'components/Tooltips/TooltipSendError/titleExtended':
    'Повідомлення не було надіслано',
  'components/Tooltips/TooltipSendError/description':
    'Wystąpił problem z dostarczeniem tej wiadomości do jednego lub wielu odbiorców.',
  'components/TrustedSenderInfo/title': 'Zaufany nadawca',
  'components/modules/CreateEventInCalendar/ctaGoToEvent':
    'Przejdź do wydarzenia',
  'components/modules/CreateEventInCalendar/ctaSetRemind':
    'Ustaw przypomnienie',
  'components/modules/CreateEventInCalendar/ctaIsFetching': 'Pobieranie',
  'container/Mails/addRuleSuccessNotification': 'Nowa reguła została dodana',
  'container/Mails/ctaRemoveTitle': 'Usuń zaznaczone',
  'containers/AttachmentsList/title': ({
    groupName,
    host,
  }: {
    groupName: string;
    host: string;
  }) => `Załączniki ${groupName} - Poczta w ${host}`,
  'containers/FolderList/correspondenceHistory': 'Historia korespondencji',
  'containers/FolderList/searchResults': 'Wyniki wyszukiwania',
  'containers/MailList/title': ({
    folderInfo,
    host,
  }: {
    folderInfo: string;
    host: string;
  }) => `${folderInfo}Lista Wiadomości - Poczta w ${host}`,
  'containers/NewMail/ByType': ({
    defaultValue = '',
    type,
  }: {
    defaultValue?: string;
    type: string;
  }) =>
    ({
      _NowaWiadomosc: 'Nowa wiadomość',
      _Odpowiedz: 'Odpowiedz',
      _OdpowiedzWszystkim: 'Odpowiedz wszystkim',
      _Przekaz: 'Przekaż',
    })[type] || defaultValue,
  'containers/NewMail/addSignatureAnchor': 'Kliknij i dodaj nowy.',
  'containers/NewMail/contactsFetchError':
    'Wystąpił problem z pobraniem listy kontaków. Spróbuj ponownie za chwilę.',
  'containers/NewMail/ctaAddPriority': 'Dodaj priorytet',
  'containers/NewMail/ctaBccShort': 'UDW',
  'containers/NewMail/ctaCancelUpload': 'Anuluj dodawnie pliku',
  'containers/NewMail/ctaCc': 'Kopia do',
  'containers/NewMail/ctaCcShort': 'DW',
  'containers/NewMail/ctaExternalLinkTitle': ({ sender }: { sender: string }) =>
    `Użytkownik ${sender} udostępnia pliki przez dysk internetowy:`,
  'containers/NewMail/ctaRemoveFile': 'Usuń plik',
  'containers/NewMail/last': 'ostatni',
  'containers/NewMail/ctaSaveDraft': 'Zapisz szkic',
  'containers/NewMail/ctaSaveDraftDate': ({
    date,
    minutesAgo,
  }: {
    date: string;
    minutesAgo: string;
  }) => `Zapisz szkic, ostatnio zapisano o ${date} ${minutesAgo}`,
  'containers/NewMail/ctaSaveDraftDateMobile': ({ date }: { date: string }) =>
    `Zapisz szkic (${date})`,
  'containers/NewMail/ctaSaveDraftMinutesAgo': ({
    minutesAgo,
  }: {
    minutesAgo: number;
  }) => `(${minutesAgo} min. temu)`,
  'containers/NewMail/ctaUploadAddImage': 'wstaw obrazek',
  'containers/NewMail/ctaUploadDragDropFile': 'Upuść wybrany plik tutaj',
  'containers/NewMail/ctaUploadFilesProgress': (count: number) =>
    `Pozostało: ${count}`,
  'containers/NewMail/ctaUploadFromComputer': 'z komputera',
  'containers/NewMail/ctaUploadUseBox': "z Box'a",
  'containers/NewMail/ctaUploadUseDropbox': "z Dropbox'a",
  'containers/NewMail/emptyContactsList': 'Brak kontaktów.',
  'containers/NewMail/emptySignature': ({
    addSignatureAnchor,
  }: {
    addSignatureAnchor: ReactNode;
  }) => <>Brak podpisów. {addSignatureAnchor}</>,
  'containers/NewMail/fetchSignsError': 'Nie udało się pobrać podpisów.',
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
  'containers/NewMail/modalConfirmationSendAttachment':
    'Treść wiadomości wskazuje na chęć wysłania załącznika. Czy mimo tego chcesz ją wysłać?',
  'containers/NewMail/modalConfirmationSendAttachmentSubject':
    'Brak tematu. Treść wiadomości wskazuje na chęć wysłania załącznika. Czy mimo tego chcesz ją wysłać?',
  'containers/NewMail/modalConfirmationSendSubject':
    'Czy na pewno chcesz wysłać maila bez tematu?',
  'containers/NewMail/modalLeaveDescription':
    'Wprowadzone zmiany zostaną utracone. Czy chcesz opuścić stronę?',
  'containers/NewMail/replyHeader': ({
    date,
    userName,
  }: {
    date: string;
    userName: string;
  }) => `W dniu ${date} użytkownik ${userName} napisał:`,
  'containers/NewMail/saveDraftError': 'Nie udało się zapisać szkicu.',
  'containers/NewMail/sendMessageError':
    'Nie udało się wysłać maila. Spróbuj jeszcze raz.',
  'containers/NewMail/sendSuccessNotification': 'Mail został wysłany',
  'containers/NewMail/sendDelaySuccessNotification':
    'Zaplanowano wysyłkę maila',
  'containers/NewMail/sendMailError422Notification':
    'Problem z jednym z Twoich kont.',
  'containers/NewMail/revertSendingLabel': 'Cofnij',
  'containers/NewMail/title': ({ host }: { host: string }) =>
    `Nowa wiadomość - Poczta w ${host}`,
  'containers/NewMail/uploadFileError': ({ filename }: { filename: string }) =>
    `Nie udało się dodać pliku ${filename}.`,
  'containers/NewMail/uploadFilesError':
    'Problem przy dodawaniu załączniku/ów. Spróbuj jeszcze raz.',
  'containers/NewMail/uploadSizeLimitError':
    'Przekroczono limit wielkości załączników.',
  'containers/WithFolder/deleteFolderErrorNotification': ({
    folderName,
  }: {
    folderName: string;
  }) => `Nie udało się usunąć folderu ${folderName}. Spróbuj ponownie.`,
  'containers/WithFolder/emptyFolderErrorNotification': ({
    folderName,
  }: {
    folderName: string;
  }) => `Nie udało się opróżnić folderu ${folderName}. Spróbuj ponownie.`,
  'containers/WithFolder/emptyFolderSuccessNotification': ({
    folderName,
  }: {
    folderName: string;
  }) => `Folder o nazwie ${folderName} został opróżniony.`,
  'containers/WithFolder/folderListFetchingErrorNotification':
    'Wystąpił problem podczas pobierania listy folderów. Spróbuj ponownie.',
  'containers/WithFolder/popSyncFetchingErrorNotification':
    'Wystąpił problem podczas synchronizacji skrzynek zewnętrznych. Spróbuj ponownie.',
  'containers/WithFolder/saveFolderErrorNotification': ({
    folderName,
  }: {
    folderName: string;
  }) =>
    `Nie udało się zapisać folderu ${folderName}. Spróbuj ponownie. Upewnij się, że folder o podanej nazwie nie istnieje.`,
  'components/ElementsPerPage/show': 'Pokazuj',
  'components/ElementsPerPage/messages': 'wiadomości',
  'components/ElementsPerPage/attachments': 'załączników',
  folderName: ({
    defaultValue = '',
    key,
  }: {
    defaultValue?: string;
    key: string;
  }) =>
    ({
      _inbox: 'Odebrane',
      _offers: 'Oferty',
      _social: 'Społeczności',
      _notification: 'Powiadomienia',
      _eprescriptions: 'E-recepty',
      _epayments: 'E-płatności',
      _drafts: 'Szkice',
      _other: 'Inne',
      _sent: 'Wysłane',
      _spam: 'SPAM',
      _trash: 'Kosz',
    })[key] || defaultValue,
  'containers/MailList/me': 'Ja',

  advancedAttachmentFiltersLabel: 'Zaawansowane',
  advancedAttachmentFiltersHeader: 'Filtrowanie zaawansowane',
  senderName: 'Nazwa nadawcy',
  writeSenderName: 'Wpisz nazwę nadawcy',
  attachmentType: 'Typ załącznika',
  attachmentSizeWithMB: 'Rozmiar załącznika (w MB)',
  receiveDate: 'Data otrzymania',
  to7Days: 'do 7 dni',
  toMonth: 'do miesiąca',
  toHalfYear: 'do pół roku',
  olderThanHalfYear: 'starsze niż pół roku',

  addRulesError:
    'Wystąpił problem podczas dodawania reguł. Spróbuj ponownie później.',
  addRulesSuccess:
    'Dodano automatyczną regułę przenoszenia wiadomości do Kosza po 30 dniach.',
  skinsRemoveBannerTitle: 'Zmiany w motywach kolorystycznych Onet Poczty',
  skinsRemoveBannerDescription:
    'Już niedługo niektóre z dotychczasowych motywów kolorystycznych zostaną wycofane. To doskonała okazja, aby przejrzeć dostępne skórki kolorystyczne i wybrać nową, która najbardziej Ci się podoba!',

  adBlockTitle_v1: 'Dobra poczta nie jest za darmo',
  adBlockDescriptionSentence1_v1:
    'Reklamy pozwalają nam utrzymać Onet Pocztę i rozwijać ją dla Ciebie.',
  adBlockDescriptionSentence2_v1: 'Dlatego wyłącz adblocka.',
  adBlockTitle_v2: 'Rozumiemy, że nie lubisz reklam',
  adBlockDescriptionSentence1_v2:
    'Ale bez nich nie możemy utrzymywać i rozwijać Onet Poczty.',
  adBlockDescriptionSentence2_v2: 'Dlatego wyłącz adblocka lub \u000a',
  adBlockDescriptionSentence2Link_v2: 'kup\u000aPocztę bez\u00a0reklam.',

  settingsUrlRulesAndRedirections: 'Reguly_i_przekierowania',
  settingsUrlRules: 'RegulyWiadomosci',

  noSender: '(brak nadawcy)',
  noRecipient: '(brak odbiorcy)',
  noSubject: '(brak tematu)',

  removeDraftConfirmationText:
    'Operacja usunie szkic i wszystkie zmiany. Jesteś pewien?',

  'components/Lists/MailList/ctaMarkAsSpamSender': 'Oznacz jako nadawcę spamu',
  'components/Lists/MailList/ctaMarkAsConfirmedSender':
    'Oznacz jako zaufanego nadawcę',

  scheduledSendLabel: 'Zaplanowane wysyłki',
  scheduledSendCancelError: 'Błąd anulowania wysyłki. Sprobuj ponownie.',
  scheduledSendCancelSuccess: 'Anulowano wysyłkę',
  onlyDrafts: 'Tylko szkice',
  noDraftError: 'Ten mail nie jest szkicem',

  shareDaemonDefaultBody: ({ count }: { count: number }) =>
    `Przesyłam załączniki: ${count}`,
};

/*
 Sortuj po: Сортуй по:
 Data: Дата /Датi
 Temat: Тема /Темi
 Nadawca: Відправник/ Відправнику
 Rozmiar: Розмір / Розмірi
 Kolejność: Послідовність:
 Malejąco: Спадання
 Rosnąco: Зростання
* */
