$(function () {


      /* Slider slick  #testimonialsSlider (t-slider)
      =============================*/

      $('#t-slider').slick({
         // infinite: true,
         autoplay: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         adaptiveHeight: true,
         // fade: true,
   
      });



     /* Mobile nav
   =============================*/

   $('.header__burger, #header__menu-close').click(function (event) {

      $('#header__menu, #header__menu-close').toggleClass('burger-active');
      
   })

  

   /* Animation 
      =============================*/

      const animItems = document.querySelectorAll('.anim-items');

      if (animItems.length > 0) {
         window.addEventListener('scroll', animOnScroll);
         function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
               const animItem = animItems[i];
               const animItemHeight = animItem.offsetHeight;
               const animItemOffset = offset(animItem).top;
               const animStart = 4;

               let animItemPoint = window.innerHeight - animItemHeight / animStart;

               if (animItemHeight > window.innerHeight) {
                  animItemPoint = window.innerHeight - window.innerHeight / animStart;
               }

               if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                  animItem.classList.add('anim-active');
               } else {
                  if (!animItem.classList.contains('anim-no-hide')) {
                     animItem.classList.remove('anim-active');
                  }
               }
            }
         }

         function offset(el) {
            const rect = el.getBoundingClientRect(),
               scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
               scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
         }

         setTimeout(() => {
            animOnScroll();
         }, 300);
      

         animOnScroll();
      }



      /*scrollUp BUTTON
      =============================*/

       // При нажатии кнопки идти вверх;

   document.getElementById('buttonUp').onclick = function scrollUpFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   }


   // Кнопка появляется, когда проскролили 500px

   window.onscroll = function() {scrollFunction()}

   function scrollFunction() {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
         document.getElementById('buttonUp').style.opacity = "1";
         
      } else {
         document.getElementById('buttonUp').style.opacity = "0";
      }


       /*fixed Burger-menu
      =============================*/

       // Когда проскролили больше 300px,
       // меню становится черным;


      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        
         document.getElementById('header__burger').style.backgroundColor = "black";
      } else {
         
         document.getElementById('header__burger').style.backgroundColor = "transparent";
      }
   }



    /* Отправка формы на почту 
      =============================*/

      document.addEventListener('DOMContentLoaded', function () {
         const form = document.getElementById('form');
         form.addEventListener('submit', formSend);

         async function formSend(e) {
            e.preventDefault();

            let error = formValidate(form);
         }


         function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll('._req');

            for (let i = 0; i < formReq.length; i++) {
               const input = formReq[i];
               formRemoveError(input);

               if (input.classList.contains('_email')) {
                  if (emailTest(input)) {
                     formAddError(input);
                     error++;
                  }
               } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                  formAddError(input);
                  error++;
               } else {
                  if (input.value === '') {
                     formAddError(input);
                     error++;
                  }
               }

            }
         }

         function formAddError(input) {
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
         }
         function formRemoveError(input) {
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
         }
         // Функция теста email
         function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
         }
         
      });


      /* Lightgallery 
      =============================*/

      $(document).ready(function () {
         $('#lightgallery').lightGallery();
      })


  



});