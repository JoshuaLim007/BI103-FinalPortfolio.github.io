var originalNavX = 0;
window.onload = function() {
    var navBar = document.getElementsByClassName("NavBar")[0];
    originalNavX = navBar.style.right + 50;
    navBar.style.right = -250 + 'px';
    //console.log('hello');
}

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

function invlerp(x, a, b) {
    return (x - a) / (b - a);
}

function lerp(a, b, x) {
    return a + x * (b - a);
}

window.onscroll = function() {
    var first = document.getElementById("0");
    var scrollDistance = window.scrollY - first.offsetTop + first.offsetHeight;
    if (scrollDistance > -200) {
        var time = invlerp(scrollDistance, -200, 200);
        console.log(time);
        var navBar = document.getElementsByClassName("NavBar")[0];
        navBar.style.right = lerp(-250, originalNavX, time) + 'px';
        if (time > 1) {
            navBar.style.right = originalNavX + 'px';
        }
    }
}