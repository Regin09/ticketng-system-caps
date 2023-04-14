import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import "./clients.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Clients = () => {
  return (
  <Container>
    <Grid container spacing={4}>
      <Grid item md={12} xl={12} sm={12} className='togle-clients'>
        <Stack spacing={2} direction="row">
          <Button 
            variant="contained"
            sx={{
              color:"black",
              background:"#FFFFFF",
              height:"36px",
              width:"170px",
              "&:hover":{
                backgroundColor:"white"
              }
              }}>
            <AddCircleOutlineOutlinedIcon
            sx={{
              display: "flex",
              alignItems: "center",
              paddingRight: "2.5px",
              cursor: "pointer",
              marginTop: "3.4px",
              marginBottom: "5px",
              }}/>
            Create Client
          </Button>
          <Button 
            variant="contained" 
            sx={{
              color:"black",
              background:"#FFFFFF",
              height:"36px",
              "&:hover":{
                backgroundColor:"white"

              }
              }}>
            <AnalyticsOutlinedIcon
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "2px",
              cursor: "pointer",
              marginTop: "3.4px",
              marginBottom: "5px",
              }}/>
            Client Analytics
          </Button>
        </Stack>
      </Grid>
      <Grid item md={4} xl={4} sm={12} >
      <Card sx={{ 
          minWidth: "343px", 
          height: "264px",
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
          <CardContent>
            <Typography variant="h5" component="div" 
            sx={{
              display:'flex',
              justifyContent:'center',
            }}>
              DeltaSoft Tech
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <hr/>
            </Typography>
            <Typography variant="body2">
              Client Code : DST
            <br />
            <br />
              Client Phone : 08122222
            <br />
            <br />
              Client Email : deltasoft@tech.com
            </Typography>
            <br />
          </CardContent>
          <Stack spacing={-3} direction="row">
          <CardActions>
            <Button size="small">
            <BorderColorOutlinedIcon/>
           </Button> 
          </CardActions>
          <CardActions>
            <Button size="small" sx={{width:"10px"}}>
            <DeleteOutlineOutlinedIcon/>
            </Button>
          </CardActions>
          </Stack>
        </Card> 
      </Grid>
      <Grid item md={4} xl={4} sm={12} >
      <Card sx={{ 
          minWidth: "343px", 
          height: "264px",
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
          <CardContent>
            <Typography variant="h5" component="div" 
            sx={{
              display:'flex',
              justifyContent:'center',
            }}>
              DeltaSoft Tech
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <hr/>
            </Typography>
            <Typography variant="body2">
              Client Code : DST
            <br />
            <br />
              Client Phone : 08122222
            <br />
            <br />
              Client Email : deltasoft@tech.com
            </Typography>
            <br />
          </CardContent>
          <Stack spacing={-3} direction="row">
          <CardActions>
            <Button size="small">
            <BorderColorOutlinedIcon/>
           </Button> 
          </CardActions>
          <CardActions>
            <Button size="small" sx={{width:"10px"}}>
            <DeleteOutlineOutlinedIcon/>
            </Button>
          </CardActions>
          </Stack>
        </Card> 
      </Grid>
      <Grid item md={4} xl={4} sm={12} >
      <Card sx={{ 
          minWidth: "343px", 
          height: "264px",
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
          <CardContent>
            <Typography variant="h5" component="div" 
            sx={{
              display:'flex',
              justifyContent:'center',
            }}>
              DeltaSoft Tech
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <hr/>
            </Typography>
            <Typography variant="body2">
              Client Code : DST
            <br />
            <br />
              Client Phone : 08122222
            <br />
            <br />
              Client Email : deltasoft@tech.com
            </Typography>
            <br />
          </CardContent>
          <Stack spacing={-3} direction="row">
          <CardActions>
            <Button size="small">
            <BorderColorOutlinedIcon/>
           </Button> 
          </CardActions>
          <CardActions>
            <Button size="small" sx={{width:"10px"}}>
            <DeleteOutlineOutlinedIcon/>
            </Button>
          </CardActions>
          </Stack>
        </Card> 
      </Grid>
      <Grid item md={4} xl={4} sm={12} >
      <Card sx={{ 
          minWidth: "343px", 
          height: "264px",
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
          <CardContent>
            <Typography variant="h5" component="div" 
            sx={{
              display:'flex',
              justifyContent:'center',
            }}>
              DeltaSoft Tech
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <hr/>
            </Typography>
            <Typography variant="body2">
              Client Code : DST
            <br />
            <br />
              Client Phone : 08122222
            <br />
            <br />
              Client Email : deltasoft@tech.com
            </Typography>
            <br />
          </CardContent>
          <Stack spacing={-3} direction="row">
          <CardActions>
            <Button size="small">
            <BorderColorOutlinedIcon/>
           </Button> 
          </CardActions>
          <CardActions>
            <Button size="small" sx={{width:"10px"}}>
            <DeleteOutlineOutlinedIcon/>
            </Button>
          </CardActions>
          </Stack>
        </Card> 
      </Grid>
    </Grid>
    </Container>
  )
}


export default Clients