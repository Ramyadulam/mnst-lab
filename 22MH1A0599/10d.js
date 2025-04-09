function CreateCustomerID(name, id) {
    return 'The customer id is ' + name + ' ' + id;
}
var idGenerator;
idGenerator = CreateCustomerID;
var customerId = idGenerator('Ramya', 101);
console.log(customerId);
