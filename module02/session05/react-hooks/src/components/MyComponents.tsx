import { createContext, useContext, useState } from "react"

const UserContext   =  createContext<{user: string}>({user: ''})

function Component1()   {
    const [user] = useState("ARIES DIMAS")
    
    return <UserContext.Provider value={{ user }}>
        <div style={{ border: '2px solid blue', padding: '10px' }}> 
        Component1
        User: {user}
        <Component2  />
        </div>
    </UserContext.Provider>
}

function Component2()  {
    return <div style={{ border: '2px solid green', padding: '10px' }}> 
    Component2
  
    <Component3  />
    </div>
}

function Component3()  {

    const context =  useContext(UserContext)

    return <div style={{ border: '2px solid red', padding: '10px' }}> 
    Component3
    User : { context.user}
    </div>
}

export { Component1, }

