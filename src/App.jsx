import React, { useState } from 'react';

import {v4 as uuidv4} from "uuid";

import {Search} from './components/SearchBar';
import {NotesList} from './components/NotesList';

const App = () => {
	const allNotes = [
		{
			id: uuidv4(),
			text: "Hi there, I am a example of note in english",
			date: "20/04/2023"
		},
		{
			id: uuidv4(),
			text: "Hola, soy un ejemplo de nota en español",
			date: "21/04/2023"
		},
		{
			id: uuidv4(),
			text: "Ciao, sono un esempio di nota in italiano",
			date: "23/04/2023"
		}
	]
	const [notes, setNotes] = useState(allNotes.map(note => note));
	const [searchText, setSearchText] = useState('');

	const addNote = (text) => {
		nextUUID = uuidv4();
		const date = new Date();
		const newNote = {
			id: nextUUID,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className='container'>
			<br /><br />
			<Search handleSearchNote={setSearchText} />
			<NotesList
				notes={notes.filter(note => note.text.toLowerCase().includes(searchText))}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
		</div>
	);
};

export default App;
