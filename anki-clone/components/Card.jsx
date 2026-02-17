import CreateUserForm from '@/components/CreateUserForm.jsx';


const Card = ({header, form}) =>{

	
return(
	<div className={
		'block  bg-gray-50 h-max w-full rounded-xl p-7'
	}>


	<h1 className={"text-2xl "}>
	{header}
	</h1>
	{form}


	</div>
);

}

export default Card;
