import React, {useState} from 'react';

function WarehouseForm({setErrorMsg, setRefresh}) {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [name, setName ] = useState('')

    const onSubmitForm = async e => {
        e.preventDefault();
        if(name === '' && city === '' && state === '') return;
        try {
          const body = { name, city, state };
          const response = await fetch("http://localhost:5001/warehouses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          setRefresh(refresh => refresh + 1)
        } catch (err) {
          console.error(err.message);
        }
      };

    return(
        <div style={{display: 'flex', flexDirection: 'row', backgroundColor: '#123321', width: '100%', justifyContent:'space-between'}} onSubmit={onSubmitForm}>
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
                <button>Add Warehouse</button>
            </div>
        </div>
    )
}

export default WarehouseForm;