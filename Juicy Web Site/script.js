let apples = document.querySelector('.apple');
let pear = document.querySelector('.pear');
let marakuia = document.querySelector('.marakuia');
let title1 = document.querySelector('.title1')
let title2 = document.querySelector('.title2')
let title3 = document.querySelector('.title3')
let can1 = document.querySelector('.can-pear')
let can2 = document.querySelector('.can-apple')
let can3 = document.querySelector('.can-exotic')
let back1 = document.querySelector('.back1')
let back2 = document.querySelector('.back2')
let back3 = document.querySelector('.back3')
let leaf1 = document.querySelector('.leaf1')
let leaf2 = document.querySelector('.leaf2')

let current = 0;

setInterval(function () {
    current++
    if(current == 1) {
        back3.style.left = '100%'
        back1.style.left = '-100%'
        back2.style.left = '0%'
        can2.style.top = '0%'
        can1.style.top = '100%'
        can2.style.opacity = '1'
        can1.style.opacity = '0'
        can3.style.top = '-100%'
        apples.style.left = '5%'
        pear.style.top = '-150%'
        marakuia.style.top = '150%'
        title1.style.transform = 'scale(0)'
        title2.style.transform = 'scale(1)'
        title3.style.transform = 'scale(0)'
        title1.style.opacity = '0'
        title2.style.opacity = '1'
        title3.style.opacity = '0'
        leaf1.style.left = '52%'
        leaf1.style.transform = 'rotate(0)'
        leaf2.style.left = '37%'
        leaf2.style.transform = 'rotate(-110deg)'
    } else if(current == 2) {
        back3.style.left = '0'
        back1.style.left = '-200%'
        back2.style.left = '-100%'
        can2.style.top = '100%'
        can1.style.top = '200%'
        can2.style.opacity = '0'
        can1.style.opacity = '1'
        can3.style.top = '0'
        can3.style.opacity = '1'
        title1.style.transform = 'scale(0)'
        title2.style.transform = 'scale(0)'
        title3.style.transform = 'scale(1)'
        title1.style.opacity = '0'
        title2.style.opacity = '0'
        title3.style.opacity = '1'
        apples.style.left = '-150%'
        pear.style.top = '-150%'
        marakuia.style.top = '0'
        leaf1.style.left = '35%'
        leaf1.style.transform = 'rotate(-110deg)'
        leaf2.style.left = '55%'
        leaf2.style.transform = 'rotate(0deg)'
    } else if(current == 3) {
        back3.style.left = '200%'
        back1.style.left = '0'
        back2.style.left = '100%'
        can2.style.top = '-100%'
        can1.style.top = '0'
        can2.style.opacity = '0'
        can1.style.opacity = '1'
        can3.style.top = '-200%'
        apples.style.left = '-150%'
        pear.style.top = '0'
        marakuia.style.top = '150%'
        title1.style.transform = 'scale(1)'
        title2.style.transform = 'scale(0)'
        title3.style.transform = 'scale(0)'
        title1.style.opacity = '1'
        title2.style.opacity = '0'
        title3.style.opacity = '0'
        leaf1.style.left = '35%'
        leaf1.style.transform = 'rotate(-110deg)'
        leaf2.style.left = '55%'
        leaf2.style.transform = 'rotate(0deg)'
        current = 0;
    }

}, 3000);