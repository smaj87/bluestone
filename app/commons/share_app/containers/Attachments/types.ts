import { Email } from 'types';

import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import { ListState } from 'commons/ListIntersectionObserver/types';

import { SET_URL_PROPS } from 'containers/App/constants';

import {
  ATTACHMENT_GROUP_NAMES,
  ATTACHMENT_SORT_DIR_FIELDS,
  ATTACHMENT_SORT_FIELDS,
  FETCH_ATTACHMENTS,
  FETCH_ATTACHMENTS_FAILURE,
  FETCH_ATTACHMENTS_SUCCESS,
  KEY,
  SET_GROUP_VISIBILITY,
  SET_HOVER_ID,
  SET_LAST_SHOWN_ID,
  SET_TEMP_CUSTOM_FILTERS,
  TOGGLE_CHECKED,
} from './constants';

export interface InputAttachmentWithId extends File {
  id: string;
}

export interface CustomUrlParamsInterface {
  groupName: (typeof ATTACHMENT_GROUP_NAMES)[number] | '';
  fromFilter: string;
  dateFromFilter: string;
  dateToFilter: string;
  sizeFromFilter: number;
  sizeToFilter: number;
}

export interface UrlParamsInterface extends CustomUrlParamsInterface {
  sort:
    | (typeof ATTACHMENT_SORT_FIELDS)[keyof typeof ATTACHMENT_SORT_FIELDS]
    | '';
  sortDir: (typeof ATTACHMENT_SORT_DIR_FIELDS)[keyof typeof ATTACHMENT_SORT_DIR_FIELDS];
  page: number;
  urlName: string;
}

export interface FetchAttachmentsReqParamsInterface extends UrlParamsInterface {
  limit: number;
}

export interface DropboxAttachment {
  filename: string;
  url: string;
  iconUrl: string;
}

export interface Attachment {
  aid: string;
  contentType: string;
  filename: string;
  fid: number;
  mid: number;
  hasThumbs: number;
  isInline: number;
  groupName: string;
  partPath: string;
  size: number;
  subject: string;
  sentDate: string;
  stgVer?: number;
  contentUrl?: string;
  from: Email;
  id?: string;
  groupId?: number;
  index?: number;
}

export interface AttachmentState extends ListState {
  attachments: { [id: string]: Attachment };
  totalCount: number;
  isFetching: boolean;
  isFetched: boolean;
  isFetchedError: boolean;
  tempCustomFilters: CustomUrlParamsInterface;
  lastShownId: string;
  hoverId: string;
}

export interface AttachmentRootState {
  [KEY]: AttachmentState;
}

export type AttachmentsAction =
  | { type: typeof FETCH_ATTACHMENTS; append: boolean }
  | { type: typeof SET_LAST_SHOWN_ID; id: string }
  | { type: typeof SET_HOVER_ID; id: string }
  | {
      type: typeof FETCH_ATTACHMENTS_SUCCESS;
      attachments: AttachmentState['attachments'];
      groups: AttachmentState['groups'];
      checks: AttachmentState['checks'];
      totalCount: number;
    }
  | { type: typeof FETCH_ATTACHMENTS_FAILURE }
  | {
      type: typeof SET_URL_PROPS;
      view: string; // todo after APP in 3.0 !!!
      props: Partial<CustomUrlParamsInterface>; // todo after APP in 3.0 !!!
      isPrinting?: boolean;
    }
  | {
      type: typeof SET_TEMP_CUSTOM_FILTERS;
      tempFilters: Partial<CustomUrlParamsInterface>;
    }
  | {
      type: typeof SET_GROUP_VISIBILITY;
      groupIds: AttachmentState['groupVisibility'];
    }
  | {
      type: typeof TOGGLE_CHECKED;
      id: string;
      isChecked?: boolean;
      mode: (typeof CHECKED_MODE)[keyof typeof CHECKED_MODE];
    };
