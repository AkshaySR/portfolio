import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout";

class Index extends React.Component {

    constructor(){
        super();
        this.state = {
            title: 'Startup page'
        }

    }

    updateTitle(){
        this.setState({title:'I am Updated Index page'});
    }

    render(){
        console.log('render');

        return (
                <BaseLayout>
                    <h1 className='fromPage'>I am index page from class components</h1>
                    <h2>{this.state.title}</h2>
                    <button onClick= {() => this.updateTitle()}>Change Title</button>
                    <p>Hello Next.js</p>
                </BaseLayout>
        )
    }

}

export default Index;
