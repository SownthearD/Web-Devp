function check(){
    var a=document.getElementById('name').value;

    if(a==null||a==""){
        alert("Fill The Box");
    }
    else if(a%2==0){
        document.getElementById('out').innerHTML="Even Number";
    }
    else{
        document.getElementById('out').innerHTML="Odd Number";
    }
}