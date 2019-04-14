import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent"

import axios from 'axios';


class Index extends SuperComponent {

    static async getInitialProps(){
        let userData ={};
       try{
           const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
           userData = response.data;
       }catch(err){
           console.log(err);
       }
        return {intialData: [1,2,3,4],userData};
    }

    constructor(){
        super();
        this.state = {
            title: 'Startup page'
        };


    }

    updateTitle = () => {
        this.setState({title:'I am Updated Index page'});
    };

    render(){
        const { title } = this.state;
        const {userData, intialData} = this.props;

        return (
                <BaseLayout>
                    <h1 className='fromPage'>I am index page from class components</h1>
                    <h2>{userData.title}</h2>
                    <button onClick= {this.updateTitle}>Change Title</button>
                    <p>Hello Next.js</p>
                </BaseLayout>
        )
    }

}

export default Index;
