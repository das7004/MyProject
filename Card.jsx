import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 150 ,maxHeight:200}} >
      <CardMedia
        component="img"
        height="100"
        image="https://picsum.photos/seed/picsum/100/200"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="" component="div">
          Mountain
        </Typography>
        <Typography variant="" color="text.secondary">
        A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard;
