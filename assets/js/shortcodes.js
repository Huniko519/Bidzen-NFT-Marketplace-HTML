/**
  * isMobile
  * goTop
  * WOW
  * Preloader
  * dropdown
  * no_link
  * tabs
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            return false;
        });
    };

    new WOW().init();

    var Preloader = function () {
        setTimeout(function () {
        $(".preload").fadeOut("slow", function () {
            $(this).remove();
        });
        }, 800);
    };

    var dropdown = function(id){
        var obj = $(id+'.dropdown');
        var btn = obj.find('.btn-selector');
        var dd = obj.find('ul');
        var opt = dd.find('li');
            dd.hide();
            // $('body').on('click', function (e) {
            //     var clickID = e.target.id;
            //     if ((clickID !== "#target-dropdown" )) {
            //         $(id).find('ul').removeClass('show');
            //         e.stopPropagation();
            //     }
            // });
            if ( !dd.hasClass('show') ) {
                btn.on("click", function() {
                    dd.show();
                    dd.toggleClass('show');
                    $(this).css("z-index",1000);
                })
                ;

                opt.on("click", function() {
                    dd.hide();
                    var txt = $(this).text();
                    opt.removeClass("active");
                    $(this).addClass("active");
                    btn.text(txt);
                    dd.removeClass('show');
                });
            }
    };

    var no_link = function(){
        $('a.nolink').on('click', function(e){
          e.preventDefault();
      });
      $('.icon_menu .icon a').on('click', function(e){
        e.preventDefault();
    });
    }

    var flcustominput = function () {
        $("input[type=file]").change(function (e) {
            $(this).parents(".uploadFile").find(".filename").text(e.target.files[0].name);
          });          
    };

    var tabs = function(){
        $('.flat-tabs').each(function(){
            $(this).find('.content-tab').children().hide();
            $(this).find('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
            });
        });
        
    };

    var dropdown_options = function () {
        $(document).on('click', function (e) {
            var clickID = e.target.class;
            if ((clickID !== '.target-menu')) {
                $('.dropdown-options').removeClass('show');
            }
        });
        

        $('.dropdown-options').on('click', function (event) {
            if (!$(this).hasClass("show")) {
                $(this).addClass('show');
                event.preventDefault();
            }
            else
                $(this).removeClass('show');
                event.preventDefault();
                event.stopPropagation();
        });
    }
    
    // Dom Ready
    $(function () {
        goTop();
        tabs();
        no_link();
        dropdown('#all-items');
        dropdown('#new-items');
        dropdown('#buy');
        dropdown('#sort-by');
        dropdown('#ethereum');
        dropdown('#english');
        dropdown('#date-select');
        flcustominput();
        dropdown_options();
        Preloader();
    });

})(jQuery);
