var val=1;
function calc(obj){
    if(obj.innerHTML==""){
    if(val==1){
        obj.innerHTML="X";
        val=0;
        
    }
    else{
        obj.innerHTML="O";
        val=1;
        
    }
    execute();
}
}
function reset(){
    for(let i=1;i<10;i++){
        document.getElementById(`c${i}`).innerHTML="";
    }
}

function execute() {
    var key1 = document.getElementById("c1").innerHTML;
    var key2 = document.getElementById("c2").innerHTML;
    var key3 = document.getElementById("c3").innerHTML;
    var key4 = document.getElementById("c4").innerHTML;
    var key5 = document.getElementById("c5").innerHTML;
    var key6 = document.getElementById("c6").innerHTML;
    var key7 = document.getElementById("c7").innerHTML;
    var key8 = document.getElementById("c8").innerHTML;
    var key9 = document.getElementById("c9").innerHTML;

    if ((key1 && key1 == key2 && key2 == key3) ||
        (key4 && key4 == key5 && key5 == key6) ||
        (key7 && key7 == key8 && key8 == key9) ||
        (key1 && key1 == key4 && key4 == key7) ||
        (key2 && key2 == key5 && key5 == key8) ||
        (key3 && key3 == key6 && key6 == key9) ||
        (key1 && key1 == key5 && key5 == key9) ||
        (key3 && key3 == key5 && key5 == key7)) {
        alert(`${val == 0 ? "X" : "O"} wins!`);
        reset();
    } else if (key1 && key2 && key3 && key4 && key5 && key6 && key7 && key8 && key9) {
        alert("It's a draw!");
        reset();
    }
}