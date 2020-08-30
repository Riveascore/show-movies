import React from 'react';

import { MyHeader } from './MyHeader';

export default {
  title: 'Example/MyHeader',
  component: MyHeader,
};

const Template = (args) => <MyHeader {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Top Rated Movies"
};
