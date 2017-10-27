const {makeExecutableSchema} = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
type Country {
  id: ID!
  name: String!
  code: String!
}
type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  profilePic: String
  country: Country!
  itineraries: [Itinerary]
}
type Itinerary {
  id: ID!
  name: String!
  startDate: Int
  endDate: Int
  pax: Int
  travelInsurance: String
  budget: Int
  countries: [Country]
  users: [User!]
  activities: [Activity]
}
type CountriesItineraries {
  id: ID!
  CountryId: ID!
  ItineraryId: ID!
}
type Location {
  id: ID!
  CountryId: ID!
  name: String!
  latitude: Float!
  longitude: Float!
  openingHour: String
  closingHour: String
  address: String!
  country: Country!
}
type Activity {
  id: ID!
  ItineraryId: ID!
  itinerary: Itinerary!
  LocationId: ID!
  location: Location!
  loadSequence: Int!
  date: Int
  name: String
  notes: String
  startTime: Int
  endTime: Int
  cost: Int
  currency: String
  bookingStatus: Boolean
  bookedThrough: String
  bookingConfirmation: String
  attachment: String
}
type Food {
  id: ID!
  LocationId: ID!
  location: Location!
  ItineraryId: ID!
  itinerary: Itinerary!
  loadSequence: Int!
  date: Int
  name: String
  notes: String
  startTime: Int
  endTime: Int
  cost: Int
  currency: String
  bookingStatus: Boolean
  bookedThrough: String
  bookingConfirmation: String
  attachment: String
  type: String
}
type DeletedStatus {
  status: Boolean
}
type AuthorizationStatus {
  status: Boolean
}
type Token {
  token: String
}
type Query {
  allCountries: [Country!]!
  allUsers: [User!]!
  findUser(id: ID!): User
  findItinerary(id: ID!): Itinerary
  findLocation(id: ID!): Location
  findActivity(id: ID!): Activity
  findFood(id:ID!): Food
  authorization: AuthorizationStatus
}
type Mutation {
  createUser(name:String!,email:String!,CountryId:Int!,password:String!): User

  updateUser(id:ID!,name:String, email:String, CountryId:Int,password:String, profilePic:String):User

  deleteUser(id:ID!): DeletedStatus

  createToken(email:String!, password:String!): Token

  createItinerary(UserId: [Int!], CountryId: [Int!], name:String!,startDate:Int,endDate:Int,pax:Int,travelInsurance:String,budget:Int): Itinerary

  updateItineraryDetails(id: ID!, name:String,startDate:Int,endDate:Int,pax:Int,travelInsurance:String,budget:Int): Itinerary

  createCountriesItineraries(ItineraryId: Int!, CountryId:Int!): CountriesItineraries

  deleteCountriesItineraries(ItineraryId: Int!, CountryId:Int!): DeletedStatus

  deleteItinerary(id: ID!): DeletedStatus

  createLocation(CountryId: ID!, name:String!, latitude:String!, longitude:String!,openingHour:String,closingHour:String,address:String!): Location

  createActivity(ItineraryId: ID!, LocationId: ID!, date: Int!, loadSequence: Int!, name: String, notes: String, startTime: Int, endTime: Int, cost: Int, currency: String, bookingStatus: String, bookedThrough: String, bookingConfirmation: String, attachment: String): Activity

  updateActivity(id: ID!, LocationId: ID, date: Int, loadSequence: Int, name: String, notes: String, startTime: Int, endTime: Int, cost: Int, currency: String, bookingStatus: String, bookedThrough: String, bookingConfirmation: String, attachment: String): Activity

  deleteActivity(id:ID!): DeletedStatus
}
`

module.exports = makeExecutableSchema({typeDefs, resolvers})
