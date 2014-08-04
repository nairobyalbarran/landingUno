jQuery(document).ready(function() {
    /*----------------------------------------------------*/
    /*  Animated Progress Bars
     /*----------------------------------------------------*/

    jQuery('.skills li').each(function() {
        jQuery(this).appear(function() {
            jQuery(this).animate({opacity: 1, left: "0px"}, 800);
            var b = jQuery(this).find(".progress-bar").attr("data-width");
            jQuery(this).find(".progress-bar").animate({
                width: b + "%"
            }, 1300, "linear");
        });
    });

});


jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).appear(function() {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 5000);
        });
    });
});

//window.onload = function() {
//
//    $(document).ready(function() {
//        $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
//
//    });
//
//};

$(document).ready(function() {
    $('.carousel').carousel();
    $(".fancybox")
            .attr('rel', 'gallery')
            .fancybox({
                padding: 0
            });
    $("a.fancybox").fancybox();

    /* Using custom settings */

    $("a#inline").fancybox({
        'hideOnContentClick': true
    });
//
//    /* Apply fancybox to multiple items */
//
//    $("a.group").fancybox({
//        'transitionIn': 'elastic',
//        'transitionOut': 'elastic',
//        'speedIn': 600,
//        'speedOut': 200,
//        'overlayShow': false
//    });

});

function show() {

    $("#app").hide();
    $('.detalles').click(function() {

        $('#descripcion').fadeIn(2000);

    });
}


$(document).ready(function() {

    $('.descripcion').hide();
    $('#app').on('click', function() {
        //$("#app").hide();
        $('.detalleApp1').fadeIn(2000);
        $('.detalleApp1').insertAfter('.portfolio');
        $('.detalleApp2').hide();
        $('.detalleApp3').hide();
    });

    $('#app2').on('click', function() {
        //$("#app").hide();
        $('.detalleApp2').fadeIn(2000);
        $('.detalleApp2').insertAfter('.portfolio');
        $('.detalleApp1').hide();
        $('.detalleApp3').hide();
    });

    $('#app3').on('click', function() {
        //$("#app").hide();
        $('.detalleApp3').fadeIn(2000);
        $('.detalleApp3').insertAfter('.portfolio');
        $('.detalleApp1').hide();
        $('.detalleApp2').hide();
    });



    $('.close').on('click', function() {
        $('.detalleApp1').hide();
        $('.detalleApp2').hide();
        $('.detalleApp3').hide();
        $('.aplicaciones').insertAfter('.portfolio');
    });

});