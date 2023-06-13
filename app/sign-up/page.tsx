import { SignUp } from '@clerk/nextjs';
import { View } from 'reshaped';

const page = () => {
  return (
    <View direction='row' align='center' justify='center' height='100vh'>
      <SignUp signInUrl='/sign-in' />
    </View>
  );
};

export default page;
