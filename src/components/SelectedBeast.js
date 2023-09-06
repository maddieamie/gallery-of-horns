import React from 'react';


class SelectedBeast extends React.Component {

    render () {

        const {beastImg, keyword, beastDes} = this.props;
    
        return (
            <>
            
<div><img src={beastImg} alt={keyword} /></div>
<p>Description: {beastDes}</p>
</>);
}
}

export default SelectedBeast;