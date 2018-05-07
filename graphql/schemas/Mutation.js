const Mutation = `
  type Mutation {
    changingLoadSequence(input:[changingLoadSequenceInput]): Boolean

    deleteMultipleEvents(input:[ID]): Boolean

    onAuth0UserAuthentication(idToken: String!): User

    updateUserProfile(CountryId: ID, fullName: String, bio: String, profilePic: String): User

    createItinerary(UserId: String!, CountryId: Int, name:String!, days: Int!, startDate:Int, description: String): Itinerary

    updateItineraryDetails(id: ID!, name:String, days: Int, startDate:Int, description: String): Itinerary

    createCountriesItineraries(ItineraryId: ID!, CountryId: ID!): CountriesItineraries

    deleteCountriesItineraries(ItineraryId: ID!, CountryId:ID!): Boolean

    deleteItinerary(id: ID!): Boolean

    createLocation(placeId: String!, verified: Boolean, CountryId: ID, name:String, telephone: String, latitude:String, longitude:String, address:String, utcOffset: Int, openingHours: String, openingHoursText: String, imageUrl: String): Location

    createEvent(ItineraryId: ID!, eventType: String, startDay: Int!, startTime: Int, endTime: Int, loadSequence: Int!, notes: String, cost: Int, currency: String, bookingService: String, bookingConfirmation: String, locationVerified: Boolean, locationData: locationDataInput, LocationId: ID): Event

    updateEvent(id: ID!, eventType: String, startDay: Int!, startTime: Int, endTime: Int, loadSequence: Int!, notes: String, cost: Int, currency: String, bookingService: String, bookingConfirmation: String, locationVerified: Boolean, locationData: locationDataInput, LocationId: ID): Event

    deleteEvent(id: ID!): Boolean

    createAttachment(EventId: ID!, fileName: String, fileAlias: String, fileType: String, fileSize: String): Attachment

    deleteAttachment(id: ID!): Boolean

    createBlog(UserId: ID!, title: String, textContent: String) : Blog

    updateBlog(id: ID!, ItineraryId: ID, title: String, textContent: String, days: Int, published: Boolean, hashtags:[String], media:[updateBlogMediaInput]): Blog

    deleteBlog(id: ID!): Boolean

    increaseBlogViews(id: ID!): Boolean

    createBlogHeading(BlogId: ID!, loadSequence: Int!, title: String): BlogHeading

    updateBlogHeading(id: ID!, loadSequence: Int, title: String): BlogHeading

    deleteBlogHeading(id: ID!): Boolean

    createPost(BlogId: ID!, ParentPostId: ID, loadSequence: Int!, title: String): Post

    updatePost(id: ID!, ParentPostId: ID, loadSequence: Int, locationData: locationDataInput, LocationId: ID, contentOnly: Boolean, title: String, textContent: String, description: String, eventType: String, start: Boolean, startDay: Int, endDay: Int, startTime: Int, endTime: Int, hashtags: [String], media: [updatePostMediaInput]): Post

    updateMultiplePosts(input: [updateMultiplePostsInput]): Boolean

    deletePost(id: ID!): Boolean

    createAlbum(UserId: ID!, title: String, description: String): Album

    updateAlbum(id: ID!, title: String, description: String): Album

    deleteAlbum(id: ID!): Boolean

    createMedia(AlbumId: ID!, media: [createMediaInput]!): Boolean

    moveMediaToAlbum(AlbumId: ID!, media: [ID]!): Boolean

    deleteMedia(input: [ID]!): Boolean

    createMediaBlog(BlogId: ID!, MediumId:ID!, loadSequence: Int!, caption: String): MediaBlogs

    deleteMediaBlog(id: ID!): Boolean

    updateMediaBlog(id:ID!, loadSequence: Int, caption: String): MediaBlogs

    createMediaPost(PostId: ID!, MediumId: ID!, loadSequence: Int!, caption: String): MediaPosts

    deleteMediaPost(id: ID!): Boolean

    updateMediaPost(id: ID!, loadSequence: Int, caption: String): MediaPosts

    toggleBlogLikes(BlogId: ID!, UserId: ID!): Boolean

    reorderMediaBlog(input: [reorderMediaBlogInput]): Boolean

    reorderMediaPost(input: [reorderMediaPostInput]): Boolean

    reorderBlogContent(input: [reorderBlogContentInput]): Boolean

    createHashtagBlog(BlogId: ID!, name: String!): HashtagsBlogs

    deleteHashtagBlog(id: ID!): Boolean

    createHashtagPost(PostId: ID!, name: String!): HashtagsPosts

    deleteHashtagPost(id: ID!): Boolean
  }
`
module.exports = Mutation
