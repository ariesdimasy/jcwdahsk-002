import  { ListItemButton, ListItemIcon, ListItemText, TextField, Checkbox } from "@mui/material";
import { useState } from "react";

interface   MyListItemButtonProps {
    item: {
        id: number;
        text: string;
    };
    updateTodoList: (id:number, text:string) => void;
}

export default function MyListItemButton(props: MyListItemButtonProps) {

    const [isUpdate, setIsUpdate] = useState(false);
    const [text, setText] = useState(props.item.text);

  return (
     <ListItemButton onDoubleClick={() => setIsUpdate(true)} >
              <ListItemIcon>
               <Checkbox  slotProps={{ input: { 'aria-label': 'Checkbox demo' } }} name="checked" value="done" />
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
                    if (text.trim() !== '') {
                      props.updateTodoList(props.item.id,text);
                      setIsUpdate(false)
                    }
                  }
                  
                }}
               
              /> : <ListItemText primary={props.item.text} /> }
            </ListItemButton> 
  )
}