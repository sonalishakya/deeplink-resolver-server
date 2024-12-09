import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'
import React from 'react'

const ViewTemplateDialog = () => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <Typography>Template Details here</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained">Verify</Button>
        <Button variant="contained" color="success">Use</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ViewTemplateDialog