import React from 'react';
import {fullName} from "./user.utils.ts";

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
