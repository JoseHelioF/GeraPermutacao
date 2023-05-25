const palavra = "runas"
let tamanhopalavra= palavra.length
let parte = []
let parcial = []
parte.push(palavra[0] + palavra[1])
parte.push(palavra[1] + palavra[0])
let tamanhoj = 3;
let tamanhoi = 2;

function inverte(valor){
 return valor.split('').reverse().join('')
}

function gera(parte, incremento) {
    parcial=[]
    for (let j = 0; j < tamanhoj; j++) {
        for (let i = 0; i < tamanhoi; i++) {
            if (j == 0) {
                parcial.push( incremento + parte[i].slice(j))
            }
            else{
                parcial.push(inverte(inverte(parte[i]).slice(-j)) + incremento + parte[i].slice(j))
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

let conteudo = document.getElementById('container');


let t = document.createElement('div')
t.innerHTML=`<div class="item">5x</div>`
conteudo.appendChild(t)

console.log(conteudo);