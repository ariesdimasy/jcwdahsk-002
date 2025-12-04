export async function fetchData() {
    try {
        const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const res = await fetchUsers.json()
        console.log("users => ", res)

        const fetchPosts = await fetch("https://jsonplaceholder.typicode1.com/posts/1");
        const res2 = await fetchPosts.json()
        console.log("posts => ", res2)

        const fetchTodos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const res3 = await fetchTodos.json()
        console.log("fetchTodos => ", res3)
    } catch (err) {
        console.log(err)
    }

}

export function myFunction() {
    console.log("my function")
}

export default function mainFunction() {
    console.log("mainFunction")
}

// fetchData()