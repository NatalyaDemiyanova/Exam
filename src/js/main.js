
const sliderHeader = new Glide('#slider', {
  type: 'carousel',
  gap: 30,
  perView: 1,
  // autoplay: 5000
});

sliderHeader.mount();
	

const sliderNews = new Glide('#glide', {
  type: 'carousel',
  gap: 30,
  startAt: 1,
  perView: 3,
  autoplay: 4000,

  breakpoints: {
    900: {
      perView: 2
    },
    768: {
      perView: 1
    }
  }  
});

sliderNews.mount();
	