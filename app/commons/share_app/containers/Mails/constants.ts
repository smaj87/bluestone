export const MAIL_SORT_FIELDS = ['subject', 'from', 'date'] as const;
export const MAIL_SORT_DIR_FIELDS = ['asc', 'desc'] as const;
export const MAIL_FILTER_FIELDS = ['UnSeen', 'Flagged', 'Atch'] as const;

export const KEY = 'mails';
export const PAGE_NAME = 'MAILS_PAGE';

export const MAILS_CONTAINER_ID = 'js_MailsContainer';

export const SUB_PAGE_NAME_HISTORY = 'SUB_PAGE_NAME_HISTORY';
export const SUB_PAGE_NAME_SEARCH = 'SUB_PAGE_NAME_SEARCH';

export const FETCH_MAILS = `${KEY}/FETCH_MAILS`;
export const FETCH_MAILS_SUCCESS = `${FETCH_MAILS}_SUCCESS`;
export const FETCH_MAILS_FAILURE = `${FETCH_MAILS}_FAILURE`;

export const CANCEL_SEND_MAIL = `${KEY}/CANCEL_SEND_MAIL`;
export const CANCEL_SEND_MAIL_SUCCESS = `${CANCEL_SEND_MAIL}_SUCCESS`;
export const CANCEL_SEND_MAIL_FAILURE = `${CANCEL_SEND_MAIL}_FAILURE`;

export const ADD_BLOCK_RULE = `${KEY}/ADD_BLOCK_RULE`;
export const ADD_BLOCK_RULE_SUCCESS = `${ADD_BLOCK_RULE}_SUCCESS`;
export const ADD_BLOCK_RULE_FAILURE = `${ADD_BLOCK_RULE}_FAILURE`;

export const SET_LAST_SHOWN_ID = `${KEY}/SET_LAST_SHOWN_ID`;
export const SET_GROUP_VISIBILITY = `${KEY}/SET_GROUP_VISIBILITY`;
export const TOGGLE_CHECKED = `${KEY}/TOGGLE_CHECKED`;
export const TOGGLE_FLAG = `${KEY}/TOGGLE_FLAG`;
export const MOVE_MAILS = `${KEY}/MOVE_MAILS`;
export const LOAD_MAILS_AFTER_REMOVE = `${KEY}/LOAD_MAILS_AFTER_REMOVE`;
export const SET_HOVER_ID = `${KEY}/SET_HOVER_ID`;
export const SET_INVOICE_PREPARING = `${KEY}/SET_INVOICE_PREPARING`;
export const UPDATE_MAILS_SCHEMA = `${KEY}/UPDATE_MAILS_SCHEMA`;

export const MAIL_FLAG_ANSWERED = 'Answered';
export const MAIL_FLAG_FORWARDED = 'Forwarded';
export const MAIL_FLAG_ATTACHMENTS = 'Atch';
export const MAIL_FLAG_SEEN = 'Seen';
export const MAIL_FLAG_UNSEEN = 'UnSeen';
export const MAIL_FLAG_HIGH_PRIORITY = 'HighPrior';
export const MAIL_FLAG_FLAGGED = 'Flagged';
export const MAIL_FLAG_DELETED = 'Deleted';
export const MAIL_FLAG_SEND_FAIL = 'SendFail';
export const MAIL_FLAG_DRAFT = 'Draft';
export const MAIL_FLAG_NOHDRINDB = 'NoHdrInDb';
export const MAIL_FLAG_FOREIGNUIDL = 'ForeignUIDL';
export const MAIL_FLAG_PERSONAL = 'Personal';
export const MAIL_FLAG_UNSUBHEADER = 'UnSubHeader';
export const MAIL_FLAG_TRUSTEDSENDER = 'TrustedSender';
export const MAIL_FLAG_READ_RECEIPT = 'ReadReceipt';
export const MAIL_FLAG_TLS_OK = 'TlsOk';
export const MAIL_FLAG_IMAP_MODIFIED = 'ImapModified';
export const MAIL_FLAG_SMIME_OK = 'SmimeOk';
export const MAIL_FLAG_BIMI = 'Bimi';
export const MAIL_FLAG_INVOICE = 'Invoice'; // flaga informująca o tym, że mail ma fakture

export const MAIL_FLAG_SPF_PASS = 'SPFpass';
export const MAIL_FLAG_SPF_PERMERROR = 'SPFpermerror';
export const MAIL_FLAG_SPF_FAIL = 'SPFfail';
export const MAIL_FLAG_SPF_TEMPERROR = 'SPFtemperror';
export const MAIL_FLAG_SPF_SOFTFAIL = 'SPFsoftfail';
export const MAIL_FLAG_SPF_NONE = 'SPFnone';
export const MAIL_FLAG_SPF_NEUTRAL = 'SPFneutral';

export const MAIL_FLAG_DKIM = 'DkimOk'; // extra_flags - flaga służy do sprawczania pola podpisane w readmailu
export const MAIL_FLAG_DKIM_PASS = 'DKIMpass';
export const MAIL_FLAG_DKIM_TEMPERROR = 'DKIMtemperror';
export const MAIL_FLAG_DKIM_POLICY = 'DKIMpolicy';
export const MAIL_FLAG_DKIM_FAIL = 'DKIMfail';
export const MAIL_FLAG_DKIM_PERMERROR = 'DKIMpermerror';
export const MAIL_FLAG_DKIM_NEUTRAL = 'DKIMneutral';
export const MAIL_FLAG_DKIM_NONE = 'DKIMnone';

export const MAIL_FLAG_DMARC_NONE = 'DMARCnone';
export const MAIL_FLAG_DMARC_FAIL = 'DMARCfail';
export const MAIL_FLAG_DMARC_PASS = 'DMARCpass';
export const MAIL_FLAG_DMARC_TEMPERROR = 'DMARCtemperror';
export const MAIL_FLAG_DMARC_PERMERROR = 'DMARCpermerror';

export const DST_FID_INBOX_KEY = 'INBOX' as const;
export const DST_FID_SPAM_KEY = 'SPAM' as const;
