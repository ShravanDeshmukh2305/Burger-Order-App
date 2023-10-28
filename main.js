const buyBtn = document.querySelector('#buy');
const addPattyBtn = document.querySelector('#add-patty');
const addLettuceBtn = document.querySelector('#add-lettuce');
const totalPriceCount = document.querySelector('.total-price');

const bottomBurger = document.querySelector('#bottom');

let totalPrice = 0;
let pattyCount = 0;
let LettuceCount = 0;

function createPatty(){
    const div = document.createElement('div');
    div.className = 'patty';
    return div;
}

function insertPatty(parent, patty){
    parent.insertBefore(patty, bottomBurger);
}

function createLettuce(){
    const div = document.createElement('div');
    div.className = 'lettuce';
    return div;
}

function insertLettuce(parent, lettuce){
    parent.insertBefore(lettuce, bottomBurger);
    }

addPattyBtn.addEventListener('click', () =>{
    totalPrice = totalPrice + 50.00;
    pattyCount = pattyCount + 1;
    // console.log(totalPriceCount);
    totalPriceCount.textContent = totalPrice;
    const patty = createPatty();
    insertPatty(bottomBurger.parentNode, patty);
});

addLettuceBtn.addEventListener('click', () =>{
    totalPrice = totalPrice + 30.00;
    LettuceCount = LettuceCount + 1;
    totalPriceCount.textContent = totalPrice;
    const lettuce = createLettuce();
    insertLettuce(bottomBurger.parentNode, lettuce);
});

buyBtn.addEventListener('click', () => {
    alert(`you have bought the burger for Rs. ${totalPrice}`)
    window.location.reload();
});