document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const signUpLink = document.getElementById('sign-up-link');
    const signInLink = document.getElementById('sign-in-link');
    const newPostLink = document.getElementById('new-post-link');
    
    const signUpSection = document.getElementById('sign-up');
    const signInSection = document.getElementById('sign-in');
    const blogPostsSection = document.getElementById('blog-posts');
    const newPostSection = document.getElementById('new-post');
    
    homeLink.addEventListener('click', function() {
        signUpSection.classList.remove('active');
        signInSection.classList.remove('active');
        newPostSection.classList.remove('active');
        blogPostsSection.classList.add('active');
    });
    
    signUpLink.addEventListener('click', function() {
        signUpSection.classList.add('active');
        signInSection.classList.remove('active');
        newPostSection.classList.remove('active');
        blogPostsSection.classList.remove('active');
    });

    signInLink.addEventListener('click', function() {
        signUpSection.classList.remove('active');
        signInSection.classList.add('active');
        newPostSection.classList.remove('active');
        blogPostsSection.classList.remove('active');
    });

    newPostLink.addEventListener('click', function() {
        signUpSection.classList.remove('active');
        signInSection.classList.remove('active');
        newPostSection.classList.add('active');
        blogPostsSection.classList.remove('active');
    });

    document.getElementById('sign-up-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('User signed up successfully!');
        document.getElementById('sign-up-form').reset();
    });

    document.getElementById('sign-in-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('User signed in successfully!');
        document.getElementById('sign-in-form').reset();
    });

    document.getElementById('new-post-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
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

        document.getElementById('new-post-form').reset();
    });
});
