
import React, {useState} from 'react';
function Warehouse({id, name, city, state, removeWarehouse}) {

    return (
        <div style={{display: 'flex',flexDirection: 'row', width: '100%', backgroundColor: '#123123', justifyContent: 'space-around', backgroundColor: '#dcdcdc', margin: '5px 0px', borderRadius: '10px'}}>
            <div style={{display: 'flex', flex: 1, paddingLeft: '5px'}}>
                <p style={{color: '#111111'}}>{id}</p>
            </div>
            <div style={{display: 'flex', flex: 3}}>
                <p style={{color: '#111111'}}>{name}</p>
            </div>
            <div style={{display: 'flex', flex: 1}}>
                <p style={{color: '#111111'}}>{city}, </p>
            </div>
            <div style={{display: 'flex', flex: 1}}>
                <p style={{color: '#111111'}}>{state}</p>
            </div>
            <button style={{marginRight: '3px',height: '30px', width: '30px', display: 'flex', justifyContent: 'center', alignSelf: 'center', textAlign: 'center', borderRadius: '5px', backgroundColor: '#008060', border: 'none'}} onClick={() => removeWarehouse(id)}>
                edit
            </button>
            <button style={{marginRight: '3px',height: '30px', width: '30px', display: 'flex', justifyContent: 'center', alignSelf: 'center', textAlign: 'center', borderRadius: '5px', backgroundColor: '#008060', border: 'none'}} onClick={() => removeWarehouse(id)}>
                del
            </button>
        </div>
    )
}



export default Warehouse;