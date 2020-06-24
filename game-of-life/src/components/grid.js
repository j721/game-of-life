import React, {useState} from 'react';

//set up initial state with useState hook
const [generations, setGenerations] = useState(0)
const [speed, setSpeed] = useState(100)
const [rows, setRow] = useState(40)
const [columns, setColumns] = useState(60)
const [grid, setGrid] = useState(Array(rows).fill().map(()=>Array(columns).fill(false)))

//location of neighboring cells
const operations =[
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
]

const select =(rows, columns)=>{
    let gridCopy = JSON.parse(JSON.stringify(grid)) //creates copy of grid. Double Buffering
    gridCopy[rows][columns] =!gridCopy[rows][columns]
    setGrid(gridCopy)
}



function Grid(){
    return(
        <>
        </>
    )

}


export default Grid; 