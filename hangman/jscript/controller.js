var controller = {
    life: 3,
    letter:0,
    init: function(name) {
        for (var i = 0; i < name.length; i++) {
            var input = '<div class="hangman" id="' + i + '"></div>';
            $("#location").append(input);
        }
    },

    control: function(name) {
    	var self=this;
        $(".tictoe").click(function() {
            $(this).addClass("block");
            $(this).unbind();
            var number = name.indexOf($(this).text());
            if (name.indexOf($(this).text()) != -1) {
                for (var j = 0; j < name.length; j++) {
                    if (name.charAt(j) == $(this).text()) {
                        $("#" + j).text($(this).text());
                        self.letter++;
                        if (self.letter == name.length) {
                            $(".tictoe").unbind();
                           display.winner();
                        }
                    }
                }
            } else {
                self.life--;
                $("#life1").text(self.life);
                if (self.life === 0) {
                   display.gameover();
                }
            }
        });
    }

};
