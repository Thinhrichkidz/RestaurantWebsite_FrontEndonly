// JavaScript Document
let nut = document.getElementById(`n3v`);
const showHideMenu = () =>{
	document.body.classList.toggle(`show-menu`);
}
nut.addEventListener(`click`, showHideMenu);


let bonut=document.querySelectorAll(`.the-menu button`);
        let bocap2 = document.querySelectorAll(`.the-menu li ul`);// bộ các thẻ ul cấp 2
        const cogianmenu = (e) => {

        bonut.forEach(t =>{    
            if(t !== e.target) t.classList.remove(`opening`);
            })

        e.target.classList.toggle(`opening`);

        let menucap2 = e.target.nextElementSibling;

        bocap2.forEach(c => {
            if (c !== menucap2)slideUp(c, 100)
        })
            slideToggle(menucap2,250);
        }
    bonut.forEach(b => b.addEventListener(`click`, cogianmenu));
