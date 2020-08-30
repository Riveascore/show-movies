import React from 'react';

import { MyHeader } from './MyHeader';

export default {
  title: 'Example/MyHeader',
  component: MyHeader,
};

const Template = (args) => <MyHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
