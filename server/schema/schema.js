const graphql = require('graphql');
const _ = require('lodash');
const GrillModel = require('../models/grills');

const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID, GraphQLList, GraphQLInt} = graphql;

const Grill = new GraphQLObjectType({
    name:'Grill',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        type: {type: GraphQLString},
        price: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        grill:{
            type:Grill,
            args: { id:{type:GraphQLID}},
            resolve(parent,args){
                return GrillModel.findById(parent.id);
            }
        },
        grills:{
            type:new GraphQLList(Grill),
            resolve(parent,args){
                return GrillModel.find({});
            }
        },
    }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addGrill: {
      type: Grill,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        type: { type: GraphQLString },
        price: { type: GraphQLInt },
      },
      resolve(parent, args){
          let newGrill = new GrillModel({
              name : args.name,
              description : args.description,
              type : args.type,
              price : args.price
          });
          return newGrill.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation: Mutation
});