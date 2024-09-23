import createError from 'http-errors'
import Quotes from '../../models/Quotes.js'
import Authors from "../../models/Authors.js";

/**
 * Get a single quote by its ID
 */
export default async function getQuoteById(req, res, next) {
  try {
    const { id } = req.params
    const result = await Quotes.findById(id).select('')


    if (!result) {
      return next(createError(404, 'The requested resource could not be found'))
    }

    const authorInfo = await Authors.findById(result.authorId).select('-__v -aka')

    const data = {
      _id : result._id,
      content : result.content,
      tags : result.tags,
      author: authorInfo
    }

    res.status(200).json(data)
  } catch (error) {
    return next(error)
  }
}
