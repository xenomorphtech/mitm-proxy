export const saveFile = (text, filename) => {
  const a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
  a.setAttribute('download', filename);
  a.click();
  a.remove();
};