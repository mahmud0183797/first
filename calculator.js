var display = document.getElementsByClassName("display")

var btns = document.querySelectorAll(".btns button")

for(i = 0; i < btns.length; i++){
   var btn = btns[i];

   btn.addEventListener("click",function(e){
   var text = e.target.innerText;
   display.value=88;
      if(text === '='){

      }else if (text === 'AC'){

      }else{
         display.value=text;

      }
   })
}