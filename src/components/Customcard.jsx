import {Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import lizardImage from '../assets/image-84984-800.jpg'; 
import snakeImage from '../assets/snakes-the-ecosystem-banner.jpg';

export const Customcard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Card style={{marginTop:'7%',margin: '7% 10px'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="snake"
        height="170"
        image={snakeImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Snake 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Snakes are elongated, limbless reptiles of the suborder Serpentes. Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card style={{marginTop:'7%',margin: '7% 10px'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="170"
        image={lizardImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    
  )
}


