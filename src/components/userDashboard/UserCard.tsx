import React from "react";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {Avatar, CardMedia, IconButton, Typography,} from "@mui/material";
import { Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';
import UserTypes from "./user.types";
import {getInitial} from "./user.utils";

interface  Props {
  user: UserTypes
}

const UserCard: React.FC<Props> = ({user}) => {
  const cardStyle = {
    m:3,
    width: 345,
    background: user.gender === 'M' ? 'linear-gradient(135deg, #03a9f4, #fff)'
      : 'linear-gradient(135deg, #ab003c, #fff)',
    marginBottom: '20px',
  };

  return (
    <Card sx={cardStyle}>
      {
        user.avatar ? (
        <CardMedia
          component="img"
          height="140"
          image={user.avatar}
          alt="User avatar"
          sx={{ width: 100, height: 100, borderRadius: '50%', margin: 'auto' }}
        />
      ) :
          <Avatar sx={{ width: 100, height: 100, margin: 'auto', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '1.4rem', fontWeight: '500' }}>
              {getInitial(user.lastname, user.firstname)}
          </Avatar>
      }
      <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{textTransform: 'capitalize'}}>
          {user.firstname} {user.lastname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <IconButton aria-label="email">
            <EmailIcon />
          </IconButton>
          {user.email}
        </Typography>
        <Typography variant="body1">
           {user.jobTitle}
        </Typography>
        {user.phone && (
          <Typography variant="body2" color="text.secondary">
            <IconButton aria-label="phone">
              <PhoneIcon />
            </IconButton>
            {user.phone}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UserCard;
