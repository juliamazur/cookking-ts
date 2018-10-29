import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RecipeLibrary from './components/RecipeLibrary';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RecipeLibrary name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
