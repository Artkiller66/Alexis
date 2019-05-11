window.onload = function() {

var modal = document.getElementById('myModal');
var vid1 = document.getElementById('vid');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
    vid1.pause();
    vid1.currentTime = 0;
};

window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            vid1.pause();
            vid1.currentTime = 0;
        }
    };
};