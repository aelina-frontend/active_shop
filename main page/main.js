
var itemsList = [
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "5.png",
        name: "Кофта",
        price: 3700,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "2.png",
        name: "Батник",
        price: 2700,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "3.png",
        name: "Гавайска рубашка",
        price: 2500,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "4.png",
        name: "Гавайска рубашка",
        price: 2500,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "1.png",
        name: "Футболка",
        price: 2500,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "6.png",
        name: "Кофта",
        price: 4450,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "7.png",
        name: "Куртка",
        price: 5850,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "8.png",
        name: "Рубашка",
        price: 5100,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "9.png",
        name: "Футболка",
        price: 2700,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "6.png",
        name: "Кофта",
        price: 4450,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "7.png",
        name: "Куртка",
        price: 5850,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "8.png",
        name: "Рубашка",
        price: 5100,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "9.png",
        name: "Футболка",
        price: 2700,
        size: "M, L, XL, XXL"
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "10.png",
        name: "Батник",
        price: 2900,
        size: "M, L, XL, XXL",
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "11.png",
        name: "Футболка",
        price: 2400,
        size: "M, L, XL, XXL",
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "12.png",
        name: "Футболка",
        price: 2550,
        size: "M, L, XL, XXL",
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "13.png",
        name: "Джинсовая куртка",
        price: 4850,
        size: "M, L, XL, XXL",
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "14.png",
        name: "Куртка-бомбер",
        price: 5750,
        size: "M, L, XL, XXL",
    },
    {
        href: "C:/Users/aelin/OneDrive/Desktop/active_shop/details/details.html",
        src: "15.png",
        name: "Кожаная куртка",
        price: 4850,
        size: "M, L, XL, XXL",
    },
];

function loadVitrin2()
{
    var parent = document.getElementById('wrapper');
    for (let i = 0; i < 2; i++) {
        var div = document.createElement('div');
        div.setAttribute('style', 'border: 10px solid black; width: 100px; height: 100px;');
        parent.appendChild(div);
    }
}


function loadVitrin() {
    console.log('Click!!!');
    var searchName = document.getElementById('searchText').value;
    var isWas = false;
    var parent = document.getElementById('wrapper');
    parent.replaceChildren();
    for (let i = 0; i < itemsList.length; i++) {
        if (itemsList[i].name.toLowerCase().includes(searchName.toLowerCase()) || searchName === '' || searchName === 'undefined') {
            isWas = true;
            var wrappeBox = document.createElement('div');
            wrappeBox.setAttribute('class', 'wrappeBox');
            var href = document.createElement('a');
            href.setAttribute('href', itemsList[i].href);
            var img = document.createElement('img');
            img.setAttribute('class', 'picBox');
            img.setAttribute('src', itemsList[i].src);
            img.setAttribute('alt', 'picture');
            href.appendChild(img);
            var productName = document.createElement('div');
            productName.setAttribute('class', 'productName');
            productName.innerHTML = itemsList[i].name;
            var price = document.createElement('div');
            price.setAttribute('class', 'price');
            price.innerHTML = 'ЦЕНА: ' + itemsList[i].price + ' сом';
            var size = document.createElement('div');
            size.setAttribute('class', 'size');
            size.innerHTML = itemsList[i].size;

            wrappeBox.appendChild(href);
            wrappeBox.appendChild(productName);
            wrappeBox.appendChild(price);
            wrappeBox.appendChild(size);

            parent.appendChild(wrappeBox);

            // parent.innerHTML += '<div class="wrappeBox">'
            // ' <a href="${itemsList[i].href}">'
            // '<img class="picBox" src="${itemsList[i].src}" alt="picture"/></a>'
            // '<div class="productName">${itemsList[i].name}</div>'
            // '<div class="price">ЦЕНА: ${itemsList[i].price} сом</div>'
            // '<div class="size">${itemsList[i].size}</div>'
            // '</div>';
        }
    }
    if (!isWas) {
        parent.innerHTML += '<h1 class="notFound">Ничего не найдено</h1>';
    }
}


// <div class="wrappeBox">
//             <a href="C:\Users\aelin\OneDrive\Desktop\active_shop\details\details.html">
//                 <img class="picBox" src="5.png" alt="picture"/>
//                 </a>
//             <div class="productName">Кофта</div>
//             <div class="price">Цена: 3700 сом</div>
//             <div class="size">M, L, XL, XXL</div>
// </div>
