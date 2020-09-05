import styled from 'styled-components';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import Carousel from 'react-native-anchor-carousel';

export const CarouselContainer = styled.View`
  flex: 1;
  background-color: #000;
  height: 720px;
  padding: 14px;
`;

export const ImageContainer = styled.View({
  ...StyleSheet.absoluteFill,
  backgroundColor: '#000', 
});

export const ImageBg = styled.ImageBackground`
  flex: 1;
  height: null;
  width: null;
  opacity: 1;
  justify-content: flex-start;
`;

export const SearchBoxContainer = styled.View`
  background-color: #fff;
  elevation: 10;
  border-radius: 4px;
  margin-vertical: 10px;
  width: 95%;
  flex-direction: row;
  align-self: center;
`;

export const SearchBox = styled.TextInput`
  padding: 12px;
  padding-left: 20px;
  font-size: 16px;
`;

export const SearchBoxIcon = styled(Feather)`
  position: absolute;
  right: 20px;
  top: 14px;
`;

export const TopPicks = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
`;

export const ButtonImage = styled.TouchableOpacity``;

export const CarouselContainerView = styled.View`
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
`;

export const MiniCarouselView = styled.View``;

export const CarouselView = styled(Carousel)`
  flex: 1;
  overflow: visible;
`;

export const CarouselImage = styled.Image`
  width: 200px;
  height: 320px;
  border-radius:10px;
  align-self: center;
  background-color: rgba(0,0,0,0.9);
`;

export const CarouselText =  styled.Text`
  padding: 14px;
  color: white;
  position: absolute;
  bottom: 10px;
  left: 2px;
  font-weight: bold;
`;

export const CarouselIcon = styled(MaterialIcons)`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const MovieInfoContainer = styled.View({
  flexDirection: 'row',
  marginTop: 16,
  justifyContent: 'space-between',
  width: Dimensions.get('window').width - 14
})

export const MovieName = styled.Text`
  padding-left: 14px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 6px;
`;

export const MovieStat = styled.Text`
  padding-left: 14px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  opacity: 0.8;
`;

export const PlayInfoContainer = styled.TouchableOpacity`
  background-color: #212121;
  padding: 18px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  elevation: 10;
  border-width: 4px;
  border-color: rgba(2,173,148,0.2);
  margin-bottom: 14px;
`;

export const PlayIcon = styled(FontAwesome5)`
  margin-left: 4px;
`;

export const DescriptionContainer = styled.View`
  padding-horizontal: 14px;
  margin-top: 14px;
`;

export const Description = styled.Text`
  color: white;
  opacity: 0.8;
  line-height: 20px;
`;

export const WatchingContainer = styled.View`
  margin-horizontal: 14px;
`;

export const WatchingText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const WatchingImage = styled.ImageBackground`
  height: 250px;
  width: 100%;
  background-color: #000;
`;

export const WatchingTitle = styled.Text`
  color: white;
  padding: 14px;
`;

export const WatchingPlay = styled.TouchableOpacity`
  background-color: #212121;
  padding: 18px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  elevation: 10;
  border-width: 4px;
  border-color: rgba(2,173,148,0.2);
  margin-bottom: 14px;
  position: absolute;
  top: 40%;
  right: 40%;
`;


export const MyListContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 36px;
`;

export const MyListTitle = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const MyList = styled.FlatList`
  margin-top: 30px;
`;

export const ButtonPlay = styled.TouchableOpacity`
  margin-right: 30px;
`;

export const MovieList = styled.Image`
  height: 300px;
  width: 200px;
`;

export const Movie = styled.View`
  position: absolute;
  height: 5px;
  width: 200px;
  background-color: #02ad94;
  opacity: 0.8;
`;

export const PlayIconList = styled(FontAwesome5)`
  position: absolute;
  top: 45%;
  left: 45%;
  opacity: 0.9;
`;
