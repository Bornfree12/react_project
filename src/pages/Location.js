import React from 'react';
import Layout from '../components/Layout/Layout';

const Location = () => {
  return (
    <Layout>
    <div style={{ height: '400px', width: '100%' }}>
      <iframe src="https://my.atlist.com/map/401d94dc-a464-4b12-8125-36d4b78919d9/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="400px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>
    </div>
    </Layout>
  );
};

export default Location;
