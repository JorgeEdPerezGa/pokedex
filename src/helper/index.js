export const fetchType = async() => {
  const fetchTypeData = await fetch('http://localhost:3001/types');
  return await fetchTypeData.json();
}
