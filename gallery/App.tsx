import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as MediaLibrary from "expo-media-library"
import { useEffect, useState } from 'react';
import { Image } from 'expo-image';

export default function App() {
  const [albums, setAlbums] = useState<MediaLibrary.Album[]>([]);
  const [permissionsResponse, requestPermission] = MediaLibrary.usePermissions();

  async function getAlbums(){
    if(permissionsResponse?.status !== "granted") {
      await requestPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    setAlbums(fetchedAlbums);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Button  onPress={getAlbums} title="Get albums"/>
      <ScrollView>
        {albums && albums.filter(album => album.assetCount > 0).
          map((album) => <AlbumEntry key={album?.id} album={album} />)}
      </ScrollView>

    </SafeAreaView>
  );
}

const AlbumEntry: React.FC<{album: MediaLibrary.Album}> = ({ album }) => {
  const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);
  console.log({assets, album});
  
  useEffect(() => {
    async function getAlbumAssets(){
      const albumAssets = await MediaLibrary.getAssetsAsync({ album })
      setAssets(albumAssets.assets);
    }
    getAlbumAssets();
  }, [])

  return(
    <View key={album.id} style={{flex: 1, height: 200}}>
      <Text>{album.title} - {album.assetCount ?? 'no'} assets</Text>
      <View style={styles.albumAssetsContainer}>
        {assets && assets.map((asset) => (
          <Image source={{ uri: asset.uri }} style={{width: 50, height: 50, flex: 1}}/>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  albumAssetsContainer: {
    height: 300,
    width: 200,
    flex: 1,
    flexWrap: "wrap",
    gap: 6,
  }
});
