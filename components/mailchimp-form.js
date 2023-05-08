import { Box, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Button } from '@mui/material';

const mailchimpForm = () => {
  // TODO: add Validation
  const { register, handleSubmit, formState: { errors, isSubmitting }, control } = useForm({
    defaultValues: {
      name: "",
      email: ""
    }
  });
  const onSubmit = async (data) => {
    console.log(data)
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000);
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Subscribe to our Mail
        </Typography>
        <Controller
          name="Name"
          control={control}
          defaultValue=""
          render={({ field }) =>
            <TextField
              disabled={isSubmitting}
              sx={{ mb: 2 }}
              label="Name"
              {...field} />
          }
        />

        <Controller
          name="Email"
          control={control}
          defaultValue=""
          render={({ field }) =>
            <TextField
              disabled={isSubmitting}
              sx={{ mb: 2 }}
              label="Email"
              {...field} />}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}>
          Submit
        </Button>
      </Box>
    </>
  )
}

export default mailchimpForm