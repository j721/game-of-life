import React, {useState, useRef, useCallback} from 'react';
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
    const [speed, setSpeed] = useState(100);
    const [generations, setGenerations] = useState(0);
    
    const [{numRows, numCols}, setGridValues] = useState({
        numRows: 40,
        numCols: 60
    }) 
    
    const[grid, setGrid] = useState(()=>{
        return generateEmptyGrid(numRows, numCols)
    })
    
    const [running, setRunning] = useState(false);

    const runningRef = useRef(); //useRef hook update to current value of running state
    runningRef.current = running

    const genRef = useRef();     //useRef hook to update to current value of generations
    genRef.current = generations; 

    
    //run the cell automaton 
    const runSimulation = useCallback(()=>{  //useCallback hook don't have to make function more than once    
        if (!runningRef.current){
            return;
        }

        //seGenerations to iterate over item and increment by count +1
        setGenerations((genCount)=>{
            return (genCount = genCount + 1)
        })

        //update value in the grid and mutate them
        setGrid((g)=>{
            return produce(g, gridCopy=>{
                for(let i = 0; i <numRows; i++){
                    for (let k = 0; k < numCols; k++){ 
                        //compute number of neighbors around cell
                        let neighbors = 0; 
                        operations.forEach(([x,y])=>{
                            const newI = i +x;
                            const newK = k +y;
                            //checking the bounds of grid
                            if(newI >= 0  && newI < numRows && newK >=0 && newK < numCols){
                                neighbors +=g[newI][newK] //add 1 to current live cell
                            }
                        })
                        // grid copy will die according to rules
                        if(neighbors < 2 || neighbors > 3){
                            gridCopy[i][k] = 0; 
                        //grid copy will be alive according to rules 
                        }else if (g[i][k] === 0 && neighbors === 3){
                            gridCopy[i][k] = 1; 
                        }
                    }
                }
            })
        })
        setTimeout(runSimulation, 1000) //run again in 100 milliseconds
    },[])

    return(
        <>
        </>
    )

}


export default Grid; 