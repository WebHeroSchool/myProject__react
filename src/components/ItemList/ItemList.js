import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ thingToDo }) => (
	<ul>
		{thingToDo.map(item => <li key={item.task}><Item task={item.task} /></li>)}
	</ul>
);

export default ItemList;