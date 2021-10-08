import classes from './App.module.css';
import Card from '../Card/Card';
import React from 'react'
 

function App() {
  return (
    <div className={classes.app}>
      <Card className={classes.card}/>
    </div>
  );
}

export default App;
