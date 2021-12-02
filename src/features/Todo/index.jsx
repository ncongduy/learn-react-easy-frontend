import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

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

function TodoFeature(props) {
	const [todoList, setTodoList] = useState(initTodoList);
	const [todoStatus, setTodoStatus] = useState('all');

	useEffect(() => console.log(todoStatus, todoListRender));

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
		setTodoStatus('all');
	}

	function handleCompletedClick() {
		setTodoStatus('completed');
	}

	function handleShowNewClick() {
		setTodoStatus('new');
	}

	const todoListRender = todoList.filter(
		(todo) => todoStatus === 'all' || todoStatus === todo.status
	);

	return (
		<div>
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

export default TodoFeature;
