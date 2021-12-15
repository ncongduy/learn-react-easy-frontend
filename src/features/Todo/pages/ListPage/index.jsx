import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

const initTodoList = [
  {
    id: 1,
    title: 'eat',
    status: 'completed',
  },
  {
    id: 2,
    title: 'sleep',
    status: 'new',
  },
  {
    id: 3,
    title: 'code',
    status: 'new',
  },
];

function ListPage(props) {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [todoStatus, setTodoStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  // useEffect(() =>
  //   console.log('location: ', location, 'history: ', history, 'match: ', match)
  // );

  useEffect(() => {
    const params = queryString.parse(location.search);
    setTodoStatus(params.status || 'all');
  }, [location.search]);

  function handleTodoClick(id, status) {
    const newTodoList = [...todoList];

    newTodoList.forEach((todo) => {
      if (todo.id === id) {
        todo.status = status === 'new' ? 'completed' : 'new';
      }
    });

    setTodoList(newTodoList);
  }

  function handleShowAllClick() {
    // setTodoStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  function handleCompletedClick() {
    // setTodoStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  function handleShowNewClick() {
    // setTodoStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  const todoListRender = useMemo(
    () =>
      todoList.filter(
        (todo) => todoStatus === 'all' || todoStatus === todo.status
      ),
    [todoList, todoStatus]
  );

  function handleTodoFormSubmit(values) {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={todoListRender} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
