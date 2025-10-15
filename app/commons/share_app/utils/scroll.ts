export const scrollToElementById = (elementId: string) => {
  const el = document.getElementById(elementId);
  el?.scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth',
  });
};
