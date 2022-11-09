import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { LinkComponent } from '../link.component';

// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/Link',
  component: LinkComponent
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  primary: true,
  size: 'standard',
  label: 'My storybook button!',
};

export const PrimaryFullWidth: Story = () => ({
  props: {
    primaryFullWidth: true,
    size: 'full width',
    label: 'CMS Primary Full Black'
  },
});

export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!
