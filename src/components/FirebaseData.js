import React from 'react';
import {db, auth} from './Firebase'
import './FirebaseData.css';
import {Button} from './Button';


class FirebaseData extends React.Component{
    state = {
        books: null
    }

    componentDidMount(){
        console.log('mounted')
        db.collection('books')
          .get()
          .then(snapshot => {
              const books =[]
              snapshot.forEach(doc =>{
                  const data = doc.data()
                  books.push(data)
              })
              this.setState({books: books})
          })
          .catch(error => console.log(error))
    }

    reserve(){
        alert("Your book has reserved!");
    }


    tableMethod(){
        const booklist=(
            <div className="container">
                <table id='bookstab'>
                <thead className='thead-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th> 
                        <th>First Author</th>
                        <th>Second Author</th>
                        <th>Total Amount</th>
                        <th>Left Amount</th>
                        <th>Reserve</th>
                    </tr>
                </thead>            
            <tbody>
                {this.state.books &&
                this.state.books.map((book) => 
                <tr className="row">
                    <td key={book.bookID}>{book.bookID}</td>
                    <td>{book.bookName}</td>
                    <td>{book.firstAuthor}</td>
                    <td>{book.secondAuthor}</td>
                    <td>{book.totalAmount}</td>
                    <td>{book.leftAmount}</td>
                    <td><button className="btn-reserve" onClick={this.reserve}>Reserve</button></td>
                </tr>
                )}
            </tbody> 
            </table>
            </div>)
        return booklist
    }

    render(){
        return(
            <div className='App'>
                {this.tableMethod()
                }
            </div>
        )
    }
}

export default FirebaseData;