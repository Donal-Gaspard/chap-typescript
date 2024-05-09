import React from "react";
import {Chip, Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Users from "./Users.tsx";
import {Group} from "@mui/icons-material";

import UserTypes from "./user.types";

interface Props {
  users: UserTypes[];
}

const UserDashboard : React.FC<Props>= ({users}) => {
  return (
    <Container maxWidth="lg">
      <Box textAlign={'center'} mt={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
        <Typography sx={{
          fontSize: { xs: '1rem', sm: '1.5rem' }
        }}>Users Dashboard</Typography>
        <Chip icon={<Group />} label={`Users ${users.length}`} color="primary" />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
        <Users users={users}/>
      </Box>
    </Container>
  );
};

export default UserDashboard;
