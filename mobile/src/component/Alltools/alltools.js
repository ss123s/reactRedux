import  React ,{PureComponent } from 'react'
export default  function alltools(Comp){
    return class Wraps extends PureComponent{
            constructor(props){
                super(props)
                this.state={}
                this.handleChange = this.handleChange.bind(this)
            }
        handleChange(key,val){
                console.log(key,val)
            this.setState({
                [key]:val
            })
        }

            render(){
                return <Comp    handleChange={this.handleChange}   state={this.state}    {...this.props}></Comp>
            }
    }
}