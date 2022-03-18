function main() {
  const header = document.querySelector(".header");
  headerEl(header);

  const footer = document.querySelector(".footer");
  footerEl(footer);

  const contact = document.querySelector(".form");
  contactEl(contact);

  const formSubmit = document.querySelector(".form__form-container");
  catchData(formSubmit);
}

main();
