const getLabel = (value, dataSource) => {
  const arr = dataSource.filter(v => v.value === value)
  return arr.length ? arr[0].label : ''
}

export default {
  getLabel
}