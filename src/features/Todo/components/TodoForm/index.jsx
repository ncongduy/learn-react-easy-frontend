import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-controls/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;

  const form = useForm({
    defaultValues: {
      title: '',
    },
  });

  function handleSubmit(values) {
    console.log('Todo form: ', values);
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
