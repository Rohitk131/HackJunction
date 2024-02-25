import React from 'react'
import Navbar from './Navbar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Subscribe from '/subscribe.png';
import data from "../static_utils/sponsors.json"
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 1500,
  height: 100,
  padding: theme.spacing(4),
  ...theme.typography.body2,
  textAlign: 'center',
  fontWeight: 'bolder',
  fontSize: '30px',
  ":hover": { color: 'white' }
}));

const Sponsors = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='bg-[#25292A] text-white'>
      <Navbar current="sponsors"  />
      <div>
        <h1 className='w-fit mx-auto text-5xl my-10 font-bold tracking-tighter'>Explore our featured Sponsors</h1>
        <section className='w-fit mx-auto my-10 grid grid-cols-1 md:grid-cols-3'>
          {data.map((e) => {
            return (
              <Card sx={{ maxWidth: 345, margin: 2 }}>
                <CardContent>
                  <img src={e.image} alt={e.title} className='h-36 mx-auto' />
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold", margin: "auto", fontSize: "24px", color: "navy" }} className='w-fit'>
                    {e.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ margin: "auto", color: "navy" }}>
                    {e.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <button className='w-full h-10 bg-gray-800 text-white font-bold rounded '>Learn More</button>
                </CardActions>
              </Card>
            );

          })}
        </section>
        <section className='bg-[#1b1e1f] h-full w-screen'>
          <h1 className=' mx-auto text-5xl my-2 p-10 font-bold tracking-wider'>Find Actively Participating Sponsors</h1>
          <div className='h-fit mb-5 '>
            <Stack direction="column" spacing={2} className=' mx-auto'>
              <DemoPaper variant="elevation" className='scale-90 hover:bg-red-800 hover:scale-100  cursor-pointer' >Zebpay</DemoPaper>
              <DemoPaper variant="elevation" className='scale-90 hover:bg-slate-800 hover:scale-100  cursor-pointer' >Celo</DemoPaper>
              <DemoPaper variant="elevation" className='scale-90 hover:bg-green-800 hover:scale-100  cursor-pointer' >Stripe</DemoPaper>
              <DemoPaper variant="elevation" className='scale-90 hover:bg-cyan-800 hover:scale-100 cursor-pointer' >Devpost</DemoPaper>
              <DemoPaper variant="elevation" className='scale-90 hover:bg-amber-800 hover:scale-100 cursor-pointer' >Codethink</DemoPaper>
            </Stack>

          </div>
          {/* <Button variant="outlined" sx={{color: "white", borderColor:"white", marginX:"45vw"}} onClick={handleClickOpen}>See More</Button> */}
          <React.Fragment>
            <center>
              <Button variant="outlined" sx={{ color: "white", borderColor: "white", width: "200px", marginY: "1rem" }} onClick={handleClickOpen} >
                See More
              </Button>
            </center>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>

              <DialogTitle sx={{ m: 0, p: 2, px: 27 }} id="customized-dialog-title" className='bg-gray-800 text-white'>
                Get Subscription
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent className='bg-[#25292A] flex justify-center '>
                <div className='w-[32vw] px-4 bg-[#25292A] my-10'>
                  <div className='w-[30vw] shadow-xl bg-[#1b1e1f] text-white flex flex-col p-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] invert' src={Subscribe} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Monthly</h2>
                    <p className='text-center text-4xl font-bold'>₹5,000</p>
                    <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>100+ Sponsors</p>
                      <p className='py-2 border-b mx-8'>100+ Venues</p>
                      <p className='py-2 border-b mx-8'>0% Brokerage</p>
                    </div>
                    <button className='bg-gray-700 text-gray-200 w-[300px] rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={()=>{alert("Login to continue ....")}}>Start Trial</button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </React.Fragment>
        </section>
      </div>
    </div>
  )
}

export default Sponsors
