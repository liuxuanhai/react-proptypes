import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App() {
  return (
    <Greeting person={{ name: "Some one", location: "Somewhere" }} />
  );
}

export default App;

class Greeting extends React.Component {
  render() {
    return <p>Hello {this.props.person.name} in {this.props.person.location}</p>
  }
}

Greeting.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string
  })
}

Greeting.defaultProps = {
  person: {
    name: "Unknown User",
    location: "Nowhere"
  }
}