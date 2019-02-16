var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign(object, key, value)
  return clone
}
