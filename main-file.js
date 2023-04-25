window.addEventListener('DOMContentLoaded', (event) => {
    const partner_swiper = new Swiper('.partner_swiper',{
        direction: 'horizontal',
        effect: 'slide',
        margin: 30,
        autoplay: {
            delay:600,
        },
        breakpoints: {
            1080:{
                slidesPerView: 5,
                slidesPerGroup: 1,
                width:1200,
                loop: true,
            },
            425:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            },
            375:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            },
            320:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            }
        }

    });
    const certificate_slider = new Swiper('.certificate-slider' , {
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        width: 1200,
        navigation: {
            nextEl: '.right-btn-n',
            prevEl: '.left-btn-n',
        },
        pagination: {
            clickable: true,
            enabled: true,
            type: "bullets",
            bulletActiveClass: "slider-dots-active",
            el: "#dots-container",
            bulletClass: "s-dot",
        },
        breakpoints:{
            1080:{
                slidesPerView: 4,
                slidesPerGroup: 1,
                width:1200,
                loop: true,
            },
            425:{
                slidesPerView:4,
                slidesPerGroup:1,
                width:750,
                loop: true,
            },
            375:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            },
            320:{
                slidesPerView:5,
                slidesPerGroup:1,
                width:750,
                loop: true,
            }
        }
    });
    const nav = document.querySelector('.catalog-btn')
    const menu = document.querySelector('.container-nav')
    nav.addEventListener('click' , (event) =>{
            event.preventDefault()
            menu.classList.add('active')
            document.body.style.overflow = 'hidden'
        })
    menu.addEventListener('click' , (event) => {
        if (event.target.classList.contains('nav-left-panel')){
            menu.classList.remove('active')
            document.body.style.overflow = 'visible'
        }
    })
    let stroke = document.querySelectorAll('.stroke-nav')
    let navCatalog = document.querySelector('.nav-block2')
    let text_active = document.querySelectorAll('.text-nav')
    let icon_active = document.querySelectorAll('.icon-nav_item')
    for (let i = 0 ; i<stroke.length ; i++){
        stroke[i].addEventListener('click' , () =>{
            navCatalog.classList.toggle('active_stroke')
            text_active[i].classList.toggle('active_string')
            icon_active[i].classList.toggle('active_icon')
        })
    }
});