var todos = {
 
    bindfunction: function() {
        var self = this;
        $('#userinput').keypress(function(e) {
            var key = e.which;
            if (key == 13)
                self.addTextBox();
        });

        $("#completed").click(function() {
            self.completed();
        });


        $("#all").click(function() {
            self.all();
        });


        $("#active").click(function() {
            self.active();

        });
        $("#delete").click(function() {
            self.remove();

        });


    },
    addTextBox: function() {
        console.log("textbox");
        var input1 = $("#userinput").val();
        var input =
            '<div class="task">' +
            '<div class="row">' +
            '<div class="col-lg-6">' +
            '<div class="input-group">' +
            '<span class="input-group-addon">' +
            '<input type="checkbox" aria-label="...">' +
            '</span>' +
            '<input type="text" class="form-control" value="' + input1 + '" aria-label="...">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        $("#location").prepend(input);
        $("#userinput").val("");
    },
    completed: function() {
        console.log("complete");
        $('.task').hide();
        var i = 0;
        console.log($(".task :checkbox"));
        $(".task :checkbox").each(function(index) {
            i++;
            if ($(this).is(':checked')) {
                $(this).closest('.task').show();
            }
            console.log(i);
        });
    },
    all: function() {
        console.log("all");
        $('.task').show();
    },
    active: function() {
        console.log("active");
        $('.task').show();
        $(".task :checkbox").each(function(index) {
            if ($(this).is(':checked')) {
                $(this).closest('.task').hide();
            }
        });
    },
    remove: function() {
        console.log("delete");

        $(".task :checkbox").each(function(index) {
            if ($(this).is(':checked')) {
                $(this).closest('.task').remove();
            }
        });
    }






};
