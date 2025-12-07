require("datejs");

function combineUsers(...args) {
 
  const combinedObject = {
    users: []
  };

  for (const group of args) {
    combinedObject.users.push(...group);
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = combineUsers;



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};