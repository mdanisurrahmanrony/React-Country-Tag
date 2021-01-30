import React from 'react';
import './App.css';
import { countryOptions } from './docs/data';
import CustomSelect from './CustomSelect';

const styles={
  app:{
    backgroundColor:'rgba(0,0,0,0.1)',
    justifyItems:'center',
    alignItems:'center',
    display:'grid',
    height:'100vh',
    fontFamily:'Arial',
    color:'rgba(0,0,100,1)',
    gridTemplateColumns:'1fr',
    fontSize:25
  },
  select:{
    width:'100%',
    maxWidth:600
  }
}



function onChangeInput(value){
  console.log(value);
}
function App() {
  return (
    <div style={styles.app}>
      <CustomSelect isMulti={true} style={styles.select} onChange={onChangeInput} options={countryOptions} label="Select Country" />
    </div>
  );

  
}

export default App;
