import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
	todoList: PropTypes.array,
	onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
	todoList: [],
	onTodoClick: null,
};

function TodoList(props) {
	const { todoList, onTodoClick } = props;

	function handleClick(id, status) {
		if (!onTodoClick) return;

		onTodoClick(id, status);
	}

	return (
		<ul className='todo-list'>
			{todoList.map((todo) => (
				<li
					key={todo.id}
					className={classnames({
						completed: todo.status === 'completed',
					})}
					onClick={() => handleClick(todo.id, todo.status)}
				>
					{todo.title}
				</li>
			))}
		</ul>
	);
}

export default TodoList;
