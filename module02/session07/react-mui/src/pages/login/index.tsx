
import {  
TextField,
Container,
Button
} from '@mui/material'
import { redirect } from "react-router"

import { useLoginStore } from "./../../stores/login.store"


export default  function LoginPage() {

    const email = useLoginStore((state) => state.email);
    const password = useLoginStore((state) => state.password);
    const setEmail = useLoginStore((state) => state.setEmail);
    const setPassword = useLoginStore((state) => state.setPassword);
    const login = useLoginStore((state) => state.login);

  return (
    <div>
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <h1>Login Page</h1>
      <form style={{ border:"1px solid grey", padding:20, borderRadius:8}}>
        <TextField
          id="outlined-email"
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button  onClick={() => {
            if(!email || !password) {
                alert('Please enter email and password');
                return;
            } else {
                login()
            }
            
        }} variant="contained" color="primary" type="button" fullWidth style={{ marginTop: '1rem' }}>
            Login
        </Button>
      </form>
     
      </Container>
    </div>
  )
}