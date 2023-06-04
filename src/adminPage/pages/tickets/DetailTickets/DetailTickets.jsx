import React, { Fragment,useState } from "react";
import { Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { makeStyles } from "@mui/styles";


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

  
  const classes = useStyles();
  const navigate = useNavigate();

  let { id } = useParams();
  const [detailTicket,setDetailTicket] = useState([]);
  const [formComment, setFormComment] = useState([]);
  const [allComment, setallComment] = useState([]);
   const [editComment, setEditComment] = useState({
    ticketID: "",
    comment: "",
   })

  React.useEffect(() => {
    document.title = "Edit Ticket";
    getAllTickets(id);
    getAllComment(id);
  }, []);

  const handleCreateComment = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/comment/create`,
        data: data,
      });
      console.log(res.data.data);
      navigate("/tickets-admin/detailTickets/:id");
    } catch (error) {
      console.log(error);
    }
  };

  const getAllComment = async () => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/comment/all`,
      });
      setallComment(res.data.data);
      console.log(res.data.data);
      console.log(allComment);
      // console.log(res.data.ticket.);
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
        url: `https://stg.capstone.adaptivenetworklab.org/api/ticket/${id}`,
      });
      setDetailTicket(res.data.ticket[0])
      console.log(res.data.ticket);
      console.log(detailTicket)
      // console.log(res.data.ticket.);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditComment = async (id) => {
    try {
      const res = await axios({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/comment/${id}`,
      });
      setEditComment({
        ticketID: "",
        comment: "",
      });
      console.log(res.data.data);
      navigate("/tickets-admin/detailTickets/:id");
    } catch (error) {
      console.log(error);
    }
  };
  
  const updateDoneStatusTickets = async () => {
    try {
      const res = await axios({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/ticket/${detailTicket._id}`,
        data: {
          subject: detailTicket.subject,
          description: detailTicket.description,
          reporter: detailTicket.reporter,
          clientCode: detailTicket.clientCode,
          assignee: detailTicket.assignee,
          duedate: detailTicket.duedate,
          priority: detailTicket.priority,
          status: 'Done',
          labels: [...detailTicket.labels],
          lastUpdatedAt: detailTicket.lastUpdatedAt,
          createdAt: detailTicket.createdAt,
          
        },
      });
      
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <Link
        to={`/tickets-admin/detailTickets/editTickets/${id}`}
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
      <Link
        to="/tickets-admin"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            updateDoneStatusTickets(detailTicket);
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
      </Link>
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
              {detailTicket.length === 0 ? "Loading..." : detailTicket.subject}
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
              {detailTicket.length === 0
                ? "Loading..."
                : detailTicket.description}
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
              {detailTicket.length === 0 ? "Loading..." : detailTicket.reporter}
              <hr />
            </Typography>
            <br />
            <TextField
              id="outlined-multiline-static"
              multiline
              
              placeholder="Write a comment..."
              InputProps={{ sx: { borderRadius: 10 } }}
              value={formComment.comment}
              onChange={(e) => {
                setFormComment({ ...formComment, comment: e.target.value });
              }}
              sx={{
                width: "100%",
                maxWidth: "500px",
              }}
            />
            <Button
              size="small"
              sx={{
                color: "black",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F1F6F9",
                },
              }}
            >
              Edit
            </Button>
            <Button
              size="small"
              sx={{
                color: "black",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F1F6F9",
                },
              }}
            >
              Delete
            </Button>
          </Card>
          <br />
          <Link
            to="/tickets"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "7px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Comment
            </Button>
          </Link>
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
              Created by
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {detailTicket.length === 0 ? "Loading..." : detailTicket.reporter}
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
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {detailTicket.length === 0 ? "Loading..." : detailTicket.assignee}
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
              sx={{ fontSize: "15px", fontWeight: "200" }}
            >
              {detailTicket.length === 0 ? "Loading..." : detailTicket.status}
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
              {detailTicket.length === 0
                ? "Loading..."
                : detailTicket.clientCode}
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
              {detailTicket.length === 0 ? "Loading..." : detailTicket.priority}
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
              {detailTicket.length === 0
                ? "Loading..."
                : formatDate(detailTicket.duedate)}
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
              {detailTicket.length === 0
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
              {detailTicket.length === 0
                ? "Loading..."
                : joinWords(detailTicket.labels)}
            </Typography>
            <hr />
            <br />
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DetailTickets;
