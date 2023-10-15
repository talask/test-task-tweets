export const toggleFollower = (id) => {
  
  let result = 0;
  const followers = localStorage.getItem('followers') || '[]';
  
  let followersArr = JSON.parse(followers);
  
  if (!Array.isArray(followersArr)) {
    followersArr = [];
  }
  
  const isFollowing = followersArr.includes(id);
  
  if (isFollowing) {
    result = -1;
    followersArr = followersArr.filter(followerId => followerId !== id);
    
  } else {
    result = 1;
    followersArr.push(id);
  }
  
  localStorage.setItem('followers', JSON.stringify(followersArr));

  return result;
};