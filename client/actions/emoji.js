import { getEmoji } from '../api/emoji'

export const FILTER_EMOJI = 'FILTER_EMOJI'
export const SAVE_EMOJI = 'SAVE_EMOJI'

export function filterEmoji (query) {
  return {
    type: FILTER_EMOJI,
    query
  }
}

export function saveEmoji (emoji) {
  return {
    type: SAVE_EMOJI,
    emoji
  }
}

export function fetchEmoji () {
  return dispatch => {
    getEmoji()
      .then(emoji => {
        dispatch(saveEmoji(emoji))
      })
  }
}
