import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CardActions from '@mui/material/CardActions';
import { NavLink } from 'react-router-dom';
import s from '../../styles/roomcard.module.css';

/**
 * @name RoomCard
 * @description displays single room card component
 * @return component
 */
function RoomCard({ roomType }) {
  return (
    <Card className={s.root}>
      <CardHeader
        title={roomType.name}
      />
      <CardMedia
        component="img"
        className={s.media}
        image={roomType.image_url}
        alt={roomType.name}
      />
      <CardContent className={s.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          {roomType.description}
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p" className={s.price}>
          Price: $
          {parseFloat(roomType.rate).toFixed(2).toString()}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {(roomType.active ? 'Active' : 'Inactive')}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <NavLink to={`/room-types/edit/${roomType.id}`}>
          <EditIcon aria-label="edit room type">
            {/* <Edit /> */}
          </EditIcon>
        </NavLink>
      </CardActions>
    </Card>
  );
}

export default RoomCard;
