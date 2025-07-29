import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUsers, addUser, editUser, deleteUser, replaceAllUsers } from '../features/users/userSlice';
import UserTable from '../features/users/UserTable';
import UserFormModal from '../features/users/UserFormModal';
import { Button, Box } from '@mui/material';
import { User } from '../features/users/types';
import Navbar from '../components/Navbar';
interface UsersProps {
  searchQuery: string;
}
export default function Users({ searchQuery }: UsersProps) {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector(state => state.users);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);


  useEffect(() => {
    console.log('Fetching users...');
    dispatch(fetchUsers());
  }, [dispatch]);

  // Debug logging
  useEffect(() => {
    console.log('Users state updated:', { users, loading });
  }, [users, loading]);

  const handleAdd = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    const updated = users.filter(user => user.id !== id);
    const reordered = updated.map((user, index) => ({
      ...user,
      id: index + 1,
    }));
    //dispatch({ type: 'users/replaceAllUsers', payload: reordered });
    dispatch(replaceAllUsers(reordered));
  };

  const handleSubmit = (data: Omit<User, 'id'>) => {
    let updatedUsers: User[];

    if (editingUser) {
      // Update the existing user and reorder IDs
      updatedUsers = users.map(user =>
        user.id === editingUser.id ? { ...editingUser, ...data } : user
      );
    } else {
      // Add new user with temporary ID and reorder after
      updatedUsers = [...users, { id: 0, ...data }];
    }

    // Reassign IDs starting from 1
    const reordered = updatedUsers.map((user, index) => ({
      ...user,
      id: index + 1,
    }));

    // Dispatch updated list
    // dispatch({ type: 'users/replaceAllUsers', payload: reordered });
    dispatch(replaceAllUsers(reordered));

    setModalOpen(false);
  };
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>

      <Box>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button variant="contained" onClick={handleAdd}>Add User</Button>
        </Box>
        <UserTable users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} loading={loading} />
        <UserFormModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
          defaultValues={editingUser || {}}
        />
      </Box>
    </>
  );
}