function main() {
  const header = document.querySelector(".header");
  headerEl(header);

  const footer = document.querySelector(".footer");
  footerEl(footer);

  getContentfulData().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });
}
function addWorkCard(params = {}) {
  const templateEl = document.querySelector("#services__template");
  const containerCards = document.querySelector(".services__content");

  const imgCard = templateEl.content.querySelector(".services__item-card-img");
  imgCard.src = params.image;

  const titleCard = templateEl.content.querySelector(
    ".services__item-card-title"
  );
  titleCard.textContent = params.title;

  templateEl.content.querySelector(
    ".services__item-card-description"
  ).textContent = params.description;

  const clone = document.importNode(templateEl.content, true);
  containerCards.appendChild(clone);
}

function getContentfulData() {
  return fetch(
    "https://cdn.contentful.com/spaces/kpsb0kn6pxr1/environments/master/entries?access_token=o51OBKlPrC9UNzjUw413uMzUzQWo6TFyCMVz9tZEiN4&content_type=services"
  )
    .then((res) => res.json())
    .then((data) => {
      const arrObj = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          url: item.fields.url,

          imageID: item.fields.imagen.sys.id,
          includes: data.includes.Asset,
        };
      });

      arrObj.forEach((x) => {
        const id = searchAsset(x.imageID, x.includes);
        x.image = "https:" + id.fields.file.url;
      });

      return arrObj;
    });
}

function searchAsset(assetID, includes) {
  const found = includes.find((i) => {
    return i.sys.id == assetID;
  });

  return found;
}
main();
