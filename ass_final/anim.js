


$("a").click(function(event) {
if (!event.isDefaultPrevented())

{event.preventDefault()
}else {
    return
}
    const href = $(this).attr("href");
    window.history.pushState(null, null, href);

    $.ajax({
        url: href,
        success: function(data) {
            $("body").fadeOut(250, function() {
                 const newpage = $(data).filter(".content").html()

            $(".content").html(newpage)
            $("body").fadeIn(250);


            })
        }


    })
});
