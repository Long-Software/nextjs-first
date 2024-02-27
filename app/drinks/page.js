import { resolve } from 'styled-jsx/css'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const response = await fetch(url)
  const data = await response.json()
  return data
}
const Drink = async () => {
  const data = await fetchDrinks()
  return <div>Drink</div>
}

export default Drink
