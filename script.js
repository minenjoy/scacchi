const score=document.querySelector('.score')
const text=document.querySelector('.text')
const timer=document.querySelector('.timer')
const scacchiera=document.querySelector('.scacchiera')
const turno=document.querySelector('.turno')
const maxelement=64

let posRow
let posColumn
let indRow
let indColumn
let selCell
let infolastcell
let varturni=true

const pezzi=[
    [['tor','wh'],'cav_w','alf_w','reg_w','re_w','alf_w','cav_w','tor_w'],
    ['ped_w','ped_w','ped_w','ped_w','ped_w','ped_w','ped_w','ped_w'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['ped_b','ped_b','ped_b','ped_b','ped_b','ped_b','ped_b','ped_b'],
    ['tor_b','cav_b','alf_b','reg_b','re_b','alf_b','cav_b','tor_b'],
]
let grid=[
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
];

turni();

grid.forEach(function(element,row) {
    element.forEach(function(content,index,){
        const cell=document.createElement('div')


        
        
        
        let tipo
        if(content === 0){
            tipo = "w"
        } else {
            tipo = "b"
        }
        
        console.log(pezzi[row][index])
        
        const pezziVal = Array.isArray(pezzi[row][index]) ? pezzi[row][index] : [pezzi[row][index]];
        
        cell.classList.add(tipo, "r"+row, "c"+index, ...pezziVal )




        
        scacchiera.appendChild(cell)

    })
    
});

scacchiera.addEventListener("click",getClickPosition,false);

function getClickPosition(e) {
    posColumn = e.clientX;
    posRow = e.clientY;
    calcIndex(posColumn,posRow)
}

function calcIndex(posColumn,posRow){
    indColumn=Math.floor(posColumn/60)
    indRow=Math.floor(posRow/60)
    modify(indColumn,indRow)
    }

function modify(indColumn,indRow) {
    const cell = document.querySelectorAll('div')
    for(i=0;i<=cell.length;i++){
        if(cell[i].classList.contains("r"+(indRow))&&cell[i].classList.contains("c"+(indColumn))){
            
            for (let index = 0; index < cell.length; index++) {
              if(cell[index].classList.contains('sel')){

                  cell[index].classList.remove('sel')
                }
                  
            }
        cell[i].classList.add('sel')
        check(cell[i]);
        }
    }   

}

function check(cell){
    if(cell.classList.contains('ped_w')||cell.classList.contains('ped_b')){
        console.log("pedone");
    }
    if(cell.classList.contains('tor_w')||cell.classList.contains('tor_b')){
        console.log("torre");
    }
    if(cell.classList.contains('reg_w')||cell.classList.contains('reg_b')){
        console.log("regina");
    }
    if(cell.classList.contains('re_w')||cell.classList.contains('re_b')){
        console.log("re");
    }
    if(cell.classList.contains('alf_w')||cell.classList.contains('alf_b')){
        console.log("alfiere");
    }
    if(cell.classList.contains('cav_w')||cell.classList.contains('cav_b')){
        console.log("cavallo");
    }

}

function turni(){
    if(varturni=true){
        turno.innerText="turno di bianco"
    }
}