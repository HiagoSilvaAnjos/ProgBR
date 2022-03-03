const canvasElement = document.getElementById('screen');
const context = canvasElement.getContext('2d'); 
context.moveTo(0, 0);
context.lineTo(250,250);
context.strokeStyle = '#571087'
context.lineWidth = 5;
context.lineTo(500,0);
context.stroke();