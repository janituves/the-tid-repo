import Parse from "parse"

const BookItem = Parse.Object.extend("BookItem");

function toPlainObject(parseObject){
    return{
        id: parseObject.id,
        title: parseObject.get("title"),
        read: parseObject.get("read"),
    };
}

export async function fetchBooks(){
    const query = new Parse.Query(BookItem);
    query.ascending("createdAt");
    const results = await query.find();
    return results.map(toPlainObject);
}

export async function createBook(title) {
    const book = new BookItem() 
        book.set("title", title);
        book.set("read", false);
        return toPlainObject(await book.save());
    }
    
    export async function setBookRead(id, read) {
        const book = BookItem.createWithoutData(id);
        book.set("read", read);
        return toPlainObject(await book.save());
        
    }
export async function deleteBook(id) {
    const book = BookItem.createWithoutData(id);
    await book.destroy();
    
}
