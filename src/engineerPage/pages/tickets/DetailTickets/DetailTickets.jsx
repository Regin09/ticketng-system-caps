import React, { Fragment, useState, useRef } from "react";
import {
  CircularProgress,
  DialogContentText,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { makeStyles } from "@mui/styles";
import ReactHtmlParser from "react-html-parser";
import "./app.css";
import dayjs from "dayjs";
import MuiAlert from "@mui/material/Alert";

function formatDate(dateTimeString) {
  if (dateTimeString === null) {
    return "Null";
  }
  const dateTime = new Date(dateTimeString);

  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();

  const formattedDate = `${date}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return ` ${formattedTime} - ${formattedDate} `;
}

function formatCreatedAt(dateTimeString) {
  const dateTime = new Date(dateTimeString);

  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();

  const formattedDate = `${date < 10 ? "0" + date : date}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  return formattedDate;
}

function joinWords(inputArray) {
  if (!Array.isArray(inputArray)) {
    return "";
  }

  return inputArray.join(", ");
}

const useStyles = makeStyles({
  filledTextField: {
    width: "100%",
    maxWidth: "500px",
    background: "#FF0000", // Change '#FF0000' to the desired color
    borderRadius: "7px",
    [`& fieldset`]: {
      borderRadius: 30,
    },
  },
});

const DetailTickets = () => {
  const [open, setOpen] = useState(false);

  function handleDeleteClick() {
    setOpen(true);
  }

  function handleDeleteConfirm() {
    // Perform the deletion action here
    setOpen(false);
  }

  function handleDeleteCancel() {
    setOpen(false);
  }
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  let { id } = useParams();
  const [detailTicket, setDetailTicket] = useState([]);
  const [formComment, setFormComment] = useState({
    // _id: null,
    ticketID: id,
    comment: "",
  });
  const [allComment, setallComment] = useState([]);
  const [userProfile, setUserProfile] = useState();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const showAlert = (severity, message) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertOpen(true);
  };
  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const [formEdit, setFormEdit] = useState({
    id: null,
    subject: "",
    description: "",
    reporter: "",
    clientCode: "",
    assignee: "",
    duedate: dayjs(),
    priority: "",
    status: "",
    labels: [],
    score: "",
  });

  React.useEffect(() => {
    document.title = "Detail Ticket";
    getAllTickets(id);
    getAllCommentbySpecificID();
    getUserProfileHandler();
  }, []);

  const getUserProfileHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/api/member/profile/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setUserProfile(res.data.data);
      // console.log(userProfile);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };

  const getAllCommentbySpecificID = async () => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/comment/ticketID/${id}`,
      });
      setallComment(res.data.data);
      console.log(res.data.data);
      console.log(allComment);
      // console.log(res.data.ticket.);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateComment = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/comment/create`,
        data: data,
      });
      setFormComment({
        ticketID: id,
        comment: "",
      });
      console.log(res.data.data);
      getAllCommentbySpecificID();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditComment = async (data) => {
    try {
      const res = await axios({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/comment/${data._id}`,
        data: {
          comment: data.comment,
        },
      });
      setFormComment({
        // _id: null,
        ticketID: id,
        comment: "",
      });
      console.log(res.data.data);
      getAllCommentbySpecificID();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (data) => {
    try {
      const res = await axios({
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/comment/${data._id}`,
      });
      console.log(res.data.data);
      getAllCommentbySpecificID();
      setallComment((prevComments) =>
        prevComments.filter((comment) => comment._id !== data._id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTickets = async (id) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/${id}`,
      });

      setDetailTicket(res.data.ticket[0]);
      console.log(res.data.ticket);
      console.log(detailTicket);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDoneStatusTickets = async () => {
    // if (!detailTicket.assignee) {
    //   setAlertSeverity("error");
    //   setAlertMessage("Please provide an assignee.");
    //   setAlertOpen(true);
    //   return; // Stop further execution
    // }
    try {
      const res = await axios({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/${id}`,
        data: {
          subject: detailTicket.subject,
          description: detailTicket.description,
          reporter: detailTicket.reporter,
          clientCode: detailTicket.clientCode,
          assignee: detailTicket.assignee,
          duedate: detailTicket.duedate,
          priority: detailTicket.priority,
          status: "Done",
          labels: detailTicket.labels,
        },
      });

      console.log(res.data);
      getAllTickets();
    } catch (error) {
      showAlert("error", error.response.data.message);
      console.log(error);
    }
  };

  if (!detailTicket) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50vh",
            height: "50vh",
          }}
        >
          <CircularProgress
            style={{
              position: "absolute",
              top: "26%",
              left: "45%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
            color="success"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              animation: "rotate 2s linear infinite",
              zIndex: 0,
            }}
          ></div>
        </div>
      </div>
    );
  }
  const toolbarOptions = [
    [{ header: 1 }, { header: 2 }],
    ["bold", "italic", "underline"],
    [{ list: "bullet" }, { list: "ordered" }],
    [
      {
        script: "sub",
      },
      {
        script: "super",
      },
    ],
    ["link"],
  ];

  const handleEditButtonClick = () => {
    setIsEditMode(true);
    if (!formComment._id) {
      handleCreateComment(formComment);
    } else {
      handleEditComment(formComment);
    }

    setIsEditing(!isEditing);
  };

  const handleCreateNewComment = () => {
    setFormComment({
      _id: null,
      ticketID: id,
      comment: "",
    });
    setIsEditing(false);
  };

  const handleDiscardChangesClick = () => {
    setFormComment({
      ...formComment,
      _id: null,
      comment: "",
    });
    window.location.reload();
    setIsEditing(false);
  };

  return (
    <Fragment>
      <Link
        to={`/tickets-Engineer/detailTickets/editTickets/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            color: "black",
            background: "#FFFFFF",
            height: "36px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          Edit Ticket
        </Button>
      </Link>

      {/* {detailTicket.status === "Done" ? null : (
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if (!detailTicket.assignee) {
              showAlert("error", "Please provide an assignee.");
            } else {
              updateDoneStatusTickets(detailTicket);
              navigate("/tickets-Engineer");
            }
          }}
          sx={{
            color: "black",
            background: "#FFFFFF",
            height: "36px",
            cursor: "pointer",
            marginLeft: "16px",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          Done Ticket
        </Button>
      )} */}

      <br />

      <Grid container spacing={2} style={{ paddingTop: "16px" }}>
        <Grid item xs={12} md={6} lg={9}>
          <Card
            sx={{
              width: "100%",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              padding: "16px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "30px", fontWeight: "700" }}
            >
              {!detailTicket ? "Loading..." : detailTicket.subject}
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "22px", fontWeight: "600" }}
            >
              Description
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", fontWeight: "400" }}
            >
              {!detailTicket ? "Loading..." : detailTicket.description}
            </Typography>
          </Card>
          <br />
          <Card
            sx={{
              width: "100%",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              padding: "16px",
              maxWidth: "500px",
              background: "#F1F6F9",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "20px", fontWeight: "700" }}
            >
              {!userProfile ? "Loading..." : <span>{userProfile.name}</span>}
              <hr />
            </Typography>
            <br />
            <ReactQuill
              className="app"
              value={formComment.comment}
              onChange={(value) => {
                setFormComment({ ...formComment, comment: value });
              }}
              placeholder="Write a comment..."
              modules={{ toolbar: { container: toolbarOptions } }}
              style={{ maxWidth: "500px" }}
              bounds={".app"}
            />
          </Card>

          <br />
          <Button
            variant="contained"
            onClick={() => {
              if (!formComment._id) {
                handleCreateComment(formComment);
              } else {
                handleEditComment(formComment);
              }
              setFormComment({
                _id: null, // Mengatur nilai _id ke null saat membuat komentar baru
                ticketID: id,
                comment: "",
              });
              setIsEditing(false); // Mengatur nilai isEditing ke false saat membuat komentar baru
            }}
            // onClick={() => {
            //   if (!formComment._id) {
            //     handleCreateComment(formComment);
            //   } else {
            //     handleEditComment(formComment);
            //   }
            // }}
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "7px",
              cursor: "pointer",
              marginBottom: "15px",
              "&:hover": {
                backgroundColor: "white",
              },
              marginRight: "10px",
            }}
          >
            {!isEditing ? (!formComment._id ? "Comment" : "Edit") : "Comment"}
          </Button>

          {!formComment._id || isEditing ? null : (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "7px",
                marginBottom: "14px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={handleDiscardChangesClick}
            >
              Discard Changes
            </Button>
          )}
          {allComment.length === 0
            ? null
            : allComment.map((item) => (
                <Fragment>
                  <Card
                    key={item._id}
                    sx={{
                      width: "100%",
                      border: "1px solid rgba(0, 0, 0, 0.2)",
                      borderRadius: "10px",
                      padding: "16px",
                      maxWidth: "500px",
                      background: "#F1F6F9",
                      marginBottom: "15px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      {item.name}
                      <hr />
                    </Typography>
                    <br />
                    <Card
                      variant="outlined"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                        marginLeft: "15px",
                        marginBottom: "3px",
                        marginTop: "-10px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          width: "100%",
                          maxWidth: "500px",
                          "& .MuiTypography-root": {
                            display: "inline",
                          },
                        }}
                      >
                        {ReactHtmlParser(item.comment)}
                      </Typography>
                    </Card>

                    {item.name === userProfile?.name && (
                      <div>
                        <Button
                          onClick={() => {
                            setFormComment({
                              ...formComment,
                              _id: item._id,
                              comment: item.comment,
                            });
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => {
                            handleDeleteComment(item);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </Card>
                </Fragment>
              ))}

          <br />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={10} md={4} lg={3}>
          <Card
            sx={{
              width: "100%",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              padding: "16px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Reporter
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {!detailTicket ? "Loading..." : detailTicket.reporter}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Created by
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {!detailTicket ? "Loading..." : detailTicket.createdBy}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Assignee
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "700" }}
            >
              {!detailTicket
                ? "Loading..."
                : detailTicket.assignee || "There's no assignee now"}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Status
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                fontWeight: "200",
                color:
                  detailTicket.status === "Selected"
                    ? "black"
                    : detailTicket.status === "Done"
                    ? "red"
                    : detailTicket.status === "To-Do"
                    ? "#FF8A00"
                    : detailTicket.status === "In-Progress"
                    ? "#1B8500"
                    : detailTicket.status === "Delivered"
                    ? "#1D5D9B"
                    : detailTicket.status === "Need-Approval"
                    ? "#4C4B16"
                    : "none",
              }}
            >
              {!detailTicket ? "Loading..." : detailTicket.status}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Client
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {!detailTicket ? "Loading..." : detailTicket.clientCode}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Priority
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {!detailTicket ? (
                "Loading..."
              ) : (
                <div style={{ fontWeight: 700 }}>
                  <div
                    style={{
                      height: "17px",
                      width: "17px",
                      backgroundColor:
                        detailTicket.priority === "Critical"
                          ? "red"
                          : detailTicket.priority === "High"
                          ? "orange"
                          : detailTicket.priority === "Medium"
                          ? "yellow"
                          : detailTicket.priority === "Low"
                          ? "green"
                          : "none",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></div>
                  {detailTicket.priority}
                </div>
              )}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Estimated Resolution Time
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {!detailTicket ? "Loading..." : formatDate(detailTicket.duedate)}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Created Date
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {!detailTicket
                ? "Loading..."
                : formatCreatedAt(detailTicket.createdAt)}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Labels
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {!detailTicket
                ? "Loading..."
                : joinWords(detailTicket.labels) || "No Label Added"}
            </Typography>
            <hr />
            <br />
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Score
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {!detailTicket
                ? "Loading..."
                : detailTicket.score || "Score hasn't been entered by user"}
            </Typography>
            <hr />
            <br />
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseAlert}
          severity={alertSeverity}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </Fragment>
  );
};

export default DetailTickets;
