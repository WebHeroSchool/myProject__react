import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

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
		<div className="wrap">
	    <h1 className="wrap__title">Важные дела:</h1>
	    <InputItem />
	    <ItemList thingToDo = {thingToDo} />
	    <Footer count = {3} />
		</div>
	);
};

export default App;