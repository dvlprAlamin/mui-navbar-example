import React from 'react';

const Contact = (props) => {
    return (
        <>
            <props.GradientBg />
            <div style={{ display: 'grid', placeItems: 'center', height: '90vh' }}>
                <h1>This is Contact page</h1>
            </div>
        </>
    );
};

export default Contact;