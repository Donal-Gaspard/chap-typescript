import React from 'react';
import UserTypes from "./user.types.ts";
import UserCard from "./UserCard.tsx";

interface Props {
users:  UserTypes[]
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
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {
        users.map((user) => (
          <UserCard user={user}/>
        ))
      }
    </div>
  );
};

export default Users;
