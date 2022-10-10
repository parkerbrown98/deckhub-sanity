// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Schemas
import post from './post'
import user from './user'
import category from './category'

// Custom objects
import coverImage from './objects/coverImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    coverImage,
    user,
    category,
    post
  ]),
})
