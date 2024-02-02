
var box = document.getElementsByClassName('button-box')
var itemList = document.getElementById("product-list");
var body = document.getElementsByTagName("body")

window.addEventListener("load", async function(){
    console.log('ok')
    const data = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
    const json = await data.json() 
    let htmlCode = ``;
    json.categories[0].category_products.forEach(item => {
        const result =100- Math.round((item.price / item.compare_at_price) * 100)
        htmlCode =htmlCode +
        `<div class="card">
        <img 
        style="border-radius: 3%; object-fit: cover;"
        src=${item.image}
        width="180"
        height="220"/>
        <h4 class= 'offer'>${item.badge_text?item.badge_text:''}</h4>
        <div class='name'>
        <h5 class = 'title'>${item.title}  </h5>
        <small style="padding-top: 5%;">from ${item.vendor}</small>
        </div>
        
        <div class="price">
            <h5 style="margin:0;  padding-top: 5%;">Rs ${item.price}</h5>
            <h5 class = 'compare' >${item.compare_at_price}</h5>
            <h5 class ='discount' >${result}% off</h5>
        </div>
        <button class="button">Add to Cart</button>
        </div>
        `
    });
    itemList.innerHTML = htmlCode
    console.log(htmlCode)

});

console.log(box)
var index = 0
for(var i = 0 ;i<box.length ;i++){
    box[i].addEventListener("click", async function(e){
        console.log(e)
    const text = e.srcElement.childNodes[0].data
    console.log(text)
    if(text == '👦Men'){
        index=0
    }
    else if(text=='👩Women'){
        index=1
    }
    else{
        index=2
    }
    const data = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
    const json = await data.json()   
    let htmlCode = ``;
    json.categories[index].category_products.forEach(item => {
            console.log(item)
            const result =100- Math.round((item.price / item.compare_at_price) * 100)
            htmlCode =htmlCode +
            `<div class="card">
            <img 
            style="border-radius: 3%; object-fit: cover;"
            src=${item.image}
            width="180"
            height="220"/>
            <h4 class= 'offer'>${item.badge_text?item.badge_text:''}</h4>
            <div class='name'>
            <h5 class = 'title'>${item.title}  </h5>
            <small style="padding-top: 5%;">from ${item.vendor}</small>
            </div>
            
            <div class="price">
                <h5 style="margin:0;  padding-top: 5%;">Rs ${item.price}</h5>
                <h5 class = 'compare'>${item.compare_at_price}</h5>
                <h5 class ='discount'>${result}% off</h5>
            </div>
            <button class="button">Add to Cart</button>
            </div>
            `
        });
        itemList.innerHTML = htmlCode
        console.log(htmlCode)
    })
    
}
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function() {
    active = i
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }



