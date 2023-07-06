import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
  getProducts,
  deleteProduct,
  productSelectors,
} from '../features/productSlice'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ViewProduct = () => {
  const dispatch = useDispatch()
  const products = useSelector(productSelectors.selectAll)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
        Product List Redux
      </Typography>
      <Box
        sx={{ my: 2, display: 'flex', justifyContent: 'flex-end', width: 880 }}
      >
        <Link to="/add">
          <Button variant="contained" color="success">
            Add Product
          </Button>
        </Link>
      </Box>
      <TableContainer component={Paper} sx={{ width: 600, margin: 'auto' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Link to={`/edit/${row.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => dispatch(deleteProduct(row.id))}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ViewProduct
