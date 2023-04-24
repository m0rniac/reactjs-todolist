import React, { useState } from 'react';

export const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 360;

	/* [Corpus; HANDLERS] */
	const handleChange = ev => characterLimit - ev.target.value.length >= 0 ? setNoteText(ev.target.value) : null
	const handleSaveClick = () => noteText.trim().length > 0 ? handleAddNote(noteText) & setNoteText('') : null

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Add a note by clicking here...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} / {characterLimit}
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};
