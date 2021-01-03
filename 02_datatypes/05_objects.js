// DECLARATION

let mobile={
    company: 'apple',     //DATA MEMBERS
    model: '11 pro',      //DATA MEMBERS
    cost: 78000,
    battery: '4500mah',
    processor: 'intel',

    change_cost: function() {                   // General Notation
        let cost=mobile.cost;
        cost=cost-cost/10;
        console.log(`After offer applied ${cost}`);
    },
    change_processor:() => {                    // Arrow Functions Notation
        this.processor = "AMD";
        console.log(`New Processor is ${this.processor}`);
    },
};

//  ACCESSING
// console.log(mobile);

    console.log(mobile.company+' is one of the best company in smartphone Industry');

//  MODIFYING
    mobile.model = 'XS Max';

    console.log(mobile.model);

// ACCESSING METHODS

    console.log(`Before Offer ${mobile.cost}`);
    mobile.change_cost();

    console.log(mobile.processor);
    mobile.change_processor();
