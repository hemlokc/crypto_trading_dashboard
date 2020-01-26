export default function scrollToTop(snapTo = false) {
  if (snapTo) {
    window.scrollTo(0, 0);
    return null;
  }
  let timeOut;
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
    window.scrollBy(0, -200);
    timeOut = setTimeout(() => scrollToTop(), 10);
  }
  return () => clearTimeout(timeOut);
}
