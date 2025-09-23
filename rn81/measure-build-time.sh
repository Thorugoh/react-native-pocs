#!/bin/bash

# iOS Build Time Measurement Script
# This script provides multiple ways to measure build times

echo "🕐 iOS Build Time Measurement Methods"
echo "======================================"

# Method 1: Using time command with xcodebuild
echo -e "\n📱 Method 1: Clean build with time measurement"
echo "Command: time xcodebuild -workspace ios/rn81.xcworkspace -scheme rn81 -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 16' clean build"

# Method 2: Using React Native CLI with time
echo -e "\n📱 Method 2: React Native CLI with time measurement"
echo "Command: time npx react-native run-ios --simulator='iPhone 16'"

# Method 3: Xcode build with timing
echo -e "\n📱 Method 3: Xcode with build timing enabled"
echo "Add to your ~/.zshrc or run before building:"
echo "export OTHER_SWIFT_FLAGS=\"-Xfrontend -debug-time-function-bodies\""
echo "export OTHER_CFLAGS=\"-Xclang -ftime-report\""

# Method 4: Using xcodebuild with build timing
echo -e "\n📱 Method 4: Detailed xcodebuild timing"
echo "Command: xcodebuild -workspace ios/rn81.xcworkspace -scheme rn81 -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 16' -showBuildTimingSummary build"

# Method 5: Metro bundler timing
echo -e "\n📱 Method 5: Metro bundler timing (separate from iOS build)"
echo "Command: time npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios-bundle.js"

echo -e "\n⚡ Quick build time measurement:"
echo "time npx react-native run-ios --simulator='iPhone 16'"

echo -e "\n📊 For detailed analysis, you can also:"
echo "1. Open ios/rn81.xcworkspace in Xcode"
echo "2. Go to Product → Build Settings"
echo "3. Search for 'Other Swift Flags' and add: -Xfrontend -debug-time-function-bodies"
echo "4. Build and check the build log for timing details"

echo -e "\n🧹 To ensure accurate measurements, clean before building:"
echo "npx react-native clean"
echo "cd ios && rm -rf build && pod clean && pod install && cd .."
