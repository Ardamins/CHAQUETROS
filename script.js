// ---------- MODAL ----------
function abrirModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  let version = document.getElementById("versionSelect").value;
  let linkMega = document.getElementById("linkMega");
  let linkMediafire = document.getElementById("linkMediafire");
  let linkDrive = document.getElementById("linkDrive");

  switch (version) {
    case "1": // OptiCraft 1.16
      linkMega.href = "https://mega.nz/file/opt-116";
      linkMediafire.href = "https://www.mediafire.com/file/opt-116";
      linkDrive.href = "https://drive.google.com/file/d/16QxR7Kg0mYEDfvE-5U8Uplf4UG4Yz0-j/view";
      break;

    case "2": // OptiCraft 1.17
      linkMega.href = "https://mega.nz/file/opt-117";
      linkMediafire.href = "https://www.mediafire.com/file/opt-117";
      linkDrive.href = "https://drive.google.com/file/d/1TlHnKrkEJWXmaM0b3iRli-QoeCoDxqE3/view";
      break;

    case "3": // OptiCraft 1.18 portable
      linkMega.href = "https://mega.nz/file/opt-118";
      linkMediafire.href = "https://www.mediafire.com/file/opt-118";
      linkDrive.href = "https://drive.google.com/file/d/1nIgfX3AMQpYzb3JGWAldO7N1KAH3nVQp/view";
      break;

    case "4": // OptiCraft 1.19
      linkMega.href = "https://mega.nz/file/opt-119";
      linkMediafire.href = "https://www.mediafire.com/file/opt-119";
      linkDrive.href = "https://drive.google.com/file/d/1DtNIAB-Ki0vhxe7MFhn0S0Xd_AAKGrkH/view";
      break;

    case "5": // OptiCraft 1.20
      linkMega.href = "https://mega.nz/file/opt-120";
      linkMediafire.href = "https://www.mediafire.com/file/opt-120";
      linkDrive.href = "https://drive.google.com/file/d/16-9D2wkF0iVTjgIV90eUkqmfg2B1zNgq/view";
      break;

    case "6": // OptiCraft 1.21
      linkMega.href = "https://mega.nz/file/opt-121";
      linkMediafire.href = "https://www.mediafire.com/file/opt-121";
      linkDrive.href = "https://drive.google.com/file/d/1_wN7CmXtKtHxdx21k9ofVNysvciwpAEY/view";
      break;

    default:
      linkMega.href = "#";
      linkMediafire.href = "#";
      linkDrive.href = "#";
      alert("⚠️ Selecciona bien la versión.");
  }
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// ---------- CARRUSEL ----------
const carruselInner = document.getElementById("carruselInner");
const items = document.querySelectorAll(".carrusel-item");
let currentIndex = 0;

function updateCarrusel() {
  const offset = -currentIndex * (items[0].offsetHeight + 20);
  carruselInner.style.transform = `translateY(${offset}px)`;
}

// Botón abajo
document.querySelector(".carrusel-btn.next").addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarrusel();
  }
});

// Botón arriba
document.querySelector(".carrusel-btn.prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarrusel();
  }
});
