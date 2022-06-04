import {products} from './products.js'

let filtered__products = [...products];

const products__container = document.querySelector('.products-container');
const companies = document.querySelector('.companies')

// display products
// 

const display__products = () => {
    products__container.innerHTML = filtered__products.map(({id,title,company,image,price})=>{

        return `<article class="product">
        <img src="${image}"
          class="product-img img" alt="" />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`

    }).join('');

    if(filtered__products.length < 1){
      products__container.innerHTML = `<p class="no__matches">Sorry, no items match your search.</p>`
    }
};

display__products();

// 
// search bar

const form = document.querySelector('.input-form');
const search__input = document.querySelector('.search-input');

form.addEventListener('keyup',() => {
    const input__value = search__input.value ;
    console.log(input__value);

    filtered__products = products.filter((product)=>{
        return product.title.toLowerCase().includes(input__value)
    })

    display__products();
console.log(filtered__products);

})


// Getting Unique Companies And Rewriting Them.
// 

const unique__companies = [...new Set (products.map((e)=>{
  const comp = e.company;
 return comp
}))];


const main_set = ['all', ...unique__companies]


const company__overwrite = () => {
  companies.innerHTML = main_set.map((e)=>{
    return `<button class="company-btn">${e}</button>`
  }).join('')
  
};

company__overwrite()


// Button Filters

companies.addEventListener('click',(e) => {
  // Reassigning Filtered Products back to main Product array.
  filtered__products = [...products]
  //
  
  
  const button = e.target;
  const text = button.textContent;

  const filtered__companies = filtered__products.map((each)=>{
   const comp = each.company
   return comp
   ;
 });

// For 'all' button.
const all__companies = ()=>{
 if(text === 'all'){
   display__products();
 }
}

all__companies();
// 

 const unique__buttons = filtered__companies.map((el)=>{
    if(el === text)
    {
      products__container.innerHTML = filtered__products.map(({id,title,company,image,price})=>{
      if (el === company ){
          return `<article class="product">
        <img src="${image}"
          class="product-img img" alt="" />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`
        }

      else if (el === 'all'){
        display__products();
      }
      }).join('');
    }
 }) 

  search__input.value = '';
 
});



