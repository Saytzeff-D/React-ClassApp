import { useState } from 'react';

function Num() {
    const [num, setNum] = useState(0)
  const random =()=>{
    let randNum = Math.ceil(Math.random() * 10)
    setNum(randNum)
  }
  return(
    <div>
      {num > 5 ? <h3>Bigger than 5</h3>: <h3>Smaller than 5</h3>}
      <h5>{num}</h5>
      <button className="btn btn-success" onClick={()=>random()}>Randomise</button>
    </div>
  )
}
export default Num