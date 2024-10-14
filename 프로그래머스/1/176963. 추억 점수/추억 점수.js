const solution = (name, yearning, photo) => {
  const yearningMap = name.reduce((acc, curr, idx) => {
    acc[curr] = yearning[idx];
    return acc;
  }, {});

  return photo.map(persons => 
    persons.reduce((sum, person) => sum + (yearningMap[person] || 0), 0)
  );
};