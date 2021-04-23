var ip = document.getElementById('in');
var out = document.getElementById('out');
var msg = document.getElementById('msgs');
//Konwersja Decymalnego do Binarnego

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

//Konwersja Binarnego do Decymalnego

function bin2dec(bin) {
    var digit = parseInt(bin, 2);
    return digit;
}

//Nasłuch pisania w polu text oraz wpisywanie

ip.addEventListener('focusout', function (e) {
    if (ip.value.search(/^[10]+$/) != -1) {
        out.value = bin2dec(ip.value);
    } else {
        out.value = dec2bin(ip.value);
    }
}, false)

//Wypisywanie klasy

function klasa (liczba){
    if(liczba>=0 && liczba<=126){
        msg.value = "A";
    }
    else if(liczba>=128 && liczba<=191){
        msg.value = "B";
    }
    else if(liczba>=192 && liczba<=223){
        msg.value = "C";
    }
    else if(liczba>=224 && liczba<=239){
        msg.value = "D";
    }
    else if(liczba>=240 && liczba<=255){    
        msg.value = "E";
        
    }
    else{
        console.log("Eroor");
    }
}