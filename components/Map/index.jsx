import dynamic from 'next/dynamic';

const TheMap = dynamic(() => import('./TheMap'), {
  ssr: false
});

export default TheMap;