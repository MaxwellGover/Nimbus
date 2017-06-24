import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { storeSelectedData } from '~/redux/modules/onPressData';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

function MyActivePreview (props) {
  console.log(props);
  return (
    <View>
      <ListItem
        title={props.displayName}
        titleStyle={styles.name}
        onPress={() => {
          props.dispatch(storeSelectedData(props.availablePreview));
          // navigate to HFVideo
        }}/>
    </View>
  );
}

MyActivePreviewPropTypes = {
  displayName: PropTypes.string.isRequired,
  availablePreview: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default MyActivePreview;
