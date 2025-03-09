export const ExercisesOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '504a1cf360msh05ad0715a8d17b7p1a6c0djsn7b8a7831ee38',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}