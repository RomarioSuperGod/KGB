/**
 * Created by admin on 26.01.2017.
 */
var traitorData = document.querySelector('#traitorData'),
    traitorName = document.querySelector('#traitorName'),
    traitorAdress = document.querySelector('#traitorAdress'),
    wrongName = document.querySelector('#wrongName'),
    wrongAdress = document.querySelector('#wrongAdress'),
    buttonSet = document.querySelector('#setTraitor'),
    formData = document.querySelector('#form'),
    addTraiter = document.querySelector('#addTraiter'),
    tableData = document.querySelector('#table');

buttonSet.addEventListener('click', function () {
    formData.style.display = 'block';
});

addTraiter.addEventListener('click', function (e) {
    var newData = document.createElement('tr'),
        dataCh = document.createElement('td'),
        dataName = document.createElement('td'),
        dataAdress = document.createElement('td'),
        dataOption = document.createElement('td'),
        dataCheck = document.createElement('input');
        dataCheck.type = 'checkbox';
        optionButton = document.createElement('button');
        optionButton.textContent = 'Mersy';
        optionButton.style.type = 'reset';

    dataName.textContent = traitorName.value;
    dataAdress.textContent = traitorAdress.value;
    dataCh.appendChild(dataCheck),
    dataOption.appendChild(optionButton);
    newData.appendChild(dataCh),
    newData.appendChild(dataName);
    newData.appendChild(dataAdress);
    newData.appendChild(dataOption);
    tableData.appendChild(newData);
    e.preventDefault();
    formData.style.display = 'none';
    traitorName.value = '';
        traitorAdress.value = '';

    optionButton.addEventListener('click', function (e) {
        var deleteData = e.target.parentNode.parentNode;
        parent = deleteData.parentNode;
        parent.removeChild(deleteData);
        e.preventDefault();
    });

    dataCheck.addEventListener('change', function (e) {
        var shitClient = e.target.parentNode.parentNode;
        if (dataCheck.checked == true){

            shitClient.style.background = '#F08080';
        }
        else{
            shitClient.style.background = '#FFFFFF';
        }
    });

});




    