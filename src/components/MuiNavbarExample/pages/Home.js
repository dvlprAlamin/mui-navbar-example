import React from 'react';

const Home = (props) => {
    return (
        <>
            <props.GradientBg />
            <div style={{ display: 'grid', placeItems: 'center', height: '90vh' }}>
                <h1>This is Home page</h1>
            </div>
        </>
    );
};

export default Home;