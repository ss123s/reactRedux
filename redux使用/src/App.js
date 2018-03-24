import React from 'react';

class App extends  React.Component{
    // constructor(props){
    //     super(props);
    // }
  render(){
      const store = this.props.store;
      const num = store.getState()
      return(
          <div>
           现在有机枪{num}把
              <br/>
              <hr/>

              <button onClick={()=>store.dispatch(this.props.addGUN())}>加一把机枪</button>

              <button onClick={()=>store.dispatch(this.props.removeGUN())} >减一把机枪</button>

              <button onClick={()=>store.dispatch(this.props.setGun())}>等2秒给一把机枪</button>

          </div>
      )
  }
}
export default App;