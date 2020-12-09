import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ toDoThing }) => (
	<ul>
		<li><Item toDoThing={toDoThing} /></li>
		<li>{'Прочитать книгу'}</li>
		<li>{'Посмотреть фильм '}</li>
	</ul>
);

export default ItemList; 