import React from 'react'
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => response.json());
      setProfile(res);
    }, 5000);
  })
  return (
    <div className='user'>
      <h2>User Detail</h2>
      {
        profile && (
          <div className="profile-wrapper">
            <div className="profile">
              <div>
                <img src={`https://ui-avatars.com/api/?name=${profile.name}&rounded=true&size=96`} alt="" />
              </div>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.email}</p>
                <a href={profile.website}>{profile.website}</a>
              </div>
            </div>
          </div>
        )
      }

      {!profile && <SkeletonProfile theme={`dark`} />}
    </div>
  );
}

export default User