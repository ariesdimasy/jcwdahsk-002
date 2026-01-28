
import {  
TextField,
Container,
Button,
} from '@mui/material'
import { useFormik } from 'formik';
import * as Yup from  'yup';
import axios from 'axios';

const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name Too Short!').max(200, 'Name Too Long!').required('Name Required'),
    email: Yup.string().email('Invalid email').required('Required'), 
    password: Yup.string().min(6, 'Password Too Short!').max(20, 'Password Too Long!').required('Password Required'),
});

export default  function RegisterPage() {

  const formik = useFormik({
    initialValues: {
      name:"",
      email: '',
      password: '',
    },
    validationSchema:RegisterSchema,
    onSubmit: values => {
      handleRegister();
    },
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://regalrespect-us.backendless.app/api/data/Users', {
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password
      });
      alert('Registration successful! User ID: ' + response.data.objectId);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <h1>Register Page</h1>
      <form onSubmit={formik.handleSubmit} style={{ border:"1px solid grey", padding:20, borderRadius:8}}>
        <TextField
          id="outlined-name"
          label="Name"
          variant="outlined"
          type="text"
          fullWidth
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.name}
          name='name'
          sx={{ borderColor: formik.errors.name && formik.touched.name ? 'red' : 'inherit' }}
        />
          {formik.errors.name && formik.touched.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
        <TextField
          id="outlined-email"
          label="Email"
          variant="outlined"
          type="text"
          fullWidth
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.email}
          name='email'
          sx={{ borderColor: formik.errors.email && formik.touched.email ? 'red' : 'inherit' }}
        />
        {formik.errors.email && formik.touched.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.password}
          name='password'
          sx={{ borderColor: formik.errors.password && formik.touched.password ? 'red' : 'inherit' }}
        />
        {formik.errors.password && formik.touched.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}
        <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: '1rem' }}>
            Register
        </Button>
      </form>
     
      </Container>
    </div>
  )
}