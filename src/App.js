import React, { Component } from 'react';
import AddItem from './components/addItem';
//import Header from './components/Header' //as class
import Header from './components/Header'

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }
  render() {
    const list_to_dsplay = this.state.items.map(elem => {
      return (<p key={elem.name}> {elem.name} , {elem.price} </p>);
    })

    return (
      <div className="App">
      <Header
          number = {this.state.items.length}
      />
        <AddItem
          addItemFunc={(data)=>{
            const {items} = this.state;
            // const items = this.state.items;
            items.push(data);
            this.setState({items});
          }}
        />
        <div>
          {list_to_dsplay}
        </div>
      </div>
    );
  }
}

export default App;
