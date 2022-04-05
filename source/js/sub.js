window.addEventListener('load', () => {
  const tubs = document.querySelectorAll('.sub__month-link');
  const lists = document.querySelectorAll('.sub__list');

  function changeLists(tubs, lists, jsClass, cssClass) {
    tubs.forEach((tub, i) => {
      tub.addEventListener('click', (evt) => {
        evt.preventDefault();
        tubs.forEach((el) => {
          el.classList.remove(cssClass);
        });
        tub.classList.add(cssClass);
        lists.forEach((list) => {
          list.classList.add(jsClass);
        });
        lists[i].classList.remove(jsClass);
      });
    });
  }

  if (tubs) {
    changeLists(tubs, lists, 'sub__list-hidden', 'sub__month-link--active');
  }
});
