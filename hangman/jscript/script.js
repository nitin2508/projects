var name = "AUSTRALIA";
var life = 3;
var letter=0;
for (var i = 0; i < name.length; i++) {
    var input = '<div class="hangman" id="' + i + '"></div>';
    $("#location").append(input);
}
$(".tictoe").click(function() {
    $(this).addClass("block");
    $(this).unbind();
    var number = name.indexOf($(this).text());
    if (name.indexOf($(this).text()) != -1) {
        for (var j = 0; j < name.length; j++) {
            if (name.charAt(j) == $(this).text()) {
                $("#" + j).text($(this).text());
                letter++;
                if(letter==name.length){
                    alert("You are winner");
                    $(".tictoe").unbind();
                }
            }
        }
    } else {
        console.log(life);
        life--;
        $("#life1").text(life);
        if (life === 0) {
            alert("Game Over");
        }
    }
});
