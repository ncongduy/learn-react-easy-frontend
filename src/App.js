import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div>
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>

      <h2>Header</h2>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        {/* <Route path="/" component={TodoFeature} /> */}
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
