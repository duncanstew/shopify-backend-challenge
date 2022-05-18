import React, {useState} from 'react';

function WarehouseForm({setErrorMsg, addWarehouse}) {
    const [city, setCity] = useState('Olympia')
    const [state, setState] = useState('Washington')
    const [name, setName ] = useState('Base I')

    return(
        <div style={{display: 'flex', flexDirection: 'row', backgroundColor: '#123321', width: '100%', justifyContent:'space-between'}}>
            <div>
                <h5>Name: </h5>
                <input style={{padding: '10px 10px', borderRadius: '10px', border: 'none', marginBottom: '10px', marginLeft: '10px'}}value={name} onChange={e => setName(e.target.value)}>
                </input>
            </div>
            <div>
                <h5>City: </h5>
                <input style={{padding: '10px 10px', borderRadius: '10px', border: 'none', marginBottom: '10px', marginLeft: '10px'}}value={city} onChange={e => setCity(e.target.value)}>
                </input>
            </div>
            <div>
                <h5>State: </h5>
                <input style={{padding: '10px 10px', borderRadius: '10px', border: 'none', marginBottom: '10px', marginLeft: '10px'}}value={state} onChange={e => setState(e.target.value)}>
                </input>
            </div>
            <div>
                <button onClick={() => {
                    if(name !== '' && city !== '' && state !== ''){
                        console.log('sup')
                        addWarehouse(name,city,state);
                    }
                    else{
                        setErrorMsg('Additional Warehouse Information Needed!')
                    }
                }}>Add</button>
            </div>
        </div>
    )
}

export default WarehouseForm;