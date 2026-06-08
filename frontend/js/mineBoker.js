const modal = document.getElementById("bookModal");

document.getElementById("openModalBtn").onclick = () => {
    modal.style.display = "flex";
};

document.getElementById("closeModalBtn").onclick = () => {
    modal.style.display = "none";
};

const statusMap = {
    want_to_read: "Vil lese",
    reading: "Leser",
    finished: "Har lest"
};

document.getElementById("bookForm").addEventListener("submit", async (e) => {
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
        document.getElementById("bookForm").reset();

        loadBooks();
    } else {
        alert("Something went wrong");
    }
});

async function loadBooks() {

    try {

        const response = await fetch("http://localhost:3007/books");

        const books = await response.json();

        const booksGrid = document.getElementById("booksGrid");

        booksGrid.innerHTML = "";

        books.forEach(book => {

            let statusText = "";
            let statusClass = "";

            switch (book.status) {
                case "want_to_read":
                    statusText = "Vil lese";
                    statusClass = "status-want";
                    break;

                case "reading":
                    statusText = "Leser";
                    statusClass = "status-reading";
                    break;

                case "finished":
                    statusText = "Har lest";
                    statusClass = "status-finished";
                    break;
            }

            const card = document.createElement("article");

            card.classList.add("book-card");

            card.innerHTML = `
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <span class="status ${statusClass}">
                    ${statusText}
                </span>
            `;
            console.log(book.status, statusClass);
            booksGrid.appendChild(card);

        });

    } catch (error) {
        console.error(error);
    }

}

loadBooks();