import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post }) => {
    // Ensure `post` contains these fields
    const { title, description, urlToImage } = post;
    console.log(title)

    return (
        <Card>
            {urlToImage && <Card.Img variant="top" src={urlToImage} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={`/post/${encodeURIComponent(title)}`}>
                    <Button variant="primary">Read More</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default BlogPostItem;
