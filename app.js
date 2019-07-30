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
    {props.items.map(item =>
      <GroceryListItem name={item}/>
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.name}</li>
    );
  }
}




ReactDOM.render(<App />, document.getElementById("app"));
