document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-list");
  if (container) {
    blogPosts.forEach(post => {
      const div = document.createElement("div");
      div.className = "blog-preview";
      div.innerHTML = `
        <h2><a href="blog-entry.html?id=${post.id}">${post.title}</a></h2>
        <p>${post.date}</p>
        <p>${post.summary}</p>
      `;
      container.appendChild(div);
    });
  }
});