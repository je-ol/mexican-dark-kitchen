import { menuItems } from "./menu.js";
const mediaQuery = window.matchMedia('(max-width: 768px)');

const categories = ['Tacos', 'Burritos', 'Dishes', 'Drinks', 'All'];
const body = document.querySelector('body')
const nav = document.querySelector('nav')

const categoryList = document.createElement('ul');
const logo = document.createElement('h1');
nav.appendChild(logo);
logo.innerText = 'Bravío'

nav.appendChild(categoryList);
categories.forEach((el, index) => {
    const catLink = document.createElement('li');
    catLink.classList.add('link')
    catLink.innerText = `${el}`;
    categoryList.appendChild(catLink);
})

const functionality = document.createElement('div');
functionality.classList.add('func');
nav.appendChild(functionality);

const lightOrDark = document.createElement('img');
lightOrDark.src = 'day-mode.png';
functionality.appendChild(lightOrDark);

console.log(window.getComputedStyle(body).backgroundColor);

const basket = document.createElement('i');
basket.classList.add('fa-solid')
basket.classList.add('fa-basket-shopping')
basket.classList.add('fa-2xl')
basket.style.color = '#FFFFFF';
functionality.appendChild(basket);

const basketCounter = document.createElement('span');
basketCounter.innerText = 0;
basketCounter.setAttribute('id', 'basket-counter')
functionality.appendChild(basketCounter);

const header = document.querySelector('header');
const headerImg = document.createElement('img');
headerImg.classList.add('test');
headerImg.src = 'https://mejorconsalud.as.com/wp-content/uploads/2022/01/comidas-mexicanas.jpg';
header.appendChild(headerImg);

const shoppingMenu = document.createElement('div');
shoppingMenu.classList.add('shopping-menu')
header.appendChild(shoppingMenu);
let amount = 0;
const totalCheckout = document.createElement('div');
totalCheckout.classList.add('total-checkout');
const totalPrice = document.createElement('div');
totalPrice.classList.add('total-price');
const checkout = document.createElement('button');
checkout.innerText = 'CHECKOUT';
checkout.setAttribute('id', 'checkout-btn')


const main = document.querySelector('main');

const rows = 4;
const columns = 3;

for (let i = 0; i < rows; i++) {
    const catTitle = document.createElement('h2');
    catTitle.innerText = categories[i];
    catTitle.setAttribute('id', `cat${i}`)
    catTitle.classList.add('title')
    main.appendChild(catTitle);

    const catSection = document.createElement('div');
    catSection.classList.add('cat-section');
    main.appendChild(catSection)

    for (let j = 0; j < columns; j++) {
        const card = document.createElement('div');
        card.classList.add('card');
        catSection.appendChild(card);
    }
}

const cards = document.querySelectorAll('.card');
cards.forEach((item, index) => {
    const menuItem = menuItems[index];

    const dishPhoto = document.createElement('img');
    dishPhoto.src = menuItem.photo;
    item.appendChild(dishPhoto);

    const dishTitle = document.createElement('h3');
    dishTitle.innerText = menuItem.itemName;
    item.appendChild(dishTitle);

    const description = document.createElement('p');
    description.innerText = menuItem.filling;
    item.appendChild(description)

    const price = document.createElement('h4');
    price.innerText = menuItem.price;
    item.appendChild(price);

    const addBasket = document.createElement('button');
    addBasket.innerText = 'ADD TO BASKET';
    addBasket.classList.add('add-btn');
    item.appendChild(addBasket);
    addBasket.addEventListener('click', (e) => {
        basketCounter.innerText++;
        const dishTitleClone = dishTitle.cloneNode(true);
        const priceClone = price.cloneNode(true);
        shoppingMenu.appendChild(dishTitleClone);
        shoppingMenu.appendChild(priceClone);
        shoppingMenu.appendChild(totalCheckout);
        totalCheckout.appendChild(totalPrice);
        totalCheckout.appendChild(checkout);
        amount += parseInt(menuItem.price);
        totalPrice.innerText = `Total: ${amount}€`;
    })
})
const catTitles = document.querySelectorAll('h2');

lightOrDark.addEventListener('click', () => {
    if (getComputedStyle(body).backgroundColor === 'rgb(232, 242, 247)') {
        body.style.backgroundColor = '#0a0a23';
        nav.style.backgroundColor = '#B10000';
        catTitles.forEach(title => {
            title.style.background = 'linear-gradient(90deg, hsla(0, 100%, 35%, 1) 0%, hsla(240, 56%, 9%, 1) 100%)'
        })
        lightOrDark.src = 'night-mode.png';
        cards.forEach(card => {
            card.style.backgroundColor = '#1e0739';
            card.style.color = 'white';
            card.style.boxShadow = 'none';
        })
    } else if (getComputedStyle(body).backgroundColor === 'rgb(10, 10, 35)') {
        body.style.backgroundColor = '#e8f2f7';
        console.log(window.getComputedStyle(body).backgroundColor);
        nav.style.backgroundColor = '#ff0000';
        catTitles.forEach(title => {
            title.style.background = 'linear-gradient(90deg, hsla(0, 100%, 50%, 1) 0%, hsla(352, 78%, 67%, 1) 29%, hsla(350, 66%, 77%, 1) 47%, hsla(346, 47%, 84%, 1) 65%, hsla(200, 48%, 94%, 1) 100%)'
        })
        lightOrDark.src = 'day-mode.png';
        cards.forEach(card => {
            card.style.backgroundColor = 'white'
            card.style.color = 'black'
            card.style.boxShadow = '2px 2px 6px #717171';
        });
   
    }
})

basket.addEventListener('click', () => {
    if (getComputedStyle(shoppingMenu).display === 'none') {
        shoppingMenu.style.display = 'flex';
    } else if (getComputedStyle(shoppingMenu).display === 'flex') {
        shoppingMenu.style.display = 'none';
    }
})

checkout.addEventListener('click', () => {
    while (shoppingMenu.hasChildNodes()) {
        shoppingMenu.removeChild(shoppingMenu.lastChild);
    }
    const thankYou = document.createElement('p');
    thankYou.innerText = 'Thank you for your purchase!'
    basketCounter.innerText = 0;
    shoppingMenu.appendChild(thankYou);
    setTimeout(() => {
        thankYou.style.display = 'none';
    }, 1000);
    amount = 0;
});

const allLinks = document.querySelectorAll('.link');
allLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        if (index === allLinks.length - 1) {
            catTitles.forEach(title => {
                title.style.display = 'block'
                title.nextElementSibling.style.display = 'flex';
            })
        } else {
            catTitles.forEach((title, i) => {
                if (i === index) {
                    title.style.display = 'block';
                    title.nextElementSibling.style.display = 'flex';
                } else {
                    title.style.display = 'none';
                    title.nextElementSibling.style.display = 'none';
                }
            });
        }
    });
});



function handleMediaQuery(event) {
    if (event.matches) {
        main.insertBefore(categoryList, main.firstChild);
    } else {
        const middleElement = nav.childNodes[Math.floor(nav.childNodes.length / 2)];
        nav.insertBefore(categoryList, middleElement);
    }
}

handleMediaQuery(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQuery);
