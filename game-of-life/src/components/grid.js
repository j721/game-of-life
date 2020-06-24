import React, {useState} from 'react';

//set up initial state with useState hook
const [generations, setGenerations] = useState(0)
const [speed, setSpeed] = useState(100)
const [numRows, setNumRow] = useState(40)
const [numColumns, setNumColumns] = useState(60)
const [grid, setGrid] = useState(Array(numRows).fill().map(()=>Array(numColumns).fill(false)))

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

const select =(row, column)=>{
    let gridCopy = JSON.parse(JSON.stringify(grid)) //creates copy of grid. Double Buffering
    gridCopy[row][column] =!gridCopy[row][column] //default grid copy no longer valid

    // gridCopy[row][columns] =gridCopy[row][column] > 0? 0: 1;
     //if number of row and columns greater than 0, set default to 0. dead. else set to alive 

     //change new setGrid state to new gridCopy from box selected
    setGrid(gridCopy)
}



function Grid(){
    return(
        <>
        </>
    )

}


export default Grid; 