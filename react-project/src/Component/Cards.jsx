import React from 'react';
import MediaCard from './MediaCard'; // Adjust the path as needed

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '25px',marginLeft:'30px' }}>
      <MediaCard
        title="Modular Kitchen"
        image="https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976514.jpg?t=st=1703100023~exp=1703103623~hmac=5daada2e4b06ff57e8439369cdc8bdb09fae04d80ca6b1bf2fff71d78b182e14&w=900"
        description="Transform your cooking space with a modern modular kitchen 
        Upgrade your home with customizable cabinets, smart storage solutions making every meal a delight in your revamped kitchen."
      />
      <MediaCard
        title="Living Hall"
        image="https://img.freepik.com/free-photo/luxury-modern-apartment-with-comfortable-pillow-decor-generated-by-ai_188544-40143.jpg?ga=GA1.1.1214617477.1703009415&semt=ais_ai_generated"
        description="Enhance your living hall with modern furniture and decorative elements."
      />
      <MediaCard
      title="Bedroom"
      image="https://img.freepik.com/free-photo/luxury-hotel-suite-with-modern-elegance-comfort-generated-by-ai_188544-21265.jpg?t=st=1703100761~exp=1703104361~hmac=e67722cd361a85895f4f781a754ef20bfdf7fa8d87d259055a84407ed7839da7&w=1380"
      description="Elevate your bedroom ambiance with a modular design that seamlessly blends comfort and style creating a serene retreat that reflects your unique taste and promotes relaxation for a restful night's sleep."
    />
  <MediaCard
  title="Dinning"
  image="https://img.freepik.com/free-photo/luxury-dining-room-with-elegant-decor-lighting-generated-by-ai_24640-84695.jpg?t=st=1703101045~exp=1703104645~hmac=a85d3361ec88bfb5f9d1533c94049a527004f688e80a60578128b5429fd52358&w=1380"
  description="Transform your dining room into a captivating space where elegance meets functionality, integrating modular furniture and timeless design for a tasteful dining experience."
/>
     
    </div>
  );
}
