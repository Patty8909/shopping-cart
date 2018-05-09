import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showProducts } from '../actions'


class App extends Component {

  componentWillMount() {
    this.props.showProducts()
  }

  renderUsersList() {
    return this.props.users.map( (user) =>{ 
      return (
        <div>
          <li key={user.id}>{user.title} </li>
          <button>Agregar</button>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Productos</h2>
        <ul>
          {this.renderUsersList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}

export default connect(mapStateToProps, {showProducts})(App)
