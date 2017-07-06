export default arrayify
// Here's where you'll write arrayify. Look at
// `api/src/routes/utils/arrayify.js` for instructions.

function arrayify(arg) {
  if(Array.isArray(arg)) return arg;
  else return [arg];
}
