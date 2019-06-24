//Get the current year
$('#year').text(new Date().getFullYear());

//slider configuration
$('.carousel').carousel({
    interval: 6000,
    pause: 'hover'

});

// Video Play - from stackOverflow
$(function () {
    // Auto play modal video
    $(".video").click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});

//lightbox plugin by ashleydw https://ashleydw.github.io/lightbox/
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});