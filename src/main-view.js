import React, { Component } from 'react'

class MainView extends Component {
  constructor(props) {
    super(props)
    this.scrollToNode = this.scrollToNode.bind(this);
  }

  scrollToNode(node) {
    node.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (<div>
      HELLO SWEETIFY
    </div>)
  }
}

export default MainView;
