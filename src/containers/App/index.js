import React, { Component} from 'react';

import Notes from '../../components/Notes'
import AddNote from '../../containers/AddNote'

import '../../styles/app.styl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {title: 'Business ideas 2019', content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", added: "17.03.2019, 11:36:42", id: 1},
        {title: 'something', content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", added: "04.06.2018, 12:00:00", id: 2}
      ]
    }
  }
  addNote = (note) => {
    note.added = new Date().toLocaleString()
    let items = [...this.state.items, note]
    this.setState({
      items: items
    })
  }
  removeNote = (id) => {
    let items = this.state.items.filter(note => {
      return note.id !== id
    })
    this.setState({
      items: items
    })
  }
  render() {
    return(
      <div className="wrapper"> 
        <Notes removeNote={this.removeNote} notes={this.state.items}/>
        <AddNote addNote={this.addNote}/>
      </div>
    )
  }
}



export default App;
