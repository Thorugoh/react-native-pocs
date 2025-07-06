import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as MediaLibrary from "expo-media-library"
import { useEffect, useState } from 'react';

export default function App() {
  const [albums, setAlbums] = useState([]);
  const [permissionsResponse, requestPermission] = MediaLibrary.usePermissions();

  async function getAlbums(){
    if(permissionsResponse?.status !== "granted") {
      await requestPermission();
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Button  onPress={getAlbums} title="Get albums"/>
      <ScrollView>
        {albums && albums.map((album) => <AlbumEntry album={album} />)}
      </ScrollView>

    </SafeAreaView>
  );
}

const AlbumEntry = ({ album }) => {
  const [asset, setAssets] = useState<MediaLibrary.Asset[]>([]);

  useEffect(() => {
    async function getAlbumAssets(){
      const albumAssets = await MediaLibrary.getAssetsAsync({ album })
      setAssets(albumAssets.assets);
    }
  }, [])

  return(
    <View key={album.id} style={{}}>
      <Text>{album.title} - {album.assetCount ?? 'no'} assets</Text>
      <View style={styles.albumAssetsContainer}>
        {assets && assets.map((asset) => (
          <Image source={{ uri: asset.uri }} width={50} height={50} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
