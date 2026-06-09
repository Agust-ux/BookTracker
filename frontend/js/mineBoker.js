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
                <div class="menu-wrapper">
                <button class="menu-btn">⋮</button>

                <div class="menu hidden">
                    <button class="menu-item edit">Rediger</button>
                    <button class="menu-item delete">Slett</button>
                </div>
            </div>
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <span class="status ${statusClass}">
                    ${statusText}
                </span>
            `;
            console.log(book.status, statusClass);

            card.querySelector(".menu-btn").addEventListener("click", (e) => {
                e.stopPropagation();

                const menu = card.querySelector(".menu");
                menu.classList.toggle("hidden");
                });

                const editBtn = card.querySelector(".edit");
                editBtn.addEventListener("click", (e) => {
                    e.stopPropagation();

                    openEditModal(book);
                });

                const deleteBtn = card.querySelector(".delete");
                deleteBtn.addEventListener("click", async (e) => {
                e.stopPropagation();

                const confirmed = confirm(
                    `Vil du slette "${book.title}"?`
                );

                if (!confirmed) return;

                const res = await fetch(
                    `http://localhost:3007/books/${book.id}`,
                    {
                        method: "DELETE"
                    }
                );

                if (res.ok) {
                    loadBooks();
                } else {
                    alert("Kunne ikke slette bok");
                }

            });
            booksGrid.appendChild(card);

        });

    } catch (error) {
        console.error(error);
    }

}

loadBooks();

function openEditModal(book) {

    document.getElementById("bookId").value = book.id;

    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("status").value = book.status;
    document.getElementById("rating").value = book.rating || 0;
    document.getElementById("review").value = book.review || "";


    document.getElementById("modalTitle").textContent = "Edit book";
    document.getElementById("bookModal").style.display = "flex";
}

    document.getElementById("bookForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const id = document.getElementById("bookId").value;

        const bookData = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            status: document.getElementById("status").value,
            rating: document.getElementById("rating").value,
            review: document.getElementById("review").value
        };

        let url = "http://localhost:3007/books";
        let method = "POST";

        // IF EDIT MODE
        if (id) {
            url = `http://localhost:3007/books/${id}`;
            method = "PATCH";
        }

        const res = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookData)
        });

        if (res.ok) {
            document.getElementById("bookModal").style.display = "none";
            document.getElementById("bookForm").reset();
            document.getElementById("bookId").value = "";

            loadBooks(); 
        }
    });
