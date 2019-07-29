// TODO
var groceryItems = ['Cucumber', 'Prosciutto', 'Hummus'];
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={groceryItems}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => (
      <GroceryListItem name={item}/>
    ))}
  </ul>
);

var GroceryListItem = (props) => (
  <li> {props.name} </li>
);





ReactDOM.render(<App />, document.getElementById("app"));
