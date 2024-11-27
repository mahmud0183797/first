const product =[
   {
      id: 1,
      productName:'wirless mouse',
      imageUrl:'1552271011_max.jpg',
      price:100,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
   },
   {
      id: 2,
      productName:'wirless mouse',
      imageUrl:'download.jpg',
      price:70,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
   },
   {
      id: 3,
      productName:'laptop hp',
      imageUrl:'images (1).jpg',
      price:1000,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
   },
   {
      id: 4,
      productName:'laptop hp',
      imageUrl:'images.jpg',
      price:1000,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
   },
   {
      id: 5,
      productName:'phone mobile',
      imageUrl:'download (1).jpg',
      price:300,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
   }
]



const form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
   e.preventDefault();

   const searchBox = e.target.searchBox.value;

   const searh = searchBox.toLowerCase();
   console.log(searh)



   const products = product.filter((value)=>{
      const AllProductName = value.productName;

      const productLowerCase = AllProductName.toLowerCase()
      return productLowerCase.includes(searh)
   })
   const root = document.getElementById("root")
   let htmlCode='';
   products.forEach(value => {
      const html = productCard(value)
      return htmlCode+=html;
      
   });
   root.innerHTML=htmlCode;
})



function productCard (info){
   const {productName,imageUrl,price,description}=info;


   const html = `
   
      <div class="productCard">

         <img src="${imageUrl}" alt="">

         <h2>$${price}.</h2>

         <h4>${productName}</h4>

         <p>${description}... </p>

         <button>details</button>
      </div>
   
   `
   return html;
}
