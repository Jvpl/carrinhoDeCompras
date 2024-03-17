const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', "<main id = 'products'> </main>");
const main = document.getElementById('products');
main.insertAdjacentHTML('afterbegin', "<ul id = 'listProducts'> </ul>");
main.insertAdjacentHTML('beforeend', "<section> <button> Finalizar compra </button> </section>");
const button = document.querySelector('button'); 
main.insertAdjacentHTML('beforeend', '<p class = "paragrafo"> </p>');
const paragrafo = document.querySelector('.paragrafo');



const products = [
    { nome: 'Macarrão',  preco: 5 },
    
    { nome: 'Carne', preco: 45},

    { nome: 'Detergente', preco: 4.5},

    { nome: 'Creme Dental', preco: 7.99},

    { nome: 'Açúcar', preco: 15 }

];

const list = document.getElementById('listProducts');

let prices = [];

products.forEach((products) => {
    const li = document.createElement('li');
    li.innerText = `${products.nome} - R$${products.preco.toFixed(2)}`;
    list.appendChild(li);
    li.addEventListener('click', () => {
        prices.push(products.preco);
        const total = somaProducts(prices);
        console.log(total.toFixed(2));
    })
});


function somaProducts(prices){
    return prices.reduce((total, preco) => total + preco, 0);
}

button.addEventListener('click', () =>{
    const totalMsg = somaProducts(prices);
    paragrafo.innerText = `O valor da sua compra é de R$${totalMsg.toFixed(2)}`;
    prices = [];
});



