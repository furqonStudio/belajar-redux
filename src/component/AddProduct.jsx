import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Button, Box, Typography } from '@mui/material'
import { saveProduct } from '../features/productSlice'
import { useNavigate } from 'react-router'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createProduct = async (e) => {
    e.preventDefault()
    await dispatch(saveProduct({ title, price }))
    navigate('/')
  }

  console.log(title, price)
  return (
    <form onSubmit={createProduct}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 500,
          margin: 'auto',
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
          Add Product
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </form>
  )
}

export default AddProduct
