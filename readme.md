# Mapa Interativo com Leaflet e Geração de PDF

Este é um projeto simples que utiliza o **Leaflet.js** para criar um mapa interativo da cidade de Fortaleza, no Ceará, e gera um arquivo PDF com a imagem do mapa. O projeto também utiliza o **html2canvas** para capturar o mapa como uma imagem e o **jsPDF** para gerar o PDF.

## Tecnologias Utilizadas

- **Leaflet.js**: Biblioteca JavaScript para mapas interativos.
- **html2canvas**: Biblioteca JavaScript que permite capturar elementos DOM e convertê-los em imagens.
- **jsPDF**: Biblioteca JavaScript para criar e manipular arquivos PDF.
- **OpenStreetMap**: Fonte de tiles (imagens de mapa) para o Leaflet.

## Como Funciona

1. **Mapeamento Interativo**: O mapa é carregado com o Leaflet e centralizado no estado do Ceará (Fortaleza).
2. **Marcadores**: O mapa possui marcadores em algumas coordenadas aleatórias de Fortaleza.
3. **Botão de Geração de PDF**: Um botão permite gerar um arquivo PDF com uma imagem do mapa atual.
4. **PDF Gerado**: O PDF gerado pode ser baixado com a visualização atual do mapa, incluindo os marcadores.

## Funcionalidade

1. O mapa é exibido na página, com a cidade de Fortaleza, Ceará, centralizada.
2. Ao clicar no botão "Baixar PDF do Mapa", o mapa é capturado como imagem e gerado um PDF contendo essa imagem.
3. O PDF é automaticamente baixado no formato **mapa-ceara.pdf**.

## Estrutura do Projeto

O projeto consiste em um único arquivo HTML, que carrega as bibliotecas necessárias e implementa a lógica para exibir o mapa e gerar o PDF.

## Como Usar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/mapa-fortaleza.git
