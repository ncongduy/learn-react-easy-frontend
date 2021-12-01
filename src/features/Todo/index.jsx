import React, { useState } from 'react';
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

	return (
		<div>
			<h3>Todo List</h3>
			<TodoList todoList={todoList} onTodoClick={handleTodoClick} />
		</div>
	);
}

export default TodoFeature;
