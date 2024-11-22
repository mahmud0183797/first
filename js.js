var div = document.querySelector("div")
console.log(div)
div.addEventListener("click" , function(){
   console.log("clicked")


   div.addEventListener("click",function(e){
      console.log(e.target.id)
   })

   div.addEventListener("click",function(e){
      console.log(e.target.innerHTML)
   })

   div.addEventListener("click",function(e){
      console.log(e.target.innertext)
   })
})






div.addEventListener("click" , function(){
   console.log("clicked")
})

div.addEventListener("mouseout" , function(){
   console.log("mouseout")
})

div.addEventListener("mouseover" , function(){
   console.log("mouseover")
})

div.addEventListener("mousescroling" , function(){
   console.log("climousescrolingcked")
})

var video = document.querySelector("video")
video.addEventListener("canplay", function(){
   console.log("canplay")
})
video.addEventListener("play", function(){
   console.log("play")
})
video.addEventListener("playing", function(){
   console.log("playing")
})
video.addEventListener("pause", function(){
   console.log("pause")
})


var btns = document.querySelectorAll(".btn")
console.log(btns)

Array.from(btns).map((btn)=>{
   btn.addEventListener("click",function(e){
      console.log("click")
      console.log("click="+e.target.innerHTML)
   })
})
