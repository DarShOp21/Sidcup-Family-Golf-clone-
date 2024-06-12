let cursor = document.querySelector("#cursor")
let blrcursor = document.querySelector("#blur-cursor")
document.addEventListener("mousemove",(dets) => {
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
    blrcursor.style.left = dets.x-200+"px";
    blrcursor.style.top = dets.y-200+"px";
})

gsap.to("#nav", {
    backgroundColor : "black",
    duration: 0.5,
    // delay: 1,
    height: "105px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start : "top -5%",
        scrub: 1
    } 
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -100%",
        scrub: 1
    }
})

var h4 = document.querySelectorAll("#nav h4");
h4.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        cursor.style.scale = 3;
        cursor.style.backgroundColor= "transparent"
        cursor.style.border = "0.4px white solid";
        elem.style.color= "#b3e824";
    });
    elem.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.backgroundColor= "#b3e824";
        cursor.style.border = "0";
        elem.style.color = "white"
    });
})

gsap.from("#part1 h1", {
    top: "60px",
    scrollTrigger: {
        trigger: "#part1 h1",
        scroller: "body",
        // markers: true,
        start: "bottom 98%",
        end: "bottom 98%",
        scrub: 1,
        duration: "0.5s"
    }
})