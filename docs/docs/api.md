# api 文档

## /api/v1

### auth

- login

- logout


### products

- product/:id

  get the product entity by id

- product/recommend

  get some products

- product/country/:country

  get product from a country

- product/get

  get category products by sort and filters

  - sort : ['date', 'sales', 'price']
  - filters: an string array
  - page: number
  - count: number

- product/category/recommend/

  get some recommended products in a category

  - category: string

- product/search

  - kw: string

- product/search/hot

  return some hot search keywords

- product/recommend/today

  return two featured image and 6 products

- product/coming

  return 即将开售的物品, 8个
  - category: string

- product/analysis/

  return recommend products of some products
  based on big data analysis
  - products: id[]


## users

- user/messages

  get latest messages with id bigger than ${id}
  - from: id

- user/:id/address

  get all addresses of a user

- user/:id/address/create

  - params: {...}

- user/:id/address/update

  -params: {id, ...updates}

- user/:id/address/delete

  - id

- user/:id/profile/update

  - params: in ['phone', 'avatar', 'nickname',
    'password']

- user/:id/footprint

  - page: number

- user/:id/order

  return order with filter, or return all orders
  if no filter
  - filter: in ['finished', 'toPay', 'toShip',
  'toConfirm', ]

- user/:id/identity

  return all identities of a user

- user/:id/identity/create

- user/:id/identity/delete

- user/:id/review

  - page: number

- user/cart/clear

  clear cart items

- user/cart/submit

  submit checked items in cart, generate a new
  order, and remove checked items from the cart

## review

- review

  get all review, by date
  - page: numberk

- review/:id

  get detail of a review, populate product and comments


## 断货王

- outselling/:category/

  return some bestselling products in a category
  3 groups, each group with a featured image
  and 3 products.


