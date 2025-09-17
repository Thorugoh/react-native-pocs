## Experimental Precompiled iOS Builds

Doc Reference: https://reactnative.dev/blog/2025/08/12/react-native-0.81#experimental-precompiled-ios-builds


React Native 0.81 introduces precompiled builds, cutting compile times by up 10x in projects where React Native is the primary dependency.

This is still experimental.

### Run: 
`RCT_USE_RN_DEP=1 RCT_USE_PREBUILT_RNCORE=1 bundle exec pod install`

### Current limitations: 
- You cannot debug and step into React Native's internals. You can still debug your own native code while using a precompiled version of React Native.

- Prebuilds are not supported in Xcode 26 Beta, because the IDE builds all targets with Swift explicit modules enabled. To use precompiled builds with Xcode 26, set the SWIFT_ENABLE_EXPLICIT_MODULES flag to NO in your Xcode project.

