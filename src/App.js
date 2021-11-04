import React from 'react';
import List from './List';
import Details from './Details';

class App extends  React.Component {
  constructor(props) {
    super(props);
    this.state =  { selectedUserId: ''} ;
  }

  onUserSelected = (selectedUserId) => {
    this.setState({ selectedUserId });
  };

  render() {
    return (
      <div className="container">
        <List onUserSelected={this.onUserSelected} />
        <Details selectedUser={this.state.selectedUserId} />
      </div>
    );
  }
}
export default App;
