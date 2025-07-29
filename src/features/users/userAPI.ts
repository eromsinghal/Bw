import { User } from './types';

export async function fetchUsersAPI(): Promise<User[]> {

  //const API_URL = import.meta.env.VITE_API_URL;
  const API_URL = process.env.REACT_APP_API_URL;



  const res = await fetch(`${API_URL}`);

  const data = await res.json();
  return data.map((u: any) => ({
    id: u.id,
    name: u.name,
    email: u.email,
  }));
}
