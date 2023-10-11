const pizzas = [
    {
        id: 1,
        nombre: "pizza de Muzzarella",
        precio: 500,
        ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
        imagen: "./img/muzzarella.png",
    },

    {
        id: 2,
        nombre: "pizza de Cebolla",
        precio: 1500,
        ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
        imagen: "./img/cebolla.png",
    },

    {
        id: 3,
        nombre: "pizza 4 Quesos",
        precio: 1380,
        ingredientes: [
            "Muzzarella",
            "Tomate",
            "Queso Azul",
            "Parmesano",
            "Roquefort",
        ],
        imagen: "./img/4quesos.png",
    },

    {
        id: 4,
        nombre: "pizza Especial",
        precio: 1000,
        ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
        imagen: "./img/especial.png",
    },

    {
        id: 5,
        nombre: "pizza con Anana",
        precio: 600,
        ingredientes: ["Muzzarella", "Tomate", "Anana"],
        imagen: "./img/anana.png",
    },
];

const button = document.getElementById("button");
const input = document.getElementById("input");
const box = document.getElementById("container");
const small = document.getElementById("small");

const pizza = JSON.parse(localStorage.getItem('pizza')) || null;

const saveLocalStorage = (pizza) => {
localStorage.setItem('pizza', JSON.stringify(pizza));
}

const renderCard = (pizza) => {
    return `
        <div>
        <div class="card">
            <h2>${pizza.nombre}</h2>
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <h2>Precio: ${pizza.precio}</h2>
            <div>
            <p>Ingredientes: ${pizza.ingredientes}</p>
            </div>
        </div>
        </div>
    `
}

const handleClick = () => {
    const value = input.value;
    const pizza = pizzas.find(e => Number(e.id) === Number(value));
    if(!pizza) {
        small.textContent = "El numero de pizza es invalido";
        box.innerHTML = "";
        localStorage.removeItem("pizza");
    }
    box.innerHTML = renderCard(pizza);
    saveLocalStorage(pizza);
    small.textContent = "";
}

const renderpizza = () => {
    if(!pizza) return;
    box.innerHTML = renderCard(pizza);
}

const init = () => {
    document.addEventListener("DOMContentLoaded", renderpizza);
    button.addEventListener("click", handleClick);
}


init();