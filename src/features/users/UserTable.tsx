import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from './types';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  loading: boolean;
}

export default function UserTable({ users, onEdit, onDelete, loading }: UserTableProps) {
 

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => onEdit(params.row)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => onDelete(params.row.id)}
          showInMenu
        />,
      ],
    },
  ];

  return (
    <div style={{ width: '100%', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001' }}>
     

      <DataGrid
        rows={[...users].sort((a, b) => a.id - b.id)}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: 8 },
          },
        }}
        pageSizeOptions={[8]}
        pagination
        loading={loading}
        disableRowSelectionOnClick
      />
    </div>
  );
}