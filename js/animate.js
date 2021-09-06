var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1900);
    myVar = setTimeout(hidePage, 2000);
}

function hidePage() {
	document.getElementById("loader").style.display = "none";
}
function showPage() {
     document.getElementById("body").style.display = "block";

}



