import React, { useState } from 'react'
import { TextField, Button, Typography, Box,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

} from '@mui/material'

const RegisterPage = ({ addUser }) => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [imageurl, setImageurl] = useState('')
  const [ description, setDescription ] = useState('')
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [openTermsDialog, setOpenTermsDialog] = useState(false)
  const [ isCompany, setIsCompany ] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      // Passwords don't match, handle error here (e.g., display an error message)
      console.log('Passwords dont match!')
      return
    }

    await addUser({ username, name, password, imageurl, description,
      isCompany })
    setName('')
    setPassword('')
    setUsername('')
    setImageurl('')
    setDescription('')
    setIsCompany(false)
    setIsTermsAccepted(false)
  }

  const handleTermsDialogOpen = () => {
    setOpenTermsDialog(true)
  }

  const handleTermsDialogClose = () => {
    setOpenTermsDialog(false)
  }

  const handleCheckboxChange = (e) => {
    setIsTermsAccepted(e.target.checked)
  }

  const handleCompanyCheckboxChange = (e) => {
    setIsCompany(e.target.checked)
  }

  return (
    <Box sx={{ marginTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '3rem' }}>
      <Typography sx={{
        fontSize: '2rem',
        textAlign: 'center',
        '@media (max-width: 442px)': {
          fontSize: '1.5rem',
        },
      }}>
        Create a new user
      </Typography>
      <Box sx={{ maxWidth: '30rem', }} component="form" onSubmit={handleSubmit}>
        <FormControlLabel
          control={<Checkbox checked={isCompany} onChange={handleCompanyCheckboxChange} />}
          label="I want the user to be registered as a company"
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          id="register-username"
          label="Username"
          required
          fullWidth
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          margin="normal"
        />
        <TextField
          id="name"
          label="Name (visible to other users)"
          required
          fullWidth
          value={name}
          onChange={({ target }) => setName(target.value)}
          margin="normal"
        />
        <TextField
          id="register-password"
          label="Password"
          type="password"
          required
          fullWidth
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          margin="normal"
        />
        <TextField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          required
          fullWidth
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
          margin="normal"
        />
        <TextField
          id="imageurl"
          label="Logo URL"
          fullWidth
          value={imageurl}
          onChange={({ target }) => setImageurl(target.value)}
          margin="normal"
        />
        <TextField
          id="description"
          label="Add a description for the user"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isTermsAccepted}
              onChange={handleCheckboxChange}
              required
            />
          }
          label={
            <Typography
              sx={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={handleTermsDialogOpen}
            >
              I accepts the terms of service
            </Typography>
          }
          sx={{ marginBottom: '1rem' }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: 'blue',
              color: 'white',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
              },
            }}
          >
            Register!
          </Button>
        </Box>
      </Box>
      <Dialog open={openTermsDialog} onClose={handleTermsDialogClose}>
        <DialogTitle>Terms of service</DialogTitle>
        <DialogContent>
          {/* Add your terms of service content here */}
          <Typography>
            Lorem ipsum
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTermsDialogClose}>Sulje</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default RegisterPage
