import React from 'react';
import Card from '@mui/core/Card';
import CardHeader from '@mui/core/CardHeader';
import CardMedia from '@mui/core/CardMedia';
import CardContent from '@mui/core/CardContent';
import Typography from '@mui/core/Typography';
import IconButton from '@mui/core/IconButton';
import { Edit } from '@mui/icons';
import CardActions from '@mui/material/CardActions';
import { NavLink } from 'react-router-dom';
import Constants from '../../utils/constants';
import s from '../../styles/roomcard.module.css';

/**
 * @name RoomCard
 * @description displays single room card component
 * @return component
 */
const RoomCard = ({ roomType }) => (
  <Card className={s.root}>
    <CardHeader
      title={roomType.name}
    />
    <CardMedia
      className={s.media}
      image={Constants.KING_DOUBLE}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {roomType.description}
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" component="p">
        Price: $
        {parseFloat(roomType.rate).toFixed(2).toString()}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {(roomType.active ? 'Active' : 'Inactive')}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <NavLink to={`/room-types/edit/${roomType.id}`}>
        <IconButton aria-label="edit room type">
          <Edit />
        </IconButton>
      </NavLink>
    </CardActions>
  </Card>
);
export default RoomCard;
