import UserTypes from "../components/userDashboard/user.types.ts";

const fakeUsers: UserTypes[] = [
  {
    userId: 1,
    firstname: 'Ludvig',
    lastname: 'Bjørkum',
    email: 'ludvig.bjorkum@example.com',
    phone: '123-456-7890',
    isAdmin: true,
    avatar: 'https://randomuser.me/api/portraits/med/men/32.jpg',
    gender: 'M',
    jobTitle: 'Developer'
  },
  {
    userId: 2,
    firstname: 'jose',
    lastname: 'pena',
    email: 'jose.pena@example.com',
    avatar: 'https://randomuser.me/api/portraits/med/women/26.jpg',
    isAdmin: false,
    gender: 'F',
    jobTitle: 'Devops'
  },
  {
    userId: 3,
    firstname: 'mille',
    lastname: 'sorensen',
    email: 'mille.sorensen@example.com',
    phone: '123-456-7890',
    isAdmin: true,
    avatar: 'https://randomuser.me/api/portraits/med/men/33.jpg',
    gender: 'M',
    jobTitle: 'UX Designer'
  },
  {
    userId: 4,
    firstname: 'marco',
    lastname: 'vega',
    email: 'marco.vega@example.com',
    phone: '123-456-7890',
    isAdmin: false,
    gender: 'M',
    jobTitle: 'Manager'
  },
  {
    userId: 5,
    firstname: 'sulene',
    lastname: 'cavalcanti',
    email: 'sulene.cavalcanti@example.com',
    phone: '123-456-7890',
    isAdmin: true,
    avatar: 'https://randomuser.me/api/portraits/med/women/4.jpg',
    gender: 'F',
    jobTitle: 'Test Engineer'
  },
  {
    userId: 6,
    firstname: 'daryl',
    lastname: 'chapman',
    email: 'daryl.chapman@example.com',
    phone: '123-456-7890',
    isAdmin: false,
    avatar: 'https://randomuser.me/api/portraits/med/men/36.jpg',
    gender: 'M',
    jobTitle: 'Product Owner'
  },
  ];

export default  fakeUsers;


