const lyrics = ['never', 'gonna', 'give', 'you', 'up'];

const uppercaseLyrics = lyrics.map(lyric => lyric.toUpperCase());

const people = [
    {
        name: 'George Michael',
        age: 14,
        title: 'Mr. Manager'
    },
    {
        name: 'T-Bone',
        age: 34,
        title: 'Arsonist'
    },
    {
        name: 'George Oscar',
        age: 32,
        title: 'Illusionist'
    }
];

const names = people.map(person => person.name);

const products = [
    {
        name: 'iPad',
        price: 549.99
    },
    {
        name: 'iPhone',
        price: 799.99
    },
    {
        name: 'iPod',
        price: 2.99
    }
];

const tax = products.map(product => (product.price * 0.07));

const trip = ["Visit my parents", "Eat at Murray's", "Washington Square Park", "Take the Staten Island Ferry", "Whitney Museum"];

const shortenedTrip = trip.map(string => {
    if (string.length > 20) {
        return string.slice(0, 20) + "...";
    }
    return string; 
});

const possiblyVowels = [118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106];

let vowels = "aeiou";
const definitelyVowels = possiblyVowels.map(num => {
    if (vowels.includes(String.fromCharCode(num))) {
        return String.fromCharCode(num);
    }
    return num;
});


const people1 = [
    {
        firstName: 'Ben',
        lastName: 'Kenobi'
    },
    {
        firstName: 'Tim',
        lastName: 'Cook'
    },
    {
        firstName: 'Etta',
        lastName: 'James'
    },
    {
        firstName: 'Jill',
        lastName: 'Kenobi'
    }
];

const kenobis = people1.filter(person => {
    if (person.lastName === 'Kenobi') {
        return person;
    }
});

const morePeople = [
    {
        firstName: 'Ben',
        lastName: 'Kenobi'
    },
    {
        firstName: 'Tim',
        lastName: 'Cook'
    },
    {
        firstName: 'Etta',
        lastName: 'James'
    },
    {
        firstName: 'Jill',
        lastName: 'Kenobi'
    }
];

const jillKenobi = morePeople.find(person => person.firstName === 'Jill');

const customers = [
    {
        name: 'Ben Kenobi',
        balance: 0.00
    },
    {
        name: 'Tim Cook',
        balance: 1221344.99
    },
    {
        name: 'Etta James',
        balance: 0.00
    },
    {
        name: 'Jill Kenobi',
        balance: 42.77
    }
];

const customersWhoOweMeMoney = customers.filter(customer => {
    if (customer.balance > 0) {
        return customer;
    }
});


// Find the Book with an ID of '1234ABCD':

const books = [
    {
        id: 'BADSFJ5332',
        title: 'Test Driven Development: By Example'
    },
    {
        id: '1234566',
        title: 'The Pragmatic Programmer'
    },
    {
        id: 'LASKJDG93893',
        title: 'Database Design for Mere Mortals'
    },
    {
        id: '1234ABCD',
        title: 'The Clean Coder'
    }
];

const myFavoriteBook = books.find(book => book.id === '1234ABCD');

    // Find ALL books written after 2010:

const moreBooks = [
    {
        id: 'BADSFJ5332',
        title: 'Test Driven Development: By Example',
        year: 2002
    },
    {
        id: '1234566',
        title: 'The Pragmatic Programmer',
        year: 1999
    },
    {
        id: 'LASKJDG93893',
        title: 'Database Design for Mere Mortals',
        year: 2013
    },
    {
        id: '1234ABCD',
        title: 'The Clean Coder',
        year: 2011
    }
];

const recentBooks = moreBooks.filter(book => {
    if (book.year > 2010) {
        return book;
    }
});

    // BONUS : Find any orders that qualify for free shipping.To qualify for free shipping, an order's total, including tax (assume a tax rate of 7%) must be greater than $100.00:

const orders = [
    {
        orderName: 'An Order',
        items: [
            {
                price: 12.10,
                quantity: 4
            },
            {
                price: 50.43,
                quantity: 1
            }
        ]
    },
    {
        orderName: 'Another Order',
        items: [
            {
                price: 55.43,
                quantity: 1
            },
            {
                price: 1.45,
                quantity: 2
            }
        ]
    },
    {
        orderName: 'A Third Order',
        items: [
            {
                price: 23.56,
                quantity: 3
            }
        ]
    }
];

const ordersWithFreeShipping = orders.filter(order => {
    if (orderTotal(order.items) > 100) {
        return order;
    }
});

function orderTotal(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element.price * element.quantity;
    });
    sum += sum * 0.07;
    return sum;
}

console.log(ordersWithFreeShipping);
