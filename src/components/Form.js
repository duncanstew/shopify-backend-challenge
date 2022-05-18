import React, {useState} from 'react';

function Form({addItem, setErrorMsg}) {
    const [name, setName] = useState('Ipad')
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice ] = useState(490)

    return(
        <div style={{display: 'flex', flexDirection: 'row', backgroundColor: '#123321', width: '100%', justifyContent:'space-between'}}>
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
            <div>
                <button onClick={() => {
                    if(name !== '' && quantity !== -1 && price !== 0){
                        console.log('sup')
                        addItem(name,quantity,price);
                    }
                    else{
                        setErrorMsg('Additional Information Needed!')
                    }
                }}>Add</button>
            </div>
        </div>
    )
}

export default Form;