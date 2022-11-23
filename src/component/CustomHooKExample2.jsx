import React, {useState, useEffect} from 'react';
import useLocalStroge from './useLocalStroge';

function CustomHooKExample2() {

   const [task, setTasks] = useLocalStroge('task', ''); 

  return (
    <form className='w-50'>
        <div className="mb-3">
            <label className="form-label">
                <input type="text" className='form-control' value={task} onChange={(e) => setTasks(e.target.value)} />
            </label>
        </div>
    </form>
  )
}

export default CustomHooKExample2