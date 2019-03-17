import React from 'react';

import '../../styles/notes.styl';

const Notes = ({notes}) => {
    const notesList = notes.map(note => {
        return (
            <div className="note" key={note.title}>
                <span className="note-title">{note.title}</span>
                <div className="note-content">{note.content}</div>
            </div>
        )
    })
    return (
        <div className="notes-list"> 
            {notesList}
        </div>
    )
}



export default Notes;