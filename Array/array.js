function range(){
    const emp=[10,20,30,40,50,60,70,80,90,100,110,120,130];  
    console.log(emp);
    var i,num;
    var r='';
    var a=document.getElementById('first').value;
    var b=document.getElementById('second').value;
    

    for(i = 0; i <= emp.length; i++)
    {
        if(emp[i]>a && emp[i]<b)
        {
            num = emp[i] ;
            r += emp[i]+",";
            console.log(r);
        }
    }
    document.getElementById("result").value = r;
    
}
