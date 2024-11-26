//product 

function product(info){
   var htmlcode=`
      <div id="Ourproduct">
            <img src="${info.url}" alt="">
            <h3>${info.title}</h3>
            <p>${info.des}</p>
            <a href="${info.details}">
               <button class="button">details</button>
         </a>
   </div>
   `
   return htmlcode;
}




var form = document.getElementById("form")

form.addEventListener("submit",function(e){
   e.preventDefault();
   var title=e.target.title.value;
   var details = e.target.details.value;
   var url = e.target.url.value;
   var des = e.target.des.value;


      var productInfo={
         title,
         details,
         url,
         des,
      }

      var code = product(productInfo)
      var root = document.getElementById("root")
      console.log(root)
      root.innerHTML+=code;
   })
