// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function picshows (){
    var elemCont = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-div")
    elemCont.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemCont.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
    })
})
}
function changingAnimation(){
    var text = document.querySelectorAll(".head")
    var textcont = document.querySelector("#text")
    var para = document.querySelector("#para")
    var rightDiv = document.querySelector("#page4-right")
    var design = document.querySelector("#design")
    var project = document.querySelector("#project")
    var execution = document.querySelector("#execution")

    design.addEventListener("click",function(){
        project.style.color = "#504A45"
        execution.style.color = "#504A45"
        project.style.borderLeft = "3px solid #504A45"
        execution.style.borderLeft = "3px solid #504A45"
    })
    project.addEventListener("click",function(){
        design.style.color = "#504A45"
        execution.style.color = "#504A45"
        design.style.borderLeft = "3px solid #504A45"
        execution.style.borderLeft = "3px solid #504A45"
    })
    execution.addEventListener("click",function(){
        design.style.color = "#504A45"
        project.style.color = "#504A45"
        design.style.borderLeft = "3px solid #504A45"
        project.style.borderLeft = "3px solid #504A45"
    })


    text.forEach(function(e){
        e.addEventListener("click",function(){
            e.style.color = "white"
            e.style.borderLeft = "3px solid #FE330A"
            var image = e.getAttribute("image")
            rightDiv.style.backgroundImage = `url(${image})`
            var paratext = e.getAttribute("para")
            para.textContent = `${paratext}`
            
        })
})

}
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
      });
}


picshows()
changingAnimation()
swiperAnimation()