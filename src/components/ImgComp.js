import React from 'react';

class ImgComp extends React.Component {
  render() {
    const { imageUrl, altText, title } = this.props;

    return (
      <>
        {}
        <img src={imageUrl} alt={altText} title={title} />
      </>
    );
  }
}

export default ImgComp;