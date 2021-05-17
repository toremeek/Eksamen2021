import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import category from './documents/category'
import feedback from './documents/feedback'
import imageGallery from './documents/imageGallery'
import info from './documents/info'
import logo from './documents/logo'
import navigation from './documents/navigation'
import articlepage from './documents/articlepage'
import person from './documents/person'

import article from './objects/article'
import articles from './objects/articles'
import clickbait from './objects/clickbait'
import content from './objects/content'
import customimage from './objects/customimage'
import link from './objects/link'
import registration from './documents/registration'
import course from './documents/course'

export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
    category,
		feedback,
		imageGallery,
		info,
		logo,
		navigation, 
		articlepage,
		person, 
		article, 
		articles, 
		clickbait,
		content, 
		customimage, 
		link,
		registration,
		course
  ]),
})