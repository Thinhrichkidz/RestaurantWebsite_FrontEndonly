// JavaScript Document
let udSwiper = null;
//Phan uu diem swiper
const taoSlide = () => {
	udSwiper  = new Swiper(".udSwiper", {
			  autoplay: {
				 delay: 2500,
				 disableOnInteraction: false,
			  },
			  pagination: {
				 el: ".swiper-pagination",
				 clickable: true,
			  }
			});
}
taoSlide();

let thediv = document.querySelector(`.uu-diem`);

        const ro = new ResizeObserver(dtuong => {
            ///đọc chiều rộng cửa sổ...
            let vw = document.documentElement.clientWidth;
            console.log(vw);
            if(vw >=768){///tablet, desktop
             if (udSwiper !==null) udSwiper.destroy ();
                udSwiper =null;
            }
            else{///mobile
             if (udSwiper ===null)  taoSlide();
            }
        })
        ro.observe(thediv);

//=======================
var dgSwiper  = new Swiper(".dgSwiper", {
  autoplay: {
	 delay: 3000,
	 disableOnInteraction: false,
  },
  pagination: {
	 el: ".dgSwiper .swiper-pagination",
	 clickable: true,
  }
});



