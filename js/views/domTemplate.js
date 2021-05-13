const Partials = {
    booksRender(data){
       const listItem = `
        <div class="listBook">
        <h2>${data.title}</h2>
        <p>${data.year}</p>
        </div>`;
        return listItem;
    }
}

export { Partials };