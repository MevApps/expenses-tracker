import React from 'react';
import {GreyButton} from '../../../components';

type FiltersButtonProps = {
  onPress: () => void;
};
function FiltersButton(props: FiltersButtonProps) {
  return (
    <GreyButton
      iconSource={require('../../../assets/ic_sliders.png')}
      onPress={props.onPress}
      text="Filters"
      style={{alignSelf: 'flex-end', marginEnd: 11, marginTop: 35}}
    />
  );
}

export default FiltersButton;
