import React from 'react'

class Book extends React.Component {
  render() {

    let hasThumbnail
        if (this.props.book.imageLinks) {
            hasThumbnail = this.props.book.imageLinks.thumbnail
        } else {
            hasThumbnail = ''
        }

    let whenChanging = (event) =>	{
			this.props.changeShelf(this.props.book, event.target.value)
		}

    whenChanging = whenChanging.bind(this)

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${hasThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={whenChanging} value={this.props.currentShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
