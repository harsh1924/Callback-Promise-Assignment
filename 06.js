async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
};

fetchData();

// OUTPUT: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }