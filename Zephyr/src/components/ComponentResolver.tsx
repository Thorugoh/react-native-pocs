import React from 'react';
import { ActivityIndicator, View } from 'react-native';



type ComponentResolverProps = {
  variant: "experienceA" | "experienceB";
};

const ComponentResolver: React.FC<ComponentResolverProps> = ({ variant }) => {
  const Component = React.lazy(() =>
    import(
      `./variants/${variant}/Component`
    )
  );

  return (
    <React.Suspense fallback={<ActivityIndicator />}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Component />
      </View>
    </React.Suspense>
  );
};

export default ComponentResolver;