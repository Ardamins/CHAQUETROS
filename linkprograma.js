// Abrir modal
function abrirModal(id) {
  document.getElementById("modal").style.display = "block";

  // Aquí pones los links dependiendo del programa
  const linkMega = document.getElementById("linkMega");
  const linkMediafire = document.getElementById("linkMediafire");
  const linkDrive = document.getElementById("linkDrive");

  switch(id) {
    case '1': // CINEMA 4D
      linkMega.href = "https://mega.nz/winrar";
      linkMediafire.href = "https://mediafire.com/winrar";
      linkDrive.href = "https://drive.google.com/file/d/1KbpC2YQhjpuZC9eWWzfwjaOCfKIwdIOC/view?usp=sharing";
      break;
    case '2': // NITRO PDF
      linkMega.href = "https://mega.nz/photoshop";
      linkMediafire.href = "https://mediafire.com/photoshop";
      linkDrive.href = "https://drive.google.com/file/d/1QO0YDMJZML3uMLLAP4GyyD1mScLlAQI_/view?usp=sharing";
      break;
    case '3': // PACKTRACER
      linkMega.href = "https://mega.nz/office2019";
      linkMediafire.href = "https://mediafire.com/office2019";
      linkDrive.href = "https://drive.google.com/file/d/1ceBfNrtPjXzeoq-k7HZwiphBLwEsk1lA/view?usp=sharing";
      break;
    case '4': // ARCHITEC ENDERPRISE
      linkMega.href = "https://mega.nz/vscode";
      linkMediafire.href = "https://mediafire.com/vscode";
      linkDrive.href = "https://drive.google.com/file/d/1K713JKo0lA-nAIbqzojj_jYL-6ZbNkjE/view?usp=sharing";
      break;
    case '5': // photoshop cs6
      linkMega.href = "https://mega.nz/javajdk";
      linkMediafire.href = "https://mediafire.com/javajdk";
      linkDrive.href = "https://drive.google.com/file/d/1qwXDNJ-9zZbyJF5Pah7sokVjNlssc1ga/view?usp=sharing";
      break;
    case '6': // SPSS
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/10iK7E3iHhJqjCulgSTKiR4kGbtcvTc1O/view?usp=sharing";
      break;
       case '7': //CINEMA 4D 2012
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1JB69hQ_kHuEQt2XsVW1al1r3vAkj-qV8/view?usp=sharing";
      break;
        case '8': //CINEMA 4D 2021 PORTABLE
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/19lsX9xU-8a_h6WH8whx2UOwUVWpedTMu/view?usp=sharing";
      break;
        case '9': //FL STUDIO 21
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1OZyuueboCtXgLH9_62EM_yU-H8tvHbBJ/view?usp=sharing";
      break;
          case '10': //PROTEUS
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1xsmwA_ldSOlzGOAWlGdP6BOg-xDL0kWe/view?usp=sharing";
      break;
          case '11': //ARGIS 3.2
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1KH_IBS5FSbevn7eguXlXAp5Fg_upW6Ty/view?usp=sharing";
      break;
        case '12': //ERWIN
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1RC5KDjLvOkVSoi6Om4BoD1rIZa_4ywXg/view?usp=sharing";
      break;
    case '13': //simulador
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1XKxF2ibhlJ937Pqiow8hE4oR3gyc-F4c/view?usp=sharing";
      break;
       case '14': //DRIVE
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1qHxS4AQ-EnW7PP9TxOHGFEX1QBeQlrFn/view?usp=sharing";
      break;
         case '15': //DRIVE
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1vklF3Wk3eDlWUvutECV4oxvqLW5H68Yx/view?usp=sharing";
      break;
         case '16': //DRIVE
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1KMNlNFPl8UtxB_E4_GBm0G7F8t1V_ViA/view?usp=sharing";
      break;
         case '17': //DRIVE
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/19-c0KWAhZg263zDFstoo5tkVNif4QC6N/view?usp=sharing";
      break;

    default:
      linkMega.href = "error, seleccioan bien p webon";
      linkMediafire.href = "error, seleccioan bien p webon";
      linkDrive.href = "error, seleccioan bien p webon";
  }
}

// Cerrar modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
