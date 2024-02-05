const timestamp = Date.now();
const dateObj = new Date(timestamp);

const year = dateObj.getFullYear();
const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
const day = dateObj.getDate().toString().padStart(2, '0');
const hours = dateObj.getHours().toString().padStart(2, '0');
const minutes = dateObj.getMinutes().toString().padStart(2, '0');
const seconds = dateObj.getSeconds().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

module.exports = formattedDate;
