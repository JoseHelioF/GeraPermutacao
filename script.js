const palavra = "bzxq"
let tamanhopalavra= palavra.length
let parte = []
let parcial = []
parte.push(palavra[0] + palavra[1])
parte.push(palavra[1] + palavra[0])
let tamanhoj = 3;
let tamanhoi = 2;

function gera(parte, incremento) {
    parcial=[]
    for (let j = 0; j < tamanhoj; j++) {
        for (let i = 0; i < tamanhoi; i++) {
            if (j == 0) {
                parcial.push( incremento + parte[i].slice(j))
            }
            else{
                parcial.push(parte[i].split('').reverse().join('').slice(-j).split('').reverse().join('') + incremento + parte[i].slice(j))
            }
        }
    }
    tamanhoi=tamanhoi*tamanhoj;
    tamanhoj++;
    return parcial;
}

for(let x = 2; x<tamanhopalavra;x++){
parte = gera(parte, palavra[x]);
}
console.log(parcial.sort());

const pai = document.body
for (i in parcial){
var filho = document.createElement("div");
filho.classList.add("item")
filho.id=i
pai.appendChild(filho)
filho.innerHTML = parcial[i]
}
// var filho = document.createElement("div");
// filho.classList.add("item")
// filho.id="2"
// pai.appendChild(filho)
// filho.innerHTML = parcial[1]

// a = [10,11,12,13,14,15]
// for (i in parcial){
//     console.log(parcial[i]);
// }

// console.log(parcial[0]);