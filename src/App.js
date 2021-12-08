import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Route } from 'react-router';

function App() {
  return (
    <div>
      <h2>Header</h2>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      <h2>Footer</h2>
    </div>
  );
}

export default App;
