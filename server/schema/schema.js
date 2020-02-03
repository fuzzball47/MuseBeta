const graphql = require('graphql');

const City = require('../models/city');
const Sector = require('../models/sector');
const Neighborhood = require('../models/neighborhood');
const Hub = require('../models/hub');
const User = require('../models/user');
const Post = require('../models/post');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const CityType = new GraphQLObjectType({
    name: 'City',

    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        credibility: {type: GraphQLInt},
        sectors: {
            type: new GraphQLList(SectorType),
            resolve(parent, args) {
                return Sector.find({
                    cityId: parent.id
                });
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({
                    cityId: parent.id
                });
            }
        }
    })
});

const SectorType = new GraphQLObjectType({
    name: 'Sector',

    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        credibility: {type: GraphQLInt},
        neighborhoods: {
            type: new GraphQLList(NeighborhoodType),
            resolve(parent, args) {
                return Neighborhood.find({
                    sectorId: parent.id
                });
            }
        },
        hubs: {
            type: new GraphQLList(HubType),
            resolve(parent, args) {
                return Hub.find({
                    sectorId: parent.id
                });
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({
                    sectorId: parent.id
                });
            }
        }
    })
});

const NeighborhoodType = new GraphQLObjectType({
    name: 'Neighborhood',

    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        credibility: {type: GraphQLInt},
        hubs: {
            type: new GraphQLList(HubType),
            resolve(parent, args) {
                return Hub.find({
                    neighborhoodId: parent.id
                });
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({
                    neighborhoodId: parent.id
                });
            }
        }
    })
});

const HubType = new GraphQLObjectType({
    name: 'Hub',

    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        credibility: {type: GraphQLInt},
        members: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({
                    membership: parent.id
                });
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',

    fields: () => ({
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        credibility: {type: GraphQLInt},
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({
                    userId: parent.id
                });
            }
        },
        archive: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({
                    userId: parent.id
                });
            }
        }
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        genre: {type: GraphQLString},
        description: {type: GraphQLString},
        content: {type: GraphQLString},
        credibility: {type: GraphQLInt},
        userId: {type: GraphQLInt},
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Base Queries',
    
    fields: {
        post: {
            type: PostType,
            description: 'Single post',
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Post.findById(args.id);
            }
        },
        postsInSector: {
            type: new GraphQLList(PostType),
            description: 'List of posts for sector',
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Post.filter(post => post.sectorId === args.id);
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    
    fields: {
        addCity: {
            type: CityType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                sectors: {type: GraphQLString},
                posts: {type: GraphQLString}
            },
            resolve(parent, args) {
                let city = new City({
                    name: args.name,
                    sectors: args.sector,
                    posts: args.posts
                });
                return city.save();
            }
        },
        addSector: {
            type: SectorType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                neighborhoods: {type: GraphQLString},
                hubs: {type: GraphQLString},
                posts: {type: GraphQLString}
            },
            resolve(parent, args) {
                let sector = new Sector({
                    name: args.name,
                    neighborhoods: args.neighborhoods,
                    hubs: args.hubs,
                    posts: args.posts
                });
                return sector.save();
            }
        },
        addNeighborhood: {
            type: NeighborhoodType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                hubs: {type: GraphQLString},
                posts: {type: GraphQLString}
            },
            resolve(parent, args) {
                let neighborhood = new Neighborhood({
                    name: args.name,
                    hubs: args.hubs,
                    posts: args.posts
                });
                return neighborhood.save();
            }
        },
        addHub: {
            type: HubType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                admins: {type: GraphQLString},
                members: {type: GraphQLString},
                posts: {type: GraphQLString}
            },
            resolve(parent, args) {
                let hub = new Hub({
                    name: args.name,
                    admins: args.admins,
                    members: args.members,
                    posts: args.posts
                });
                hub.save();
            }
        },
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let user = new User({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password
                });
                return user.save();
            }
        },
        addPost: {
            type: PostType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
                content: {type: new GraphQLNonNull(GraphQLString)},
                credibility: {type: new GraphQLNonNull(GraphQLInt)},
                userId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                let post = new Post({
                    title: args.title,
                    genre: args.genre,
                    description: args.description,
                    content: args.content,
                    credibility: args.credibility,
                    userId: args.userId
                });
                return post.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});