jQuery(document).ready(function() {
   
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


$(document).ready(function() {

    $(document).on('click', 'a.smooth', function(e) {
        e.preventDefault();
        var $link = $(this);
        var anchor = $link.attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
    });

    $('.carousel').carousel();
    $('.descripcion').hide();
    $('#app').on('click', function() {
        $('.detalleApp1').fadeIn(2000);
        $('.detalleApp1').insertAfter('.portfolio');
        $('.detalleApp2').hide();
        $('.detalleApp3').hide();
    });

    $('#app2').on('click', function() {
        $('.detalleApp2').fadeIn(2000);
        $('.detalleApp2').insertAfter('.portfolio');
        $('.detalleApp1').hide();
        $('.detalleApp3').hide();
    });

    $('#app3').on('click', function() {
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


    $("#send").click(function() {

        $(".c_error").remove();
        var nombre = $("#nombre").val();
        email = $("#email").val();
        validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        telefono = $("#telefono").val();
        empresa = $("#empresa").val();
        comentarios = $("#comentarios").val();

        if (nombre == "") {
            $("#nombre").focus();
            $('#nombre').after("<span class='c_error' id='c_error_nombre'>Introduzca un nombre</span>");

            return false;
        } else if (email == "" || !validacion_email.test(email)) {
            $("#email").focus();
            $('#email').after("<span class='c_error' id='c_error_email'>Introduzca un Email</span>");
            return false;
        } else if (comentarios == "" || comentarios.length <= 20) {
            $("#comentarios").focus();
            $('#comentarios').after("<span class='c_error' id='c_error_comentarios'>Introduzca al menos 20 caracteres</span>");
            return false;
        } else {
            $('.ajaxgif').removeClass('hide');
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: {
                    'nombre': nombre,
                    'email': email,
                    'telefono': telefono,
                    'empresa': empresa,
                    'comentarios': comentarios
                },
                dataType: 'json',
                encode: true,
                complete: function() {
                    $('#formulario').each(function() {
                        this.reset();
                    });
                }
            }).done(function(resultado) {
                $('.ajaxgif').hide();
                if (resultado.success) {
                    $('.msg').text(JSON.stringify(resultado.success)).addClass('msg_ok');
                }
                else {
                    $('.msg').text(JSON.stringify(resultado.mensaje)).addClass('msg_Nok').animate({'right': '130px'}, 300);
                }

                console.log(resultado);
            }).fail(function(error) {
                alert('ERROR');
                console.log(error);
                $('.ajaxgif').hide();
                $('.msg').text('Hubo un error!').addClass('msg_error').animate({'right': '130px'}, 300);
            });
            return false;
        }
    });
});







