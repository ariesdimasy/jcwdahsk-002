import { useState } from "react"
import './App.css'
import Header from './components/Header'
import { TextField, InputAdornment, Checkbox, List, ListItem, Button } from '@mui/material'
import MyListItemButton from "./components/MyListItemButton";


interface ITask {
  id:number
  text: string 
  done:boolean
  created_at:Date
}

function App() {

  const [searchText, setSearchText] = useState('');// state untuk menyimpan apapun yang di ketik di textfield 
  const [sortAscCreated, setSortAscCreatedAt] = useState(true)
  const [sortAscDone, setSortAscDone] = useState(true)

  const [todoList,setTodoList] = useState<ITask[]>([
    { id: 1, text: 'Do the homework , build a web project', done: false, created_at:new Date('2026-01-01 10:00:00') },
    { id: 2, text: 'Build a mobile app', done: false,  created_at:new Date('2026-01-02 09:00:00') },
    { id: 3, text: 'Hidup Indonesia', done: false, created_at:new Date('2026-01-02 08:00:00') },
  ]);

  const addTodoList = (text:string) => {

    const lastId = todoList.length > 0 ? todoList[todoList.length - 1].id : 1;
    // const newArr = [...todoList, { id: lastId + 1, text }];
    const newArr = todoList.concat({ id: lastId + 1, text, done: false, created_at:new Date() });
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

  const deleteTodoList = (id:number) => {
    const newArr = todoList.filter(item => item.id !== id); // kalau item id gak sama sama needle , maka munculkan semua kecuali yang sudah di delete 
    setTodoList(newArr);
  }

  const searchTodoList = (text:string) => {
    
    if(text === '') {
      setTodoList(todoList)
    } else {
      const newArr = todoList.filter(item => item.text.toLowerCase().includes(text.toLowerCase()));
      setTodoList(newArr);
    }
    
  }

  const sortByCreatedAt = () => {
     setSortAscCreatedAt(!sortAscCreated)
     let newArr = []
    if(sortAscCreated){
      newArr = todoList.sort((a:ITask, b:ITask) => b.created_at - a.created_at).concat([])
    } else {
      newArr = todoList.sort((a:ITask, b:ITask) => a.created_at - b.created_at).concat([])
    }
   
    setTodoList(newArr)

  }

  const sortByDone = () => {
     setSortAscDone(!sortAscDone)
     let newArr = []
    if(sortAscDone){
      newArr = todoList.sort((a:ITask, b:ITask) => b.done - a.done).concat([])
    } else {
      newArr = todoList.sort((a:ITask, b:ITask) => a.done - b.done).concat([])
    }
   
    setTodoList(newArr)

  }

  const checkDoneTodoList = (id:number) => {
    const newArr = todoList.map(item => {
      if (item.id === id) { 
        return { ...item, done: !item.done }; 
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
        
        variant="outlined"
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            borderStyle: 'none',
          },
          width: '100%', backgroundColor:'white', borderRadius:2
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            const text = target.value;
            if (text.trim() !== '') {
              addTodoList(text);
              setSearchText('');
            }
          }
        }}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
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
            endAdornment: (<InputAdornment position="end" >
              {searchText ? 
              <Button variant="outlined" size="small" onClick={() => { setSearchText(''); searchTodoList(''); }} > Clear </Button> : null }
              <Button  variant="outlined" size="small" onClick={() => searchTodoList(searchText)}> Search </Button>
            </InputAdornment>
            ),
          },
        }}
        />
        <List sx={{ mt: "20px", borderRadius: '10px',  }}>
           <ListItem sx={{ backgroundColor: 'white', height:50, padding: '0 30px' }} disablePadding>
            <Button onClick={sortByCreatedAt}> Sort by Created At </Button>
            <Button onClick={sortByDone}> Sort by Done </Button>
          </ListItem>
          { todoList.map((item, index) => (<ListItem key={index} sx={{ backgroundColor: 'white' }} disablePadding>
            <MyListItemButton item={item} 
              updateTodoList={updateTodoList} 
              deleteTodoList={deleteTodoList} 
              checkDoneTodoList={checkDoneTodoList}
              
            />
          </ListItem>))}
         
        </List>
        <div>
          {JSON.stringify(todoList)}
        </div>
        <div>
          {searchText}
        </div>
    
      </div>
    </div>
  )
}

export default App
