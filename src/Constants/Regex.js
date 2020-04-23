export default {
  PASSWORD: /^(.{8,})$/,
  USERNAME: /^([a-zA-Z0-9]{5,})$/,
  NAME: /^([a-zA-Z0-9 ]{5,})$/,
  URL: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
  PORT: /^([0-9]{4,5})$/
};