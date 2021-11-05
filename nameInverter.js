const nameInverter = function (name) {
  name = name.replace(/\s/g, '');
  if (name === '') {

    return '';
  }
  return name;
}
nameInverter(" name ")
nameInverter("first last");

module.exports = nameInverter;


