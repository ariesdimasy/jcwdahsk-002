
import {  
TextField,
Container,
Button,
} from '@mui/material'
import { useFormik } from 'formik';
import * as Yup from  'yup';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'), 
    password: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required('Required'),
});

export default  function LoginPage() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:LoginSchema,
    onSubmit: values => {
      handleLogin();
    },
  });

  const handleLogin = async () => {
    try{
      const response = await axios.post('https://regalrespect-us.backendless.app/api/users/login', {
        login: formik.values.email,
        password: formik.values.password
      });

      if (response.status === 200) {
        alert('Login successful!');
      } else {
        alert('Login failed! Please check your credentials.');
      }
     
    } catch (error) {
      alert("Error logging in user:" + JSON.stringify(error));
    }
  }

  return (
    <div>
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <h1>Login Page</h1>
      <form onSubmit={formik.handleSubmit} style={{ border:"1px solid grey", padding:20, borderRadius:8}}>
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
            Login
        </Button>
      </form>
     
      </Container>
    </div>
  )
}