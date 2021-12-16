import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onSubmit: null,
};

function RegisterForm(props) {
  const { onSubmit } = props;
  const classes = useStyles();

  const schema = yup
    .object()
    .shape({
      title: yup
        .string()
        .required('Please enter title!')
        .min(5, 'Title is more than 5 characters!'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  function handleSubmit(values) {
    if (!onSubmit) return;

    onSubmit(values);
    form.reset();
  }

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon></LockOutlinedIcon>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create an account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullname" label="Full name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField name="retypePassword" label="Retype password" form={form} />

        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
