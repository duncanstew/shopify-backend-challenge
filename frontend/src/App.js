import './App.css';
import React, {useState, useEffect} from 'react'
import Item from './components/Item';
import Form from './components/Form'
import WarehouseForm from './components/WarehouseForm';
import Warehouse from './components/Warehouse';

function App() {

  const [inventory, setInventory] = useState([])
  const [warehouses, setWarehouses] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [selected, setSelected] = useState([])
  const [refresh, setRefresh] = useState(0)

  // const addItem = (name, quantity, price) => {
  //   var id = Math.round(Math.random() * 10000);
  //   var newItem = {id,name,quantity,price}
  //   setInventory(inventory => [...inventory, newItem])
  //   //writeData()
  // }

  // const addWarehouse = (name, city, state) => {
  //   var id = Math.round(Math.random() * 10000);
  //   var newItem = {id,name,city,state}
  //   setWarehouses(items => [...items, newItem])
  // }

  const getWarehouses = async () => {
    try {
      const response = await fetch("http://localhost:5001/warehouses");
      const jsonData = await response.json();

      setWarehouses(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteWarehouse = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/warehouses/${id}`, {
        method: 'DELETE'
      });
      
      setWarehouses(inventory => inventory.filter(item => item.id !== id))
    } catch (err) {
      console.error(err.message);
    }
  };

  const getInventory = async () => {
    try {
      const response = await fetch("http://localhost:5001/items");
      const jsonData = await response.json();

      setInventory(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/items/${id}`, {
        method: 'DELETE'
      });
      
      setInventory(inventory => inventory.filter(item => item.id !== id))
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getInventory();
    getWarehouses();
  }, [refresh]);
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
              <Form setErrorMsg={setErrorMsg} setRefresh={setRefresh} warehouses={warehouses}/>
              <div style={{display: 'flex', flex: 10, flexDirection: 'column', width: '100%'}}>
              {
                  inventory.map(item => {
                    return (
                      <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} warehouse={item.fk_warehouse}price={item.price} deleteItem={deleteItem}/>
                    )
                })
                }
              </div>
            </div>
            <div className='App-right'>
                <WarehouseForm setRefresh={setRefresh}/>
                <div style={{display: 'flex', flex: 10, flexDirection: 'column', width: '100%'}}>
                { 
                  warehouses.map(item => {
                    return (
                      <Warehouse key={item.id} id={item.w_id} name={item.name} city={item.city} state={item.state} removeWarehouse={deleteWarehouse}/>
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
