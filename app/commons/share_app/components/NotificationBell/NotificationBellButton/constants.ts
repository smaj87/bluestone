export const IS_UNREAD_CLASS = 'is-unread';

export const NOTIFICATION_IMAGE_BY_TYPE = {
  onetkonto_password_is_leaked: 'shieldAlert',
  onetkonto_contact_data_changed: 'edit',
  onetkonto_new_device_login: 'edit',
  onetkonto_password_changed: 'edit',
  onetkonto_profile_data_changed: 'edit',
  onetkonto_wellcome: 'info',
  // TODO - do uzupełnienia id malicious location - ikona shieldAlert
  // TODO - do uzupełnienia id welcome (nie onetkonto) - ikona loudspeaker
};

export const NOTIFICATION_IMAGE_BY_STATE = {
  onetkonto_password_is_leaked: 'error',
  onetkonto_contact_data_changed: 'info',
  onetkonto_new_device_login: 'info',
  onetkonto_password_changed: 'info',
  onetkonto_profile_data_changed: 'info',
  onetkonto_wellcome: 'info',
  // TODO - do uzupełnienia id malicious location - state error
  // TODO - do uzupełnienia id welcome (nie onetkonto) - state info
};
