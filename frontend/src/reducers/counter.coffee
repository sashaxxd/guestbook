{
  INCR
  DECR
} = {counter} = require 'actions'

initialState = 0

module.exports = (state = initialState, action) -> switch action.type
  when INCR then state + 2
  when DECR then state - 1
  else state
