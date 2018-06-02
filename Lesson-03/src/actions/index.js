export const LOAD_STORIES = 'LOAD_STORIES';
export const CLEAR_STORIES = 'CLEAR_STORIES';

export function loadStories() {
  return {
    type: LOAD_STORIES
  }
}

export function clear() {
  return {
    type: CLEAR_STORIES
  }
}
