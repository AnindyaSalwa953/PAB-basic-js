console.log("------ Inheritance ------");

class Gadget {
    constructor(name) {
        this.name = name;
    }

    present() {
        return "Aku punya hp " + this.name;
    }
}

class Handphone extends Gadget {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ", tipe nya " + this.model;
    }
}

let handphone = new Handphone("iphone", "13 Pro");

console.log(handphone.show());