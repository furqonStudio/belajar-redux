import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
import {
  getProducts,
  productSelectors,
  updateProduct,
} from '../features/productSlice'
import { useParams, useNavigate } from 'react-router'

const EditProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const product = useSelector((state) => productSelectors.selectById(state, id))

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    if (product) {
      setTitle(product.title)
      setPrice(product.price)
    }
  }, [product])

  const handleUpdate = async (e) => {
    e.preventDefault()
    await dispatch(updateProduct({ id, title, price }))
    navigate('/')
  }

  return (
    <form onSubmit={handleUpdate}>
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
          Edit Product
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
          Update
        </Button>
      </Box>
    </form>
  )
}

export default EditProduct
