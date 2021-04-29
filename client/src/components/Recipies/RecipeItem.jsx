import React from 'react';
import './RecipesItem.scss';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BottomNav from '../BottomNav/BottomNav';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#65aa65',
    color: '#fff',
    fontSize: '12px',
  },
}));

// Creates individual Recipe Items
export const RecipeItem = (props) => {
  const classes = useStyles();

  return (
    <div className='recipe-item'>
      <img
        src={props.item.image}
        thumbnail='true'
        width='165px'
        height='auto'
        alt=''
      />
      <p>{props.item.title}</p>
      <Link
        to={{
          pathname: `${props.location.pathname}/ingredients`,
          state: {
            item: props.item,
          },
        }}
      >
        <Button className={classes.button} variant='contained'>
          Show info
        </Button>
      </Link>
      <BottomNav />
    </div>
  );
};
