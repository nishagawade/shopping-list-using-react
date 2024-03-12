import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(6)
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: false },
    { itemName: 'item 3', quantity: 2, isSelected: false },]);

    const addNewItem = () =>{
      const newValue = {
        itemName : inputValue,
        quantity : 1,
        isSelected: false
      }

      const newArray = [...items, newValue];
      setItems(newArray)

     
    }

    const addQuantity = (index) =>{
       
       const newItems = [...items]
        items[index].quantity++ 
        setItems(newItems)
        totalSum()
    }

   const decreaseQuantity = (index) =>{
    const newItems = [...items];
    items[index].quantity --;
    if(items[index].quantity< 0){
      items[index].quantity =0
    }
    setItems(newItems);
    totalSum()
   }

   const addedItem = (index) =>{
    const newItems = [...items]
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
    totalSum()
   }


   const totalSum = () =>{
    const totalItemCount = items.reduce((total, item)=>{
       return total + item.quantity
    }, 0);
    setTotalItemCount(totalItemCount);
   }

  return (
    <div className='app-background'>
      <div className='main-container'>
        <div className='add-item-box'>
          <input className='add-item-input' 
           placeholder='Add an item...' 
           value={inputValue}
           onChange={(e)=>setInputValue(e.target.value)}
           />
          <FontAwesomeIcon icon={faPlus}  onClick={addNewItem} />
        </div>
        <div className='item-list'>

          {
            items.map((item, index) => {
              return (
                <div className='item-container' key={index}>
                  <div className='item-name' onClick={()=>addedItem(index)}>
                    {/* HINT: replace false with a boolean indicating the item has been completed or not */}
                    {item.isSelected ? (
                      <>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span className='completed'>{item.itemName}</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faCircle} />
                        <span >{item.itemName}</span>
                      </>
                    )}
                  </div>
                  <div className='quantity'>
                    <button>
                      <FontAwesomeIcon icon={faChevronLeft} onClick={()=>decreaseQuantity(index)}  />
                    </button>
                    <span>{item.quantity}</span>
                    <button>
                      <FontAwesomeIcon icon={faChevronRight} onClick= {()=>addQuantity(index)} />
                    </button>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className='total'>Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default App;