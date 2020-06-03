
const initData = {
    user: {},
    isLoading: false,
    error: null,
  };
  const loginReducer = (state = initData, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.user
      }
      default:
        return state;
    }
  };
  export default loginReducer;