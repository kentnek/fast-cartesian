import cartesianProductFunc from 'cartesian-product'
import cartesianFunc from 'cartesian'
import lodash from 'lodash'
// eslint-disable-next-line import/no-unassigned-import
import 'lodash.product'
import fastCartesianProductFunc from 'fast-cartesian-product'
import fastCartesianProductAltF from 'fast-cartesian-product-alt'
import PowerCartesianProduct from 'power-cartesian-product'

import { array as fastCartesianArray } from '../src/main.js'

export const fastCartesian = {
  title: 'fast-cartesian',
  main: args => fastCartesianArray(args),
}

export const fastCartesianProduct = {
  title: 'fast-cartesian-product',
  main: args => fastCartesianProductFunc(args),
}

export const fastCartesianProductAlt = {
  title: 'fast-cartesian-product (alternate)',
  main: args => fastCartesianProductAltF(args),
}

export const cartesianProduct = {
  title: 'cartesian-product',
  main: args => cartesianProductFunc(args),
}

export const powerCartesianProduct = {
  title: 'power-cartesian-product',
  main: args => [...new PowerCartesianProduct(args)],
}

export const cartesian = {
  title: 'cartesian',
  main: args => cartesianFunc(args),
}

export const lodashProduct = {
  title: 'lodash.product',
  main: args => lodash.product(...args),
}

// Retrieve several arguments for cartesian products:
//  - the return value length is always the same
//  - the number of dimensions and size of each array differ
// For example `length: 3` returns:
///  [[0, 1, 2, 3]] (1 dimension)
//   [[0, 1], [0, 1]] (2 dimensions)
//   [[0], [0], [0], [0]] (4 dimensions)
const getVariations = function(length) {
  return Array.from({ length }, (value, index) => getVariation(index, length))
}

const getVariation = function(index, length) {
  const dimensions = 2 ** index
  const unitLength = 2 ** (2 ** (length - index - 1))
  const unit = Array.from({ length: unitLength }, getIndex)
  const value = Array.from({ length: dimensions }, () => unit)
  const id = String(index + 1)
  const title =
    dimensions === 1 ? `${dimensions} array` : `${dimensions} arrays`
  return { id, title, value }
}

const getIndex = function(value, index) {
  return index
}

export const variations = getVariations(5)
