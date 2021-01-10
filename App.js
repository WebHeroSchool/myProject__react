import React from 'react';

const ItemList = () => (<ul>
  <li>html&css</li>
  <li>git</li>
  <li>Java Script</li>
</ul>);

const App = () => (<div>
  <h1>What modules have you already studied?</h1>
  <ItemList />
</div>);

export default App;