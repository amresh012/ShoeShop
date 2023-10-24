{
let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}
}
// 
  const list=[
  {
    id:0,
    Num:"01",
    name:"Trendmark",
    dec:"Sneakers 2023 Limited Edition",
    icon:"fa fa-long-arrow-right"
  },
  {
    id:1,
    Num:"02",
    name:"Trendmark",
    dec:"Sneakers 2023 Limited Edition",
    icon:"fa fa-long-arrow-right"
  },
  {
    id:2,
    Num:'03',
    name:"Trendmark",
    dec:"Sneakers 2023 Limited Edition",
    icon:"fa fa-long-arrow-right"
  },
  {
    id:3,
    Num: '04',
    name:"Trendmark",
    dec:"Sneakers 2023 Limited Edition",
    icon:"fa fa-long-arrow-right"

  }
 ]
 document.getElementById('tabdata').innerHTML =
  list.map(data=>`<li class="flex w-full hover:bg-white hover:text-black cursor-pointer justify-around items-center" >
 <div class="flex flex-col p-4">
     <span>${data.Num}</span>
     <span>${data.name}</span>
     <span class="w-24">${data.dec}</span>
     </div>
     <i class="${data.icon} tex-white font-medium mt-4 "></i>
</li>`);
// 


// {
//   // Get the modal
//   var modal = document.getElementById("myModal");
    
//   // Get the button that opens the modal
//   var btn = document.getElementById("myBtn");
  
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
  
//   // When the user clicks the button, open the modal 
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }
  
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
  
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// }


function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


const MoreCategory =[
  { id:1,
    name:"bestseller",
    num:6
},
{  id:2,
  name:"featured",
  num:7
},
{ id:3,
  name:"Kids",
  num:5
},
{ id:4,
  name:"latest",
  num:8
},
{ id:5,
  name:"men",
  num:4
},
{ id:6,
  name:"slider product",
  num:4
},{
  id:7,
  name:"Women",
  num:7
}
]
document.getElementById('MoreCategoryList').innerHTML= MoreCategory.map((data)=>
`
<div class="flex gap-2 items-center justify-start text-white  px-2 cursor-pointer">
<li>~</li>
<li>${data.name}</li>
<li>${(data.num)}</li>
</div>
`);



// cart functionlity
// Sample product data, you may get this from a server in a real application
const Allproducts = [
    {
      id:1,
      url:"./Media/AllProductSectionImage/img1.webp",
      title:"Wynk Textured Low-Top Lace...",
      dec:`Embrace classic sophistication with our timeless shoe collection.
       Inspired by the fashion icons of the past, our designs exude grace and charm that 
       transcends trends. Whether you're attending a formal event or simply want to add a touch
        of refinement to your everyday attire, our shoes
       are the perfect choice to make a lasting impression.`,
      price:"",
      size1:34,
      size2:36,
      size3:38,
      tag:""

    },
    {
      id:2,
      url:"./Media/AllProductSectionImage/img2.webp",
      title:"Laced Joggers for Men",
      dec:`Our shoes are designed to empower you with every step. With a focus on quality materials and ergonomic 
      design, we prioritize comfort 
      without compromising on style. Whether you're conquering the boardroom or hitting the dance floor,
       our shoes will provide the support you need, so you can walk tall and confident wherever you go.`,
      price:"",
      size1:34,
      size2:36,
      size3:38,
      tag:""

    },
    {
      id:3,
      url:"./Media/AllProductSectionImage/img3.webp",
      title:"Sports Shoes of High Quality",
      dec:`Embrace classic sophistication with our timeless shoe collection. Inspired by the fashion 
      icons of the past, our designs exude grace and charm that transcends trends.
       Whether you're attending a formal event or simply want to add a touch of refinement to your everyday attire, our shoes
       are the perfect choice to make a lasting impression.`,
      price:"",
      size1:34,
      size2:36,
      size3:38,
      tag:""

    },
    {
      id:4,
      url:"./Media/AllProductSectionImage/img4.webp",
      title:"Literide Perforated Slingback Clogs",
      dec:`Many early natives in North America wore a similar type of footwear,
       known as the moccasin. These are tight-fitting, soft-soled shoes
        typically made out of leather or bison hides. 
        Many moccasins were also decorated with various 
        beads and other adornments. Moccasins were not designed
         to be waterproof, and in wet weather and warm summer months, most Native Americans went barefoot. The leaves of the sisal plant were used to make twine for sandals in South America
       while the natives of Mexico used the Yucca plant.`,
      price:"",
      size1:34,
      size2:36,
      size3:38,
      tag:""

    },
    {
      id:5,
      url:"./Media/AllProductSectionImage/img5.webp",
      title:"Titanium Lace-Up Sports Shoes",
      dec:`In another building I was shown his manufactory of shoes, which, like 
      the other, is full of ingenuity, and, in regard to subdivision of labour, brings this
       fabric on a level with the oft-admired manufactory of pins. Every step in it is affected
        by the most elegant and precise machinery; while, as each operation is performed by one
         hand, so each shoe passes through twenty-five hands, who complete from the hide, as supplied 
         by the currier, a hundred pairs of strong and well-finished shoes per day. All the details are performed by 
         the ingenious application of 
         the mechanic powers; and all the parts are
         characterised by precision, uniformity, and accuracy.`,
      price:"",
      size1:34,
      size2:36,
      size3:38,
      tag:""

    }, 
    {
      id:6,
      url:"./Media/AllProductSectionImage/img6.webp",
      title:"Omax Lace-Up Sports Shoes",
      dec:"Our shoes are made for the explorer in you. From rugged hiking boots to waterproof trail runners, our collection caters to outdoor enthusiasts who crave both durability and style. With advanced technologies and superior traction, our shoes will keep you comfortable and secure as you embark on your next adventure.",
      price:"",
      size1:34,
      size2:36,
      size3:38,
      tag:""

    }
  // Add more products here
];


// Initialize the cart
let cart = [];

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
      addToCart(products[index]);
  });
});

// Function to add a product to the cart
function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';

  cart.forEach((product) => {
      const item = document.createElement('div');
      item.textContent = `${product.name} - $${product.price}`;
      cartContainer.appendChild(item);
  });
}

// All Product slider
 const product = document.querySelectorAll(".slider-container .wrapper")
 let count =0;

 function left(){
  count --;
  scroll()
 }

 function right(){
  count++;
  scroll()
 }

 function scroll(){
  product.forEach(function(item){
    item.style.transform = `translateX(-${count * 130}px)`
  })
 }

