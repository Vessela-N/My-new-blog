import {editState} from '../../common/helpers'

const recipeReducer = (state, action) => {
  const { type, payload } = action

  const edit = editState(state)

  const actions = {
    request: () => edit({ isPending: true }),
    'success': () => edit({
      recipes: payload,
      isPending: false,
      error: ''
    }),
    update: () => edit({
      isPending: false,
      error: '',
      recipes: [...state.recipes.filter(p =>  p._id !== payload._id), payload]
    }),
    insert: () => edit({
      isPending: false,
      error: ''
    }),
    'delete': () => edit({
      isPending: false,
      error: '',
    }),
    failure: () => edit({
      error: payload,
      isPending: false,
    })
  }

  const defaultFn = () => state
  const actionFn = actions[type.toLowerCase()] || defaultFn

  return actionFn()
}

export default recipeReducer
