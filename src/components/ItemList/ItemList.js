import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ toDoThings }) => (
	<ul>
		<li><Item toDoThings={toDoThings} /></li>
		<li>{toDoThings.book}</li>
		<li>{toDoThings.movie}</li>
	</ul>
);

export default ItemList; 