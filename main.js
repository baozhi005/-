var cartItems = [
    {
        name: '可口可乐',
        count: '3',
        unit: '瓶',
        price: '3.00',
        totalPrice: '6.00'
    },
    {
        name: '羽毛球',
        count: '5',
        unit: '个',
        price: '1.00',
        totalPrice: '4.00'
    },
    {
        name: '苹果',
        count: '2',
        unit: '斤',
        price: '5.50',
        totalPrice: '11.00'
    }
]

var discountProductList = [
    {name: '可口可乐', count: '1', unit: '瓶'},
    {name: '羽毛球', count: '1', unit: '个'},
    
]

var summary = {
    totalPrice: '21.00',
    discountPrice: '4.00'
}

var result = {
    cartItems: cartItems,
    discountProductList: discountProductList,
    summary: summary
}
function generatorTemplate(cartItems) {
    var template = ''
    cartItems.forEach(function(cartItem) {
        template += '<tr>' + 
        '<td>' + '假装这里是图片' + '</td>' +         
        '<td>' + cartItem.name + '</td>' + 
        '<td>' + cartItem.count + cartItem.unit+ '</td>' + 
        '<td>' + cartItem.price + '(元)</td>' + 
        '<td>' + cartItem.totalPrice + '(元)</td></tr>';
    })
    return template
}

function generatorDiscountProductListTemplate(discountProductList) {
    var template = ''
    discountProductList.forEach(function(product) {
        template += '<li> 名称：' + product.name + '，数量：' + product.count + product.unit + '</li>'
    })
    return template
}

function renderTable(cartItems) {
    document.querySelector('.order-table-tbody').innerHTML = generatorTemplate(cartItems);
}

function renderDiscountProductList(discountProductList) {
    document.querySelector('.discount-product').innerHTML = generatorDiscountProductListTemplate(discountProductList)
}

function setTotlePrice(totalPrice) {
    document.querySelector('.total-price').textContent = '总计：' + totalPrice + '(元)'
}

function setDiscountPrice(discountPrice) {
    document.querySelector('.discount-price').textContent = '节省：' + discountPrice + '(元)'
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable(result.cartItems)
    renderDiscountProductList(result.discountProductList)
    setTotlePrice(result.summary.totalPrice)
    setDiscountPrice(result.summary.discountPrice)
})