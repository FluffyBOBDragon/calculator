// JavaScript Document

function v(val) {
	document.getElementById("d").value += val;
}


function d(val) {
	document.getElementById("d").value=val;
}


function e(){
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}

