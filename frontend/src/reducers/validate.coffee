{validate, status} = require 'actions'
{extend} = require 'underscore'

{VALIDATE_USER_FIELDS, } = validate
{SUCCESS, FAILURE, RESET} = status

factory = (error = null, loading = no) -> {error, loading}
initialState = factory()

module.exports = (state = initialState, action) -> switch action.type
  when VALIDARE_USER_FIELDS then extend state, factory null, yes
  when VALIDATE_USER_FIELDS + SUCCESS then extend state, initialState
  when VALIDATE_USER_FIELDS + FAILURE then extend state, factory
    error: action.payload
  when RESET + VALIDATE_USER_FIELDS then extend state, initialState
  else state
