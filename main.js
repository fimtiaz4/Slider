const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    
    mousewheel: true,

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },


    // autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // effect 
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },


  });