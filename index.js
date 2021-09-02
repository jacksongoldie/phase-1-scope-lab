// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

function setBestCustomer(){
   return bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'you';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'me';
    return leastFavoriteCustomer;
}
