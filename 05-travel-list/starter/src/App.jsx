import { useState } from "react";



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Chager", quantity: 12, packed: false },
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

  function handlerClearList() {
    setItems([])
  }

  return (

    <div className='app'>
      <Logo />
      <Form addItems={handlerSetItems} />
      <PackingList items={items} deleteItem={handlerDeleteItem} toggleItem={handlerToggleItem} clearList={handlerClearList} />
      <Stats items={items} />
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
function PackingList({ items, deleteItem, toggleItem, clearList }) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems;

  if (sortBy === 'input') sortedItems = items
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))


  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => <Item item={item} deleteItem={deleteItem} toggleItem={toggleItem} key={item.id} />)}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
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

function Stats({ items }) {
  if (!items.length) {
    return (<p className="stats"><em>Start adding items to your list</em></p>)
  }

  const numberOfItems = items.length
  const numberOfItemsPacked = items.filter(i => i.packed).length

  return (
    <footer className='stats'>
      <em>
        {numberOfItems === numberOfItemsPacked ?
          "You got everything Ready to go ✈️" :
          `you have ${numberOfItems} item on your list, 
        adn you already packed ${numberOfItemsPacked}`}
      </em>
    </footer>
  )
}

export default App
