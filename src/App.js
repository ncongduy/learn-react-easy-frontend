// import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
// import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';
// import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div>
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/counter" component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        {/* <Route component={NotFound} /> */}
      </Switch>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
