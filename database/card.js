let http = new XMLHttpRequest();

http.open('get', 'database/product.json', true);

http.send();

http.onload = function(){

   if(this.readyState == 4 && this.status == 200){

      let products = JSON.parse(this.responseText);

      let output = "";

      for(let item of products){
         output += `
         <a href="product (1).html" class="trending-card">
               <img src="${item.img}"  alt="" class="trending-card-img">
               <div class="trending-card-detail">
                  <p class="trending-card-title-name">${item.title}</p>
                  <p class="trending-card-description">${item.description}</p>
                  <div class="price-and-color">
                     <div class="">
                        <h1 class="price-trending">${item.price}</h1>
                     </div>
                  </div>
               </div>
            </a>
         `;
      }

      document.querySelector("#trendingWomenPage").innerHTML = output;

   }

}