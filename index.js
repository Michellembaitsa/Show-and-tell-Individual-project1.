function motorbike() {
    var brands = ["Suzuki gixxer", "Apache rtr", "Kawasaki ninja", "KTM duke"];
    console.log(brands[0]); //I only want to print out the first element.
}
motorbike()

var suzuki_gixxer = { //Giving properties to the object I chose from the lit.
    company: "Suzuki",
    make: "Gixxer",
    year: 2014,
    color: "Black",
    specification: function() { //I only want to print out the make and year from this method.
        return this.make + " " + this.year;

    }
}
console.log(suzuki_gixxer.specification())

var price = 15000;
if (price > 10000) {
    let price = 30000;
    price *= 10;
    console.log(price);
} else {
    console.log("Amount not enough");
}



var brand = {
    Model: "S150",
    get getModel() {
        return this.Model;

    },
    set setModel(newModel) {
        this.Model = newModel;
    }


};

brand.newModel = "S250";
console.log(brand.newModel)

var account_balance = 500000;
var amount = price; // I used the previously assigned price.

if (account_balance >= price) {
    console.log("You can buy the motorbike!");
} else {
    console.log("Sorry, not this time!");
}