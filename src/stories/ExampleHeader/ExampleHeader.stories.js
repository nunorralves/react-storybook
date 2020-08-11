import React from 'react';

import { ExampleHeader } from './ExampleHeader';

export default {
  title: 'Example/Header',
  component: ExampleHeader,
};

const Template = (args) => <ExampleHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
