import * as Crypto from 'expo-crypto';
import { Image, View } from "react-native"
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from 'react';

const cacheDir = FileSystem.cacheDirectory + 'images/';
const imageFileUri = (filename: string, extension: string) => `${cacheDir}${filename}.${extension}`;

async function getImage(uri: string) {
    await ensureCacheDirExists();

    const fileName = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.MD5,
        uri
    );

    const fileUri = imageFileUri(fileName, 'jpg');
    const fileInfo = await FileSystem.getInfoAsync(fileUri);

    if (!fileInfo.exists) {
        try{
            console.log("Downloading image...");
            await FileSystem.downloadAsync(uri, fileUri);
        }catch(e){
            console.error("Error downloading image:", e);
        }
    } else {
        console.log("Image already cached.");
    }

   return fileUri;
}

async function ensureCacheDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(cacheDir);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(cacheDir, { intermediates: true });
    }
}

type CachedImageProps = {
    source: string;
}

export const CachedImage = ({ source }: CachedImageProps) => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const uri = await getImage(source);
            setImageUri(uri);
        };

        fetchImage();
    }, [source]);
    
    return(
        <View style={{width: 200, height: 200, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center'}}>
            {imageUri && <Image width={200} height={200} source={{ uri: imageUri }} style={{ width: 200, height: 200,  }} />}
        </View>
    )
}