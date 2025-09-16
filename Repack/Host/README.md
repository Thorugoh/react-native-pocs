## Repack + RsPack POC

### creating chunks
- Running `yarn react-native bundle --entry-file ./index.js --platform ios` will create a build folder with chunks
- modules imported with lazy will be splitted in new chunks


### serving bundled files
- http-server build/generated/ios

### Comment out if statement to get from remote
