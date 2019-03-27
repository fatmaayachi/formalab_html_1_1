var a=Math.floor(Math.random()*100+1);
var nombre=Number(prompt("saisir votre nombre"));
var i=0;
var test=1;
while(i<8 && test==1)
{
    
    if(nb==a)
    {
        alert("bravo!vous avez gagner");
        test=0;
    }
    else if(nb<a)
    {
        alert("le nombre est plus petit");
        i++;
        nombre = Number(prompt("Retente ta chance !"));
    }
    else if(nb>a)
    {
        alert("le nombre est plus grand");
        i++;
        nombre = Number(prompt("Retente ta chance !"));
    }
}
