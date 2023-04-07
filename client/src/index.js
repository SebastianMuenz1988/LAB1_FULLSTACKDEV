// import axios from "axios";

const albumTableBody = document.getElementById("album-table-body");
const albumForm = document.getElementById("album-form");

function fetchAlbums() {
  //do this with await
  axios
    .get("http://localhost:3000/api/albums")
    .then((response) => {
      const albums = response.data; // .data for access the property of axios response object
      albumTableBody.innerHTML = ""; //clear table body

      albums.forEach((album) => {
        const row = document.createElement("tr"); // for each ojbect new <tr> row-element with createElement() method

        const titleCell = document.createElement("td"); // create title cell <td> with createElement() and append with appendChild()
        titleCell.textContent = album.title; // add content to <td> element with .textContent
        row.appendChild(titleCell);

        const artistCell = document.createElement("td");
        artistCell.textContent = album.artist;
        row.appendChild(artistCell);

        const yearCell = document.createElement("td");
        yearCell.textContent = album.year;
        row.appendChild(yearCell);

        // create
        const actionsCell = document.createElement("td");

        // config update button
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", () => {
          const updatedAlbum = {
            title: prompt("Enter the updated title:", album.title),
            artist: prompt("Enter the updated artist:", album.artist),
            year: prompt("Enter the updated year:", album.year),
          };

          axios
            .put(`http://localhost:3000/api/albums/${album._id}`, updatedAlbum)
            .then(() => {
              fetchAlbums();
              albumForm.reset();
            })
            .catch((error) => {
              console.error("Error updating album:", error);
            });
        });
        actionsCell.appendChild(updateButton);

        // config delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          if (confirm("Are you sure you want to delete this album?")) {
            axios
              .delete(`http://localhost:3000/api/albums/${album._id}`)
              .then(() => {
                fetchAlbums();
              })
              .catch((error) => {
                console.error("Error deleting album:", error);
              });
          }
        });
        actionsCell.appendChild(deleteButton);

        // config details button
        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.addEventListener("click", () => {
          alert(`Title: ${album.title}\nArtist: ${album.artist}\nYear: ${album.year}`);
        });
        actionsCell.appendChild(detailsButton);

        row.appendChild(actionsCell);

        // add the complete row to the table
        albumTableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching albums:", error);
    });
}

// Fetch albums initially
fetchAlbums();

// Handle form submission for creating a new album
albumForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const newAlbum = {
    title: formData.get("title"),
    artist: formData.get("artist"),
    year: formData.get("year"),
  };

  axios
    .post("http://localhost:3000/api/albums", newAlbum)
    .then(() => {
      fetchAlbums();
      albumForm.reset();
    })
    .catch((error) => {
      console.error("Error creating album:", error);
    });
});
