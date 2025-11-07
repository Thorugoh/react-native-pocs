# Comparison between react-native-svg and expo-image

![alt text](image.png)

On this test, expo-image rendered svgs almost instantaneously, while react-native-svg took around 30 seconds to process Thanksgiving SVG and rendered it wrong at the end.

|react-native-svg Thanksgiving|
|---|
|![alt text](image-1.png)| 

## Tradeoffs 
### react-native-svg
- Creates an entire react component tree from it, where each element goes through the reconciliation algorithm and isn't memoized by default.
- Svg xml is parsed and used to draw the SVG

### expo-image
- Delegates tasks of drawing SVG images to native libraries Glide with SVG related plugins (android) and SDWebImage (iOs).
- React Tree gets only component.
- support large portion of the SVG standard.
- Load images asynchronously since a native library is doing the work to render on the UI thread.