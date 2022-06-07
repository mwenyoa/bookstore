const CHECK_STATUS = 'bookstore/categoriesReducer/CHECK_STATUS';
const statusText = 'Under Construction';
// act
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// reduce
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return statusText;
    default:
      return state;
  }
};

export default categoriesReducer;
