import React from 'react';
import './RecipesItem.scss';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'green',
    color: '#fff',
    fontSize: '12px',
  },
}));

export const RecipeItem = (props) => {
  const classes = useStyles();

  return (
    <div className='recipe-item'>
      <img
        src={props.item.image}
        thumbnail='true'
        width='165px'
        height='auto'
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
    </div>
  );
};
