$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 540){
            $('.barradenavegacion').addClass("barrapegada");
        }else{
            $('.barradenavegacion').removeClass("barrapegada");
            }
    })
});
    //Funcion para que se aparezca el menu al ser responsivo//
    $('.menu-btn').click(function(){
        $('.barradenavegacion .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
});
$(document).ready(function(){
    $(window).scroll(function(){
            if(this.scrollY > 1150){
                $('.skill-per').each(function(){
                    var $this = $(this);
                    var per = $this.attr('per');
                    $this.css("width",per+'%');
                    $({animatedValue: 0}).animate({animatedValue: per},{
                      duration: 1000,
                      step: function(){
                        $this.attr('per', Math.floor(this.animatedValue) + '%');
                      },
                      complete: function(){
                        $this.attr('per', Math.floor(this.animatedValue) + '%');
                      }
                    });
                  });
            }else{
                $('.skill-per').removeClass("per");
            }
    })
});