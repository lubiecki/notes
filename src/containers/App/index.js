import React, { Component} from 'react';

import Notes from '../../components/Notes'

import '../../styles/app.styl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [
        {title: 'Business ideas 2019', content: "blablalba"},
        {title: 'something', content: "tralalala"}
      ]
    }
  }

  render() {
    return(
      <div className="wrapper"> 
        <Notes notes={this.state.items}/>
      </div>
    )
  }
}



export default App;