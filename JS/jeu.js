var a=Math.floor(Math.random()*100)+1;
var nombre;
var i=0;
var test=1;
while(i<8 && test==1)
{
    nombre=Number(prompt("saisir votre nombre"));
    
    if(nombre==a)
    {
        alert("bravo!vous avez gagner");
        test=0;
    }
    else if(nombre<a)
    {
        alert("le nombre est plus petit,Retente ta chance !");
        i++;
    }
    else if(nombre>a)
    {
        alert("le nombre est plus grand,Retente ta chance !");
        i++;
    }
}