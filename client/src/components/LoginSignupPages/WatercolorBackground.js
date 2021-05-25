import React from 'react'
import Image from 'react-bootstrap/Image';
import waterBgImg from '../../assets/images/watercolor-background.png'

export default function WatercolorBackground() {

  let styles = {
    waterBg: {
      position: 'absolute',
      width: '50%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '-2em',
      zIndex: '-1'
    }
  }
  return (<>
    <Image src={waterBgImg} style={styles.waterBg} />
  </>)
}