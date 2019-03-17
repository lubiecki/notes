import React from 'react';

import '../../styles/notes.styl';

const Notes = ({notes, removeNote}) => {
    const notesList = notes.map(note => {
        return (
            <div className="note" key={note.id}>
                <span className="note-title">{note.title}</span>
                <div className="note-content">{note.content}</div>
                <span className="note-time">{note.added}</span>
                <button onClick={() => {removeNote(note.id)}} className="btn note-remove">Remove Note</button>
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