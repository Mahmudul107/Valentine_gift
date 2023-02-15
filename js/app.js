// Chocolate section:
document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    
    // const quantity = document.getElementById('kitkat-quantity').value;
    const quantity = getInputValue('kitkat-quantity')
    const kitkatCost = quantity * 200;
    setInnerText('chocolate', kitkatCost);
    total();
})

// Rose Section:
document.getElementById('rose-buy-btn').addEventListener('click', function () {
    
    // const quantity = document.getElementById('rose-quantity').value;
    const quantity = getInputValue('rose-quantity')
    const roseCost = quantity * 100;
    setInnerText('rose', roseCost);
    total();
})

// Diary Section:
document.getElementById('diary-buy-btn').addEventListener('click', function () {
    
    // const quantity = document.getElementById('diary-quantity').value;
    const quantity = getInputValue('diary-quantity')
    const diaryCost = quantity * 300;
    setInnerText('diary', diaryCost);
    total();

})

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function getInputValue (id){
    const value = document.getElementById(id).value
    return parseFloat(value);
}

function total(){
    const chocolate = document.getElementById('chocolate').innerText;
    const rose = document.getElementById('rose').innerText;
    const diary = document.getElementById('diary').innerText;
    const sum = parseFloat(chocolate) + parseFloat(rose) + parseFloat(diary);
    setInnerText('total', sum);

}


// function handleKitkatBtn(){  // ShortCut handler function onclick with html file
//     console.log('clicked');
// }