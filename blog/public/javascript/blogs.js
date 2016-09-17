var blogPage = {
    init: function() {
        this.bindEvents();
        this.blogs();
    },

    bindEvents: function() {
        var self = this;
        $("#blogs").on("click", ".title", function(e) {
            console.log(this.id);
            self.singleBlog(this.id);
        });

        $("#newblog").on("click", function() {
            self.showCreateNew();
        });

        $("#submit").click(function() {
            var id = $(this).attr("blogid");
            if (id) {
                self.editMyBlog($(this).attr("blogid"));
            } else {
                self.blogPost();
            }
        });

        $("#myblog").click(function() {
            self.showMyBlog();
            self.getMyBlog(registerPage.username);
        });
        $("#home").click(function() {
            self.blogs();
        });

        $("#blogs").on("click", ".editblog", function(e) {
            var id = this.id;
            self.showCreateNew();
            ajaxUtils.get("blogs/" + id, function(response) {
                console.log("dncjdsnvjsnv");
                console.log(response.title);

                $("#title").val(response.title);
                $("#detail").val(response.content);
                $("#submit").attr("blogid", id);
            });

        });
    },
    blogs: function() {
        var self = this;
        ajaxUtils.get("blogs", function(response) {
            var source = $("#blogs-template").html();
            var template = Handlebars.compile(source);
            var html = '';
            for (var i = 0; i < response.length; i++) {
                html += template(response[i]);
            }
            $('#blogs').html(html);
            self.showHome();
        });

    },

    singleBlog: function(id) {
        ajaxUtils.get("blogs/" + id, function(response) {
            var source = $("#blog-template").html();
            var template = Handlebars.compile(source);
            var html = template(response);
            $("#blogs").html(html);
        });
    },

    blogPost: function() {
        var self = this;
        var data = {
            title: $("#title").val(),
            content: $("#detail").val()
        };
        ajaxUtils.post("blogs/", data, function(response) {
            self.singleBlog(response.id);
            $("#blogs").show();
            $("#createBlog").hide();

        });

    },

    getMyBlog: function(username) {

        ajaxUtils.get("blogs/user/" + username, function(response) {
            var source = $("#blogs-template").html();
            var template = Handlebars.compile(source);
            var html = '';
            for (var i = 0; i < response.length; i++) {
                html += template(response[i]);
            }
            $('#blogs').html(html);
            $("#blogs").show();
        });


    },
    editMyBlog: function(id) {
            var self = this;
            var data = {
                title: $("#title").val(),
                content: $("#detail").val()
            };
        ajaxUtils.put("blogs/" + id,data,function(response) {
                self.singleBlog(response._id);
                self.showHome();
        });

    },
    showHome: function() {
        $("#blogs").show();
        $("#createBlog").hide();
        $(".editblog").hide();
    },
    showMyBlog: function() {
        $(".editblog").show();
        $("#createBlog").hide();
        $("#blogs").hide();

    },
    showCreateNew: function() {
        $("#title").val("");
        $("#detail").val("");
        $("#createBlog").show();
        $("#blogs").hide();
        $("#submit").removeAttr("blogid");


    }

};
