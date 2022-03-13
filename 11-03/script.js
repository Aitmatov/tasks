let form = document.querySelector('#btn');
form.onclick = (event) => {
    event.preventDefault();
    let userName = document.querySelector('#user-name').value;
    let userName1 = document.querySelector('#user-name1').value;
    let patronymic = document.querySelector('#patronymic').value;
    let serialNumber = document.querySelector('#serial-number').value;
    let inn = document.querySelector('#inn').value;
    let dateOfReceiving = document.querySelector('#date-of-receiving').value;
    let contactNumber = document.querySelector('#contact-number').value;
    let elAddress = document.querySelector('#el-address').value;
    let bankName = document.querySelector('#bank-name').value;
    let factAddress = document.querySelector('#fact-address').value;

    let object = {
    name: userName,
    name: userName1,
    patronymic: patronymic,
    number:serialNumber,
    inn: inn,
    receiving: dateOfReceiving,
    number:contactNumber,
    address:elAddress,
    name:bankName,
    address:factAddress
    }
    console.log(object);
}


