import React from 'react';
import {Card, CardContent, Typography} from '@mui/material'

function MyCartPage({ cartItems }) {
  return (
    <div style={{padding: '5vh'}}>
      <h1>My Cart</h1>
      {cartItems.map(item => (
         <Card key={item.id} style={{ marginBottom: '10px' }}>
         <CardContent>
           <Typography variant="h6" component="h2">
             {item.title}
           </Typography>
           <Typography variant="body1" component="p" gutterBottom>
             Description: {item.description}
           </Typography>
           <Typography variant="body1" component="p" gutterBottom>
             Price: ${item.price}
           </Typography>
           {/* Link to item landing page */}
           
         </CardContent>
       </Card>
      ))}
    </div>
  );
}

export default MyCartPage;
