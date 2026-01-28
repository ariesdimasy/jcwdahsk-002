import  { ListItemButton, ListItemIcon, ListItemText, TextField, Checkbox, Button } from "@mui/material";
import { useState } from "react";

interface MyListItemButtonProps {
    item: {
        id: number;
        text: string;
        done: boolean
    };
    updateTodoList: (id:number, text:string) => void;
    deleteTodoList: (id:number) => void;
    checkDoneTodoList: (id:number) => void;
  
}

export default function MyListItemButton(props: MyListItemButtonProps) {

    const [isUpdate, setIsUpdate] = useState(false); // ini untuk toggle edit mode
    const [text, setText] = useState(props.item.text);

    const deleteTask = (id:number) => {  
        console.log("Delete todo list with id:", id); 
        const confirmDelete = window.confirm("Are you sure you want to delete this task item?");
        if (confirmDelete) {
           props.deleteTodoList(props.item.id);
        } else {
            console.log("Deletion cancelled.");
        }
    }

    const checkDone = (id:number) => {
        props.checkDoneTodoList(id);
    }

  return (
     <ListItemButton onDoubleClick={() => setIsUpdate(true)} >
        <ListItemIcon>
          <Checkbox checked={props.item.done} onClick={() => checkDone(props.item.id)} slotProps={{ input: { 'aria-label': 'Checkbox demo' } }} name="checked" value="done" />
        </ListItemIcon>
        {isUpdate ?  <TextField
          id="outlined-suffix-shrink"
          label="Outlined"
          variant="outlined"
          style={{ width: '100%', backgroundColor:'white', borderRadius:8 }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const target = e.target as HTMLInputElement;
              const text = target.value;
              if (text.trim() !== '' || props.item.text != text) {
                props.updateTodoList(props.item.id,text);
                setIsUpdate(false)
              }
            }
            
          }}
          
        /> : <><ListItemText primary={props.item.text}  />
        <Button variant="outlined" color="error" size="small" onClick={() => deleteTask(props.item.id)} > Delete </Button>
        </> }
      </ListItemButton> 
  )
}