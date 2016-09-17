var registerPage = {

        init: function() {
        this.logincheck();
     },
    bindEvents: function() {
        var self = this;
        $("#registration").click(function() {
            $("#loginModal").modal('hide');
        });

        $("#register-button").click(function() {
            self.register();
        });

        $("#login-button").click(function() {
            self.login();
        });
        $("#logout").click(function(){
            self.logout();
        });


            },
    register: function() {
        var data = {
            username: $("#inputEmail").val(),
            name: $("#name").val(),
            password: $("#inputPassword").val()
        };

        ajaxUtils.post("users/register", data, function(response) {
            $("#registerModal").modal('hide');
        });
    },
    login: function() {
        var data = {
            username: $("#logininputEmail").val(),
            password: $("#logininputPassword").val()
        };

        var self = this;

        ajaxUtils.post("users/login", data, function(response) {
            document.cookie = "token=" + response.token;
            self.logincheck();
        });

    },
    logincheck: function() {
        var self=this;
        ajaxUtils.get("users/user", function(response) {
            $("#beforelogin").hide();
            $("#loginModal").modal('hide');
            $("#afterlogin").show();
            $("#newblog").show();
            $("#myblog").show();

            var name = response.name;
            var username=response.username;
            self.username=username;
            var nameString = '<span class="glyphicon glyphicon-user">'+name+'</span>';
            $("#afterlogin > a").html(nameString);

        },function(error){
            $("#afterlogin").hide();
            $("#beforelogin").show();
            $("#newblog").hide();
            $("#myblog").hide();
        });

    },
    logout:function(){
        var self=this;

        ajaxUtils.get("users/logout",function(response){
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
           self.logincheck();
        });

    }
};
