# 🔍 GitSearcher - GitHub User Finder

A responsive, dark-themed web application that utilizes the GitHub Users API to search for and display user profiles in real-time.

Built to demonstrate mastery of **Vanilla JavaScript (ES6+)**, **Asynchronous Programming**, and **Modern CSS layouts** without relying on frameworks.

🔗 **Live Demo:** [View Live Site](https://akg451.github.io/GitSearcher/)

---

## 🚀 Key Features

* **Real-time API Integration:** Fetches user data (avatar, bio, stats, links) using the GitHub REST API.
* **Robust Error Handling:** Gracefully handles `404 Not Found` errors with custom UI feedback when a username doesn't exist.
* **Dark Mode UI:** A polished, contrast-friendly dark theme inspired by modern developer tools.
* **Responsive Design:** Fully responsive layout that adapts from desktop grids to mobile stacks using CSS Media Queries.
* **Data Formatting:** Dynamically formats ISO dates (e.g., `2025-06-24`) into readable strings (e.g., `24 Jun 2025`).

---

## 🛠️ Tech Stack

* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **Styling:** Flexbox, CSS Grid, CSS Variables
* **API:** GitHub REST API (`fetch`, `async/await`)
* **Version Control:** Git & GitHub

---

## 🧠 What I Learned

This project was a refresher on the core fundamentals of web development before diving into React. Key takeaways included:

1.  **Asynchronous Logic:** Properly handling Promises using `async/await` and `try/catch` blocks to ensure the UI doesn't freeze while data loads.
2.  **DOM Manipulation:** Creating dynamic HTML structures (like the profile card) efficiently using Template Literals.
3.  **CSS Architecture:** Structuring CSS to be "self-documenting" and using Flexbox/Grid for complex alignments (e.g., the stats dashboard).
4.  **Edge Case Management:** Realizing that APIs don't always return success, and building UI states for "Loading" and "User Not Found."

---

## 💻 How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/AKG451/GitSearcher.git]
    ```

2.  **Open the project**
    Simply open `index.html` in your browser. No build step or npm install required!

---

**Developed by Aryan Gupta**