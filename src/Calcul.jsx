import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { calculation,reset } from './redux/calcuSlice';


function Calcul() {
    const calc=useSelector((state)=>state.calcReducer.calculator)
    console.log(calc);
    const dispatch=useDispatch()
    const [inputValue,setInputValue]=useState('')

    const resetInp=()=>{
        const inputElement=document.getElementById("calc")
        if(inputElement){
            inputElement.value=""
        }
    }

    


    return (
        <>
                            

            <div className='d-flex align-items-center justify-content-center p-5 mt-5' style={{ height: '80vh' }}>
               
                <div className='w-50 border border-2 border-dark p-5 ' style={{backgroundColor:'lightblue'}}>
                <h1 className='text-center text-bolder mb-5 text-dark'>Simple Expression Calculator</h1>
                    <input type="text" id="calc" onChange={(e)=>{setInputValue(e.target.value)}} className='form-control '  placeholder='enter your expression'/>
                    <h2 className='text-center mt-2 '>RESULT: {calc}</h2>
<div className='d-flex justify-content-center'>
                        <button className='btn btn-success m-3' onClick={()=>{dispatch(calculation(inputValue))}}>Calculate</button>
                        <button onClick={()=>{dispatch(reset());resetInp()}} className='btn btn-danger m-3' >Clear</button>
    
</div>                </div>
            </div> 
        </>
    )
}

export default Calcul