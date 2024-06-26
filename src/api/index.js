const fetchPosts = async (page) => {
    const response = await fetch(
      `http://localhost:4000/posts?_sort=-id&${
        page ? `_page=${page}&_per_page=10` : ""
      }`
    );
  
    if (!response.ok) {
      throw new Error(`Failed to fetch posts. Status: ${response.status}`);
    }
  
    const postData = await response.json();
    return postData;
  };
  
  const fetchTags = async () => {
    const response = await fetch("http://localhost:4000/tags");
    if (!response.ok) {
      throw new Error(`Failed to fetch posts. Status: ${response.status}`);
    }
  
    const tagsData = await response.json();
    return tagsData;
  };
  
  const addPost = async (post) => {
    const response = await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  
    return response.json();
  };
  
  export {fetchPosts, fetchTags, addPost};