import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { CardMedia, IconButton, Typography,} from "@mui/material";
import { Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';

const user = {
  userId: 1,
  firstname: 'Ludvig',
  lastname: 'Bjørkum',
  email: 'ludvig.bjorkum@example.com',
  phone: '123-456-7890',
  isAdmin: true,
  avatar: 'https://randomuser.me/api/portraits/med/men/32.jpg',
  gender: 'M',
}
const UserCard = () => {
  const cardStyle = {
    background: user.gender === 'M' ? 'linear-gradient(135deg, #03a9f4, #fff)'
      : 'linear-gradient(135deg, #ab003c, #fff)',
    marginBottom: '20px',
  };

  return (
    <Card sx={cardStyle}>
      {user.avatar && (
        <CardMedia
          component="img"
          height="140"
          image={user.avatar}
          alt="User avatar"
          sx={{ width: 100, height: 100, borderRadius: '50%', margin: 'auto' }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.firstname} {user.lastname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <IconButton aria-label="email">
            <EmailIcon />
          </IconButton>
          {user.email}
        </Typography>
        {user.phone && (
          <Typography variant="body2" color="text.secondary">
            <IconButton aria-label="phone">
              <PhoneIcon />
            </IconButton>
            {user.phone}
          </Typography>
        )}
        <Typography variant="body1">
          {user.isAdmin ? 'Admin' : 'User'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
