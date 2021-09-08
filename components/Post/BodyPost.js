import React, { useState } from "react";
import { Image } from "semantic-ui-react";
// import icVideo from "./../../img/icon/ic_video.jpeg";

function ImageView(props) {
  const [slideCount, setSlideCount] = useState(0);
  const pictures = props.imgData;

  const nextImage = () => {
    if (slideCount !== pictures.length - 1) {
      setSlideCount(slideCount + 1);
    }
  };
  const previousImage = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount - 1);
    }
  };

  return (
    <div>

      <Image
        className="photo-item-post"
        src='https://2.bp.blogspot.com/-xeLs9ijXa1Q/W87dI-japdI/AAAAAAAAADQ/sYMNYskObmM29f39S-wBF56CrT9eO_QPgCLcBGAs/s1600/tipe-data-python.png'
        alt={"User Experience"}
      />
      {/* main image */}
      {props.imgData.length == 0 ? (
        <div className="ratio-box">
          {props.imgData.map((photo, key) => {
            if (props.imgData.indexOf(photo) === slideCount) {
              const splitString = photo.split(".");
              const ext = splitString[1];
              return (
                <div>
                  <div>
                    <div className="container-photo-item-post">
                      {/* {ext === "mp4" ? (
                        <video
                          src={photo}
                          style={{
                            width: "100%",
                            height: "100%",
                            padding: ".5px",
                          }}
                          controls
                        />
                      ) : ( */}
                      <Image
                        className="photo-item-post"
                        src='https://2.bp.blogspot.com/-xeLs9ijXa1Q/W87dI-japdI/AAAAAAAAADQ/sYMNYskObmM29f39S-wBF56CrT9eO_QPgCLcBGAs/s1600/tipe-data-python.png'
                        alt={"User Experience"}
                      />
                      {/* )} */}
                    </div>
                  </div>

                  {props.imgData.length > 1 && (
                    <div
                      style={{
                        zIndex: 2,
                        textAlign: "center",
                        position: "absolute",
                        bottom: "0",
                        left: "47.5%",
                        color: "white",
                      }}
                    >
                      {slideCount + 1} of {props.imgData.length}
                    </div>
                  )}
                </div>
              );
            }
            return "";
          })}

          {/* left image */}
          {props.imgData.map((photo, key) => {
            if (props.imgData.indexOf(photo) === slideCount + 1) {
              const splitString = photo.split(".");
              const ext = splitString[1];
              return (
                <div className="left-photo-item-post">
                  {ext === "mp4" ? (
                    <Image
                      style={{ width: "100%", height: "60%" }}
                      className="pointer-link"
                      onClick={nextImage}
                      src={icVideo}
                      alt={"Preview Experience"}
                    />
                  ) : (
                    <Image
                      className="left-right-photo-item-post pointer-link"
                      onClick={nextImage}
                      src={photo}
                      alt={"Preview Experience"}
                    />
                  )}
                </div>
              );
            }
            return "";
          })}

          {/* right image */}
          {props.imgData.map((photo, key) => {
            if (props.imgData.indexOf(photo) === slideCount - 1) {
              return (
                <div className="right-photo-item-post">
                  <Image
                    className="left-right-photo-item-post pointer-link"
                    onClick={previousImage}
                    src={photo}
                    alt={"Preview Experience"}
                  />
                </div>
              );
            }
            return "";
          })}
        </div>
      ) : (
        ""
      )}
      {props.note}
    </div>
  );
}

export default ImageView;
