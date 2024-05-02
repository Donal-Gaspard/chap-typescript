export type Gender = 'M' | 'F';

interface UserType {
  userId: string | number;
  firstname?: string;
  lastname: string;
  email: string;
  phone?: string;
  isAdmin: boolean;
  avatar?: string
  gender?: Gender;
}

export default UserType;
