import React from 'react';

const Summary = (props) => {
    const { name, summary, img } = props;

    return (
        <div className='container' style={{ maxWidth: '80%', margin: '0 auto' }}>
            <h3 className='text-center mb-4' style={{padding : '20px 60px' }}>{name}</h3>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '90%', border: '1px solid #ccc', borderRadius: '10px', margin : '0 auto' }}>
                <img src={img} alt='movie' style={{ width: '20%', height : '10%', marginRight: '20px' }} />
                <div dangerouslySetInnerHTML={{ __html: summary }} style={{ flex: 1, fontSize : '25px'}} />
            </div>
        </div>
    );
}

export default Summary;
