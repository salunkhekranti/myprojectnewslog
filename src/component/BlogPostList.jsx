import React, { useEffect, useState } from 'react';
import BlogPostItem from './BlogPostItem';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const BlogPostList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 6;  // Number of items to display per page

    // Fetch news based on the current page
    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=5abe02d0ed6341008b1e6e45438eaef5&page=${page}&pageSize=${itemsPerPage}`);
            setPosts(response.data.articles);
            setTotalPages(Math.ceil(response.data.totalResults / itemsPerPage));
        } catch (err) {
            console.error(err);

        }
    };

    // Fetch news whenever the page changes
    useEffect(() => {
        fetchNews();
    }, [page]);

    useEffect(() => {
        fetchNews();
        
    }, []);

    console.log(posts);
    return (
        <Container>
            <Row>
                { posts.length > 0 && posts.map((post, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <BlogPostItem post={post} />
                    </Col>
                ))}
            </Row>
            <Pagination>
                <Pagination.Prev onClick={() => page > 1 && setPage(page - 1)} />
                {[...Array(totalPages).keys()].map(number => (
                    <Pagination.Item
                        key={number + 1}
                        active={number + 1 === page}
                        onClick={() => setPage(number + 1)}
                    >
                        {number + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => page < totalPages && setPage(page + 1)} />
            </Pagination>
        </Container>
    );
};

export default BlogPostList;
