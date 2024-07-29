document.addEventListener('DOMContentLoaded', function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('blog-container');
            posts.forEach(post => {
                const postElement = document.createElement('article'); 
                postElement.innerHTML = `
                    <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
                    <p>${post.summary}</p>
                    `;
                    postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error)); 
});