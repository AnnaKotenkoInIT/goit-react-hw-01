import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <img className={s.avatar} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.statItem}>
          <span className={s.statLabel}>Followers</span>
          <span className={s.statValue}>{stats.followers}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.statLabel}>Views</span>
          <span className={s.statValue}>{stats.views}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.statLabel}>Likes</span>
          <span className={s.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
