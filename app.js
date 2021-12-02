'use strict';

document.querySelector('button').onclick = function (evt) {
    evt.preventDefault();
    let distance = parseInt(document.getElementById('distance').value);
    let avg = parseFloat(document.getElementById('avg').value);
    let price = parseInt(document.getElementById('price').value);
    
    
    if (!isNaN(distance) && !isNaN(avg) && !isNaN(price)) {
        
        let amount = avg * distance / 100;
        let total = parseInt(amount * price);
        
        document.querySelector('.amount').innerHTML = amount + "liter";
        document.querySelector('.total').innerHTML = total + "HUF";
    }
    else {
        alert('A beírt értékek nem megfelelőek!');
    }

};