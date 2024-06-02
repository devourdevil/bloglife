document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const postSection = document.getElementById('blog-posts');

    const newPost = document.createElement('article');
    newPost.className = 'post';

    const postTitle = document.createElement('h2');
    postTitle.textContent = title;

    const postDate = document.createElement('p');
    postDate.innerHTML = `Posted on <time datetime="${new Date().toISOString()}">${new Date().toLocaleDateString()}</time> by Author`;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    newPost.appendChild(postTitle);
    newPost.appendChild(postDate);
    newPost.appendChild(postContent);

    postSection.appendChild(newPost);

    document.getElementById('post-form').reset();
});
