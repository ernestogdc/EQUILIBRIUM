import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container" title='404'>
            <h1>Not found 404</h1>
            <Link to="/">
                <button className="btn btn-danger">Home</button>
            </Link>
        </div>);
}

export default Home;