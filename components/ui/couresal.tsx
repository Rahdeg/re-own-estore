import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const App: React.FC = () => (
    <Carousel autoplay className=' flex items-center justify-center rounded-md'>
        <div>
            <h3 style={contentStyle}>
                <div className=' w-auto h-80 relative'>
                    <Image src="/3866987.jpg" alt='img' className=' object-cover rounded-md' fill />
                </div>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <div className=' w-auto h-80 relative'>
                    <Image src="/3980811.jpg" alt='img' className=' object-cover rounded-md' fill />
                </div>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <div className=' w-auto h-80 relative'>
                    <Image src="/6101683.jpg" alt='img' className=' object-cover rounded-md' fill />
                </div>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <div className=' w-auto h-80 relative'>
                    <Image src="/6444674.jpg" alt='img' className=' object-cover rounded-md' fill />
                </div>
            </h3>
        </div>
    </Carousel>
);

export default App;