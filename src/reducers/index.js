import {CLEAR_STORIES, LOAD_STORIES} from "../actions/index";

const stories = [
  {
    "by": "bleakgadfly",
    "id": 14967192,
    "title": "To Protect Voting, Use Open-Source Software",
    "url": "https://mobile.nytimes.com/2017/08/03/opinion/open-source-software-hacker-voting.html"
  },
  {
    "by" : "mtyurt",
    "id" : 14966545,
    "title" : "Git: Using Advanced Rebase Features for a Clean Repository",
    "url" : "https://mtyurt.net/2017/08/08/git-using-advanced-rebase-features-for-a-clean-repository/"
  },
  {
    "by" : "callumlocke",
    "id" : 14967335,
    "title" : "Inside an AI brain: What does machine learning look like?",
    "url" : "https://www.graphcore.ai/posts/what-does-machine-learning-look-like"
  }
];

const initialState = {
  items: [],
};

export function storiesReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_STORIES:
      return {
        items: stories.slice(),
      };
    case CLEAR_STORIES:
      return {
        items: [],
      };
    default: return state;
  }
}

export default storiesReducer;
