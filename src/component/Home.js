import React, { useState } from 'react'
import Button from './Button';
import classes from './home.module.css';
// import Button from '.Button'

function Home() {


  const [first, setFirst] = useState('')
 



    const buttons = ["C", "9", "/", "8", "7", "6", "*", "5", "4", "3", "+", "2", "1", "0", "-", ".", "Del", "="]

 const findval=()=>{
   let result=Function("return " +first)();
   setFirst(result.toString())

 }



    const handler= (arg)=>{
      console.log(arg)
      if(first ==='Infinity'){
        setFirst('');
        return
      }
       if(arg ==='C') setFirst('');
       else if(arg == '=') findval();
       else if(arg == 'Del'){
        const n=first.length;
        if(n >0)
        setFirst(first.slice(0, n-1))
       }
       else setFirst(first.concat(arg))

    }
  return (
    <div className={classes.home}>
        <div className={classes.inner}>
            <div className={classes.result}>
                <div className={classes.resbox}>
                  {first}
                </div>
            </div>
      
        <div className={classes.btns}>
          {buttons.map((element, index)=>{return <Button handler={handler} value={element} key={index}/>})}
        </div> 
        </div>
        
    </div>
  )
}

export default Home
