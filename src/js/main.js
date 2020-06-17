
const sliderHeader = new Glide('#slider', {
  type: 'carousel',
  gap: 30,
  perView: 1,
  // autoplay: 5000
});
	

const sliderNews = new Glide('#glide', {
  type: 'carousel',
  gap: 30,
  startAt: 1,
  perView: 3,
  // autoplay: 4000,

  breakpoints: {
    // 900: {
    //   perView: 2,
    //   // gap: 20,
    // },
    768: {
      perView: 2,
    },
    500: {
      perView: 1,
    }
  }  
});

sliderHeader.mount();
sliderNews.mount();
	