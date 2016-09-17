var todoData = [];
var todos = {
    init: function() {
        var self = this;
        if (localStorage.name2) {
            todoData = JSON.parse(localStorage.name2);
            for (var i = todoData.length - 1; i >= 0; i--) {
                self.appendTodo(todoData[i]);
            }
        } else {
            console.log("name2 empty");
        }
    },
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

        $("#location").on("change", ".task", function() {

            var todo = todoData[$(this).index()];

            console.log(todo);
            console.log($(this).index('.task'));
            if ($(this).find(':checkbox').is(':checked')) {
                todo.checked = true;
                console.log('true');
            } else {
                console.log('false');
                todo.checked = false;
            }

            todoData[$(this).index()] = todo;
            localStorage.name2 = JSON.stringify(todoData);
        });
    },
    addTextBox: function() {
        var input1 = $("#userinput").val();
        var todo = {
            name: input1,
            checked: false
        };
        todoData.unshift(todo);
        localStorage.name2 = JSON.stringify(todoData);
        this.appendTodo(todo);
    },
    completed: function() {
        $('.task').hide();
        $(".task :checkbox").each(function(index) {
            if ($(this).is(':checked')) {
                $(this).closest('.task').show();
            }
        });
    },
    all: function() {
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
    },
    appendTodo: function(value) {
        var checkboxChecked = "";
        if (value.checked) {
            checkboxChecked = "checked";
        }
        var input =
            '<div class="task">' +
            '<div class="row">' +
            '<div class="col-lg-6">' +
            '<div class="input-group">' +
            '<span class="input-group-addon">' +
            '<input type="checkbox" ' + checkboxChecked + ' aria-label="...">' +
            '</span>' +
            '<input type="text" class="form-control" value="' + value.name + '" aria-label="...">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        $("#location").prepend(input);
        $("#userinput").val("");
    }
};
