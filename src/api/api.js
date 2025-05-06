const BASE_URL = 'https://8000-idx-blogbackendgit-1746362214736.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev';


export const postBlogPost = async (blogData) => {
  try {
    const response = await fetch(`${BASE_URL}/blogs/`, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting blog:', error);
    throw error;
  }
};

export const getPublicBlogs = async () => {
    try {
      const response = await fetch(`${BASE_URL}/getBlogPublic`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting public blogs:', error);
      throw error;
    }
  };

  export const getUserBlogs = async (username) => {
    try {
      const response = await fetch(`${BASE_URL}/getBlogUser/${username}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting user blogs:', error);
      throw error;
    }
  };

  export const getSpecificBlog = async (uid) => {
    try {
      const response = await fetch(`${BASE_URL}/getBlogPublicSpecific/${uid}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting specific blog:', error);
      throw error;
    }
  };




export const deleteBlogPost = async (blogId) => {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};