document.getElementById('btnDescargar').addEventListener('click', function() {
    // Ruta del archivo PDF que deseas descargar
    var pdfUrl = 'cv/CV-Cristian-Poroj-Frontend-Jr.pdf';
    
    // Crea un enlace temporal
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV-Cristian-Poroj-Frontend'; // Nombre que se le dará al archivo descargado
    
    // Simula el clic en el enlace
    link.click();
  });
  