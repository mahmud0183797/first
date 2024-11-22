

// for (i=0;i<4;i++){
//    document.querySelectorAll(".bt")[i].addEventListener("click",function(){
//       var t = this.innerHTML;
//       console.log(t)
//    })


//    switch(t){
//       case "o":
//          var audio= new Audio("practise/t1.mp3");
//          audio.play()
//       break;
//       case "oo":
//          var audio = new Audio("practise/t1.mp3");
//          audio.play();
//       break;
//       case "ooo":
//             var audio = new Audio("practise/t1.mp3");
//             audio.play();
//    }}





// for (i=0; i<3; i++){
//    document.querySelectorAll(".bt")[i].addEventListener("click",function(){
//    var text = this.innerHTML;
//    //console.log(text);
//       tx(text);
//       play(text);

//    });
// }


//    document.addEventListener("keypress",function(event){
//       var text = event.key;
//       tx(text)
//       play(text)
//    })




// function tx (text){
//    switch(text){
//       case "a":
//          var audio = new  Audio("t1.mp3");
//          audio.play();
//          break;
//       case "b":
//          var audio = new Audio("t2.mp3");
//          audio.play();
//          break;
//       case "c":
//          var audio = new Audio("t3.mp3");
//          audio.play()
//    }
// }


// function play (text){
//    var slt = document.querySelector("."+text)
//    console.log(slt)
//    slt.classList.add("anim-style")

//    setTimeout (function (){
//       slt.classList.remove("anim-style")
//    },300);
// }



// var p = document.querySelector("p");

// var count=0;





// document.addEventListener("keypress",function(event){
//    count++;

//    var evnt=event.key;

//    var evnt=evnt.toUpperCase();
   

//    querySelector("textarea").addEventListener("keypress",function(event){
//       var text= event.key;
//    })


//    p.innerHTML="you have press "+evnt+count;

// })




// var input = document.querySelector("input");

// input.addEventListener("change",passchange)

// function passchange(o){
//    console.log(o)
// }




// var programs = document.querySelectorAll("input[name=program");
// console.log(programs)

// Array.from(programs).map((program) => {
//    program.addEventListener("change",programHandler)
// });

// function programHandler(e){
//    console.log('checked')
// }

// const form = document.querySelector("form")
// const name = form.querySelector("div #name")
// const email = form.querySelector("div #email")
// const password = form.querySelector("div #password")

// form.addEventListener("submit",formHamdler)

// function formHamdler(e){
//    console.log("submit")
// }



const video = document.querySelector('video')

video.addEventListener('canplay',function(){
   console.log("canplay")
})


video.addEventListener('play',function(){
   console.log("play")
})


video.addEventListener('playing',function(){
   console.log("playing")
})