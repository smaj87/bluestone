export function getDenormalizedFlags(flags: string[], isExtra = false) {
  const glue = isExtra ? ',' : '\\';

  return `${!isExtra && glue}${flags.join(glue)}`;
}

export function getNormalizedFlags(flags = '', extraFlags = '') {
  return [
    ...(flags || '').replace(/^[\s\\]+|[\s\\]+$/gi, '').split('\\'),
    ...(extraFlags || '').split(','),
  ];
}

export function checkFlag(flags: string[] = [], flagToCheck = '') {
  return flags.length > 0 && flags.includes(flagToCheck);
}

export function setFlag(flags: string[] = [], flagToSet = '') {
  return !flags.length || !checkFlag(flags, flagToSet)
    ? [...flags, flagToSet]
    : flags;
}

export function removeFlag(flags: string[] = [], flagToRemove = '') {
  return checkFlag(flags, flagToRemove)
    ? flags.filter((r) => r !== flagToRemove)
    : flags;
}
