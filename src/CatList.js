import React from 'react';

import CatView from './CatView';


class CatList extends React.Component {

    state = {
        name: this.props.cats[0].name,
        imgSrc: this.props.cats[0].imgSrc,
        clickCount: this.props.cats[0].clickCount,
        id: this.props.cats[0].id,
        catIndex: 0

    };

    setCat = (catIndex) => {
      const { cats } = this.props;
      this.setState({
          name: cats[catIndex].name,
          imgSrc: cats[catIndex].imgSrc,
          clickCount: cats[catIndex].clickCount,
          id: cats[catIndex].id,
          catIndex: catIndex

      })
    };

    setClick = (index) => {
        this.setState((state) => ({
            clickCount: state.clickCount + 1
        }));
        const { cats } = this.props;
        cats[index].clickCount = this.state.clickCount + 1
    };

    render() {
        const { cats } = this.props;
        const { name, imgSrc, clickCount, catIndex } = this.state;
        console.log(this.state);


        return (
            <div>
               <ul className='cat-list'>
                   {cats.map((cat,index) => (
                       <li className='cat-list-item' key={cat.id}>
                           <p onClick={() => this.setCat(index)} >{cat.name}</p>
                       </li>
                   ))}
               </ul>
                <CatView
                    name={name}
                    imgSrc={imgSrc}
                    clickCount={clickCount}
                    catIndex={catIndex}
                    setClick={this.setClick}
                />
            </div>
        )
    }
}

export default CatList;
