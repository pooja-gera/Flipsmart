let tbody = document.querySelector("tbody");
console.log(tbody);

let items = JSON.parse(localStorage.getItem("cart"));
for(let i in items){
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="image" data-title="No"><img src=${items[i][4]} alt="#"></td>
    <td class="product-des" data-title="Description">
        <p class="product-name">${items[i][0]}</p>
    </td>
    <td class="price" data-title="Price"><span>Rs. ${items[i][2]} </span></td>
    <td class="qty" data-title="Qty"><!-- Input Order -->
        <div class="input-group">
            <div class="button minus">
                <button type="button" class="btn btn-primary btn-number"  data-type="minus" data-field="quant[1]">
                    <i class="ti-minus"></i>
                </button>
            </div>
            <input type="text" name="quant[1]" class="input-number"  data-min="1" data-max="100" value="1">
            <div class="button plus">
                <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                    <i class="ti-plus"></i>
                </button>
            </div>
        </div>
        <!--/ End Input Order -->
    </td>
    <td class="total-amount" data-title="Total"><span>${items[i][2]}</span></td>
    <td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"></i></a></td>
`
let minus = tr.querySelector('button[data-type="minus"]')
let plus = tr.querySelector('button[data-type="plus"]')
let input = tr.querySelector('input[name="quant[1]"]')
let del = tr.querySelector('td[data-title="Remove"]')
minus.addEventListener("click",function(){
    let totalAmt = tr.querySelector('.total-amount span')
    if(input.value>1)input.value = Number(input.value)-1;
    totalAmt.innerHTML = Number(input.value)*items[i][2]
})
plus.addEventListener("click",function(){
    let totalAmt = tr.querySelector('.total-amount span')
    if(input.value<99) input.value = Number(input.value)+1;
    totalAmt.innerHTML = Number(input.value)*items[i][2]
})
del.addEventListener("click",function(){
    tr.remove()
    delete items[i]
    localStorage.setItem("cart",JSON.stringify(items))
})

tbody.appendChild(tr)
}
