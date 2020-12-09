import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const toDoThings = ({
	lesson: 'Сдать урок pops',
	book: 'Прочитать книгу',
	movie: 'Посмотреть фильм',
});

const App = () => (
  <div>
    <h1>todos</h1>
    <InputItem />
    <ItemList toDoThings = {toDoThings} />
    <Footer count = {3} />
</div>);

export default App;