//your JS code here. If required.
document.getElementById('book-form').addEventListener('submit', function (p) {
    p.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete"><i class="fas fa-times"></i></button></td> <!-- Font Awesome icon -->
    `;

    document.getElementById('book-list').appendChild(row);

    document.getElementById('book-form').reset();

    row.querySelector('.delete').addEventListener('click', function() {
        row.remove();
    });
});