import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './component/BlogPostList';
import BlogPostDetails from './component/BlogPostDetails';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/post/:title" element={<BlogPostDetails />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
