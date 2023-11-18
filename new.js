const score=document.querySelector('.score')
const text=document.querySelector('.text')
const timer=document.querySelector('.timer')
const scacchiera=document.querySelector('.scacchiera')
const turno=document.querySelector('.turno')
const maxelement=64

let turni=true

const pezzi=[
    [['tor','wh'],['cav','wh'],['alf','wh'],['reg','wh'],['re','wh'],['alf','wh'],['cav','wh'],['tor','wh']],
    [['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh']],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    [['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl']],
    [['tor','bl'],['cav','bl'],['alf','bl'],['re','bl'],['reg','bl'],['alf','bl'],['cav','bl'],['tor','bl']],
]
const grid=[
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
];

disegnacampo()
disegnapezzi()
tocca_a()


let varpezzi=document.querySelectorAll('.pez')
for (let index = 0; index < varpezzi.length; index++) {
 varpezzi[index].addEventListener('click', function (){
    console.log('checked')
    check(varpezzi[index])
    console.log(varpezzi[index]);

 })
    
}
console.log(varpezzi);




function disegnacampo(){
scacchiera.innerHTML=""
    grid.forEach(function(element,row) {
        element.forEach(function(content,index,){
            const cell=document.createElement('div')
            let tipo
            if(content === 0){
                tipo = "w"
            } else {
                tipo = "b"
            }
          //  const pezziVal = Array.isArray(posiz[row][index]) ? posiz[row][index] : [posiz[row][index]];
            
            cell.classList.add(tipo, "r"+row, "c"+index,"cell")  
            const pez=document.createElement('div')
            scacchiera.appendChild(cell)
            pez.classList.add('pez')
            cell.appendChild(pez)
            
        })
        
    });
}
function disegnapezzi(){
    let celle=document.querySelectorAll('.pez')
    pezzi.forEach(function(elementP,rowP){
        elementP.forEach(function(contentP,indexP){
            const pezziVal = Array.isArray(pezzi[rowP][indexP]) ? pezzi[rowP][indexP] : [pezzi[rowP][indexP]]; 
            celle[rowP*8+indexP].classList.add(...pezziVal )
    })
    })

}
function tocca_a() {
turni= turni===true ? turno.innerText= "turno di bianco" : turno.innerText="turno di nero" 
}
function check(obj) {
    if(turni===true && obj.classList.contains('wh') || turni === false && obj.classList.contains('bl') ){
        console.log('funzeca');
        for (let index = 0; index < varpezzi.length; index++) {
            if(varpezzi[index].classList.contains('sel')){
                varpezzi[index].classList.remove('sel')
                console.log("rimosso");
                
            }
        
        }
        obj.classList.add('sel')
    }
    
}
