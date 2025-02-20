import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import { CardActions } from '@mui/material';

function Media(props) {
  const { loading = false } = props;
  return (
    <Card className='min-w-[345px]' sx={{ maxWidth: 345, m: 2 }}> 
      {loading ? (<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />) : (<CardMedia component="img" height="140" image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512" alt="Nicola Sturgeon on a TED talk stage"/>)}<CardContent>
      {loading ? ( <React.Fragment> <Skeleton animation="wave" height={10} width="80%" /></React.Fragment>) : (<Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>{"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"}</Typography>)}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"><Skeleton animation="wave" className='rounded-full' height={40}  width={30} /></IconButton>
        <IconButton aria-label="share"><Skeleton animation="wave" className='rounded-full' height={40}  width={30} /></IconButton>
      </CardActions>
    </Card>
  );
}
Media.propTypes = {loading: PropTypes.bool};

const cate = [1,2,3,4,5,6]

export default function MovieSkeleton() {
  return (
    <div className='flex flex-wrap gap-5 px-10 justify-center mt-8'>
        {cate.map((_,ind) => <Media key={ind} loading/>)}
    </div>
  );
}
