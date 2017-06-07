import React from 'react';



const p_styling = {
  display :'inline'
};


export default
class Card extends React.Component{

      render(){
        const items = this.props.items.map((elem,idx) => {
          return (
            <div key = {idx}>
            <p style = {p_styling}> {elem.name} , {elem.price} </p>
            <input
              type="button"
              value="Delete"
              onClick={this.props.deleteHandler} id={idx}
            />
            </div>
          );
        })
        return(
          <div>
            {items}
          </div>
        )
      }

}
