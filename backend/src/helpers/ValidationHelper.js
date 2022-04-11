module.exports = {
  validate_required_columns(
    req,
    model,
    guard = [],
    fillable = [],
    hasFile = false
  ) {
    const default_guard = ["id", "createdAt", "updatedAt"];
    const guards = default_guard.concat(guard);

    const model_attributes = Object.keys(model.rawAttributes);
    const attributes = model_attributes.concat(fillable);
    for (let attr of attributes) {
      if (guards.includes(attr)) continue;
      if (!req.body[attr]) return attr; // TODO FIX attr exist but nullable. ex : empty string
    }
    if (hasFile && req.file == undefined) return false;

    return true;
  },
};
