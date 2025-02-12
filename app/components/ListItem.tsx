import {
  Animated,
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';
import AppText from './AppText/AppText';
import colors from '../config/colors';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';

interface Props {
  image?: number;
  ImageComponent?: ReactNode;
  title: string;
  subtitle?: string;
  onPress?: (event: GestureResponderEvent) => void;
  renderRightActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
    swipeable: Swipeable
  ) => React.ReactNode;
}

export default function ListItem({
  image,
  ImageComponent,
  title,
  subtitle,
  onPress,
  renderRightActions,
}: Props) {
  return (
    <GestureHandlerRootView style={styles.root}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subtitle && (
                <AppText style={styles.subtitle}>{subtitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {},
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
  subtitle: {
    color: colors.medium,
    fontSize: 15,
  },
});
