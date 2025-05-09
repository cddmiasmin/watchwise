export const getTMDBImage = (path, reso) => {
   const resolution = !reso ? 'original' : reso; 
   return `https://image.tmdb.org/t/p/${resolution}/${path}.jpg`;
}