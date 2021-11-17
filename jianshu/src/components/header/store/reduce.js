const initialValue = { focus: false };
export default (pre = initialValue, action) => {
  switch (action.type) {
    case "search_focus":
      return { focus: true };
    case "search_blur":
      return { focus: false };
    default:
      return pre;
  }
};