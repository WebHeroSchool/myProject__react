import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const thingToDo = {
	task1: 'Сдать урок props',
	task2: 'Прочитать книгу',
	task3: 'Посмотреть фильм',
};

const App = () => (
	<div>
    <h1>todos</h1>
    <InputItem />
    <ItemList thingToDo = {thingToDo} />
    <Footer count = {3} />
	</div>
);

export default App;