import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
	const thingToDo = [
		{
			task: 'Сдать урок по React'
		},
		{
			task: 'Прочитать книгу'
		},
		{
			task: 'Посмотреть фильм'
		}
	];
	return (
		<div>
	    <h1>todos</h1>
	    <InputItem />
	    <ItemList thingToDo = {thingToDo} />
	    <Footer count = {3} />
		</div>
	);
};

export default App;