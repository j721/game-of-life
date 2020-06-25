
//set up initial state with useState hook
// const [generations, setGenerations] = useState(0)
// const [speed, setSpeed] = useState(100)
// const [numRows, setNumRow] = useState(40)
// const [numColumns, setNumColumns] = useState(60)
// const grid =useState([])
// const [grid, setGrid] = useState(Array(numRows).fill().map(()=>Array(numColumns).fill(false))) //generates empty grid


//changes grid when box is selected
// const selectBox =(row, column)=>{
//     let gridCopy = JSON.parse(JSON.stringify(grid)) //creates copy of grid. Double Buffering
//     gridCopy[row][column] =!gridCopy[row][column] //toggle between alive and dead cell state

//     // gridCopy[row][columns] =gridCopy[row][column] > 0? 0: 1;
//      //if number of row and columns greater than 0, set default to 0. dead. else set to alive 

//      //change new setGrid state to new gridCopy from box selected
//     setGrid(gridCopy)
// }


// const [grid, setGrid] = useState(Array(numRows).fill().map(()=>Array(numColumns).fill(false))) //generates empty grid