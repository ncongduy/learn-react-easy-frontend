import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Route } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>

      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>

      <h2>Header</h2>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      <h2>Footer</h2>
    </div>
  );
}

export default App;
