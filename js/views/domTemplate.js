const Partials = {
    booksRenderIsComplete(data){
       const listItem = `
        <div class="listBook">
        <div class="dataBook">
            <h2>${data.title}</h2>
            <h4>${data.author}</h4>
            <p>${data.year}</p>
        </div>
        <div class="btn">
            <button id="isReaded">Sudah Dibaca</button>
        </div>
        </div>`;
        return listItem;
    },
    booksRenderNotComplete(data){
        const listItem = `
        <div class="listBook">
        <div class="dataBook">
            <h2>${data.title}</h2>
            <h4>${data.author}</h4>
            <p>${data.year}</p>
        </div>
        <div class="btn">
            <button id="notReaded">Belum Dibaca</button>
        </div>
        </div>`;
         return listItem;
     }
}

export { Partials };