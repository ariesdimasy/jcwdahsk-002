
import './App.css'
import Header from './components/Header'
import { TextField, InputAdornment, Checkbox, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'


function App() {

  const todoList = [
    { id: 1, text: 'Do the homework , build a web project' },
    { id: 2, text: 'Build a mobile app' },
    { id: 3, text: 'Hidup Indonesia' },
  ];

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <h1 style={{ fontSize:40, fontWeight:700, color:'white', margin:"0 0 20px 0"}} > TODO </h1>
        <TextField
        id="outlined-suffix-shrink"
        label="Outlined"
        variant="outlined"
        style={{ width: '100%', backgroundColor:'white', borderRadius:8 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  opacity: 0,
                  
                }}
              >
                 <Checkbox slotProps={{ input: { 'aria-label': 'Checkbox demo' } }} name="checked" value="done" sx={{ backgroundColor: 'white' }} />
              </InputAdornment>
            ),
          },
        }}
        />
        <List sx={{ mt: "20px", borderRadius: '10px',  }}>
          { todoList.map((item, index) => (<ListItem key={index} sx={{ backgroundColor: 'white' }} disablePadding>
             <ListItemButton>
              <ListItemIcon>
               <Checkbox  slotProps={{ input: { 'aria-label': 'Checkbox demo' } }} name="checked" value="done" />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton> 
          </ListItem>))}
          <ListItem sx={{ backgroundColor: 'white', height:50, padding: '0 30px' }} disablePadding>
            
              Hello 
            
          </ListItem>
        </List>
    
      </div>
    </div>
  )
}

export default App
