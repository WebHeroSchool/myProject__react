import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

// const toDoThings = ({
// 	lesson: 'Сдать урок pops',
// 	book: 'Прочитать книгу',
// 	movie: 'Посмотреть фильм',
// });
const toDoThing = 'Сдать урок pops';

const App = () => (
  <div>
    <h1>todos</h1>
    <InputItem />
    <ItemList toDoThing = {toDoThing} />
    <Footer count = {3} />
	</div>
);

export default App; 