// JavaScript Document
let spHotSwiper = null, spHotSwiper1 = null, spHotSwiper2 = null, spHotSwiper3 = null;
const taoSlide = () => {
    if (spHotSwiper === null) {
        spHotSwiper = new Swiper('.sp-orgatech', {
            loop: true,
            pagination: {el: '.swiper-pagination'},
            autoplay: {delay: 2500}
        });
    }
    if (spHotSwiper1 === null) {
        spHotSwiper1 = new Swiper('.sp-orgatech1', {
            loop: true,
            pagination: {el: '.swiper-pagination'},
            autoplay: {delay: 2500}
        });
    }
    if (spHotSwiper2 === null) {
        spHotSwiper2 = new Swiper('.sp-orgatech2', {
            loop: true,
            pagination: {el: '.swiper-pagination'},
            autoplay: {delay: 2500}
        });
    }
    if (spHotSwiper3 === null) {
        spHotSwiper3 = new Swiper('.sp-orgatech3', {
            loop: true,
            pagination: {el: '.swiper-pagination'},
            autoplay: {delay: 2500}
        });
    }
}
    
let thediv = document.getElementById(`sp-orgatech-holder`);
const ro = new ResizeObserver(dtuong => {
    let vw = document.documentElement.clientWidth;
    console.log(vw);
    if(vw >=768){
        if (spHotSwiper !==null) spHotSwiper.destroy (); spHotSwiper = null;
        if (spHotSwiper1 !==null) spHotSwiper1.destroy (); spHotSwiper1 = null;
        if (spHotSwiper2 !==null) spHotSwiper2.destroy (); spHotSwiper2 = null;
        if (spHotSwiper3 !==null) spHotSwiper3.destroy (); spHotSwiper3 = null;
    }
    else{
      taoSlide();
    }
})
ro.observe(thediv);



