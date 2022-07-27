// JavaScript Document

        let bonut=document.querySelectorAll(`.he-menu button`);
        let bocap2 = document.querySelectorAll(`.he-menu ul`);// bộ các thẻ ul cấp 2
        const cogianmenu = (e) => {
            //duyệt qua bonut, nếu khác cái đang bị click thì sẽ remove class opening
        bonut.forEach(t =>{    
            if(t !== e.target) t.classList.remove(`opening`);
            })
            // e.target là cái đang bị click
        e.target.classList.toggle(`opening`);
            //menu cấp 2 là em của cái button đang bị click
        let menucap2 = e.target.nextElementSibling;
        // duyệt qua bocap2, nếu khác menucap2 thì sẽ cuộn lên
        bocap2.forEach(c => {
            if (c !== menucap2)slideUp(c, 100)
        })
            slideToggle(menucap2,250);
        }
    bonut.forEach(b => b.addEventListener(`click`, cogianmenu));
