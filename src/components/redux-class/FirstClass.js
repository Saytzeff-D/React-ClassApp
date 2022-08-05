import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../../actions';

function FirstClass(props) {
    const dispatch = useDispatch()
    const state = useSelector(state=> state.counter.count)
    return (
        <div>
            <h1>{state}</h1>
            <button className='btn btn-success' onClick={()=>dispatch(increase(120))}>Increase</button>
        </div>
    );
}

export default FirstClass;