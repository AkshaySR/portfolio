import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {

    constructor(){
        super();
        this.someVariable = 'Just some variable';
    }

    alertName(title){
        alert(title);
    }

    render(){
        return (
            <BaseLayout>
                <p>Blogs Page</p>
            </BaseLayout>
        )
    }
}

export default SuperComponent;