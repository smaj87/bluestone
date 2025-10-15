export const KEY = 'modals';

export const OPEN = `${KEY}/OPEN` as const;
export const CLOSE = `${KEY}/CLOSE` as const;
export const UPDATE_MODAL_PARAMS = `${KEY}/UPDATE_MODAL_PARAMS` as const;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const MOUNT_NODE = document.getElementById('modals')!;

export const MODAL_DIALOG_CONSTANT_THEME_CLASS = 'modal-dialog-constant-theme';
