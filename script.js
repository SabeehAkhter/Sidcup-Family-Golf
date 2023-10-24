var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +10 +"px"
    crsr.style.top = dets.y -10 +"px"
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y - 200 +"px"
    
    crsr.style.transition = "all 0.4s ease";
    blur.style.transition = "all 1s ease";
})

var h4all = document.querySelectorAll("#nav ul a, #arrow, #page4 .elem, .change-color, #f1, #card-img, #nav img")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all 1.5s ease-in";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
        crsr.style.transition = "all 1.5s ease-in";
    })
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:0.7
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-info",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.2,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1
//     }
// })

gsap.from("#colon1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 40%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:50,
    x:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 40%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 85%",
        end:"top 80%",
        scrub:2
    }
})
