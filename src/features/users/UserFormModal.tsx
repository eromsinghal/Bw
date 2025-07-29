import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { User } from './types';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

interface UserFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<User, 'id'>) => void;
  defaultValues?: Partial<User>;
}

export default function UserFormModal({
  open,
  onClose,
  onSubmit,
  defaultValues = {},
}: UserFormModalProps) {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<Omit<User, 'id'>>({
    defaultValues: {
      name: defaultValues.name || '',
      email: defaultValues.email || '',
    },
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    reset({
      name: defaultValues.name || '',
      email: defaultValues.email || '',
    });
  }, [defaultValues, reset, open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{defaultValues.id ? 'Edit User' : 'Add User'}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {defaultValues.id ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}