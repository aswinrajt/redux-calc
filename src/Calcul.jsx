import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculation, reset } from './redux/calcuSlice';

function Calcul() {
    const calc = useSelector((state) => state.calcReducer.calculator);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const resetInp = () => {
        const inputElement = document.getElementById('calc');
        if (inputElement) {
            inputElement.value = '';
        }
    };

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center p-3" style={{ height: '100vh' }}>
                <div className="col-12 col-md-8 col-lg-6 border border-2 border-dark p-4 rounded" style={{ backgroundColor: 'lightblue' }}>
                    <h1 className="text-center font-weight-bold mb-4 text-dark">Simple Expression Calculator</h1>
                    <input
                        type="text"
                        id="calc"
                        onChange={(e) => setInputValue(e.target.value)}
                        className="form-control mb-3"
                        placeholder="Enter your expression"
                        style={{ fontSize: '1.2rem', padding: '10px' }}
                    />
                    <h2 className="text-center mt-2">RESULT: {calc}</h2>
                    <div className="d-flex justify-content-between flex-column flex-sm-row mt-3">
                        <button
                            className="btn btn-success mb-2 mb-sm-0"
                            onClick={() => dispatch(calculation(inputValue))}
                            style={{ fontSize: '1.1rem', padding: '10px 20px' }}
                        >
                            Calculate
                        </button>
                        <button
                            onClick={() => {
                                dispatch(reset());
                                resetInp();
                            }}
                            className="btn btn-danger"
                            style={{ fontSize: '1.1rem', padding: '10px 20px' }}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calcul;
