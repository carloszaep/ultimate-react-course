import { getMenu } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";



async function Menu() {
  const menu = await getMenu()


  return <ul>
    {menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id} />)}
  </ul>
}

export default Menu;
