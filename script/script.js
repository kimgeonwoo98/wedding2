(function($){

    class Joi  {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.footer();
            this.modal();
        }
        header(){
            $('.main-btn').on({
                mouseenter(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                },
                focus(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }
                
            })
            $('.col').on({
                mouseleave(){
                    $('.sub').stop().slideUp(200);
                    $('.main-btn').removeClass('on');
                }
                
            })
        }
        section1(){
            let cnt = 0;
            function mainSilde(){
                $('.slide-wrap').stop().animate({top: `${cnt*-100}%`}, 600, function(){
                    if(cnt>2) cnt=0;
                    $('.slide-wrap').stop().animate({top: `${cnt*-100}%`}, 0);
                });
            }
            function nextCount(){
                cnt+=1;
                mainSilde();
            }
            function autoTimer(){
                setInterval(nextCount,3000);
            }
            autoTimer();
        }
        section2(){
            console.log('section2')
        }
        section3(){
            $('.gallery-btn').on({
                click(){
                    $('.gallery-btn, .notice-btn, .notice, .gallery').addClass('on')
                }
            })
            $('.notice-btn').on({
                click(){
                    $('.gallery-btn, .notice-btn, .notice, .gallery').removeClass('on')
                }
            })
        }
        footer(){
            console.log('footer')
        }
        modal(){
            // 모달열기
            $('.not_btn').on({
                click(e){
                    e.preventDefault();
                    $('.modal').removeClass('close')
                    $('.modal').addClass('open')
                }
            })
            // 모달닫기
            $('.btn-box').on({
                click(e){
                    e.preventDefault();
                    $('.modal').removeClass('open')
                    $('.modal').addClass('close')
                }
            })
        }
    }
    const joi = new Joi(); // 클래스 객체를 생성하여 사용한다.
    joi.init();
})(jQuery);