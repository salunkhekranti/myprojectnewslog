import React from 'react';
import { HashRouter ,Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './component/BlogPostList';
import BlogPostDetails from './component/BlogPostDetails';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <HashRouter>
      <Container>
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/post/:title" element={<BlogPostDetails />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
