import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import News from '../../components/News';
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
      <Typography variant="h1">Home page</Typography>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non
        nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
        ligula. Nulla quis lorem ut libero malesuada feugiat.
      </p>
      <Box>
        <h2>
          texto secundário
        </h2>
      </Box>
      <Grid item xs={6} className={classes.red}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non
        nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
        ligula. Nulla quis lorem ut libero malesuada feugiat.
      </p>
      </Grid>
      <Grid item xs={6} className={classes.blue}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non
        nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
        ligula. Nulla quis lorem ut libero malesuada feugiat.
      </p>
      </Grid>
      <Grid item xs={12}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non
        nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
        ligula. Nulla quis lorem ut libero malesuada feugiat.
      </p>
      </Grid>
      </Grid>
      <News />
    </Grid>
  );
}
