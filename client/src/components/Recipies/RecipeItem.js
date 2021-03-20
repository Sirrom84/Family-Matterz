import React from 'react';
import './RecipesItem.scss';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    <div key={props.index} onClick={props.onClick} className='recipe-item'>
      <img src={props.item.image} thumbnail width='165px' height='auto' />
      <h4>{props.item.title}</h4>
      <Button className={classes.button} variant='contained'>
        Show info
      </Button>
    </div>
  );
};
