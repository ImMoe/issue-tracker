import { Skeleton } from '@/app/components';
import { Box } from '@radix-ui/themes';

const LoadingNewIssuePage = async () => {
  return (
    <Box className='max-w-xl'>
      <p>Loading....</p>
      <Skeleton />
      <Skeleton height='20rem' />
    </Box>
  );
};

export default LoadingNewIssuePage;
