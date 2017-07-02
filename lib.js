'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      const array = [{customer: '', total: 0}]
      array.length = 0
      carts.forEach(function (cart) {
        const {customer, items} = cart
        let total = 0
        items.forEach(function (item) {
          listings.forEach(function (listing) {
            if (listing.name === item) {
            total = total + listing.price
          }
          })
        })
      array.push({customer: customer, total: total})
    })
      return array
    }
module.exports = {
  listing,
  cart,
  calculateTotals
}
