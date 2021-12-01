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

	function handleClick(index, status) {
		if (!onTodoClick) return;

		onTodoClick(index, status);
	}

	return (
		<ul className='todo-list'>
			{todoList.map((todo, index) => (
				<li
					key={todo.id}
					className={classnames({
						completed: todo.status === 'completed',
					})}
					onClick={() => handleClick(index, todo.status)}
				>
					{todo.title}
				</li>
			))}
		</ul>
	);
}

export default TodoList;
