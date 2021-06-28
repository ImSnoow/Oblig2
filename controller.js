function chooseBar(id){
    if (chosenBar == id) chosenBar = null;
    else chosenBar = id;

    checkIfChosen()

    show()

}

function checkIfChosen(){
    chosenBar == null ? status = "disabled" : status = "enabled";
}

function currentBar(){
    return chosenBar == null ? "Ingen" : chosenBar;
}


function deleteBar(){
    numbers.splice (chosenBar -1, 1);

    show()
}


function addBar(){
    if (inputValue > 0 && inputValue <= 10) 
    {        
        numbers.push(inputValue); 
    }           
    else
    {
        alert('Feil verdi, prøv igjen!');
    }
        
    show()

}

function changeBar(){      
    if (inputValue > 0 && inputValue <= 10) 
    {
        numbers[chosenBar -1] = inputValue;   
    }
    else 
    {
        alert('Feil verdi, krever et tall mellom 1 og 10');
    }
   
    show()
}