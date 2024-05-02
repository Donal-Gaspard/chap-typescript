import React from 'react';

const fullName = (firstname?: string , lastname?: string | null ) => {
  let firstnameCapitalize;
  let lastnameCapitalize;
  if (firstname) {
     firstnameCapitalize =  firstname.charAt(0).toUpperCase() + firstname.slice(1);
  }
  if (lastname) {
      lastnameCapitalize =  lastname.charAt(0).toUpperCase() + lastname.slice(1);
  }

    return `${firstnameCapitalize} ${lastnameCapitalize}`;
}

interface Props{
    userId: string | number;
    firstname?: string;
    lastname?: string;
    email: string;
    phone?: string;
    isAdmin: boolean;
}

const User: React.FC<Props> = ({userId,firstname, lastname,email,phone, isAdmin}) => {
    return (
        <>
            <h1>Contact</h1>
            <p>{userId}</p>
            <p>{fullName(firstname,lastname)}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{isAdmin}</p>
        </>
    );
};

export default User;
