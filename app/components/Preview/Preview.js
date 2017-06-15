import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';

function Preview (props) {
  return (
    <View>
      <Button success block onPress={props.postPreview}>
        <Text>Post Preview</Text>
      </Button>
    </View>
  );
}

PreviewPropTypes = {
  postPreview: PropTypes.func.isRequired
}

export default Preview;
