window.onload = function() {

    let modal = document.getElementById('myModal');
    let vid1 = document.getElementById('vid');
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        vid1.play();
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