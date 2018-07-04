# Welcome to Apollo & GraphQL
This document contains information needed to follow today's lunch and learn. If you have further questions feel free to ask me!

## What is GraphQL?
GraphQL is a query language designed to be layered on top of your API created by Facebook. GraphQL consolidates all would be endpoints that could be for your api in to one place. Not only that but GraphQL allows your define your data for your client and gives your client side full control of what is retrieved. GraphQL is also heavily typed to allow for more clear definition of the data. As a developer Graphql also comes with a query testing environment called `Graphiql` that allows for quick checks on the GraphQL Schema. For more information on GraphQL follow this link: `https://graphql.org/`

## What is Apollo?
Apollo for GraphQL is a technology that expedite the process of building a GraphQL Endpoint on top of an existing backend. Apollo is composed of 3 parts, the `Client`, the `Server` and the `Engine`. For this lunch and learn there will be a focus on the `Client` portion of Apollo. The `Server` and `Engine` portions will only be briefly mentioned. In General, when applying Apollo with GraphQL, it becomes easier to develope frontend code with GraphQL and it also improves the performance of the existing endpoint the technologies are applyed on. More information that can probably explain Apollo better than I, can be found here `https://blog.meteor.com/the-meteor-chef-an-introduction-to-apollo-b1904955289e`.

### Apollo Client
The Apollo Client allows for improved frontend 

## What is needed for this run through?
To run through this tutorial make sure node is installed on your machine as most of this tutorial will be done in NodeJs. Make sure to also have a local version of MongoDB running as that is what I will be using to save the data. My local version is running on port `27017`. As this is not a mongoDB tutorial I will not go into further details with regards to installing MongoDb on your machine.

## Further Learning
If this tutorial sparked any remote interest in Graphql or Apollo take a look at this youtube tutorial series: `https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f`. It is a great more in-depth tutorial than I can give in the given hour. I also used it help generate a bit of my own content.