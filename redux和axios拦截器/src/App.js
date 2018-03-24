import React from 'react';
import {connect} from 'react-redux';
import {addGUN,removeGUN,setGun} from './index.redux';

//传4个参数，1.需要哪些数据 2.方法属性 3.

// const mapStatetoProps=(state)=>{
//     return {num:state}
// }
//
// const actionCreators={addGUN,removeGUN,setGun}

// App = connect(
//     mapStatetoProps,
//     actionCreators,
// )(App);

@connect(
    state=>({num:state}),
    {addGUN,removeGUN,setGun},
)

class App extends  React.Component{
    // constructor(props){
    //     super(props);
    // }
  render(){
      return(
          <div>
           现在有机枪{this.props.num}把
              <br/>
              <hr/>

              <button onClick={this.props.addGUN}>加一把机枪</button>

              <button onClick={this.props.removeGUN} >减一把机枪</button>

              <button onClick={this.props.setGun}>等2秒给一把机枪</button>

          </div>
      )
  }
}

export default App;