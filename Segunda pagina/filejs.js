var req= new XMLHttpRequest(); 
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "yDooZLq12h87lM7bQ58VWYKUX0nkuLhgiF9PfncR ";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})


async function getInfo() {
  const url ='https://dad-jokes.p.rapidapi.com/random/joke';
  const options={
    method: 'GET',
    headers:{
      'X-RapidAPI-Key': 'd737593dcemsh1b66ab04772c26bp108b09jsnd20a0f60b7e1',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  };
  try{
    const response = await fetch(url, options);
    const result= await response.text(); 
    console.log(result);
    }catch(error){
      console.error(error)
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const getInfoButton = document.getElementById('getInfoButton');
    getInfoButton.addEventListener('click', getInfo);
  });
  
function handleCLick() {
  alert("TE DIJE QUE NO!!!");
}

function mouseoverevent() {
  alert("Entraste a la zona cool");

}

const btn = document.querySelector("#btn");
const lista = document.querySelector(".lista");


btn.addEventListener("click", function(event) {
  event.preventDefault(); 
  const entrada = document.querySelector("#entrada").value;

  if (entrada !== "") {
    const checkbox = document.createElement("input");
    const listItem = document.createElement("li");
    checkbox.type = "checkbox";

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(entrada));
    lista.appendChild(listItem);

    document.querySelector("#entrada").value = ""; 
  


  }
});

