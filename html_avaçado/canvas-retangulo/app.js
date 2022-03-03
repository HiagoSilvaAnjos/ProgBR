const canvasElement = document.getElementById('screen');
const context = canvasElement.getContext('2d'); 

context.rect(0, 10, 100, 200);

context.fillStyle = "blue";
context.lineWidth = 5;

context.strokeStyle = 'red';

context.fill();
context.stroke();

context.clearRect(20, 20, 30, 30);
