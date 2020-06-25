import React, {useState} from 'react';
import produce from "immer";

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

//generate grid of dead (0) cells
const generateEmptyGrid =(numRows, numCols)=>{
    const rows = [];
    for(let i = 0; i <numRows; i++){
        //create new array from numCols and push it into the rows array
        rows.push(Array.from(Array(numCols),()=>0))
    }
    return rows; 
}

function Grid(){
    //initial states
    const [running, setRunning] = useState(false);
    const [speed, setSpeed] = useState(100);
    
    const [gridValues ={numRows, numCols}, setGridValues] = useState({
        numRows: 40,
        numCols: 60
    }) 

    const[grid, setGrid] = useState(()=>{
        return generateEmptyGrid(numRows, numCols)
    })

    return(
        <>
        </>
    )

}


export default Grid; 