export interface AppConfig {
  // APP_DESCRIPTION: string;
  // APP_SHORT_NAME: string;
  ACCOUNT_PROFILE_URL: string;
  APP: string;
  APP_NAME: string;
  ASSETS_URL: string;
  OCDN_URL: string;
  AUTH_REDIRECT_URL: string;
  BASE_API_URL: string;
  BLOCK_IMAGES_WHITE_LIST_REGEXP: string;
  BOK_URL: string;
  BRAND_URL: string;
  CALENDAR_URL: string;
  CLIENT_ID: string;
  CONTACTS_URL: string;
  COURIER_URL: string;
  DEFAULT_THEME_COLOR: string;
  DEVELOPED_BY_URL: string;
  DOWNLOAD_API_URL: string;
  HELP_URL: string;
  HOST: string;
  HOST_NAME: string;
  INVOICE_PAYMENT_URL: string;
  LOGGER_APP_NAME: string;
  LOGGER_URL: string;
  LOGOUT_URL: string;
  MAUTIC_HOST: string;
  NEWMAIL_SENDMAIL_URL: string;
  NEWSPAPER_URL: string;
  PAYMENTS_HELP_URL: string;
  PAYMENTS_MONTHLY_URL: string;
  PAYMENTS_ANNUALLY_URL: string;
  PAYMENTS_URL: string;
  POWERED_BY_URL: string;
  REDIRECTOR_API_URL: string;
  SECURITY_HELP_URL: string;
  SENT_ERROR_HELP_URL: string;
  SETTINGS_EXTERNAL_ACCOUNTS_URL: string;
  SETTINGS_URL: string;
  SMART_INFO_HELP_URL: string;
  SMART_INFO_USER_URL: string;
  SUSPICIOUS_MESSAGE_HELP_URL: string;
  SWITCH_ACCOUNT_URL: string;
  TERMS_URL: string;
  TRUSTED_SENDER_HELP_URL: string;
  UPLOAD_FILE_URL: string;
  URL_SECURITY_ERROR_HELP: string;
  VERSION: string;
  WEATHER_URL: string;
  WEBMAIL_URL: string;
  X_ONET_APP: string;
  BUNDLE_ONET_PREMIUM_URL: string;
  LANGS: boolean;
}

export interface TemplateData {
  TITLE: string;
  BROWSER_UPDATE_URL: string;
  VERSION: string;
  GEMIUS: {
    HIT: string;
    ID: string;
  };
  PREFETCH_LINKS: string[];
  PRELOAD_LINKS: string[];
  PRELOAD_MAILS_LINK: string;
  FAVICON_LINKS: {
    URL: string;
    SIZES: number[];
  };
}
