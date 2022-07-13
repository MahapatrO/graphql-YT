const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: GraphQLList,
      resolve(parent, args) {
        return _.filter(books, {authorId: parent.id})
      }
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //get data from DB or other source
        // return _.find(books, {id:args.id})
      },
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //get data from DB or other source
        // return _.find(books, {id:args.id})
      },
    },

    books : {
        type: new GraphQLList(BookType),
        resolve(paren,args){
            return books;
        }
    },

    authors : {
        type: new GraphQLList(AuthorType),
        resolve(paren,args){
            return authors;
        }
    }
    
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});