const fetchAllPostsApiMethod = async (): Promise<any> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

export { fetchAllPostsApiMethod };