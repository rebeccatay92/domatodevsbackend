const Event = `
  type Event {
    id: ID!
    ItineraryId: ID!
    eventType: String
    startDay: Int
    startTime: Int
    endTime: Int
    loadSequence: Int
    notes: String
    cost: String
    currency: String
    bookingService: String
    bookingConfirmation: String
    location: Location
    attachments: [Attachment]
  }
`

module.exports = Event
