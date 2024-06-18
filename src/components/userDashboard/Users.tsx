import React from 'react';
import UserTypes from "./user.types.ts";
import UserCard from "./UserCard.tsx";

interface Props {
users:  UserTypes[]
}

const Users : React.FC<Props>= ({users}) => {

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
