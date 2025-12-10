
showPDF = () => {
const fileInput = document.getElementById('fileInput');
const pdfCanvas = document.getElementById('pdfCanvas');
const file = fileInput.files[0];

if (file &&file.type =='application/pdf'){
    const fileURL = URL.createObjectURL(file); // Create a URL for the file THIS IS THE KEY LINE
    pdfCanvas.src = fileURL;
    pdfCanvas.style.display = 'block';

    const container = document.getElementById('container');
container.style.display = 'none';
} else {
    alert('Please select a valid PDF file.');
    pdfCanvas.src = '';
}
}
