

export default function BookItem({book, onToggle, onRemove}){
    return(
      <li>
        <input
        type = "checkbox"
        checked = {book.read}
        onChange={() => onToggle(book.id)}
        />

        <span>{book.title}</span>
        <button type="button" onClick={() => onRemove(book.id)}>
          Delete
        </button>
      </li>  
    )
}