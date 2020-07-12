const mesureWidth = () => {
  return 500;
}

const openItem = item => {
  const  hiddenContent = item.find(".accordeon__content");
  const reqWidth = mesureWidth();

  hiddenContent.width(reqWidth);
}

$(".accordeon__triger").on('click', e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".accordeon__item");


  openItem(item);
});