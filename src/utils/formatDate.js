const formatDate = (date) => {
  const info = date.split('-');

  return `${info[2]}/${info[1]}/${info[0]}`

}

export default formatDate;