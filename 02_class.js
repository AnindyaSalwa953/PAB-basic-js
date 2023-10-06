console.log("------ Class ------");

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return "Aku punya mobil " + this.brand;
    }
}

let myCar = new Car("Keren");

console.log(myCar.present());