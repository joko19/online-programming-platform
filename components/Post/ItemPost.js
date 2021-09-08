import React from "react";
import CommentIcon from "@material-ui/icons/Comment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { TextField } from "@material-ui/core";
// import apiFollow from "./../../actions/traveler/followAction";
// import apiPost from "./../../actions/Dashboard/post";
// import apiProfile from "../../actions/profile/updateProfile";
// import apiComment from "./../../actions/Dashboard/comment";
// import { baseURL } from "./../../actions/instance";
// import icLocation from "./../../img/icon/ic_location.png";
import ImageView from "./BodyPost";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import Delete from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostComment from "./PostComment";
import Skeleton from "@material-ui/lab/Skeleton";
import ShareIcon from "@material-ui/icons/Share";

// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
//   TelegramShareButton,
//   TelegramIcon,
//   PinterestShareButton,
//   PinterestIcon,
//   LineShareButton,
//   LineIcon,
// } from "react-share";

class ItemPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCheck: false,
      totalLike: "",
      coverProfile: "",
      nameImgDestination: "",
      comment: "",
      totalComment: "",
      imagePost: this.props.imgPost,
      owner: false,
      setOpen: false,
      hidden: false,
      deleteDialog: false,
      listComment: [],
      newComment: [],
      loading: false,
      // urlShare: baseURL + "/post/" + this.props.idPost,
    };
  }

  loadCheckLike = async () => {
    const data = {
      idPost: this.props.idPost,
      userLike: this.props.userlog,
    };
    const check = await apiFollow.checkLike(data);
    this.setState({
      likeCheck: check.data.result,
    });
  };

  loadCountLike = async () => {
    const total = await apiFollow.countLike(this.props.idPost);
    this.setState({
      totalLike: total.data.total,
    });
  };

  loadCountComment = async () => {
    const total = await apiComment.count(this.props.idPost);
    this.setState({
      totalComment: total.data.total,
    });
  };

  loadCoverDestination = async () => {
    const loadCover = await apiPost.getCover(this.props.namePlace);
    if (loadCover.data.length > 0) {
      this.setState({
        nameImgDestination: loadCover.data[0].cover,
      });
    }
  };

  loadCoverProfile = async () => {
    const profil = await apiProfile.detailProfile(this.props.username);
    this.setState({
      name: profil.data.data[0].name,
      coverProfile: profil.data.data[0].photoProfile,
      loading: false,
    });
  };

  isOwner = () => {
    if (this.props.username === this.props.userlog) {
      this.setState({
        owner: true,
      });
    }
  };

  loadComment = async () => {
    const dataComment = await apiComment.preview(this.props.idPost);
    this.setState({
      listComment: dataComment.data,
    });
  };

  dateTimeStampp = (e) => {
    var secondsPast = Math.floor((new Date() - e) / 1000);
    if (secondsPast < 60) {
      return parseInt(secondsPast) + "  detik";
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

  componentDidMount = () => {
    // this.isOwner();
    // this.loadCoverDestination();
    // this.loadCheckLike();
    // this.loadCountLike();
    // this.loadCoverProfile();
    // this.loadCountComment();
    // this.loadComment();
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLike = async () => {
    const data = {
      idPost: this.props.idPost,
      userLike: this.props.userlog,
    };
    this.setState({
      likeCheck: true,
    });
    await apiFollow.like(data);
    this.loadCountLike();
  };

  handleCancelLike = async () => {
    const data = {
      idPost: this.props.idPost,
      userLike: this.props.userlog,
    };
    this.setState({
      likeCheck: false,
    });
    await apiFollow.cancelLike(data);
    this.loadCountLike();
  };

  submitComment = (e) => {
    const data = {
      idPost: this.props.idPost,
      user: this.props.userlog,
      comment: this.state.comment,
    };
    apiComment.add(data);

    const nComment = {
      idPost: this.props.idPost,
      user: this.props.userlog,
      comment: this.state.comment,
      timestamp: Date.now(),
    };
    this.setState({
      comment: "",
    });
    this.state.newComment.push(nComment);
    console.log(this.state.listComment);
    e.preventDefault();
  };

  handleOpen = () => {
    this.setState({
      setOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false,
    });
  };

  handleOpenDelete = () => {
    this.setState({
      deleteDialog: true,
    });
  };

  handleClose = () => {
    this.setState({
      deleteDialog: false,
      openShare: false,
    });
  };

  shareButton = () => {
    this.setState({
      openShare: true,
    });
  };

  deletePost = (e) => {
    e.preventDefault();
    if (this.props.imgPost.length > 0) {
      apiPost.deletePost(this.props.idPost, this.props.imgPost);
    } else {
      apiPost.deletePostText(this.props.idPost);
    }

    const dataID = {
      idPost: this.props.idPost,
    };
    apiFollow.removeLike(dataID);
    this.setState({
      deleteDialog: false,
    });
  };

  try = () => {
    this.setState({
      setOpen: false,
    });
    console.log("try");
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

    const actions = [
      { icon: <Delete onClick={this.handleOpenDelete} />, name: "Delete" },
      { icon: <FavoriteIcon onClick={this.try} />, name: "Like" },
    ];
    return (
      <div className="item-post">
        <div className="item-dashboard">
          <div className="item-header">
            {this.state.loading ? (
              <div style={{ display: "flex" }}>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={150} height={40} />
              </div>
            ) : (
              <div>
                <img
                  className="img-profile-card"
                  src={this.state.coverProfile}
                  alt=""
                />
                <span
                  style={{ display: "inline" }}
                  className="pointer-link"
                  onClick={() => this.props.goUser(this.props.username)}
                >
                  {this.state.name} @{this.props.username}
                </span>

                <p
                  style={{
                    float: "right",
                    color: "black",
                  }}
                >
                  {this.dateTimeStampp(this.props.timestamp)}
                </p>
              </div>
            )}

            {this.props.namePlace ? (
              <div
                style={{ float: "right", marginTop: -25, marginRight: 5 }}
                className="pointer-link"
                onClick={() => this.props.goDestination(this.props.namePlace)}
              >
                <img
                  className="icon-location"
                  src={icLocation}
                  alt="ic location"
                />
                {this.props.namePlace}
              </div>
            ) : (
              ""
            )}
          </div>
          <ImageView imgData='https://2.bp.blogspot.com/-xeLs9ijXa1Q/W87dI-japdI/AAAAAAAAADQ/sYMNYskObmM29f39S-wBF56CrT9eO_QPgCLcBGAs/s1600/tipe-data-python.png' note={this.props.note} />
        </div>

        <div style={{ display: "flex", alignItems: "center", padding: 3 }}>
          <div style={{ display: "inline" }}>
            {btnLike} {this.state.totalLike} &nbsp;
            <CommentIcon
              className="pointer-link"
              onClick={() =>
                this.props.goDetail(
                  this.props.idPost,
                  this.props.username,
                  this.props.namePlace
                )
              }
            />
            {this.state.totalComment} &nbsp;
            <ShareIcon onClick={this.shareButton} className="pointer-link" />
            {/* <SpeedDial
                direction="right"
                ariaLabel="SpeedDial openIcon example"
                icon={<ShareIcon openIcon={<SpeedDialIcon />} />}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                open={this.state.setOpen}
                style={{display: 'inline'}}
              >
                {share.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.click}
                  />
                ))}
              </SpeedDial> */}
          </div>
          {this.state.owner ? (
            <div style={{ marginLeft: "auto", outline: "none" }}>
              <SpeedDial
                direction="left"
                ariaLabel="SpeedDial openIcon example"
                icon={<MoreVertIcon openIcon={<SpeedDialIcon />} />}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                open={this.state.setOpen}
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.click}
                  />
                ))}
              </SpeedDial>
            </div>
          ) : (
            ""
          )}
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Comment</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ width: "100%", backgroundColor: "white" }}>
            <Typography
              style={{
                width: "100%",
                backgroundColor: "gainsboro",
                borderRadius: 20,
                padding: 10,
              }}
            >
              <form onSubmit={this.submitComment}>
                <TextField
                  id="comment"
                  margin="normal"
                  // variant="outlined"
                  label="Add Comment ..."
                  disableUnderline="true"
                  onChange={this.onChange}
                  value={this.state.comment}
                  fullWidth
                  autoComplete="off"
                />
              </form>
              {/* {this.state.newComment.map((item) => (
                <PostComment
                  username={item.user}
                  comment={item.comment}
                  timestamp={item.timestamp}
                  goUser={this.handleUserDetail}
                />
              ))}
              {this.state.listComment.map((item) => (
                <PostComment
                  username={item.user}
                  idComment={item._id}
                  comment={item.comment}
                  timestamp={item.timestamp}
                  goUser={this.handleUserDetail}
                />
              ))} */}
            </Typography>
          </AccordionDetails>
          <p
            className="pointer-link"
            style={{
              textAlign: "right",
              marginRight: 15,
              fontSize: 12,
            }}
            onClick={() =>
              this.props.goDetail(
                this.props.idPost,
                this.props.username,
                this.props.namePlace,
                this.props.imgPost
              )
            }
          >
            View All Comments
          </p>
        </Accordion>

        <Dialog
          open={this.state.deleteDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Anda Yakin mau menghapus Koleksi Anda?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Koleksi yang sudah dihapus tidak akan dapat dikembalikan lagi
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deletePost} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        {/* <Dialog
          open={this.state.openShare}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {" Bagikan Pengalaman Anda"}
          </DialogTitle>
          <div style={{ display: "inline", margin: 5 }}>
            <FacebookShareButton
              url={this.state.urlShare}
              quote={this.props.note}
            >
              <FacebookIcon round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              url={this.state.urlShare}
              title={this.props.note}
            >
              <TwitterIcon round={true} />{" "}
            </TwitterShareButton>
            <TelegramShareButton
              url={this.state.urlShare}
              title={this.props.note}
            >
              <TelegramIcon round={true} />
            </TelegramShareButton>
            <WhatsappShareButton
              url={this.state.urlShare}
              title={this.props.note}
            >
              <WhatsappIcon round={true} />{" "}
            </WhatsappShareButton>
            <LineShareButton url={this.state.urlShare} title={this.props.note}>
              <LineIcon round={true} />
            </LineShareButton>
            <PinterestShareButton
              url={this.state.urlShare}
              media={this.state.imagePost[0]}
              description={this.props.note}
            >
              <PinterestIcon round={true} />
            </PinterestShareButton>
          </div>
        </Dialog> */}
      </div>
    );
  }
}

export default ItemPost;

export function ItemDestSuggest(props) {
  return (
    <p
      className="item-suggestion-destination"
      onClick={() => props.fill(props.namePlace)}
    >
      {props.namePlace}
    </p>
  );
}
