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
  ":hover":{color:'white'}
}));

const Sponsors = () => {
    const data = [
        {
            title: "Replit",
            desc: "An innovative online platform for collaborative coding and hosting interactive coding environments.",
            image: "https://logowik.com/content/uploads/images/replit4759.logowik.com.webp"
        },
        {
            title: "Polygon",
            desc: "A protocol and framework for building and connecting Ethereum-compatible blockchain networks.",
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAACFCAMAAABizcPaAAAAz1BMVEX///8KCw17P+QAAAADBQh6PeTl5eVsbW14OuR2NePExMRfX2C7u7vz8/OFT+b+/f9xK+KJiYp+ROWYbenKysqsra11M+NSUlNxKeIXGBnGsPO0tLQAAAXU1NT5+fnl3fn59v7t5vvUxPbq6urd3d2mg+yvkO5hYmKkpKRKSkvh1vi+p/H07/2UaOmjfuvo4PojIyWSkpM5Ojt2dnePX+i2m++QYeidnZ0xMTI/P0DOvPQhISNNTU6BgYKWaumfeOuHU+bczvesi+26oPDCq/IO7CjVAAAMJUlEQVR4nO2caUPiPBDHCwHk1KJQigKLgiseqxyrqCu7uuv3/0xPjxwzaQplnyKuzv+NtoQ0/SWdTiYTLItEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCTSx1T/4uJ42234lPpy4Nq2u3+47XZ8Ol1du8Wsp7y9+7Lttnwq7f1xSlmuvHtAZufNdLLv5LNKRftrf9tN+hy6ubMheF9OkUz+5tU/DY08lmfyL7bdso+uS7sUBR9YHfcXmfwN6mQX2Zo8MjxF+3Zv2w38qLr55iLWpeIztvpO/nHbbfyQ6v+2kZEvuqdX1qGD7E/e/v6eTH47VG5n2w35f4pC/uKf1t+6Rfe6v+WWKnVYzhf7t9EfYCPvZE/EJ7qvWSq9m9dtJpfx9W+jP3UQXQe9UPUZVrG/rWZq+gjoL1zsRl7hj2FcwX/bft1OKyP6COhPFdm8/Wx4k4poWlik9E6czI+APisNiuPEhAwugKNpf3nb5sXpA6DfE4M+736NH9CPRVHMPokt9Kb6QOjzu0udl73rIqFPWQJ98WB5uUOH0KcsQr81EfqtaV307juJon069EX3tA/PXp0cPt6scbVa8yhQc+gfleutcWbcWlR7McW789nDOHPfWjQL+kcQ/eCoGmoISwz5ySPw3cZkZ9puT2ejAfja0UCru1eu+8Xuz+rVmvZRg1daDY/qFe8GzibdNRAorYM+b39DnI+vXdtx3N3kNqjAuEaWNfH/dnLB4U4ErUem3gElpiPcP2jUi1ofYImKOCvqrgVXZJ2g2krBqooCZVRzdwcUYy38YUt8x/t/lPH/CZp3X02MQCk5+ryNGe/d8lWtvHuXdJ5VYJmQ2NFgzEJ44TGrayV7CwYLeCUyTfg5Qr8Q1YLx2+NfZy1+4ojhKzYb4luQbsHrsQy67gMc05XwwxyzBlPWAaXOEhIASozedS7RicesCrvpdihWEn29jW7QO3OORvXwh/Z5JtNhLVAEoe+KakHvVGUvh8cz1JNBnxjQN1nkuoxN1OcKvXYD7GHtCEtS9Jc4Vv/lux5Ovoz5IpJAnwEjRpyZgnKNKAG/yFiZXvyaHTNOU1WxI8CG/TWLVijbotDX9f4JC6ghzdFn2hW9vvXHfVL0qE/715HUhbyzn8DkF0xERduVs9I1EvCK/JDjHqOfC86yb3odYwFjrRL9JKaUapokbujJde19UvRQl64pdSHvflu5kFLQ7CiD9lciqKlnInzHqiJyWGP0hYjFKYszDf9ooKrIaVcF1y2DC2nXnfMiaLDnYBHvmUxOMND66E/2HQP40OSvSlWD6D3vYTKa76jxw+71+8uxzM58NGmpO5RsNb/+Sbc4M2mUfZ2pClhlPpqfIWYcfU/2uOeyLEaj+gO4bkFrWgD+4XwK+6eRFGGoddHrqQtFnLewIlUNoGez0Dj05nIIcgYN+VCzUWjnBgvVGdzkaOib2LKrz+v4smzBrzpRA1+gr8vrjjnE4ZM8VQnPVEAfNmuoaV7dyRAKrYfekLpQRM9A3n5elp1ciA5fYNn5/Yn7zTHl7R9JBqPwhIa+JlxJ7s9IxzGYZUkbDuxxQ+/xmmzGuWqwfDuHFQFb/0M4slV5Ck0rVmst9IclnLrg3t1Ye1/1vAV9jRFIeTjQj69K1j1UBk5OBT1hlfRAAndoxOjkY5G7Tffiy8BNBL0ZohcPTqcNW3wu3eHgsGJonHpaEiAEWgP9i5af5uyHA/z4J3Y0i+5tXBUF4+1Z0sP2H3TpreDndyxOh4+Cjl4O89Cg5HLgGREv2c4PVKOkWsaNQPNX7bsVQ+Nqm0Z/fKDlp4EpltYpWftnTCUF0/AD7sgI3h0OrYywExMJn2WgxemiOmS3zFGNVcxae6yEcHPkEZzitnC3J1XCVar+rSE/DegSmyLnt7magqnllrptfywJhlNcZIDHWwR9HVocdKDewSi8JkdriH6ILYvUESpVMVFe/D/03gtyiWcIowZZlZ8GdIVT1VxzRxZiGsmNcTAjFEVm2ncF7DN0JNEPhTfpVy3mU+FbVZowrcZxB0CVj4Y2M+rCJxIEEoDqf4ceZiSUEmQkBAWLpokrii04ZnPP0efaWpi4pUapHIsT7btTXib0P6LxehFMqIJuCC8ziUH/wAB6aX4073yA2pMq+muYh2Pat3b1C7swpdi36GNepqoV74wlOHrtfSfvyJ8RxaIXoEIXLop+pJ4cYW/4g1M38bLi0Gu2sLY59Cj7LG/IPsNRg6W+496tYJ/fNRYo4OEo9aBGfc/s4CjzEE5Yo+hrqu52B1GMMzj3EL0xhGwBGxm8o1NFb107GK2ec4mNvCk/DeiYb4lYjj7DtKURaN/1ODtXD5YxLhAKq1UWz5bwYKVzhH2mnvBAA9hdhFhJel/BOyBd9FqmsfdClcuvX+7cteIEnvaToUfLHsq78G/7QY8JhCpjNAb0VWFm+CiXJquK6El10TiXhkXrcum+BI9QyuitV9ucXx+JGqzeyLmXEP05Ol2HEBbm7pFuXfgaNKDn61K58X0OP1oFM9UFNjH35ieSP4QcdtrozZsYXrUNDwliwonRY4uqpoN+24XRzeXgN8UQFTdtykgQ0crIxCAjojPwFaq3RQJEax7SOwqnCKmjN6w6ObuOMWqwQknR56DdlSbmKTjkL0k0SFVsi3stJvSieyJPjVix6mQAnKmGfiiPgbWXIXxurDaAPrKJIaut/70mqyUp+gyT/nPhQbs9uaLEzkX/NDryHDcHxjycMVx2BCBUGLotxn3hXjWFP4EtWUo6VyN5iq+DbAS9vokB2h/7NN6h1CpJit5rfas5HBSqO3KxQXj7PbnizNisWhgMmy21iCHmuEb0cIFPxDADjVWNlaPhYAiuqtCrh4a1J43BoDsH3cPf0JtBr21iAEY+ca7HOugzfBEOIBAOSGShTh535N0Z0Q8heujOVGNrBOitBbgOLiVt36bQR0MGWd/XxNk3y8f/Oug1gWG6iCumZvnmxD9pu/Spa2vZheUrfxpTiuUE1M2ht6zHEt7VZv9BH5+4y5+Av0fPYHBhx1guB0ayGf1IjVM8Ge4ZUgi0VSq/1Nh4XaZ8gk2i95PKpNXRowY3d25K6CN5OOwezaAW0USdDMrQM6OvKfRaKGag51x5Bl04TaDac0MaChsrb2yj6C3rmMfLilrUoP/bO79iL1XSKVUdjy8WyRgutzX4TPk7vmIyjeXES1vw8HqlpWX0TeX8GM4xJnryFUPR6w2jt6yXb7Ztu884n/s1WA1JCX2zd8YEWz9PNZpH0Ztn1HvOL4KjACLtVEMvcepxT09HY3jJhRZIEBrMVJqOn2hzhtZXZA4tPFkXJ1NAH/ziH36fXvA1wLTQe77crB02eFqPSZIuz+75PZ1H8qhboZ70NNmY+JyocBzWd18v6DEcpVrzTPhBlZGWAL544teFJ+fn4cmHVNBH9McOzX966D3Vut2ukRH4hldEz39fIj55is/L6A273WH4WolDL4tthuTaunQ2gD59iZyQUYKyRlv/DvVvoJdJ9UkeFBkZ+7tNIW8miX7F/p3toufpA+xpdVHP1RfO5XB14W1KoC/97i8rdsjnBFtCLxaqklSvomWbaUtqehWT3GVBzJdnWwR+no0FNoxeZg9E98X1yg2o8lzF6P5iL86b6kRAjf+9XZi6UPxlLLJh9CIpoRL9aMg0yQnburnZb64riT7m93b3bmHYM+ZHRjaMXiQ2GPZ3xEaP9LXYd6hrGMzX8hYsPT8t75g3dW0Wvax9yWcR8pl34r0vUb+IYvkgb8GKri+6MfuqNouee4vGHeQx6NmPFVO6d6FjPSVH/vjiVWRVPS5nZLPoUUpTzJWhcozN4jaqvy9FNzFcB3GeSz114Xus7w93i6eurim0JRR5zfpa/AtDPtTxgZ5++cd62ddSF7JLNnHWwp8l4L+RkLK6/AcYjHGB2qiJddT4d7gH0jcxOCU9ieTP6kpIf6fDYtzezeiGB1K66n815S1kjRseSCnr+Ker5y1k6be+30gv+3rSSPyGB1LKei3h2e2SDQ+klBXkJwgjv2LDAyll3XwL4OdxTIH0Jno5sF33+fKd/ML0Z9MVcSeRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIqWh/wBVjOnpaYoF8QAAAABJRU5ErkJggg=="
        },
        {
            title: "Verbwire",
            desc: " A communication platform facilitating seamless and structured team collaboration through voice messaging.",
            image: "https://www.developerweek.com/cloudx/wp-content/uploads/2023/07/Verbwire.png"
        },
        {
            title: "Github",
            desc: "A web-based platform for version control using Git, widely used for software development and collaborative coding.",
            image: "data:image/png;base64,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"
        },
        {
            title: "Digital Ocean",
            desc: "A cloud infrastructure provider offering scalable computing resources and services for developers and businesses.",
            image: "data:image/png;base64,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"
        },
        {
            title: "Just Eat",
            desc: " An online food ordering and delivery platform connecting users with local restaurants for convenient dining options.",
            image: "https://1000logos.net/wp-content/uploads/2021/12/Just-Eat-logo.png"
        }
    ]

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className='bg-[#25292A] text-white'>
        <Navbar />
        <div>
            <h1 className='w-fit mx-auto text-5xl my-10 font-bold tracking-tighter'>Explore our featured Sponsors</h1>
            <section className='w-fit mx-auto my-10 grid grid-cols-1 md:grid-cols-3'>
                {data.map((e)=>{
                    return(
                        <Card sx={{ maxWidth: 345, margin: 2 }}>
                        <CardContent>
                            <img src={e.image} alt={e.title} className='h-36 mx-auto'/> 
                          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "bold",margin: "auto", fontSize: "24px", color:"navy"}} className='w-fit'>
                            {e.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{margin: "auto", color:"navy"}}>
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
            <section className='bg-[#1b1e1f] h-screen'>
            <h1 className='w-fit mx-auto text-5xl my-10 p-10 font-bold tracking-wider'>Find Actively Participating Sponsors</h1>
            <div className='h-[72vh]'>
            <Stack direction="column" spacing={2} className='w-fit mx-auto'>
      <DemoPaper variant="elevation" className='scale-100 hover:bg-red-800 hover:scale-110  cursor-pointer'>Zebpay</DemoPaper>
      <DemoPaper variant="elevation" className='scale-100 hover:bg-slate-800 hover:scale-110  cursor-pointer'>Celo</DemoPaper>
      <DemoPaper variant="elevation" className='scale-100 hover:bg-green-800 hover:scale-110  cursor-pointer'>Stripe</DemoPaper>
      <DemoPaper variant="elevation" className='scale-100 hover:bg-cyan-800 hover:scale-110  cursor-pointer'>Devpost</DemoPaper>
      <DemoPaper variant="elevation" className='scale-100 hover:bg-amber-800 hover:scale-110 cursor-pointer'>Codethink</DemoPaper>
    </Stack>

            </div>
            {/* <Button variant="outlined" sx={{color: "white", borderColor:"white", marginX:"45vw"}} onClick={handleClickOpen}>See More</Button> */}
            <React.Fragment>
      <Button variant="outlined" sx={{color: "white", borderColor:"white", marginLeft:"44vw",width: "200px"}} onClick={handleClickOpen} >
        See More
      </Button>
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
      <DialogContent className='bg-[#25292A]'>
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
              <button className='bg-gray-700 text-gray-200 w-[300px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
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
