import React from 'react';

import colors from './colors.twig';

import colorsData from './colors.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Colors' };

export const Usage = () => (
  <div dangerouslySetInnerHTML={{ __html: colors(colorsData) }} />
);
