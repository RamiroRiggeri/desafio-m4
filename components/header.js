function headerEl(el) {
  const componentEl = document.createElement("header");
  componentEl.innerHTML = `<nav class="header__navbar">
  <a href="https://ramiroriggeri.github.io/desafio-m4/"><img src="./img/logo.png" class="header__logo" /></a>
        <div class="header__burger-menu">
          <span class="header__burger-bar"></span>
          <span class="header__burger-bar"></span>
          <span class="header__burger-bar"></span>
        </div>
        <div class="header__window">
          <img src="./img/Vector.png" class="header__close-window" alt="" />
          <ul class="header__window-content">
            <li><a href="./index.html" class="header__sections">Inicio</a></li>
            <li><a href="./portfolio.html" class="header__sections">Portfolio</a></li>
            <li><a href="./servicios.html" class="header__sections">Servicios</a></li>
            <li><a href="./contacto.html" class="header__sections">Contacto</a></li>
          </ul>
        </div>
      </nav>`;
  el.appendChild(componentEl);
  const abreVentanaEl = document.querySelector(".header__burger-menu");
  const ventanaEl = document.querySelector(".header__window");
  abreVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });

  const cierraVentanaEl = document.querySelector(".header__close-window");
  cierraVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
