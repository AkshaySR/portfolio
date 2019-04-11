import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {
    render(){
        debugger;
        const title = this.props.title;

        return (
            <React.Fragment>
                <p className='customClass'> { title } </p>
                <p className='customClassFromFile'> Checking styles </p>
                {this.props.children}
                <Link href="/">
                    <a style = {{'fontSize' : '30px'}}> Home </a>
                </Link>
                <Link href="/about">
                    <a> About </a>
                </Link>
                <Link href="/portfolio">
                    <a> portfolio </a>
                </Link>
                <Link href="/cv">
                    <a> CV </a>
                </Link>
                <Link href="/blogs">
                    <a> Blogs </a>
                </Link>
                <style jsx>
                    {
                        `
                        a {
                         font-size:50px
                        };
                       .customClass {
                            color:green;
                        }
                       
                       `
                    }
                </style>
            </React.Fragment>
        )
        }
    }

export default Header;

