const Transport = `
  type Transport {
    id: ID!
    ItineraryId: ID!
    DepartureLocationId: ID
    departureLocation: Location
    ArrivalLocationId: ID
    arrivalLocation: Location
    departureLocationAlias: String
    arrivalLocationAlias: String
    startLoadSequence: Int
    endLoadSequence: Int
    startDay: Int
    endDay: Int
    startTime: Int!
    endTime: Int!
    description: String
    notes: String
    cost: Int
    currency: String
    bookingStatus: Boolean
    bookedThrough: String
    bookingConfirmation: String
    attachments: [Attachment]
    backgroundImage: String
  }
`
module.exports = Transport
