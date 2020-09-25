let adultNum = document.getElementById("adult-num").addEventListener('change', ticket);
let kidNum = document.getElementById("kid-num").addEventListener('change', ticket);
const bio = document.getElementById("bio");
const row = document.getElementById("row");
const seat = document.getElementById("seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const adultPrice = document.getElementById("adult-price");
const kidPrice = document.getElementById("kid-price");

TheID = sessionStorage.getItem("TheID");
MID = JSON.parse(sessionStorage.getItem("MID"+TheID));
let accHtml =  `<img src="img/${MID.img}" alt="movie cover for ${MID.name}" class="cover">
                <div>
                    <h2>${MID.name}</h2>
                    <h5>Beskrivelse</h5>
                    <p>${MID.desc}</p>
                    <img src="img/Medierådet_Tilladt_for_børn_over_11_år.png" alt="R" class="r">
                    <button>Bestil</button>
                </div>`;
document.getElementById('post-it').innerHTML = accHtml;

adultPrice.innerText = MID.aprice;
kidPrice.innerText = MID.kprice;

function ticket(){
    adultNum = parseInt(document.getElementById("adult-num").value);
    kidNum = parseInt(document.getElementById("kid-num").value);

    let ticketCount = adultNum + kidNum;
    count.innerText = ticketCount;

    let adultResult = adultNum * MID.aprice;
    let kidtResult = kidNum * MID.kprice;
    let priceResult = adultResult + kidtResult;
    total.innerText = priceResult;

    let seatcount;
    for(i = 1; i < ticketCount+1; i++){ 
        console.log(i);
        document.getElementById("seatID"+i).classList.add("selected");
    }
}


let tester = document.getElementById("tester").addEventListener('click', test);
function test() {
    let x = document.getElementsByClassName('selected');
    for(let i = 0; i < x.length; i++){
        x[i].classList.add('occupied');
    }
    removeClass();
    function removeClass(){
        let x = document.getElementsByClassName('occupied');
        for(let i = 0; i < x.length; i++){
            x[i].classList.remove('selected');
        }
    }
}