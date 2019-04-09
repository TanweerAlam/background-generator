var body = document.getElementById('mainBody');
var input1 = document.querySelector('#color1');
var input2 = document.querySelector('#color2');
var backgroundColor = document.querySelector('#backgroundColor');

function setBackground(){
	body.style.background = "linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")";
	backgroundColor.textContent = body.style.background + ";";
}

input1.addEventListener('input', setBackground);

input2.addEventListener('input', setBackground);