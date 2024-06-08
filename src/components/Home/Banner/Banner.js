import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    function Item(props) {
        return (
            <Paper>
                <div className='banner-container'>
                    <img src={props.item.img} alt="" />
                    <div className='banner-text tracking-in-expand'>
                        <Typography component="h4" variant="h5">
                            {props.item.name}
                        </Typography>
                        <Typography component="p">
                            {props.item.description}
                        </Typography>

                        <HashLink smooth to="/appointment#appointment" className='text-style'>
                            <Button sx={{ mt: 2 }} variant="contained" className="CheckButton">
                                Make an Appointment
                                <AddCircleIcon />
                            </Button>
                        </HashLink>
                    </div>
                </div>

            </Paper>
        )
    }
    const items = [
        {
            name: "Take the first step towards healing!!!",
            description: "Book your appointment today",
            img: "https://etimg.etb2bimg.com/photo/105395878.cms"
            
        },
        {
            name: "Unlock your potential for a healthier mind",
            description: "Schedule your appointment at our mental health clinic today",
            img: "https://www.icrc.org/sites/default/files/styles/meta_image/public/document_new/image/world_mental_health_day_2022.jpeg?itok=gu-U7QC4"
        },
        {
            name: "Your journey to well-being begins here",
            description: "Take the first step and book your appointment at our mental health clinic now",
            img: "https://aihms.in/blog/wp-content/uploads/2020/08/mental1.jpg"
        }
    ]
    return (
        <div>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default Banner;