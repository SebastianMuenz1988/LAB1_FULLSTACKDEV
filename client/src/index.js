// import axios from "axios";

const albumTableBody = document.getElementById("album-table-body");

axios
  .get("http://localhost:3000/api/albums")
  .then((response) => {
    const albums = response.data;
    console.log(albums);

    albums.forEach((album) => {
      const row = document.createElement("tr");

      const titleCell = document.createElement("td");
      titleCell.textContent = album.title;
      row.appendChild(titleCell);

      const artistCell = document.createElement("td");
      artistCell.textContent = album.artist;
      row.appendChild(artistCell);

      const yearCell = document.createElement("td");
      yearCell.textContent = album.year;
      row.appendChild(yearCell);

      albumTableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching albums:", error);
  });
