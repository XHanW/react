import React from 'react'
import ReactDOM from 'react-dom'

class MyTitle extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <MyTitle title="标题"/>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))