import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Card, CardContent, Typography,} from '@mui/material';
import Sidebar from './Sidebar';


function Home({addToCart}) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    // Fetch products
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products); // Assuming the products array is under the "products" key
        setFilteredProducts(data.products); // Initialize filteredProducts with all products
      });
  }, []);

  useEffect(() => {
    // Filter products based on search term and price range
    const filtered = products.filter(product =>
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!minPrice || product.price <= minPrice)
      );
      
    setFilteredProducts(filtered);
  }, [searchTerm, minPrice, products]);
  

  

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
    <Container maxWidth="lg">
      <div style={{ display: 'flex' }}>
        <Sidebar minPrice={minPrice}  setMinPrice={setMinPrice}  />
        <div>
        <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              style={{ transition: 'width 0.3s', width: isInputFocused ? '100%' : '200px' }}
            />
          {/* Product cards */}
          {filteredProducts.map(product => (
        <Card key={product.id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Description: {product.description}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Price: ${product.price}
            </Typography>
            {/* Link to product landing page */}
            
            <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>

          </CardContent>
        </Card>
      ))}
        </div>
      </div>
    </Container>
  </div>
  );
}

export default Home;
