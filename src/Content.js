import React from 'react';
import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Additem from './Additem';



const Content = () => {
    const [items, setItems] = useState([
      {
        id: 1,
        checked:false,
        item: "Practice Java"
      },
      {
        id: 2,
        checked:false,
        item: "DSA"
      },
      {
        id: 3,
        checked:false,
        item: "ReactJS"
      },
      {
        id: 4,
        checked:false,
        item: "LeetCode"
      }
    ]);

    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  return (
   <div className='content'>
        <Additem/>

    {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
   </div>
  )
}

export default Content