import React from 'react';

const About = (props) => {
    return (
        <>
            <props.GradientBg />
            <div style={{ display: 'grid', placeItems: 'center', height: '90vh' }}>
                <h1>This is About page</h1>
            </div>
        </>
    );
};

export default About;