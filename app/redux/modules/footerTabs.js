const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';

export function changeActiveTab (tab) {
  return {
    type: CHANGE_ACTIVE_TAB,
    tab
  }
}

const initialState = {
  activeTab: 'home'
}

export default function footerTabs (state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_TAB :
      return {
        ...state,
        activeTab: action.tab
      }
    default :
      return state
  }
};
