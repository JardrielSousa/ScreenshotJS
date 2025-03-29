// Inicializar o mapa
var map = L.map('map').setView([-23.55052, -46.633308], 13); // Coordenadas para São Paulo, por exemplo

// Adicionar uma camada de mapa com tiles do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adicionar um marcador no mapa
L.marker([-23.55052, -46.633308]).addTo(map)
    .bindPopup('São Paulo')
    .openPopup();

// Função para gerar o PDF do mapa
document.getElementById('printBtn').addEventListener('click', function() {
    // Usar html2canvas para capturar o mapa como uma imagem
    html2canvas(document.getElementById("map"), {
        logging: true, // Opção de log para depuração (opcional)
        useCORS: true // Permite que imagens de outros domínios sejam capturadas corretamente
    }).then(function(canvas) {
        // Criar o PDF usando jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        // Adicionar a imagem do mapa ao PDF
        pdf.addImage(canvas.toDataURL("image/png"), 'PNG', 10, 10, 180, 160); // Posição e tamanho da imagem no PDF

        // Imprimir o PDF diretamente
        pdf.autoPrint(); // Aciona a função de impressão automática no navegador
        window.open(pdf.output('bloburl'), '_blank'); // Abre a janela de impressão
    }).catch(function(error) {
        console.error("Erro ao gerar o canvas: ", error);
    });
});
