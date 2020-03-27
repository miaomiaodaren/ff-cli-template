const initUser = {
  name: 'aaa',
};

export default (state = initUser, action: {[key: string]: any}) => {
  switch (action.key) {
    default:
      return state;
  }
}