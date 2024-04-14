const span = document.querySelectorAll('.rotator__case');

let i = 0
setInterval ( () => {
    span[i].classList.remove('rotator__case_active')
    if (i < span.length-1) {
        span[i].nextElementSibling.classList.add('rotator__case_active')
        i++
    } else {
        span[0].classList.add('rotator__case_active')
        i = 0
    };
},1000);