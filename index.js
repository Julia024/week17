class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {
        return {
            type: this.type,
            brand: this.brand
        }
    }
    getPrice() {
        return this.price
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
        {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
];

const arr = []
for (let item of data) {
    let transport;

    if (item.type === 'car') {
        transport = new Car(item.type, item.price, item.brand, item.doors)
    } else if (item.type === 'bike') {
        transport = new Bike(item.type, item.price, item.brand, item.maxSpeed)
    }

    transport.image = item.image;
    arr.push(transport)
}

const container = document.createElement('div')
document.body.prepend(container)

const title = document.createElement('h1') 
title.innerText = "Информации о транспорте и цене"
container.append(title)

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
container.append(wrapper)

for (let item of arr) {

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = item.image.replace(/[<>]/g, '');
    img.alt = item.brand;
    img.classList.add('img');
    card.append(img);

    const title2 = document.createElement('h2');
    title2.textContent = item.brand;
    card.append(title2);

    const type = document.createElement('p');
    type.textContent = `Тип транспорта: ${item.type}`;
    card.append(type);

    const price = document.createElement('p');
    price.textContent = `Цена: ${item.getPrice()} рублей`;
    card.append(price);

    const doors = document.createElement('p');
    if (item instanceof Car) {
        doors.textContent = `Количество дверей: ${item.getDoorsCount()}`;
        card.append(doors);
    }

    const maxSpeed = document.createElement('p');
    if (item instanceof Bike) {
        maxSpeed.textContent = `Максимальная скорость: ${item.getMaxSpeed()} км/ч`;
        card.append(maxSpeed)
    }

    wrapper.append(card)
}

