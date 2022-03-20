const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.payload === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default githubReducer;
