import React from 'react';
import rocketConstants from '@config/rocketConstants';
import { createFromIconfontCN } from '@ant-design/icons';

export default ({ type, className }) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: rocketConstants.iconScriptUrl,
  });
  return <IconFont type={type} className={className} />;
};
