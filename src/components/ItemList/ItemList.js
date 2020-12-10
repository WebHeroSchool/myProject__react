import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ thingToDo }) => (
	<ul>
		<li><Item task={thingToDo.task1} /></li>
		<li><Item task={thingToDo.task2} /></li>
		<li><Item task={thingToDo.task3} /></li>
	</ul>
);

export default ItemList;