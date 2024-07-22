import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const BlogPostDetails = () => {
    const { title } = useParams(); // Get the post title from the URL parameters
    const [post, setPost] = useState(null);
    const navigate = useNavigate(); 
console.log(title)

      useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/everything?q=${decodeURIComponent(title)}&apiKey=5abe02d0ed6341008b1e6e45438eaef5`)
            .then(response => {
                setPost(response.data.articles[0]);
                console.log(response)
            });
    }, [title]);

    return (
        <Container>
            {post ? (
                <Card className="my-4">
                    {post.urlToImage && <Card.Img variant="top" src={post.urlToImage} />}
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                        <Button variant="primary" onClick={() => navigate('/')}>Back to List</Button>
                    </Card.Body>
                </Card>
            ) : (
                <p>Loading...</p>
            )}
        </Container>
    );
};

export default BlogPostDetails;
