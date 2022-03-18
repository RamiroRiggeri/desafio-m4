function footerEl(el) {
  const componentEl = document.createElement("footer");
  componentEl.innerHTML = `<footer>
  <div class="footer__container">
  <a href="https://ramiroriggeri.github.io/desafio-m4/"><img src="./img/logo.png" class="footer__logo" /></a>
    <ul class="footer__social-media">
      <li>
        <a href="https://www.instagram.com/ramarig/">
          Instagram
          <img
            src="./img/instagram.png"
            alt="logo de instagram"
            class="footer__icon"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ramiro-riggeri/">
          LinkedIn
          <img
          src="./img/linkedin.png"
          alt="logo de LinkedIn"
          class="footer__icon"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/RamiroRiggeri">
        Github
        <img
          src="./img/github.png"
          alt="logo de github"
          class="footer__icon"
        />
      </li>
    </a>
    </ul>
  </div>
</footer>`;
  el.appendChild(componentEl);
}
