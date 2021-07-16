function Action(data) {
  console.log("In actio");
  return {
    data: data,
    type: "getHistory",
  };
}

export default Action;
