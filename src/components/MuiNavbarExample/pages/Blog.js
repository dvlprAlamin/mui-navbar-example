import React from 'react';

const Blog = (props) => {
    return (
        <>
            <props.GradientBg />
            <div style={{ display: 'grid', placeItems: 'center', height: '90vh' }}>
                <h1>This is Blog page</h1>
            </div>
        </>
    );
};

export default Blog;