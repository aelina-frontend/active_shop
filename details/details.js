var itemsList = [
    {
        name: "Батник",
        mainPicture: "img/batnik.png",        
        price: 2700,
        sizes: ["M","L","XL","XXL"],
        id: 1,
        colors: {
            imgs: ["img/batnik.png","img/black.jpg"],
            alts: ["beige","black"],
        },
        miniPictures: ["img/batnik.png","img/back.jpg","img/33.png","img/photo_2023-08-06_17-26-47 1.png"],
        desc: "Удобный, стильный и очень качественный выбор для повседневного использования. Сезон модели: осень-весна и лето.",
        tabelDesc: {
            names: ["Размер", "Цвет", "Материал"],
            vals: ["M/L/XL/XXL","Белый, синий","75% хлопок, 25% вискозы"]
        },
        twoColors: "img/photo_2023-08-06_17-43-44.jpg",
        backFrontImg: "img/photo_2023-08-06_17-37-22.jpg",
        dressDetails: ["img/photo_2023-08-06_17-26-30.jpg","img/photo_2023-08-06_17-26-43.jpg", "img/photo_2023-08-06_17-20-05.jpg"],
    },
    {
        name: "Кофта",
        mainPicture: "img/main pic.png",        
        price: 3700,
        sizes: ["M","L","XL"],
        id: 2,
        colors: {
            imgs: ["img/white.png","img/blue.png"],
            alts: ["white","blue"],
        },
        miniPictures: ["img/1.png","img/2.png","img/3.png","img/4.png"],
        desc: "Удобный, стильный и очень качественный выбор для повседневного использования. Сезон модели: осень-весна и лето.",
        tabelDesc: {
            names: ["Размер", "Цвет", "Материал"],
            vals: ["M/L/XL/XXL","Белый, синий","75% хлопок, 25% вискозы"]
        },
        twoColors: "img/two colors.png",
        backFrontImg: "img/front and back views.png",
        dressDetails: ["img/left.png","img/right.png", "img/foot picture.png"],
    },    
];

function loadDetails() {
    let result = location.search.substring(1);
    let infoData = Number(result) % 2 === 0 ? itemsList[0] : itemsList[1];
    let isWas = false;

    let mainPicture = document.getElementById("mainPicture");
    let mainImg = document.createElement("img");
    mainImg.setAttribute('class','mainPicture');
    mainImg.setAttribute('src',infoData.mainPicture);
    mainImg.setAttribute('alt','pictureOfclothes');
    mainImg.setAttribute('align','left');
    mainPicture.appendChild(mainImg);

    let miniPictures = document.getElementById("miniPictures");
    for(let i=0;i<infoData.miniPictures.length;i++){
        let img = document.createElement("img");
        img.setAttribute('class', 'img' + String(i+1));
        img.setAttribute('src', infoData.miniPictures[i]);
        img.setAttribute('alt', 'нравится');
        img.setAttribute('align', 'center');
        miniPictures.appendChild(img);
    }
    document.getElementById("name").innerHTML = infoData.name;
    document.getElementById("price").innerHTML = 'ЦЕНА: ' + infoData.price + ' сом';
                        
                        // <button class="btn2">M</button>
                        // <button class="btn2">L</button>
                        // <button class="btn2">XL</button>
                        // <button class="btn2">XXL</button>
    
    let sizes = document.getElementById("sizes");
    for(let i=0;i<infoData.sizes.length;i++){
        let size = document.createElement('button');
        size.setAttribute('class', 'btn2');
        size.innerHTML = infoData.sizes[i];
        sizes.appendChild(size);
    }

    let colors = document.getElementById("colors");
    console.log(infoData.colors.imgs.length);
    for(let i=0;i<infoData.colors.imgs.length && i < 4 ;i++){
        let color = document.createElement('img');
        color.setAttribute('class', 'colorImage');
        color.setAttribute('src', infoData.colors.imgs[i]);
        color.innerHTML = infoData.colors.alts[i];
        colors.appendChild(color);
    }
    document.getElementById("desc").innerHTML = infoData.desc;

    let tableBody = document.getElementById("tableBody");
    for(let i=0;i<infoData.tabelDesc.names.length;i++){
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = infoData.tabelDesc.names[i];
        let td = document.createElement('td');
        td.innerHTML = infoData.tabelDesc.vals[i];
        tr.appendChild(th);
        tr.appendChild(td);
        tableBody.appendChild(tr);
    }

    let twoColors = document.getElementById("colorsImg");
    let colorsImg = document.createElement("img");
    colorsImg.setAttribute('class','twoColors');
    colorsImg.setAttribute('src',infoData.twoColors);
    colorsImg.setAttribute('alt','Два цвета');
    twoColors.appendChild(colorsImg);

    let frontAndBackViews = document.getElementById("frontBackPic");
    let frontBackPic = document.createElement("img");
    frontBackPic.setAttribute('class','frontAndBackViews');
    frontBackPic.setAttribute('src',infoData.backFrontImg);
    frontBackPic.setAttribute('alt','вид спереди и сзади');
    frontAndBackViews.appendChild(frontBackPic);
    
    let leftPicture = document.getElementById("leftImg");
    let leftImg = document.createElement("img");
    leftImg.setAttribute('class','leftPicture');
    leftImg.setAttribute('src',infoData.dressDetails[0]);
    leftImg.setAttribute('alt','Фотография 1');
    leftPicture.appendChild(leftImg);

    let rightPicture = document.getElementById("rightImg");
    let rightImg = document.createElement("img");
    rightImg.setAttribute('class','rightPicture');
    rightImg.setAttribute('src',infoData.dressDetails[1]);
    rightImg.setAttribute('alt','Фотография 2');
    rightPicture.appendChild(rightImg);

    let footPicture = document.getElementById("footImg");
    let footImg = document.createElement("img");
    footImg.setAttribute('class','footPicture');
    footImg.setAttribute('src',infoData.dressDetails[2]);
    footImg.setAttribute('alt','Фотография 3');
    footPicture.appendChild(footImg);

}
{/* <div><img class="frontAndBackViews" src="img/front and back views.png" alt="вид спереди и сзади" /></div> */}