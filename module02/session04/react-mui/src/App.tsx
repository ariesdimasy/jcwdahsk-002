import { useState } from "react"
import './App.css'
import Header from './components/Header'
import { TextField, InputAdornment, Checkbox, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import MyListItemButton from "./components/MyListItemButton";


function App() {


  const [todoList,setTodoList] = useState([
    { id: 1, text: 'Do the homework , build a web project' },
    { id: 2, text: 'Build a mobile app' },
    { id: 3, text: 'Hidup Indonesia' },
  ]);

  const addTodoList = (text:string) => {

    const lastId = todoList.length > 0 ? todoList[todoList.length - 1].id : 1;
    // const newArr = [...todoList, { id: lastId + 1, text }];
    const newArr = todoList.concat({ id: lastId + 1, text });
    setTodoList(newArr);
  }

  const updateTodoList = (id:number, text:string) => {
    const newArr = todoList.map(item => {
      if (item.id === id) { 
        return { ...item, text };
      }
      return item;
    });
    setTodoList(newArr)
  }

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
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            const text = target.value;
            if (text.trim() !== '') {
              addTodoList(text);
              target.value = '';
            }
          }
        }}
        onClick={(e) => {

        }}
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
            <MyListItemButton item={item} updateTodoList={updateTodoList} />
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
