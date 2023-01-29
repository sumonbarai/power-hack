const getBillingId = (strLength) => {
  if (typeof strLength === "number" && strLength > 0) {
    let outPut = "";
    const possiableChar = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (let i = 0; i < strLength; i++) {
      const random = possiableChar.charAt(
        Math.floor(Math.random() * possiableChar.length)
      );
      outPut += random;
    }
    return outPut;
  }
  return false;
};

export default getBillingId;
