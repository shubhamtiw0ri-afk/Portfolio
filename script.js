const bars = document.querySelectorAll(".progress-bar")

bars.forEach(bar => {

let width = bar.getAttribute("data-width")

setTimeout(()=>{
bar.style.width = width
},500)

})