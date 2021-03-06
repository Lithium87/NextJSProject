import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component{
    getInitialProps(context){
        console.log(context);
    }

    render() {
        return (
            <div>
                <h1>The Main Page</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go To Auth</button>
                </div>
        );
    }
}

export default IndexPage;