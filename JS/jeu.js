var a=Math.floor(Math.random()*100+1);
var i=0;
var test=1;
while(i<8 && test==1)
{
    var nb=number(prompt('saisir votre nombre'));
    if(nb==a)
    {
        alert('bravo!vous avez gagner');
        test=0;
    }
    else if(nb<a)
    {
        alert('le nombre est plus petit');
        i++;
    }
    else if(nb>a)
    {
        alert('le nombre est plus grand');
        i++;
    }
}
