console.log(this)


let user = {
    firstname: "Dhamareshwarakumar",
    lastname: "Gandikota",
    year: 3,
    get_details: function () {
        console.log(this);
    }
}

user.get_details()