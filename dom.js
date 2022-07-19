
//const button=document.getElementById("button");
//button.style.backgroundColor="red"*/
//cette methode avec ID

/*const button=document.querySelector('button')
button.style.backgroundColor="red"*/
//cette methode avec query selector

/*const button=document.getElementsByClassName("bib");
button[0].style.backgroundColor = "red";*/
// cette methode avec get element by class

/*const button=document.querySelectorAll("button");
button[2].style.backgroundColor="red";*/
// cette methode donne l'accées a tous les balises de type button sachant que l'accées est un par un

/*const button=document.getElementsByTagName('button');
button[0].style.backgroundColor='red';*/
// cette methode par le tag name



const newButton = document.createElement('button');
newButton.textContent = 'I am newly created';

const parent = document.querySelector('div');
parent.appendChild(newButton);*/
//creation d'un nouveau element dans js et on fait l'appel a lui pour changement de style...

/*
const newpara= document.createElement('p'.);
newpara.textContent='i am heree broo';

/*const parent= document.querySelector('div');
parent.appendChild(newpara);
newpara.style.backgroundColor="red";*/
/*const here=document.createElement('button');
here.textcontent='here';
const parent = document.querySelector('div');
parent.appendChild(here);

const there= document.createElement('button');
here.textcontent='not here';
const parent = document.querySelector('div');
parent.appendChild(not here)
*/
here.onclick=()=>{
    here.style.backgroundColor="red";
}

there.onclick=()=>{
 .
para.onclick=()=>{
    para.style.backgroundColor="blue";
}
