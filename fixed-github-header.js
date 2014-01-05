window.onload = function () {
  try {
    var header = document.getElementsByClassName('header')[0],
        body     = document.getElementsByTagName('body')[0];
    if (!header || !body) return;

    header.style.position = 'fixed';
    header.style.top      = 0;
    header.style.zIndex   = 1;
    header.style.width    = '100%';
    body.style.marginTop  = header.offsetHeight + 'px';
  } catch (e) {
    return;
  }
};
