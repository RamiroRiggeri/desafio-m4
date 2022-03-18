function contactEl(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `   <form class="form__form-container">
  <label class="form__label">
    <div>NOMBRE</div>
    <input name="nombre" type="text" class="form__label-name" />
  </label>
  <label class="form__label">
    <div>EMAIL</div>
    <input name="email" type="email" class="form__label-email" />
  </label>
  <label class="form__label">
    <div>Mensaje</div>
    <textarea name="mensaje" class="form__label-message"></textarea>
  </label>
  <button class="form__submit-btn">Enviar</button>
</form>`;
  el.appendChild(componentEl);
}

function sendData(data) {
  fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
}

function catchData(form) {
  const formEl = document.querySelector(".form__form-container");
  formEl.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const formEl = ev.target;
    const formData = new FormData(ev.target);
    const objData = Object.fromEntries(formData.entries());
    const postData = {
      to: objData.email,
      message: objData.mensaje,
    };
    sendData(postData);
    window.alert("¡Formulario Enviado!");
  });
}
