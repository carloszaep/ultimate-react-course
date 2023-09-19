import { useState } from "react";



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Chager", quantity: 12, packed: true },
];



function App() {
  const [items, setItems] = useState(initialItems)

  function handlerSetItems(item) {
    setItems(currentState => [...currentState, item])
  }

  function handlerDeleteItem(id) {
    setItems(items => items.filter(i => i.id !== id))
  }

  function handlerToggleItem(id) {
    setItems(items => items.map(i => i.id === id ? { ...i, packed: !i.packed } : i))
  }

  return (

    <div className='app'>
      <Logo />
      <Form addItems={handlerSetItems} />
      <PackingList items={items} deleteItem={handlerDeleteItem} toggleItem={handlerToggleItem} />
      <Stats />
    </div>


  )
}


function Logo() {
  return (
    <h1>🌴 Far Away 👜</h1>
  )
}
function Form({ addItems }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)


  function handlerSubmit(e) {
    e.preventDefault()
    if (description === '' || typeof quantity !== 'number') return
    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem)
    addItems(newItem)
  }

  return (
    <form className='add-form' onSubmit={handlerSubmit}>
      <h3>What do you need for your 😊 trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option key={num} value={num}>{num}</option>)}

      </select>
      <input type="text" placeholder="Items..." value={description} onChange={e => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  )
}
function PackingList({ items, deleteItem, toggleItem }) {
  return (
    <div className='list'>
      <ul>
        {items.map((item, i) => <Item item={item} deleteItem={deleteItem} toggleItem={toggleItem} key={i} />)}
      </ul>
    </div>

  )
}

function Item({ item, deleteItem, toggleItem }) {

  function handlerOnclick() {
    deleteItem(item.id)
  }


  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => { toggleItem(item.id) }}></input>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>

        {item.quantity} {item.description}

      </span>
      <button onClick={handlerOnclick}>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className='stats'>
      <em>

        you have X item on your list, adn you already packed x

      </em>
    </footer>
  )
}

export default App
