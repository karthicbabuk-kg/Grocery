let cart = document.getElementById('cart')
let cartItem = document.querySelector('.cart-item')
let totalCart = document.querySelector('.total-item')

let cartCount = 0;
let cartArr = []


function addCart(event, type) {
    let item = null
    item = listArray.find(value => {
        return value.type == type
    })
    item.count = 1;
    let child = document.createElement('div');
    child.className = "d-flex mt-3"
    child.innerHTML = `<button type="button" class="btn btn-primary" onclick="subCount(event,'${type}')">
      <i class="bi bi-dash"></i>
    </button>
    <input
      type="text"
      value="1"
      class="form-control text-center mx-2"
      id="input${type}" disabled />
    <button type="button" class="btn btn-primary" onclick="addCount(event,'${type}')">
      <i class="bi bi-plus )"></i>
    </button>`
    let parent = event.target.parentElement;
    parent.removeChild(event.target);
    parent.append(child);
    if (!cartArr.includes(item)) {
        cartArr.push(item)
        let addCartItem = document.createElement('tr')
        addCartItem.innerHTML = `  <tr>
           <td class="text-capitalize">${item.type}</td>
           <td>${item.count}</td>
           <td>${item.price}</td>
         </tr>`
        cartItem.append(addCartItem)
    }
    total(cartArr)
    cart.textContent = cartArr.length
}


function total(cartArr) {
    let count = 0, price = 0
    cartArr.forEach(value => {
        count += value.count;
        price += value.price * value.count
    })
    totalCart.innerHTML = `  <tr>
    <td></td>
    <td>${count}</td>
    <td>${price}</td>
  </tr>`
}

function addCount(event, type) {
    cartArr.map(value => {
        if (value.type == type) {
            let input = document.querySelector(`#input${type}`)
            input.value = parseInt(input.value) + 1;
            value.count = parseInt(input.value)
            return value
        }
        else {
            return value
        }
    })

    total(cartArr)
}
function subCount(event, type) {
    cartArr.map(value => {
        if (value.type == type) {
            let input = document.querySelector(`#input${type}`)
            if (input.value > 0) {
                input.value = parseInt(input.value) - 1;
                value.count = parseInt(input.value)
            }
            return value
        }
        else {
            return value
        }
    })

    total(cartArr)
}

let listArray = [
    {
        type: "tomato",
        price: 100, count: 0
    },
    {
        type: "onion",
        price: 150, count: 0
    },
    {
        type: "carrot",
        price: 50, count: 0
    },
    {
        type: "cauliflower",
        price: 40,
        count: 0
    },
    {
        type: "apple",
        price: 100, count: 0
    },
    {
        type: "orange",
        price: 150, count: 0
    },
    {
        type: "stawberry",
        price: 250, count: 0
    },
    {
        type: "grapes",
        price: 140,
        count: 0
    },
    {
        type: "pista",
        price: 120, count: 0
    },
    {
        type: "almonds",
        price: 100, count: 0
    },
    {
        type: "cashew",
        price: 150, count: 0
    },
    {
        type: "dates",
        price: 150,
        count: 0
    },
    {
        type: "colgate",
        price: 50, count: 0
    },
    {
        type: "lifebouy",
        price: 40,
        count: 0
    },
    {
        type: "zandu",
        price: 70, count: 0
    },
    {
        type: "vicks",
        price: 150, count: 0
    },
]