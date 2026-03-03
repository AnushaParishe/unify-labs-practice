const form = document.getElementById("blogForm");
const container = document.getElementById("blog-container");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const content = document.getElementById("content").value;

    const blogPost = `
        <div class="post">
            <h2>${title}</h2>
            <p>${content}</p>
            <small>Written by ${author}</small>
        </div>
    `;

    container.innerHTML += blogPost;

    form.reset();
});