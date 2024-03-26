/** COMPLETE THIS PART */
async function addPost(post) {
    /**
     * 1. Get the list posts from local storage
     *      if local storage is empty, initialize the list of posts to an empty array
     * 2. Add the new post at the front of list
     * 3. Save the list posts back to local storage
     */

    // Your code here
    try {
        const myposts = localStorage.getItem('posts');

        if (myposts === null) {
            let myposts = [];
            localStorage.setItem('posts', JSON.stringify(myposts));
        }
        let new_posts = JSON.parse(myposts);
        new_posts.unshift(post);
        localStorage.setItem('posts', JSON.stringify(new_posts));
    } catch(error) {
        console.error(error);
}
}

document.querySelector('#new-post').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    addPost({title, body});
    e.target.reset();
});