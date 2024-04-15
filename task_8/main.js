const saveData = () => {
    let lastName = document.querySelector("#lastName").value;
    let firstName = document.querySelector("#firstName").value;
    let middleName = document.querySelector("#middleName").value;
    let phone = document.querySelector("#phone").value;
    let status = document.querySelector("#status").value;


    let storeData = JSON.parse(localStorage.getItem("users")) || [];

    let userData = {
        lastName: lastName,
        firstName: firstName,
        middleName: middleName,
        phone: phone,
        status: status
    }

    storeData.push(userData);
    localStorage.setItem("users", JSON.stringify(storeData));
    getData();
}

const getData = () => {
    let storeData = JSON.parse(localStorage.getItem("users")) || [];
    let resultData = document.querySelector("#resultData");
    resultData.innerHTML = "";
    if ( storeData && storeData.length > 0 ) {
        storeData.forEach(function(userData, index) {
            resultData.innerHTML += `<li> Фамилия: ${userData.lastName}</li>`;
            resultData.innerHTML += `<li> Имя: ${userData.firstName}</li>`;
            resultData.innerHTML += `<li> Отчество: ${userData.middleName}</li>`;
            resultData.innerHTML += `<li> Номер телефона: ${userData.phone}</li>`;
            resultData.innerHTML += `<li> Статус: ${userData.status}</li>`;
            resultData.innerHTML += `<button onclick='deleteData(${index})'>Удалить</button>`;
            resultData.innerHTML += `<hr><br>`;
        });
    } else {
        resultData.innerHTML += "<li>Данные не найдены</li>"
    }
}

const deleteData = (index) => {
    let storeData = JSON.parse(localStorage.getItem("users")) || [];
    storeData.splice(index, 1)
    localStorage.setItem("users", JSON.stringify(storeData))
    getData();
}

window.onload = function(){
    getData();
}