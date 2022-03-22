export const calculateRange = (data, rowsPerPage = 50) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) range.push(i);
  return range;
};

export const sliceData = (data, page, rowsPerPage = 50) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export const imageArray = (images) => images && images.split(",");
