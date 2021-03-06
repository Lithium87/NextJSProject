import React from 'react';
import Link from 'next/link';

const errorPage = () => {
    return <div>
        <h1>Ooops... Something went Wrong!</h1>
        <p>Try <Link href="/"><a>going back</a></Link>.</p>
    </div>
};

export default errorPage;