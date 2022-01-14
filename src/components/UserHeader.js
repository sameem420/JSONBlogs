import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  console.log(user);
  return (
    <div className=" ui tiny header red ">
      <i className="icon large user circle" />
      {user?.name}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find((usr) => usr.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
