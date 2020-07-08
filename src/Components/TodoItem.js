import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {' '}
          {title}
          <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: 'white',
  border: 'none',
  padding: '5px 7.5px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}