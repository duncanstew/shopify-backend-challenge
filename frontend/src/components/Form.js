import React, {useState} from 'react';

function Form({addItem, setErrorMsg, setRefresh, warehouses}) {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice ] = useState(0)
    const [warehouse, setWarehouse] = useState('')

    const onSubmitForm = async e => {
        e.preventDefault();
        if(name === '' && quantity === 0 && price === 0 && warehouse === '') return;
        try {
            const body = { name, quantity, price, warehouse };
          const response = await fetch("http://localhost:5001/items", {
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
        <form style={{display: 'flex', flexDirection: 'row', backgroundColor: '#123321', width: '100%', justifyContent:'space-between'}} onSubmit={onSubmitForm}>
            <div>
                <h5>Name: </h5>
                <input style={{padding: '10px 10px', borderRadius: '10px', border: 'none', marginBottom: '10px', marginLeft: '10px'}}value={name} onChange={e => setName(e.target.value)}>
                </input>
            </div>
            <div>
                <h5>Quantity: </h5>
                <input style={{padding: '10px 10px', borderRadius: '10px', border: 'none', marginBottom: '10px', marginLeft: '10px'}}value={quantity} onChange={e => setQuantity(e.target.value)}>
                </input>
            </div>
            <div>
                <h5>Price: </h5>
                <input style={{padding: '10px 10px', borderRadius: '10px', border: 'none', marginBottom: '10px', marginLeft: '10px'}}value={price} onChange={e => setPrice(e.target.value)}>
                </input>
            </div>
            <select style={{height: '50px'}} onChange={e => setWarehouse(e.target.value)}>
                {
                    warehouses.length !== 0 ? warehouses.map(warehouse => <option key={warehouse.w_id} value={warehouse.w_id}>{warehouse.name}</option>) : null
                }
            </select>
            <div>
                <button style={{height: '50px'}}>Add Item</button>
            </div>
        </form>
    )
}

export default Form;