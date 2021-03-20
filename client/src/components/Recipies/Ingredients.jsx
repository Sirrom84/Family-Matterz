import React, { useState, useEffect } from 'react';
import './Ingredients.scss';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Loading } from '../Loading/Loading';
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#3dd338',
    color: '#fff',
    fontSize: '12px',
    width: '50%',
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Ingredients = (props) => {
  const [isloading, setLoading] = useState(true);
  const [ingredientData, setIngredients] = useState([]);
  const [instructionData, setInstructions] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const API = process.env.REACT_APP_API_KEY,
    id = props.location.state.item.id,
    item = props.location.state.item,
    url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false${API}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIngredients(res.data.extendedIngredients);
        setInstructions(res.data.analyzedInstructions[0].steps);
        setLoading(false);
        console.log('data retreived');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isloading) {
    return <Loading />;
  }

  const onCheckHandler = (item, index) => {
    const updateIngredients = [...ingredientData];
    const SelectedItem = updateIngredients[index];
    Object.assign(SelectedItem, {
      isChecked: SelectedItem.isChecked === true ? false : true,
    });
    setIngredients(updateIngredients);
  };

  const onAddHandler = () => {
    const checkedIngredients = ingredientData.filter(
      (item) => item.isChecked === true
    );
    if (checkedIngredients) {
      axios
        .post('http://localhost:9000/groceries/ingredients', checkedIngredients)
        .then(() => {
          console.log('Items added to Grocery List');
        })
        .catch((err) => {
          console.log('Error Adding ingredients to List', err);
        });
      handleClick();
    }
  };

  const ingredientList = ingredientData.map((item, index) => {
    return (
      <li
        className='item'
        key={index}
        onClick={() => onCheckHandler(item, index)}
      >
        <span className='span'>
          {item.isChecked ? (
            <BsCheckCircle className='buttonCheck' />
          ) : (
            <BsCircle />
          )}
        </span>
        {item.originalString}
      </li>
    );
  });

  const instructions = instructionData.map((item, index) => {
    return (
      <li className='item' key={index}>
        {item.step}
      </li>
    );
  });

  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className='grid-container'>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          The ingredients have sucessfully been added to you list!
        </Alert>
      </Snackbar>
      <section className='title'>
        <img src={item.image} alt={item.title} />
        <h1>{item.title}</h1>
        <hr />
      </section>
      <section className='ingredients'>
        <h3>Ingredients</h3>
        <ul>{ingredientList}</ul>
        <Button
          variant='contained'
          className={classes.button}
          onClick={onAddHandler}
        >
          Add To Grocery Cart
        </Button>
      </section>
      <section className='instructions'>
        <h3>Instructions</h3>
        <ol>{instructions}</ol>
      </section>
    </div>
  );
};
