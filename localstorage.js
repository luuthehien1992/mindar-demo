function allStorage() {
    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
}

setInterval(function () {
    // var button = document.querySelector('#btnClick');
    // button.addEventListener('click', function () {
    //     allStorage();
    // });


    allStorage();
}, 2000);
