import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from "./components/BookList"
import BookSearch from "./components/BookSearch"

class BooksApp extends React.Component {
	state = {
		currentlyReadingBooks: [],
		wantToReadBooks: [],
		readBooks: []
	}

	collectBooks(books) {
		const currentlyReadingBooksTemp = []
		const wantToReadBooksTemp = []
		const readBooksTemp = []
		for (let i = 0; i < books.length; i++) {
			const book = books[i]
			const shelf = book.shelf
			if (shelf === 'currentlyReading') {
				currentlyReadingBooksTemp.push(book)
			} else if (shelf === 'wantToRead') {
				wantToReadBooksTemp.push(book)
			} else if (shelf === 'read') {
				readBooksTemp.push(book)
			}
		}
		this.setState({
			currentlyReadingBooks: currentlyReadingBooksTemp,
			wantToReadBooks: wantToReadBooksTemp,
			readBooks: readBooksTemp
		})
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.collectBooks(books)
		})
	}

	changeShelf(book, shelf) {
		BooksAPI.update(book, shelf).then(() => {
			BooksAPI.getAll().then((books) => {
				this.collectBooks(books)
			})
		})
	}

	render() {
		if (this.state.currentlyReadingBooks.length === 0) {
			return (<div/>)
		}

		const myBooks = this.state.currentlyReadingBooks.concat(this.state.wantToReadBooks, this.state.readBooks)

		return (
			<div className='app'>
				<Route exact path='/' render={() => (
					<BookList
						currentlyReadingBooks={this.state.currentlyReadingBooks}
						wantToReadBooks={this.state.wantToReadBooks}
						readBooks={this.state.readBooks}
						changeShelf={this.changeShelf.bind(this)}
					/>
				)}/>
				<Route path='/search' render={() => (
					<BookSearch
						myBooks={myBooks}
						changeShelf={this.changeShelf.bind(this)}
					/>
				)}/>
			</div>
		)
	}
}

export default BooksApp
