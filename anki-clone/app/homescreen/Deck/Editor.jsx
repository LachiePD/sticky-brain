import {useState} from 'react';
import SubmitButton from '@/components/SubmitButton.jsx';
const Editor = ({handleNewCard}) =>{

	const [front, setFront] = useState("");
	const [back, setBack] = useState("");

	const handleSubmit = async () =>{
		const card = {front, back};
		const response = await handleNewCard(card);
	}
	const handleChange = (e, state) =>{
		switch(state){
			case('front'):
				setFront(e.target.value);
				return;
			case('back'):
				setBack(e.target.value);
				return;
			default:
				return;
		}
	}
	return(
		<div>
		<textarea 
		placeholder={'question'}

		value={front}
		onChange={(e)=>handleChange(e, 'front')}/>

		<textarea 
		value={back}
		placeholder={"answer"}
		onChange={(e)=>handleChange(e, 'back')}/>

		<SubmitButton onClick={handleSubmit}/>
		</div>
	)
}




export default Editor;

