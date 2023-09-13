/* eslint-disable space-before-function-paren */
/* eslint-disable react/react-in-jsx-scope */
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

function Pizza({ name, price, ingredient, photoName }) {
  return (
    <li>
      <img width={300} src="https://www.allrecipes.com/thmb/_Bm6DQpYEYMj3x9VRsGuhr31Y2A=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/23181spaghetti-pizza-iSoupLovingNicole-700a1af7b7954db9b9cb63330be1d08f.jpg" alt={photoName} />
      <h3>{name}</h3>
      <p>{ingredient}</p>
      <p>{price}</p>
    </li>
  )
}

function Header() {
  return (
    <header>
      Fast React Pizza corp
    </header>
  )
}

const PIZZAS = [
  {
    name: 'Pizza Spagetti',
    ingredient: 'tomato, peperoni',
    price: 33
  },
  {
    name: 'Pizza wwi',
    ingredient: 'tomato, peperoni',
    price: 311
  },
  {
    name: 'Pizza wwwwwtti',
    ingredient: 'tomato, peperoni',
    price: 22
  }
]

function Menu() {
  return (
    <main>
      <h2>Our Menu</h2>
      <ul>
        {PIZZAS.map((pizza, index) => <Pizza key={index} name={pizza.name} ingredient={pizza.ingredient} price={pizza.price} />)}

      </ul>
      <button>Order now</button>
    </main>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 19
  const closeHour = 22
  const isOpen = hour >= openHour && hour < closeHour


  return (
    <div>{new Date().toLocaleTimeString()}. {isOpen ? 'We are currently open' : 'We are close'}</div>
  )
}

export default App
