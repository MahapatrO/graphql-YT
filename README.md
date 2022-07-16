# graphql-YT using express-graphql 
GraphQL, Net ninja, ES6

# install
npm install express graphql express-graphql lodash

npm install mongoose

# Setup MongoDB atlas

# Graphql Query


mutation {
  addAuthor(name: "Sohom Chatterjee", age:29) {
    name
    age
  }
}

-------------------------------------

mutation {
  addBook(name: "GraphQL", genre:"IT", authorId:"62d225bdf4a0a56da1eb53f2") {
    name
    genre
  }
}

-----------------------------------------

{
  books{
    name
    genre
    author {
      name
      age
    }
  }
}

--------------------------------------------

{
  authors {
    name
    age
  }
}

-------------------------------------------

{
  authors {
    name
    age
    books {
      name
    }
  }
}

--------------------------------------------

{
  book(id:"62d22d685c6b15689bb951bc") {
    name
    genre
    author {
      name
    }
  }
}