import classes from './App.module.css';
import Card from '../Card/Card';
 



function App() {
  return (
    <div className={classes.app}>
      <Card className={classes.card}/>
    </div>
  );
}

export default App;
