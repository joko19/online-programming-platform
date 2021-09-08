import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { logoutUser } from "./../../actions/authActions";
// import apiProfile from "../../actions/profile/updateProfile";
// import apiComment from "./../../actions/Dashboard/comment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

class PostComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCheck: false,
      totalLike: "",
      userlog: this.props.auth.user.name,
      coverProfile: "",
    };
  }

  loadCheckLike = async () => {
    const data = {
      idComment: this.props.idComment,
      userLike: this.state.userlog,
    };
    const check = await apiComment.checkLike(data);
    this.setState({
      likeCheck: check.data.result,
    });
  };

  loadCountLike = async () => {
    const total = await apiComment.countLike(this.props.idComment);
    this.setState({
      totalLike: total.data.total,
    });
  };

  loadCoverProfile = async () => {
    const profil = await apiProfile.detailProfile(this.props.username);
    this.setState({
      coverProfile: profil.data.data[0].photoProfile,
    });
  };

  componentDidMount = () => {
    // this.loadCoverProfile();
    // this.loadCheckLike();
    // this.loadCountLike();
  };

  // componentWillReceiveProps() {
  //   this.loadCoverProfile();
  // }

  handleLike = async () => {
    const data = {
      idComment: this.props.idComment,
      userLike: this.state.userlog,
    };
    this.setState({
      likeCheck: true,
    });
    await apiComment.like(data);
    this.loadCountLike();
  };

  handleCancelLike = async () => {
    const data = {
      idComment: this.props.idComment,
      userLike: this.state.userlog,
    };
    this.setState({
      likeCheck: false,
    });
    await apiComment.cancelLike(data);
    this.loadCountLike();
  };

  dateTimeStampp = (e) => {
    var secondsPast = Math.floor((new Date() - e) / 1000);
    if (secondsPast < 60) {
      return "Just Now";
    } else if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + "  menit";
    } else if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + " jam";
    } else if (secondsPast <= 604800) {
      return parseInt(secondsPast / 86400) + "  hari";
    } else if (secondsPast > 86400) {
      var s = new Date(Math.floor(e)).toLocaleDateString("en-US");
      return s;
    }
  };

  render() {
    let btnLike;
    if (this.state.likeCheck) {
      btnLike = (
        <ThumbUpAltIcon
          className="pointer-link"
          color="primary"
          onClick={this.handleCancelLike}
        />
      );
    } else {
      btnLike = (
        <ThumbUpAltIcon className="pointer-link" onClick={this.handleLike} />
      );
    }

    return (
      <div className="box-view-comment" >
        <hr />
        <img
          className="img-profile-card"
          src={this.state.coverProfile}
          alt=""
        />
        <p
          className="pointer-link"
          style={{ display: "inline", fontWeight: "bold" }}
          onClick={() => this.props.goUser(this.props.username)}
        >
          {this.props.username}
        </p>
        <p
          style={{
            float: "right",
            color: "black",
          }}
        >
          {this.dateTimeStampp(this.props.timestamp)}
        </p>
        <p style={{ fontStyle: "italic" }}> {this.props.comment}</p>
        <div style={{ marginTop: -15 }}>
          {btnLike} {this.state.totalLike}
        </div>
      </div>
    );
  }
}
export default PostComment
// PostComment.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });
// export default connect(mapStateToProps, { logoutUser })(PostComment);
