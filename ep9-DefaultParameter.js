//* Default Parameter

getDataCustomer = (customerName, customerAddress = 'New York') => {
  const address = `Customer Name : ${customerName} 
    lives in ${customerAddress}`;

  return address;
};

console.log(getDataCustomer('John Doe', 'Jakarta'));

// Customer Name : John Doe
//     lives in Jakarta

console.log(getDataCustomer('Nirut')); // if not provide address parameter, it will use default parameter (New York)

// Customer Name : Nirut
//     lives in New York
