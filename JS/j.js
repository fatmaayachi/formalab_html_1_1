var guess = Math.floor(Math.random() * 100) + 1;
var tryPts=5;
var nb;
while((nb!==guess)&&(tryPts>0))
{
  nb = Number(prompt(" Devinez X, Veuillez saisir un entier entre 1 et 100 , il vous reste "+tryPts+" essais"));
  while((nb<=100)&&(nb=>1))
  {
  if (nb>guess)
  {
    alert("Le nombre saisie est un nombre superieur à X!");
    tryPts--;
  }
  else if (nb< guess)
  {
    alert("Le nombre saisie est un nombre inferieur à X!");
    tryPts--;
  }
  else
  {
    tryPts==0;
  }
}

}
if (nb==guess)
{
  alert("Félicitation !!  >>>>"+guess+"<<<<");
}