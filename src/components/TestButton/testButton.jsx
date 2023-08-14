import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Select, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";

const PopupForm = ({ formEdit, setFormEdit }) => {
  return (
    <Grid item xs={12} md={12} xl={3}>
      <Typography variant="body2" sx={{ fontSize: "17px" }}>
        Score
      </Typography>

      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={formEdit.score}
        onChange={(e) => {
          setFormEdit({ ...formEdit, score: e.target.value });
        }}
        sx={{ width: "100%" }}
      >
        <MenuItem value={"1"}>1</MenuItem>
        <MenuItem value={"2"}>2</MenuItem>
        <MenuItem value={"3"}>3</MenuItem>
        <MenuItem value={"4"}>4</MenuItem>
        <MenuItem value={"5"}>5</MenuItem>
      </Select>
    </Grid>
  );
};

const DetailTickets = () => {
  const [formEdit, setFormEdit] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    getAllTickets(id);
  }, []);

  const getAllTickets = async (id) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/${id}`,
      });

      setFormEdit(res.data.ticket[0]);

      if (
        res.data.ticket[0].status === "Done" &&
        res.data.ticket[0].score === null
      ) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateScoreValue = async () => {
    try {
      // Your updateScoreValue implementation
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showPopup && <PopupForm formEdit={formEdit} setFormEdit={setFormEdit} />}
      {/* Other components and JSX */}
    </>
  );
};

export default DetailTickets;
