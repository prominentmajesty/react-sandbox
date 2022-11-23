import React,{useState, useEffect, useRef, useMemo} from 'react';

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

//   const sqrt = getSqrt(number);
    const sqrt = useMemo(() => getSqrt(number), [number]);


  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prev) => {
        return prev + 1
    })
  }

  return (
    <div>
        <input onChange={(e) => setNumber(e.target.value) } type="number" value={number} className="form-control w-25" />
        <h2 className="my-3">
            The Squre Root of {number} is {sqrt}
        </h2>
        <button onClick={onClick} className="btn btn-primary">Re-Render</button>
        <h3>Renders : {renders.current}</h3>
    </div>
  )
}

function getSqrt(n){
    for(let i = 0; i <= 10000; i++){
        console.log(1)
    }
    return Math.sqrt(n);
}

export default UseMemoExample