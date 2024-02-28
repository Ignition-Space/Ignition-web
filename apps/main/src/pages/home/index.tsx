import { WelcomeEmoji } from '@/components/welcome'
import { Flex } from 'antd';

const HomePage = () => {
  return (
    <Flex justify="center" align="center" style={{ height: '100%', minHeight: '100vh' }} >
      <WelcomeEmoji/>
    </Flex>
  );
};

export default HomePage;
