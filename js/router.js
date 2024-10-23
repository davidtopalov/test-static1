// Helper function to load content
function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((err) => console.log("Error loading page: ", err));
}

// Function to handle route changes
function handleRouting() {
  const path = window.location.pathname;

  if (path === "/" || path === "/index.html") {
    loadContent("index.html");
  } else if (path === "/project-management") {
    loadContent("project-management.html");
  }
}

// Initial route handling when page loads
window.addEventListener("load", handleRouting);

// Handle navigation changes using the History API
window.addEventListener("popstate", handleRouting);

// Intercept link clicks and prevent default full page reloads
document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "A" && target.getAttribute("href").startsWith("/")) {
    e.preventDefault();
    const href = target.getAttribute("href");

    // Change the browser URL
    window.history.pushState({}, "", href);

    // Load the new route content
    handleRouting();
  }
});
