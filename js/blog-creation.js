$(document).ready(function () {
    "use strict";


    function refreshBlogPost(){
        $.get("data/blog.json", {

        }).done(function (data) {
            $("#blog-entries").html(createBlogPost(data));
        });
    }
    refreshBlogPost();


    function createBlogPost(entries) {
        var blogHTML = "";
        entries.forEach(function (entry) {
            blogHTML += '<div class="row">';
            blogHTML += '<article class="col-12">';
            blogHTML += '<div class="card w-100 mt-4">';
            blogHTML += '<img class="card-img-top" src="' + entry.img + '" alt="Card image cap">';
            blogHTML += '<div class="card-body text-left">';
            blogHTML += '<h4 class="card-title">' + entry.title + '</h4>';
            blogHTML += '<h6>'+ entry.categories + ', ' + entry.date + '</h6>';
            blogHTML += '<p class="card-text">' + entry.content + '</p>';
            blogHTML += '<div class="input-group w-25 float-left">';
            blogHTML += '<a href="#" class="btn text-left bg-black text-white mt-4">Read More ></a>';
            blogHTML += '</div>';
            blogHTML += '<a href="#" class="btn float-right color-black">Comments<span class="badge bg-black ml-2 text-white">4</span></a>';
            blogHTML += '</div>';
            blogHTML += '</div>';
            blogHTML += '</article>';
            blogHTML += '</div>';
        });
        return blogHTML;
    }





});