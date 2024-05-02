import React from 'react';
import UserType from "./userType.ts";
import User from "./User.tsx";

interface Props {
users:  UserType[]
}

const Users : React.FC<Props>= ({users}) => {

  // const init = async ()=>{
  //   const users =await axios.get('https://randomuser.me/api/')
  //   console.log('xxusers', users.data.results)
  // }

  // useEffect(() => {
  //   init().catch((e) => console.log('error', e)) ;
  // }, []);

  return (
    <div>
      {
        users.map((user) => (
          <User
            key={user.userId}
            userId={user.userId}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            phone={user.phone}
            isAdmin={user.isAdmin}
            />
        ))
      }
    </div>
  );
};

export default Users;
