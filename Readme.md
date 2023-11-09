# SCACCHI
### Appunti di oggi 09/11/23


vecchie parti di codice
```javascript
if(content === 0){

            cell.classList.add('w')
            cell.classList.add(pezzi[row][index].isArray ? pezzi[row][index].join(" ") : pezzi[row][index])
            cell.classList.add("r"+row)
            cell.classList.add("c"+index)
        } else if(content===1) {
            cell.classList.add('b')
            cell.classList.add(pezzi[row][index].isArray ? pezzi[row][index].join(" ") : pezzi[row][index])
            cell.classList.add("r"+row)
            cell.classList.add("c"+index)
        } 
```
altre possibilità
```javascript
        if(content === 0){
            cell.classList.add('w')
        } else {
            cell.classList.add('b')
        }
        cell.classList.add(pezzi[row][index].isArray ? pezzi[row][index].join(" ") : pezzi[row][index])
        cell.classList.add("r"+row)
        cell.classList.add("c"+index)

                const cellType = content === 0 ? "w" : "b";
        cell.classList.add(cellType)
        cell.classList.add(pezzi[row][index].isArray ? pezzi[row][index].join(" ") : pezzi[row][index])
        cell.classList.add("r"+row)
        cell.classList.add("c"+index)
```

        operatore ternario        variabile da valorizzare = condizione ? valore Se vero : valore se falso
        ...       spread operator         restituisce piu valori in arrey come valori separati
