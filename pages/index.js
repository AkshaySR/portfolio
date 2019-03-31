import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout";

class Index extends React.Component {

    constructor(){
        super();
        this.state = {
            title: 'StartupIndex page'
        }

    }


    render(){
        console.log('render');

        return (
                <BaseLayout>
                    <p>Hello Next.js</p>
                </BaseLayout>
        )
    }

}

export default Index;
