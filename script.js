function openmenu() {
    if (document.getElementsByClassName('links')[0].classList.contains('open')) {
        document.getElementsByClassName('links')[0].classList.remove('open'); 
    } else {
        document.getElementsByClassName('links')[0].classList.add('open'); 
    }
}

var ee = "";
document.onkeypress = function(event){
    ee = ee + event.key;
    if (ee == "gpg") {
        window.location.replace("/vc_pub.gpg");
    }
}