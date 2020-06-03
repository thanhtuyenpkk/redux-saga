
const initData = {
    name: '',
    age: 24,
  };
  const loginReducer = (state = initData, { type, payload }) => {
    switch (type) {
      case 'TEST':
        return state;
      default:
        return state;
    }
  };
  export default loginReducer;