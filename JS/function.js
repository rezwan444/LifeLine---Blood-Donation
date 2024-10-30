// Admin Login
function toggleLoginModal() {
    const modal = document.getElementById("loginModal");
    modal.classList.toggle("hidden");
    document.getElementById("errorMsg").classList.add("hidden");  // Hide error message on toggle
  }

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Example credentials
    const correctUsername = "admin";
    const correctPassword = "password";

    if (username === correctUsername && password === correctPassword) {
      alert("Login successful!");
      window.location.href = "../Admin Panel/dashboard-main.html";  // Redirect to dashboard
    } else {
      document.getElementById("errorMsg").classList.remove("hidden");  // Show error message
    }
  }


// Admin Login2
function toggleLoginModal() {
    const modal = document.getElementById("loginModal2");
    modal.classList.toggle("hidden");
    document.getElementById("errorMsg").classList.add("hidden");  // Hide error message on toggle
  }

  function login() {
    const username = document.getElementById("username2").value;
    const password = document.getElementById("password2").value;
    
    // Example credentials
    const correctUsername = "admin";
    const correctPassword = "password";

    if (username === correctUsername && password === correctPassword) {
      alert("Login successful!");
      window.location.href = "../Admin Panel/dashboard-main.html";  // Redirect to dashboard
    } else {
      document.getElementById("errorMsg2").classList.remove("hidden");  // Show error message
    }
  }