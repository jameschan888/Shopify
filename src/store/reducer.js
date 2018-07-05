import * as actionTypes from "./actions";
const initialstate = {
  menuvisible: false,
  menuitem: null,
  imagedetailview: false,
  imageurl: null
};
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.SET_MENUINVISIBLE:
      return {
        ...state,
        menuvisible: false
      };
    case actionTypes.SET_MENUVISIBLE:
      return {
        ...state,
        menuvisible: true
      };
    case actionTypes.MENUITEM_CLICKED:
      return {
        ...state,
        menuitem: action.value
      };
    case actionTypes.IMAGE_DETAIL_VIEW:
      return {
        ...state,
        imagedetailview: action.value,
        imageurl: action.imageurl
      };
    default:
  }
  return state;
};
export default reducer;
