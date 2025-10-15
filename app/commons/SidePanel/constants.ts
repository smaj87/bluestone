export const KEY = 'side-panels';

export const OPEN = `${KEY}/OPEN` as const;
export const CLOSE = `${KEY}/CLOSE` as const;

const mountNode = document.getElementById('side-panels');

if (!mountNode) {
  throw new Error(
    'side-panels mount node not found! Read app/commons/README.md',
  );
}

export const MOUNT_NODE = mountNode;
