import './App.css';
import React, {useState} from 'react'
import Item from './components/Item';
import Form from './components/Form'
import data from './data'
import WarehouseForm from './components/WarehouseForm';
import Warehouse from './components/Warehouse';

function App() {
  var importedData = data;
  const [inventory, setInventory] = useState(importedData)
  const [warehouses, setWarehouses] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [selected, setSelected] = useState([])
  const fs = require('fs')

  const addItem = (name, quantity, price) => {
    var id = Math.round(Math.random() * 10000);
    var newItem = {id,name,quantity,price}
    setInventory(inventory => [...inventory, newItem])
    //writeData()
  }

  const addWarehouse = (name, city, state) => {
    var id = Math.round(Math.random() * 10000);
    var newItem = {id,name,city,state}
    setWarehouses(items => [...items, newItem])
  }

  const writeData = () => {
    const dataToWrite = JSON.stringify(inventory);
    fs.writeFile('data.json', dataToWrite, (err) => {
      if(err){
        throw err;
      }
      console.log("JSON SAVED!")
    })
  }

  const removeItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id))
    //writeData()
  }

  const removeWarehouse = (id) => {
    setWarehouses(warehouses.filter(item => item.id !== id))
    //writeData()
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <div className='App-top'>
            <h1> Shopify</h1>
            {
              <h2>{errorMsg}</h2>
            }
          </div>
          <div className='App-bottom'>
            <div className='App-left'>
              <Form addItem={addItem} setErrorMsg={setErrorMsg}/>
              <div style={{display: 'flex', flex: 10, flexDirection: 'column', width: '100%'}}>
              {
                  inventory.map(item => {
                    return (
                      <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price} removeItem={removeItem}/>
                    )
                })
                }
              </div>
            </div>
            <div className='App-right'>
                <WarehouseForm addWarehouse={addWarehouse}/>
                <div style={{display: 'flex', flex: 10, flexDirection: 'column', width: '100%'}}>
                { 
                  warehouses.map(item => {
                    return (
                      <Warehouse key={item.id} id={item.id} name={item.name} city={item.city} state={item.state} removeWarehouse={removeWarehouse}/>
                    )
                })
                }
              </div>
            </div>
                        
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
