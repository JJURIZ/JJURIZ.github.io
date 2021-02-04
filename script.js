"use strict"

// Clickable div
$(".section-projects-project").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});

//https://css-tricks.com/snippets/jquery/make-entire-div-clickable/