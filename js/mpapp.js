// json array som virker ved at man bruger [ {var: "vardi"}, ]
moviearray = [
    {id: 1, name: "TRASH", desc: "Trash is a solid fun, not particularly great...", img: "Poster-Trash.jpg", aprice: "105", kprice: "65"},
    {id: 2, name: "CITIZENFOUR", desc: "Dokumentarfilmen 'Citizenfour' handler om whistlebloweren Edware Snowden", img: "Poster-Citizenfour.jpg", aprice: "110", kprice: "70"},
    {id: 3, name: "IDA", desc: "Det polske drama 'Ida' handler om en 17-årige pige...", img: "Poster-Ida.jpg", aprice: "100", kprice: "60"},
    {id: 4, name: "THE RIOT CLUB", desc: "The Riot club handler om en berygtet og prestigefyldt klub på Oxford Universitet...", img: "Poster-Riot.jpg", aprice: "115", kprice: "75"}
]

let accHtml = '', element;
for (element of moviearray){
    accHtml += `<div>
                    <figure>
                        <img src="img/${element.img}" alt="Poster ${element.name}">
                        <button id="movibutton${element.id}">Bestil</button>
                    </figure>
                    <h4 class="posters-overskrift">${element.name}</h4>
                    <p class="posters-info">${element.desc}</p>
                </div>`;
    sessionStorage.setItem('MID'+element.id, JSON.stringify(element)); // MID = Movie Identification Data. her pakker vi det ned i kasser som vi kan åbne andre steder
}
document.getElementById('post').innerHTML = accHtml; // poster 

let movibutton1 = document.getElementById("movibutton1").addEventListener('click', GTM1); // Go To Media
function GTM1(){
    sessionStorage.setItem('TheID', 1);
    window.location.href = "film.html";
}
let movibutton2 = document.getElementById("movibutton2").addEventListener('click', GTM2); // Go To Media
function GTM2(){
    sessionStorage.setItem('TheID', 2);
    window.location.href = "film.html";
}
let movibutton3 = document.getElementById("movibutton3").addEventListener('click', GTM3); // Go To Media
function GTM3(){
    sessionStorage.setItem('TheID', 3);
    window.location.href = "film.html";
}
let movibutton4 = document.getElementById("movibutton4").addEventListener('click', GTM4); // Go To Media
function GTM4(){
    sessionStorage.setItem('TheID', 4);
    window.location.href = "film.html";
}

// MID = JSON.parse(sessionStorage.getItem("MID"+1));
//     console.log(MID);