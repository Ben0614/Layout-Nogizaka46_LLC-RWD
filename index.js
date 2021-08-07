// 預設為關起來
let menuOpened = false;

// JQ
$(function () {
    $('.nav').click(function () {
        menuOpened = !menuOpened;

        if (menuOpened == true) {
            $('.menu').stop().slideToggle();
            $('.menu-bg').stop().slideToggle();
            $('.bar-1').stop().slideToggle().css('transform', 'rotate(20deg)')
            $('.bar-2').stop().slideToggle().css('transform', 'rotate(-20deg)')
            $('.bar-1').stop().slideToggle().css('top', '50%')
            $('.bar-2').stop().slideToggle().css('top', '50%')
        } else {
            $('.menu').stop().slideToggle();
            $('.menu-bg').stop().slideToggle();
            $('.bar-1').stop().slideToggle().css('transform', 'rotate(0)')
            $('.bar-2').stop().slideToggle().css('transform', 'rotate(0)')
            $('.bar-1').stop().slideToggle().css('top', '40%')
            $('.bar-2').stop().slideToggle().css('top', '60%')
        }
    })
})

// 滑鼠觸碰就變色
$('.nav').hover(function(){
    $('.bar-1').css('backgroundColor','#000');
    $('.bar-2').css('backgroundColor','#000');
},function(){
    $('.bar-1').css('backgroundColor', '#999');
    $('.bar-2').css('backgroundColor', '#999');
})



// 傳統JS
// const menu = document.querySelector('.menu');
// const menu_bg = document.querySelector('.menu-bg');
// const nav = document.querySelector('.nav');
// const bar_1 = document.querySelector('.bar-1');
// const bar_2 = document.querySelector('.bar-2');


// nav.addEventListener('click', function () {
//     menuOpened = !menuOpened;

//     if (menuOpened == true) {
//         menu.style.display = 'block';
//         menu_bg.style.display = 'block';

//         // 變成X
//         bar_1.style.top = `50%`;
//         bar_1.style.transform = `rotate(20deg)`;
//         bar_1.style.backgroundColor = `#000`;

//         bar_2.style.top = `50%`;
//         bar_2.style.transform = `rotate(-20deg)`;
//         bar_2.style.backgroundColor = `#000`;

//     } else {
//         menu.style.display = 'none';
//         menu_bg.style.display = 'none';

//         // 恢復原狀
//         bar_1.style.top = `40%`;
//         bar_1.style.transform = `rotate(0)`;
//         bar_1.style.backgroundColor = `#999`;

//         bar_2.style.top = `60%`;
//         bar_2.style.transform = `rotate(0)`;
//         bar_2.style.backgroundColor = `#999`;

//     }

// })


// // 滑鼠觸碰就變色
// nav.addEventListener('mouseover', function () {
//     bar_1.style.backgroundColor = `#000`;
//     bar_2.style.backgroundColor = `#000`;
// })

// // 滑鼠移開就恢復原本顏色
// nav.addEventListener('mouseout', function () {
//     bar_1.style.backgroundColor = `#999`;
//     bar_2.style.backgroundColor = `#999`;
// })



