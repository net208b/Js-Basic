// Object

//*  ex 1

const customer = {
  customerName: 'Nirut',
  Age: 33,
  address: 'Chiang Mai',
};

console.log(customer);

// { customerName: 'Nirut', Age: 33, address: 'Chiang Mai' }

// !------------------------------------------------------------------------------------------------------

//*  ex 2
// or use variable object for keep data

const username = 'Netnapa';
const age = 34;
const address = 'Nong Khai';

const customer2 = {
  customerName: username,
  age,
  address,
};

console.log(customer2);

// { customerName: 'Netnapa', Age: 34, address: 'Nong Khai' }

// !------------------------------------------------------------------------------------------------------

//*  ex 3
// or use Method

const Uname = 'John';
const age2 = 25;
const address2 = 'New York';

const customer3 = {
  Uname,
  age2,
  address2,

  showData() {
    console.log('Customer data is name = ' + Uname);

    console.log(this.Uname + ' ' + this.age2 + ' ' + this.address2);
  },
};

customer3.showData();

// Customer data is name = John

// John 25 New York
