import { useState, useEffect } from 'react'
import axios from "axios"
import { useFormik } from 'formik'
import * as yup from 'yup'
import './App.css'

const TodoSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  completed: yup.boolean()
});

function App() {

  const formik = useFormik({
    initialValues: {
      title: '',
      completed: false
    },
    validationSchema:TodoSchema,
    onSubmit: values => {
      createTodo()
    }
  });

  const [todos, setTodos] = useState([])

  // const [title, setTitle] = useState("")
  // const [completed, setCompleted] = useState(false)

  // useEffect(() => {
  //   // promise 
  //   fetch('https://jsonplaceholder.typicode.com/todos') // endpoint API dummy
  //     .then(response => response.json())
  //     .then(data => setTodos(data))
  //     .catch(error => console.error('Error fetching data:', error))

  // }, [])

  const handleDelete = async (id: number) => {
   const confirm = window.confirm("Are you sure to delete this todo ID : "+id+"?")

   if(confirm){
    try {
        await axios.delete("https://jsonplaceholder.typicode.com/todos/"+id)
        alert('Todo ID : '+id+' deleted successfully!')
        //alert(JSON.stringify(response.data))
        // Optionally, you can update the local state to reflect the deleted todo
        
      } catch (error) {
        console.error('Error deleting todo:', error)
      }
    }
  }

  const createTodo = async () => {
   
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: formik.values.title,
        completed: formik.values.completed
      })
      alert('Todo added:'+ JSON.stringify(response.data))
      // Optionally, you can update the local state to reflect the new todo
      formik.resetForm()

    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  useEffect( () => {
    // axios.get("https://jsonplaceholder.typicode.com/todos", {})
    //   .then(response => setTodos(response.data))
    //   .catch(error => console.error('Error fetching data:', error))
    try {

      const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?completed=false&_limit=10")
      
        setTodos(response.data)
      }
      
      fetchData()

    } catch (error) {
      console.error('Error fetching data:', error)
    }

  }, [])
  

  return (
    <>
     
      <h1>Network Call</h1>
      <div>
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input type="text" placeholder="Type todo here..." value={formik.values.title} onChange={formik.handleChange} name="title" />
          {formik.errors.title ? <div style={{ color:"red"}}>{formik.errors.title}</div> : null}
          <input checked={formik.values.completed} type="checkbox" onChange={formik.handleChange} name="completed" /> <label>Completed</label>
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div style={{ display: 'flex', gap: '20px' , marginBottom: '20px' , flexDirection: 'row' , alignItems: 'center', flexWrap:"wrap" }}>
          {todos.map((todo : { title:string, id:number }, index) => (<div key={index} className="card">
            <h3>{todo.id} . {todo.title}</h3>
            <button onClick={() => handleDelete(todo.id)}> DEL </button>
          </div>))}
      </div>
    
      
    </>
  )
}

export default App
