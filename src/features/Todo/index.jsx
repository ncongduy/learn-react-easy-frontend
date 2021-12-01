import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
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

	const [todoList, setTodoList] = useState(initTodoList);
	const [todoStatus, setTodoStatus] = useState('all');

	useEffect(() => console.log(todoStatus, todoListRender));

	function handleTodoClick(index, status) {
		// clone current array to the new one
		const newTodoList = [...todoList];

		// change value
		newTodoList[index] = {
			...newTodoList[index],
			status: status === 'new' ? 'completed' : 'new',
		};

		// update value todoList
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

	const todoListRender = todoList.filter((todo) => {
		return todoStatus === 'all' || todoStatus === todo.status;
	});

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
