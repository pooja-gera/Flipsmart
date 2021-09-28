let tbody = document.querySelector("tbody");
let check_shipping = false;
let cartSubtotal = document.querySelector(".cart-subtotal span");
let youPay = document.querySelector(".last span");
let shipping = document.querySelector(".shipping span");
let continueShopping = document.querySelector(".continue");
let backCart = document.querySelector(".home-ashi");
console.log(youPay);
let items = JSON.parse(localStorage.getItem("cart"));
let cartSubValue = 0;
for(let i in items){
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="image" data-title="No"><img src=${items[i][4]} alt="#"></td>
    <td class="product-des" data-title="Description">
        <p class="product-name">${items[i][0].toUpperCase()}</p>
    </td>
    <td class="price" data-title="Price"><span>Rs. ${items[i][2]} </span></td>
    <td class="qty" data-title="Qty"><!-- Input Order -->
        <div class="input-group">
            <div class="button minus">
                <button type="button" class="btn btn-primary btn-number"  data-type="minus" data-field="quant[1]">
                <i class="fas fa-minus"></i>
                </button>
            </div>
            <input type="text" name="quant[1]" class="input-number"  data-min="1" data-max="100" value="${items[i][6]}">
            <div class="button plus">
                <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                <i class="fas fa-plus"></i>
                    
                </button>
            </div>
        </div>
        <!--/ End Input Order -->
    </td>
    <td class="total-amount" data-title="Total"><span>Rs. ${items[i][2]*items[i][6]}</span></td>
    <td class="action" data-title="Remove"><a href="#"><i class="fas fa-trash-alt"></i></a></td>
` 
cartSubValue+=(items[i][2]*items[i][6]);
let minus = tr.querySelector('button[data-type="minus"]')
let plus = tr.querySelector('button[data-type="plus"]')
let input = tr.querySelector('input[name="quant[1]"]')
let del = tr.querySelector('td[data-title="Remove"]')

minus.addEventListener("click",function(){
    if(input.value>1){
        input.value = Number(input.value)-1;
        let totalAmt = tr.querySelector('.total-amount span')
        totalAmt.innerHTML = "Rs." + Number(input.value)*items[i][2];
        cartSubValue-=items[i][2];
        cartSubtotal.innerHTML = "Rs. " + cartSubValue;
        
        items[i][6]--;
        if(cartSubValue <= 1000){
            if(!check_shipping){
                 shipping.innerHTML = "Rs." + 50;
                 check_shipping = true;
                 
            }     
         }
        youPay.innerHTML = "Rs. " + (cartSubValue + (check_shipping ? 50 : 0));
        localStorage.setItem("cart", JSON.stringify(items));

    }

})
plus.addEventListener("click",function(){
    if(input.value<99) {
        input.value = Number(input.value)+1;
        let totalAmt = tr.querySelector('.total-amount span');
        totalAmt.innerHTML = "Rs. " + Number(input.value)*items[i][2]
        cartSubValue+=items[i][2];
        cartSubtotal.innerHTML = "Rs. " + cartSubValue;
       
        items[i][6]++;
        if(cartSubValue > 1000){
            if(check_shipping){
                 shipping.innerHTML = "FREE";
                 check_shipping = false;
                 
            }     
         }
         youPay.innerHTML = "Rs. " + (cartSubValue + (check_shipping ? 50 : 0));
        localStorage.setItem("cart", JSON.stringify(items));
    }
})
del.addEventListener("click",function(){
    tr.remove();
    cartSubValue-=Number(input.value)*items[i][2];
    cartSubtotal.innerHTML = "Rs. " + cartSubValue;
    
    if(cartSubValue <= 1000){
        if(!check_shipping){
             shipping.innerHTML = "Rs." + 50;
             check_shipping = true; 
        }     
     }
    youPay.innerHTML = "Rs. " + (cartSubValue + (check_shipping && cartSubValue > 0 ? 50 : 0));
    delete items[i];
    localStorage.setItem("cart",JSON.stringify(items));
})
if(cartSubValue <= 1000){
   if(!check_shipping){
        shipping.innerHTML = "Rs." + 50;
        check_shipping = true;
   }     
}
cartSubtotal.innerHTML = "Rs. " + cartSubValue;
youPay.innerHTML = "Rs. " + (cartSubValue + (check_shipping && cartSubValue > 0 ? 50 : 0));
tbody.appendChild(tr)
}

continueShopping.addEventListener("click", continueHandler);
backCart.addEventListener("click", backCartHandler);
function backCartHandler(){
    window.location.href = "/";
}
function continueHandler(){
    window.location.href = "/productsPage";
}
