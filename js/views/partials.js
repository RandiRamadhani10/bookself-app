const Partials = {
    booksRenderIsComplete(data){
       const listItem = `
        <div class="listBook">
        <div class="deleteButton" >
        <a class="iconDelete" data-idbook="${data.id}"><img  src="asset/delete.svg" alt=""></a>
        </div>
        <div class="dataBook">
            <h2>${data.title}</h2>
            <h4>${data.author}</h4>
            <p>${data.year}</p>
        </div>
        <div class="btn">
            <button  class="btn buttons" data-idbook="${data.id}">Sudah Dibaca</button>
        </div>
        </div>`;
        return listItem;
    },
    booksRenderNotComplete(data){
        const listItem = `
        <div class="listBook">
        <div class="deleteButton" >
        <a class="iconDelete" data-idbook="${data.id}"><img src="asset/delete.svg" alt=""></a>
        </div>
        <div class="dataBook">
            <h2>${data.title}</h2>
            <h4>${data.author}</h4>
            <p>${data.year}</p>
        </div>
        <div class="btn">
            <button class="btn buttons" data-idbook="${data.id}">Belum Dibaca</button>
        </div>
        </div>`;
         return listItem;
     }
}

export { Partials };