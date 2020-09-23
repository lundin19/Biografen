// json array som virker ved at man bruger [ {var: "vardi"}, ]
moviearray = [
    {id: 1, name: "TRASH", desc: "Trash is a solid fun, not particularly great...", img: "Poster-Trash.jpg", aprice: "105", kprice: "65"},
    {id: 2, name: "CITIZENFOUR", desc: "Dokumentarfilmen 'Citizenfour' handler om whistlebloweren Edware Snowden", img: "Poster-Citizenfour.jpg", aprice: "110", kprice: "70"},
    {id: 3, name: "IDA", desc: "Det polske drama 'Ida' handler om en 17-årige pige...", img: "Poster-Ida.gif", aprice: "100", kprice: "60"},
    {id: 4, name: "THE RIOT CLUB", desc: "The Riot club handler om en berygtet og prestigefyldt klub på Oxford Universitet...", img: "Poster-Riot.jpg", aprice: "115", kprice: "75"}
]

let accHtml = '', element;
for (element of moviearray){
    accHtml += `<figure>
                    <img id="ida-poster" src="/img/${element.img}" alt="Poster ${element.name}">
                    <button id="movibutton">Bestil</button>
                    <figcaption class="posters-overskrift">${element.name}</figcaption>
                    <figcaption class="posters-info">${element.desc}</figcaption>
                </figure>`;
    sessionStorage.setItem('MID'+element.id, JSON.stringify(element)); // MID = Movie Identification Data. her pakker vi det ned i kasser som vi kan åbne andre steder
}
document.getElementById('post').innerHTML = accHtml;


MID = JSON.parse(sessionStorage.getItem("MID"+1));
    console.log(MID);