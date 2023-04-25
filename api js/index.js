
// https://blockchain.info/q/24hrprice

document.addEventListener('DOMContentLoaded', () => {

  getBitcoinPrice();

})

function upDateBitcoinPrice(newValue){
    document.querySelector('#narx').innerHTML = `${newValue} (USD)`
    setTimeout( getBitcoinPrice, 1 * 1000 )

}

 function getBitcoinPrice (){
    // 1 XHD obyektini hosil qilish
    let xhd = new XMLHttpRequest();
    let url = "https://blockchain.info/q/24hrprice";
    // 2 Event handler yozish kerak
     xhd.onload = function(){
        try {
            let data = this.responseText;
    document.querySelector('#narx').innerHTML = `${data} (USD)`;
    upDateBitcoinPrice(data);        
} catch(e) {
            console.log('error', e);
        }

     }
    // 3 AJAX request hosil qilish kerak
     xhd.open('GET', url)
    // 4 AJAX requestni web service ga yuborish
    xhd.send();

 }

























