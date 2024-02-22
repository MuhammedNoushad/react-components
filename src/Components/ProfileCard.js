import "./ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div className="profile_card">
      <h1>{props.name} </h1>
      <p>{props.email} </p>
    </div>
  );
};

export default ProfileCard;
