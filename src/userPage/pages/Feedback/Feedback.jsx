import * as React from 'react';
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, styled, useTheme } from "@mui/material";
import { Fragment } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import WarningIcon from "../../../assets/images/iconwarning.png";

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  background: 'linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)'
}));

const Feedback = () => {
  return (
    <Fragment>
      <h1>Give Feedback to The Engineer</h1>
      <Card
        sx={{
          minWidth: "100%",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          padding: "16px",
          height: "480px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Engineer Username
            </Typography>

            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{
                width: "100%",
                maxWidth: "300px",
                height: "5px",
                background: "#FFFFFF",
                borderRadius: "7px",
              }}
            />
          </Grid>
          <br />
          <br />
          <br />
          <Grid item xs={12} md={12} xl={12}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Feedback
              <br />
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={10}
              sx={{
                width: "100%",
                height: "10px",
                background: "#FFFFFF",
                borderRadius: "7px",
              }}
            />
          </Grid>
          <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <Grid item xs={12} md={12} xl={12}>
            <Button
              variant="contained"
              sx={{
                color: "black",
                background: "#BFFF58",
                height: "53px",
                width: "fix-content",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Send Feedback
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}

export default Feedback