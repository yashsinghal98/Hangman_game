let nameofperson = "";
let listofwords = [
  "laugh",
  "law",
  "manage",
  "management",
  "manager",
  "many",
  "market",
  "marriage",
  "material",
  "matter",
  "may"
];
let q=1;
let elemenno=-1;
let hangmanno=0;
let gameover=false;
const clickfn = () => {
  if(gameover===true)return ;
  let val = document.getElementById("name").value;
  console.log(val);
  if (val === "") {
    alert("Enter your Name");
    return;
  }
  nameofperson = val;
  startgame();
};
const startgame = () => {
  let ele = document.getElementById("game");
  ele.innerHTML="";
  ele.classList.remove("game");
  ele.classList.add("strgame");
  ele.innerHTML=`Q${q}.`;
  let i = Math.floor(Math.random() * 10);
  elemenno=i;
  let elem=document.createElement("div");
  elem.classList.add("innerbox");
  let word=listofwords[i];
  //console.log(word);
  for(let j=0;j<word.length;j++)
  {
    if(j%3!==0)
    {
    let elemen=document.createElement("span");
    elemen.setAttribute("id",j.toString());
    elemen.innerHTML="__ ";
    elem.appendChild(elemen);
    }
    else
    {
      let elemen=document.createElement("span");
    elemen.setAttribute("id",j.toString());
    elemen.innerHTML=`${word[j]} `;
    elem.appendChild(elemen);
    } 
  }
  let dive=document.createElement("div");
  dive.innerHTML="Press Key to Fill the boxes";
  dive.style.padding="20% 0% 0% 0%";
  elem.appendChild(dive);
  ele.appendChild(elem);
};
const fn=(event)=>
{
  if(gameover===true)return;
  console.log(event.key);
  let keypressed=event.key.toLowerCase();
  let wordsel=listofwords[elemenno];
  let flag=0,len=0;
  for(let i=0;i<wordsel.length;i++)
  {
    if(wordsel[i]===keypressed)
    {
      flag=1;
      let un=document.getElementById(i.toString());
      un.innerHTML=`${keypressed} `;
    }
    let ele=document.getElementById(i.toString());
    if(ele.innerHTML!=="__ ")
    len++;
  }
  if(flag===0)
  {
    hangmanno++;
    let ele=document.getElementById("hangmanimg");
    if(hangmanno===1)
    {
      ele.src="0.5.svg";
    }
    else if(hangmanno===2)
    {
      ele.src="2.svg";
    }
    else if(hangmanno===3)
    {
      ele.src="3.svg";
    }
    else if(hangmanno===4)
    {
      ele.src="4.svg";
    }
    else if(hangmanno===5)
    {
      ele.src="5.svg";
    }
    if(hangmanno>=5)
    {
      setTimeout(()=>{
      gameover=true;
      alert("Game is over");
      return ;
      },1000);
    }
  }
  if(len===wordsel.length)
  {
    q++;
    startgame();
    return ;
  }
}
document.addEventListener("keydown",fn);
const resetfn=()=>
{
  location.reload();
}