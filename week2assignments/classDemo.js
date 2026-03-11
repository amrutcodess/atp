class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable
    }

    borrow(title){
        if(this.isAvailable){
            this.isAvailable=false
            console.log("successfully borrowed")
        }
        else{
            console.log("book not available")
        }
    }

    returnBook(){
        if(!this.isAvailable){
            this.isAvailable=true
            console.log("successfully returned")
        }
        else{
            console.log("no book borrowed")
        }
    }

    getInfo(){
        console.log(this.title,this.author,this.pages,this.isAvailable)
    }

    isLongBook(){
        if(this.pages>300) 
            return true
        else
            return false
    }
}

let b1=new Book("harry potter","potter",500,true)
let b2=new Book("harry ","pp",100,true)
let b3=new Book("got","JKR",1000,true)
let b4=new Book("One piece","Oda",50000,true)
let b5=new Book("jjk","gege",5000,true)

b1.getInfo()
b2.getInfo()
b3.getInfo()
b4.getInfo()
b5.getInfo()

b1.borrow()
b4.borrow()

b1.returnBook()

// Count how many books are "long books" (more than 300 pages)
let longBookCount = 0
let books = [b1, b2, b3, b4, b5]

for(let book of books){
    if(book.isLongBook()){
        longBookCount++
    }
}

console.log("count",longBookCount)

// List all available books
console.log("\n--- Available Books ---")
for(let book of books){
    if(book.isAvailable){
        console.log(`${book.title} by ${book.author} (${book.pages} pages)`)
    }
}

