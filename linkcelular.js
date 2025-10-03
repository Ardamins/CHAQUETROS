function abrirModal() {
  const modal = document.getElementById("modal");
  const version = document.getElementById("versionSelect").value;

  const mega = document.getElementById("linkMega");
  const mediafire = document.getElementById("linkMediafire");
  const drive = document.getElementById("linkDrive");

  // Aquí pones tus enlaces reales
  if (version === "11") {
    mega.href = "https://mega.nz/android11";
    mediafire.href = "https://www.mediafire.com/android11";
    drive.href = "https://drive.google.com/android11";
  } else if (version === "12") {
    mega.href = "https://mega.nz/android12";
    mediafire.href = "https://www.mediafire.com/android12";
    drive.href = "https://drive.google.com/android12";
  } else if (version === "13") {
    mega.href = "https://mega.nz/android13";
    mediafire.href = "https://www.mediafire.com/android13";
    drive.href = "https://drive.google.com/android13";
  } else if (version === "14") {
    mega.href = "https://mega.nz/android14";
    mediafire.href = "https://www.mediafire.com/android14";
    drive.href = "https://drive.google.com/android14";
  } else {
    mega.href = "#";
    mediafire.href = "#";
    drive.href = "#";
  }

  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Cerrar modal al hacer click fuera
window.addEventListener('click', (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) modal.style.display = "none";
});
