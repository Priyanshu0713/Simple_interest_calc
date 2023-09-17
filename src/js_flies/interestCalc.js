import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

function InterestCalc() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState(1);
    const [num3, setNum3] = useState(5);
    const [Add, setAdd] = useState(0);

    useEffect(() => {
        setAdd((num1 * num2 * num3) / 100);
    }, [num1, num2, num3]);

    return (
        <div className="whole-page">
            <div className="page">
                <div className='int-back'>
                    <div className="interest">
                        <label>${Add.toFixed(2)} </label>
                        <h5>Simple Interest</h5>
                    </div>
                </div>
                <div className="AYR">
                    <br />
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(parseFloat(e.target.value))}
                        placeholder="$0"
                        className="Principal-Amount"
                    />
                    <br />
                    <label>Year</label>
                    <div className="year">
                        <Slider
                            style={{ height: 5, width: 150 }}
                            value={num2}
                            onChange={(_, value) => setNum2(value)}
                            defaultValue={1}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            min={1}
                            max={10}
                        />
                    </div>
                    <label>Rate</label><br></br>
                    <Slider
                        style={{ height: 5, width: 150 }}
                        value={num3}
                        onChange={(_, value) => setNum3(value)}
                        defaultValue={5}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={5}
                        max={15}
                    />
                </div>
            </div>
        </div>
    );
}

export default InterestCalc;
