import React from 'react';


class CatView extends React.Component {



    render() {

        const { name, imgSrc, clickCount, catIndex, setClick } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <img onClick={() => setClick(catIndex)} className='picture' src={imgSrc} alt=""/>
                <p>点击次数：<span>{clickCount}</span></p>
            </div>
        )
    }
}


export default CatView;
