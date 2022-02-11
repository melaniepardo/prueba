$(document).ready(function () {
    // activa los tooltips
    $('[data-toggle="tooltip"]').tooltip()
    //  activa smooth scroll
    $('a').click(function () {
        var gato = this.hash
        $('html, body').animate(
            {
                scrollTop: $(gato).offset().top
            },
            800
        )
    })
})