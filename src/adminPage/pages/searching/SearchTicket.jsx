import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

const SearchTicket = () => {
  let { key } = useParams();
  const [listSearch, setListSearch] = React.useState([]);

  React.useEffect(() => {
    document.title = "Menu Tickets";
    getAllSearch();
  }, []);

  const getAllSearch = async () => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/ticket/all?assignee=${key}`,
      });
      setListSearch(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      {listSearch.map((search) => (
        <Card
          sx={{
            width: "100%",
            boxSizing: "border-box",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {search.assignee}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <hr />
            </Typography>
            <div style={{ display: "flex" }}>
              <div style={{ width: "100%", maxWidth: "140px" }}>
                Client Code
              </div>{" "}
              :<div style={{ paddingLeft: "15px" }}>DST</div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div style={{ width: "100%", maxWidth: "140px" }}>
                Client Phone
              </div>{" "}
              :<div style={{ paddingLeft: "15px" }}>TA</div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div style={{ width: "100%", maxWidth: "140px" }}>
                Client Email
              </div>{" "}
              :<div style={{ paddingLeft: "15px" }}>Ayam</div>
            </div>
            <br />
            <div style={{ width: "100%", display: "flex" }}></div>
            <div>SearchTicket</div>
          </CardContent>
        </Card>
      ))}
    </Fragment>
  );
};

export default SearchTicket;
