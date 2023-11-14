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

let actrow
let actcol
let actind

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
let posiz=[
    [['tor','wh'],['cav','wh'],['alf','wh'],['reg','wh'],['re','wh'],['alf','wh'],['cav','wh'],['tor','wh']],
    [['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh'],['ped','wh']],
    ['a','a',['ped','wh'],'a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    ['a','a','a','a','a','a','a','a'],
    [['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl'],['ped','bl']],
    [['tor','bl'],['cav','bl'],['alf','bl'],['re','bl'],['reg','bl'],['alf','bl'],['cav','bl'],['tor','bl']],
]

turni();
disegnacampo()
disegnapezzi()
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
            scacchiera.appendChild(cell)
            
        })
        
    });
}
function disegnapezzi(){
    let celle=document.querySelectorAll('.cell')
    pezzi.forEach(function(elementP,rowP){
        elementP.forEach(function(contentP,indexP){
            const pezziVal = Array.isArray(posiz[rowP][indexP]) ? posiz[rowP][indexP] : [posiz[rowP][indexP]]; 
        celle[rowP*8+indexP].classList.add(...pezziVal )
    })
    })
  //  console.log(celle);  
}
    
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
    const cell = document.querySelectorAll('.cell')
    for(i=0;i<=cell.length;i++){
        if(cell[i].classList.contains("r"+(indRow))&&cell[i].classList.contains("c"+(indColumn))){
            

            if(varturni===true && cell[i].classList.contains('wh')|| varturni===false && cell[i].classList.contains('bl')){
                
                for (let index = 0; index < cell.length; index++) {
                    if(cell[index].classList.contains('sel')){
                        
                        cell[index].classList.remove('sel')
                    } else if(cell[index].classList.contains('target')){
                        
                        cell[index].classList.remove('target')
                    }
                    
                }
                cell[i].classList.add('sel')

                
                
                check(cell,i,indRow,indColumn);
            }
        }
    }
}   



function check(cell,i,indRow,indColumn){
    if(cell[i].classList.contains('ped')){
pedone(cell,i,indRow,indColumn);
    }
    if(cell[i].classList.contains('tor')){
        console.log("torre");
    }
    if(cell[i].classList.contains('reg')){
        console.log("regina");
    }
    if(cell[i].classList.contains('re')){
        console.log("re");
    }
    if(cell[i].classList.contains('alf')){
        console.log("alfiere");
    }
    if(cell[i].classList.contains('cav')){
        console.log("cavallo");
    }

}

function turni(){
    if(varturni=true){
        turno.innerText="turno di bianco"
    }
}

function pedone(cell,i,indRow,indColumn) {

    let startpos=cell[i].classList.contains('r1') ? (indRow+2)*8+indColumn:(indRow+1)*8+indColumn
    cell[startpos].classList.add('target')
    let newpose=document.querySelectorAll('.target')

  newpose.addEventListener("click",posiziona(cell[i],newpose))
    
  
}

function posiziona(prev,act){
 prev.classList.remove('sel','wh','ped')
 act.classList.remove('taget')
 act.classList.add('ped','wh')
}