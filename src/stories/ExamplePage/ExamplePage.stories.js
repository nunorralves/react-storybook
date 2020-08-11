import React from 'react';

import { ExamplePage } from './ExamplePage';
import * as ExampleHeaderStories from '../ExampleHeader/ExampleHeader.stories';

export default {
  title: 'Example/Page',
  component: ExamplePage,
};

const Template = (args) => <ExamplePage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...ExampleHeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...ExampleHeaderStories.LoggedOut.args,
};
