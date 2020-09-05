import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View } from 'react-native';

import {
  CarouselContainer,
  ImageContainer,
  ImageBg,
  SearchBoxContainer,
  SearchBox,
  SearchBoxIcon,
  TopPicks,
  CarouselContainerView,
  CarouselView,
  ButtonImage,
  CarouselImage,
  CarouselText,
  CarouselIcon,
  MiniCarouselView,
  MovieInfoContainer,
  MovieName,
  MovieStat, 
  PlayInfoContainer,
  PlayIcon,
  DescriptionContainer,
  Description, 
  WatchingContainer,
  WatchingText,
  WatchingImage,
  WatchingTitle,
  WatchingPlay,
  MyListContainer,
  MyListTitle, 
  MyList,
  MovieList,
  Movie,
  PlayIconList,
  ButtonPlay
} from './styles';

//Foi apagado o getNode() da pasta do react-native-archor-carousel no arquivo carousel.js

const Home = () => {
  const [ background, setBackground] = useState({
    uri: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810',
    name: 'Avengers: End Game',
    stat: '2019 · Action/Sci-fi · 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate trounced allies and restore balance.'
  });


  const [gallery, setgallery] = useState([
    {
      image: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810',
      title: 'Avengers: End Game',
      released: '2019 · Action/Sci-fi · 3h 2m',
      desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate trounced allies and restore balance.',
      key: '1'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/Bad_Boys_for_Life_%28poster%29.jpg/250px-Bad_Boys_for_Life_%28poster%29.jpg',
      title: 'Bad Boys for Life',
      released: '2020 · Action/Comedy/Crime · 2h 4m',
      desc: 'Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.',
      key: '2'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SY1000_CR0,0,666,1000_AL_.jpg',
      title: 'Sonic the Hedgehog',
      released: '2020 · Action/Adventure/Comedy · 1h 39m',
      desc: 'After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.',
      key: '3'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      title: 'Birds of Prey: And the Fantabulous Emancipation of One Harley Quinn',
      released: '2020 · Action/Adventure/Crime · 1h 49m',
      desc: 'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
      key: '4'
    }
  ]);

  const [list, setList] = useState([
    {
      image: 'https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      key: '1'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      key: '2'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      key: '3'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      key: '4'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg',
      key: '5'
    }
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get('window');

  const renderItem = ({ item, index }) => {
    return (
        <MiniCarouselView>
          <ButtonImage
            onPress={() => {
              carouselRef.current.scrollToIndex(index);
              setBackground({
                uri: item.image,
                name: item.title,
                stat: item.released,
                desc: item.desc,
              })
            }}
          >
            <CarouselImage source={{uri: item.image}} />
            <CarouselText>{item.title}</CarouselText>
            <CarouselIcon name='library-add' size={30} color='white'/>
          </ButtonImage>
        </MiniCarouselView>
    );
  }

  const renderItemList = ({item}) => {
    return (
      <ButtonPlay>
        <MovieList source={{uri: item.image}}/>
        <Movie></Movie>
        <PlayIconList name='play' size={38} color='#fff'/>
      </ButtonPlay>
    );
  }

  return (
    <ScrollView style={{backgroundColor: '#000'}}>
      <CarouselContainer>
        <ImageContainer>
          <ImageBg
            source={{uri: background.uri}}
            blurRadius={10}
          >
            <SearchBoxContainer>
              <SearchBox
                placeholder='Search Movies'
                PlaceholderText='#666'
              />
              <SearchBoxIcon name='search' color='#666' size={22}/>
            </SearchBoxContainer>

            <TopPicks>Top Picks this week</TopPicks>

            <CarouselContainerView>
              <CarouselView
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={ width - 20 }
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </CarouselContainerView>
              
            <MovieInfoContainer>
              <View style={{justifyContent: 'center'}}>
                <MovieName>{background.name}</MovieName>
                <MovieStat>{background.stat}</MovieStat>
              </View>

              <PlayInfoContainer>
                <PlayIcon name="play" size={22} color="#02ad94"/>
              </PlayInfoContainer>
            </MovieInfoContainer>

            <DescriptionContainer>
              <Description>{background.desc}</Description>
            </DescriptionContainer>

          </ImageBg>
        </ImageContainer>
      </CarouselContainer>

      <WatchingContainer>
        <WatchingText>
          Continue Watching
        </WatchingText>

        <WatchingImage 
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh-FDskNZHepJoQUzNo2Qxqr6EQ5HLgfq1Pg&usqp=CAU'}}
          resizeMode='cover'
        >
          <WatchingTitle>How to train your Dragon: The Hidden World</WatchingTitle>
        
          <WatchingPlay>
           <PlayIcon name="play" size={22} color="#02ad94"/>
          </WatchingPlay>
        </WatchingImage>
      
        <MyListContainer>
          <MyListTitle>My List</MyListTitle>
        </MyListContainer>

        <MyList 
          data={list}
          horizontal={true}
          renderItem={renderItemList}
        />
      </WatchingContainer>

    </ScrollView>
  );
}

export default Home;