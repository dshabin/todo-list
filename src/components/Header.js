import React from 'react';

//export default
/*
class Header extends React.Component{
        render(){
          return(
                  <p>I Have {this.props.number} items</p>
          );
        }
}
*/

// functional Component
const Header =  ({number}) => {
          return(
                  <p>I Have {number} items</p>
          );
}

export default Header;
