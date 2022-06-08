
var text = ["Welcome fellow player.", "Well, how has life been for you?", "That's great.","Well now that I'm here it's time to make it worse."];
var i = 0;
var elemement = document.getElementById("cycle__text");


$(document).ready(function() {
    change()
});

function change() {

    $("#cycle__text").fadeToggle(3000, 'swing', function() {
        if ($("#cycle__text").css("display") == "none") {
            elemement.innerHTML = text[i];
            i++;
            if (i >= text.length) {
                //timeout for the last element
                setTimeout(function() {
                    window.location.href = "xTIYn65AE0P5n8u9o9Wx.html";
                }, 3000);
            }
        }
        change();
    });
}