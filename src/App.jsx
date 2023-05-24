import './App.css'

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];


export default function App() {

  const fruitList = fruits.map((fruit) => {
    return <li>{fruit}</li>;  // what do we need to add?
  });

  console.log(fruitList)

  return (
    <ul>
      {fruitList}
    </ul>)
}
