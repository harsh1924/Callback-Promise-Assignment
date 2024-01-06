async function getData() {
    let [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json()),
    ]);
    let combineData = {
        todo: data1,
        posts: data2
    };
    return combineData;
};

getData().then((data) => console.log(data));

/*
OUTPUT:
{
  todo: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  posts: {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  }
}
*/