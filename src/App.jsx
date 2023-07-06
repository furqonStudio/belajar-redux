import { Container } from '@mui/material'
import AddProduct from './component/AddProduct'
import ViewProduct from './component/ViewProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditProduct from './component/EditProduct'

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<ViewProduct />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
