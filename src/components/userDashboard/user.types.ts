export type Gender = 'M' | 'F';

export type JobTitle = 'Devops' |  'Developer' | 'UX Designer' | 'Manager' | 'Test Engineer' | 'Product Owner'
  | 'Scrum Master' | 'QA Engineer' | 'Data Analyst' | 'Data Scientist' | 'Business Analyst' | 'Analyst' |'Support' ;

interface UserTypes {
  userId: string | number;
  firstname?: string;
  lastname: string;
  email: string;
  phone?: string;
  isAdmin: boolean;
  avatar?: string
  gender?: Gender;
  jobTitle:JobTitle;
}

export default UserTypes;
