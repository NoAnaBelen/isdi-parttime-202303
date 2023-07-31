const mongoose = require('mongoose')

const { Schema, Schema: { Types: { ObjectId } }, model } = mongoose

const paymentMethod = new Schema({
    type: {
        type: String,
        enum: ['credit-card', 'paypal', 'apple-pay', 'google-pay', 'crypto']
    },
    name: {
        type: String
    },
    number: {
        type: String
    },
    expirityDate: {
        type: Date
    }
})

const user = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8
    },
    avatar: {
        type: String
    },
    favs: {
        type: [ObjectId],
        ref: 'Post'
    },
    paymentMethods: [paymentMethod]
})

const comment = new Schema({
    // CASE linked
    // post: {
    //     type: ObjectId,
    //     ref: 'Post',
    //     required: true
    // },
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    likes: {
        type: [ObjectId],
        ref: 'User'
    },
    // CASE embed
    comments: {
        type: [comment]
    }
})

const User = model('User', user)
const Post = model('Post', post)
const Comment = model('Comment', comment)
const PaymentMethod = model('PaymentMethod', paymentMethod)

module.exports = {
    User,
    Post,
    Comment,
    PaymentMethod
}