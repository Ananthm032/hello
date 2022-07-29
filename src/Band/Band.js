import  React,{useEffect,useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box,Button } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Comment from "../Comment/Comment"
import "./Band.css"
export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const [data, setData] = useState([]);

    useEffect(() => {
     
      (async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(res);
  
        const data = await res.json();
       
        setData(data.splice(0, 3));
      })();
    }, []);
  

  return (
    <div  className='scrool-1'>
       <div className='hiii'>
       {data.map(item=> (
     <div  key={item.id.value}>
        <Box className='buc1'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           
      
          <Box className='top'>
            <Box className='top1'>
            
           <Box sx={{ width: 200 }}>
     
      <Skeleton animation="wave" /> </Box>
   
          </Box>
          <Box>
          <Skeleton variant="circular" width={40} height={40} />
          </Box>
          </Box>
         
      
          <Box className='date'>
          <Box sx={{ width: 200 }}>
    
    <Skeleton animation="wave" />
        </Box>
           </Box>
      
  
        </AccordionSummary>
        
        <AccordionDetails>
<Box className='simple'>
       <Box className='simple1'> ABOUT</Box>
      <Box className='simple2'>  
        
      <Skeleton variant="rectangular" width="100%" height="80px" />
 </Box>  
   </Box>
 
         </AccordionDetails>
     
</Accordion>
</Box>
<Box className='buc2'>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           
           
           
      
          <Box className='tap'>
            <Box className='tap1'>
            <Box sx={{ width: 200 }}>
    
    <Skeleton animation="wave" />
        </Box>
          </Box>
          <Box>
          <Skeleton variant="circular" width={40} height={40} />
          </Box>
          </Box>
         
      <Box className='Nama'>
      <Box sx={{ width: 200 }}>
    
    <Skeleton animation="wave" />
        </Box>
      </Box>
  
        </AccordionSummary>
        
        <AccordionDetails>
<Box className='sim'>
       <Box className='sim1'> ABOUT</Box>
      <Box className='sim2'>  
        
      <Skeleton variant="rectangular" width="100%" height="80px" />
 </Box>  
   </Box>
   <Box className='link'> 
 <Box className='mail'>
 <h4>EMAIL ADDRESS</h4>
  <h5>creaters@mail.com</h5>
   </Box>
   <Box className='twitter'>
   <h4>TWITTER HANDLE</h4>
   <h5 >https://twitter.com/elonmusk</h5>
   </Box>
   <Box className='insta'>
   <h4>INSTAGRAM HANDLE</h4>
   <h5 >
https://www.instagram.com/kalsdkmfklasmdklfmklsadmfklmlaksfmklmsdklfmksdmlf
</h5>
</Box>
<Box className='dribble'>
   <h4>DRIBBBLE HANDLE</h4>
   <h5 >https://dribbble.com/shots/18551776-Damascus-Techwear-Apparel-2022-web-redesign-concept</h5>
   </Box>
   <Box className='behance'>
   <h4>BEHANCE HANDLE</h4>
   <h5 >https://www.behance.net/gallery/119045577/DE_FORM?tracking_source=for_you_feed_featured_category</h5>
   </Box>
   </Box>
   <Comment/>
  </AccordionDetails>
     </Accordion>
     </Box>
     </div>
       ))}
       </div>
    </div>
  );
}
