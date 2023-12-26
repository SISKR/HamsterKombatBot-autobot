import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
  const cardData = [
    {
      title: 'Modular Kitchen',
      description: 'Transform your cooking space with a modern modular kitchen. Upgrade your home with customizable cabinets, smart storage solutions, making every meal a delight in your revamped kitchen.',
      images: [
        'https://img.freepik.com/free-photo/beautiful-green-kitchen-interior-design_23-2150230377.jpg?w=1060&t=st=1703597963~exp=1703598563~hmac=27a3bba7dffcca7c0c92a7a3c3ea105696fdceb0017794ad19450932c88eac34',
        'https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178335.jpg?w=1060&t=st=1703529465~exp=1703530065~hmac=d240b7cf9f20f88097ac6499005175ad37594d001bf1f262bb0067cd91441969',
        'https://img.freepik.com/free-photo/modern-kitchen-interior-white-colors_181624-58451.jpg?w=1060&t=st=1703529485~exp=1703530085~hmac=1ce9150d2c753575fff14bb3f302969a0e02db2b353e4364a391a8b12440d0ee',
        'https://img.freepik.com/free-photo/interior-shot-modern-house-kitchen-with-large-windows_181624-24368.jpg?w=1060&t=st=1703529500~exp=1703530100~hmac=f496ac72c7204f29f154472fb4e4187a241c6f5921c6f8ebc1f839088264a188',

      ],
    },
    {
      title: 'Living Hall',
      description: 'Enhance your living hall with modern furniture and decorative elements and Create unforgettable memories in a living space tailored to your taste, where comfort and elegance converge in perfect harmony',
      images: [
        'https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp_105762-2242.jpg?w=1060&t=st=1703598253~exp=1703598853~hmac=19352592a8d678c565da869946a2a14e98cd890902bafe529e9675ec58e3cc39',
        'https://img.freepik.com/free-photo/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf_105762-2141.jpg?w=1060&t=st=1703598285~exp=1703598885~hmac=b9319009fd514d652746288d55249a113d4b491fec43d7b020aa46a31b928239',
        'https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2104.jpg?w=1060&t=st=1703598117~exp=1703598717~hmac=7d3a0d13945b6cb529bcf648d60769f5b21755a41a20e087b4e9351d1f6d0763',
        'https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table_105762-2016.jpg?w=1060&t=st=1703598153~exp=1703598753~hmac=91961eb130f60e48da22b04a467aaa9ecb9a900795be450fb80efddcd41adc2c',
      ],
    },
    {
      title: 'Bedroom',
      description: 'Elevate your bedroom ambiance with a modular design that seamlessly blends comfort and style, creating a serene retreat that reflects your unique taste and promotes relaxation for a restful night\'s sleep.',
      images: [
        'https://img.freepik.com/free-photo/luxury-hotel-suite-with-modern-elegance-comfort-generated-by-ai_188544-21265.jpg?t=st=1703100761~exp=1703104361~hmac=e67722cd361a85895f4f781a754ef20bfdf7fa8d87d259055a84407ed7839da7&w=1380',
        'https://img.freepik.com/free-photo/modern-apartment-bedroom-comfortable-bed-near-window-generative-ai_188544-7709.jpg?size=626&ext=jpg&ga=GA1.1.1214617477.1703009415&semt=sph',
        'https://img.freepik.com/free-photo/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai_188544-7715.jpg?size=626&ext=jpg&ga=GA1.1.1214617477.1703009415&semt=sph',
        'https://img.freepik.com/premium-photo/3d-rendering3d-illustration-interior-scene-mockupmodern-hotel-bedroom-minimalist-interior-design_454534-552.jpg?size=626&ext=jpg&ga=GA1.1.1214617477.1703009415&semt=sph',
      ],
    },
    {
      title: 'Dining',
      description: 'Dine in style with our exquisite dining solutions, where every meal becomes a celebration of taste and refined design. Transform your dining room into a captivating space where elegance meets functionality.',
      images: [
        'https://img.freepik.com/free-photo/luxury-dining-room-with-elegant-decor-lighting-generated-by-ai_24640-84695.jpg?t=st=1703101045~exp=1703104645~hmac=a85d3361ec88bfb5f9d1533c94049a527004f688e80a60578128b5429fd52358&w=1380',
        'https://img.freepik.com/premium-photo/interior-lounge-architecture-entertainment-relaxation_482257-9581.jpg?size=626&ext=jpg&ga=GA1.1.1214617477.1703009415&semt=sph',
        'https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2185.jpg?size=626&ext=jpg&ga=GA1.1.1214617477.1703009415&semt=ais',
        'https://img.freepik.com/premium-photo/modern-dining-room-with-flower-arrangement-mirror_1262-11584.jpg?size=626&ext=jpg&ga=GA1.1.1214617477.1703009415&semt=ais',
      ],
    },
    ];

    export default function CardContainer() {
      const [modalOpen, setModalOpen] = React.useState(false);
      const [selectedCard, setSelectedCard] = React.useState(null);
    
      const openModal = (card) => {
        setSelectedCard(card);
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
        setSelectedCard(null);
      };
    
      return (
        <div>
          <center>
            <h1 className='design' id="design">
              Designs
            </h1>
          </center>
          <br></br>
    
          <div style={{ display: 'flex', marginLeft: '12px', gap: '40px' }}>
            {cardData.map((data, index) => (
              <MediaCard key={index} {...data} onClick={() => openModal(data)} />
            ))}
          </div>
    
          <DesignModal
            isOpen={modalOpen}
            onClose={closeModal}
            title={selectedCard?.title}
            description={selectedCard?.description}
            images={selectedCard?.images || []}
          />
        </div>
      );
    }
    
    function MediaCard({ title, description, images, onClick }) {
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt={title} height="140" image={images[0]} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' size="small" onClick={onClick}>
              View More
            </Button>
          </CardActions>
        </Card>
      );
    }
    
    function DesignModal({ isOpen, onClose, title, description, images }) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
          <Typography>{description}</Typography>
          <br></br>
            {images && images.length > 0 ? (
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                  <img src={image} alt={`Design ${index}`} style={{ width: '100%' }} />

                  </div>
                ))}
              </Slider>
            ) : (
              <Typography>No images available</Typography>
            )}
            
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={onClose}>Close</Button>
          </DialogActions>
        </Dialog>
      );
    }
    