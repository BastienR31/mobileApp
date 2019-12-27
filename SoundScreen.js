import React, {useState, useEffect} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

import { Audio, Video } from 'expo-av';


const SoundScreen = () => {
  
    const [playingStatus, setPlayingStatus] = useState('nosound');
    const [isPlaying, setIsPlaying] = useState(null);
  
    const [sound, setSound] = useState(null);
  
    //const soundObject = new Audio.Sound();
  
    const _playRecording = async() => {
  
      const {sound} = await Audio.Sound.createAsync(require("./assets/bim.mp3"), {
        volume: 1,
        isLooping: false,
        shouldPlay: true,
        isMuted: false
      });
      setSound(sound);
      _updateScreenForSoundStatus
      setPlayingStatus('playing');
    };
  
    _updateScreenForSoundStatus = (status) => {
      if (status.isPlaying && playingStatus !== "playing") {
   
        setPlayingStatus('playing');
      } else if (!status.isPlaying && playingStatus === "playing") {
  
        setPlayingStatus('donepause');
      }
    };
  
    const _pauseAndPlayRecording = async() => {
      if (sound != null) {
        if (playingStatus == 'playing') {
          console.log('pausing...');
          await sound.pauseAsync();
          console.log('paused!');
          setPlayingStatus('donepause');
        } else {
          console.log('playing...');
          await sound.playAsync();
          console.log('playing!');
          setPlayingStatus('playing');
        }
      }
    }
  
    _syncPauseAndPlayRecording = () => {
      if (sound != null) {
        if (playingStatus == 'playing') {
          sound.pauseAsync();
        } else {
          sound.playAsync();
        }
      }
    }
  
    _playAndPause = () => {
      switch (playingStatus) {
        case 'nosound':
          _playRecording();
          break;
        case 'donepause':
        case 'playing':
          _pauseAndPlayRecording();
          break;
      }
    }
  
    
  
    return (
      
      <View style={styles.container}>
        <Text>Open up App.js to start toto working on your app!</Text>
        <Text>Try to play sound with expo-av</Text>
  
            <Button onPress={()=>_playAndPause()} title={playingStatus}></Button>
  
            {/* <Button onPress={()=>stopAudio()} title="Arrêter son"></Button> */}
  
          <Text style={styles.buttonText}>
            {playingStatus}
          </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      textAlign: 'center',
      backgroundColor: 'transparent',
    },
  });
  

export default SoundScreen;
