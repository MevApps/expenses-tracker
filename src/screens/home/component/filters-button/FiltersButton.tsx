import React from 'react';
import styles from './styles';
import {GreyButton} from '../../../../components';

type FiltersButtonProps = {
  onPress: () => void;
};
function FiltersButton(props: FiltersButtonProps) {
  const handlePress = () => {
    props.onPress();
  };

  return (
    <GreyButton
      iconSource={require('../../../../assets/ic_sliders.png')}
      onPress={handlePress}
      text="Filters"
      style={styles.button}
    />
  );
}

export default FiltersButton;
