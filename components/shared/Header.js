import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {
    render(){
        debugger;
        const title = this.props.title;

        return(
           <React.Fragment>

               <p className='customClass'> { title } </p>
               <p className='customClass'> Checking styles </p>
               {this.props.children}
               <Link href="/">
                   <a style = {{'fontSize' : '20px'}}> Home </a>
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
               {/*<style jsx>
                   {
                       a {
                         font-size:20px
                        };
                       .customClass {
                            color:red;
                        }
                   }
               </style>*/}
           </React.Fragment>
        )
    }
}

export default Header;