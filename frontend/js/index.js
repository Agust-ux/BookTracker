const modal = document.getElementById("indexModal");

document.getElementById("openIndexModal").onclick = (e) => {
    e.preventDefault();
    modal.style.display = "flex";
};

document.getElementById("closeIndexModal").onclick = () => {
    modal.style.display = "none";
};

document.getElementById("indexBookForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const newBook = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        status: document.getElementById("status").value,
        rating: document.getElementById("rating").value,
        review: document.getElementById("review").value
    };

    const res = await fetch("http://localhost:3007/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    });

    if (res.ok) {
        alert("Book added!");
        modal.style.display = "none";
        document.getElementById("indexBookForm").reset();
    } else {
        alert("Error adding book");
    }
});

async function loadStats() {

    const res = await fetch("http://localhost:3007/stats");
    const data = await res.json();

    console.log(data);

    document.getElementById("totalBooks").textContent = data.total;
    document.getElementById("avgRating").textContent = data.averageRating;
    document.getElementById("readingNow").textContent = data.reading;
}

loadStats();

async function loadRecentBooks() {

    const res = await fetch("http://localhost:3007/recent-books");
    const books = await res.json();

    const container = document.getElementById("recentBooks");

    container.innerHTML = "";

    books.forEach(book => {

        const card = document.createElement("div");
        card.classList.add("book-card");

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;

        container.appendChild(card);
    });
}

// første load
loadRecentBooks();

// oppdater hvert 5. sekund
setInterval(loadRecentBooks, 5000);