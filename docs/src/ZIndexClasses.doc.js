// @flow strict
import React from 'react';
import { Box, Heading, Stack, Text } from 'gestalt';
import Example from './components/Example.js';
import PageHeader from './components/PageHeader.js';
import Markdown from './components/Markdown.js';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="FixedZIndex and CompositeZIndex"
    description="FixedZIndex and CompositeZIndex are 2 classes that generate z-index for the Box and Sticky components."
  />
);

card(
  <>
    <Heading size="sm">FixedZIndex</Heading>
    <Stack gap={2}>
      <Text>
        FixedZIndex is used for setting fixed z-index values. FixedZIndex must
        be instantiated with a number.
      </Text>
      <Box padding={2} color="lightGray" rounding={2}>
        <Markdown
          text="
~~~jsx
import { FixedZIndex } from 'gestalt';
const fixedZindex = new FixedZIndex(1);
~~~
  "
        />
      </Box>
    </Stack>
  </>
);

card(
  <>
    <Heading size="sm">CompositeZIndex</Heading>
    <Stack gap={2}>
      <Text>
        CompositeZIndex is used for dinamically composing z-index values.
        CompositeZIndex must be instantiated with an array of FixedZIndex or
        CompositeZIndex instances.
      </Text>
      <Box padding={2} color="lightGray" rounding={2}>
        <Markdown
          text="
~~~jsx
import { CompositeZIndex, FixedZIndex } from 'gestalt';
const fixedZindex = new FixedZIndex(1);
const compositeZIndex = new CompositeZIndex([fixedZindex]);
const highestCompositeZIndex = new CompositeZIndex([fixedZindex, compositeZIndex]);
~~~
  "
        />
      </Box>
    </Stack>
  </>
);

card(
  <Example
    description={`
The following example shows an overlay and how 2 Avatar components use the zIndex prop in Box to position themselves under and above the overlay.
  `}
    id="zindex"
    name="ZIndex"
    defaultCode={`
function ZIndexBoxExample() {
  const underOverlayZIndex = new FixedZIndex(1);
  const overlayZIndex  = new CompositeZIndex([underOverlayZIndex]);
  const aboveOverlayZIndex = new CompositeZIndex([overlayZIndex]);

  return (
      <Box width={125} height={250} position='relative'>
        <Box
          color='transparentDarkGray'
          height='100%'
          position='absolute'
          width='100%'
          zIndex={overlayZIndex}
        />
        <Stack gap={1}>
          <Box position='absolute' zIndex={underOverlayZIndex} >
            <Avatar
              size="xl"
              src="https://i.ibb.co/ZfCZrY8/keerthi.jpg"
              name="Keerthi"
            />
          </Box>
          <Box bottom position='absolute' zIndex={aboveOverlayZIndex}>
            <Avatar
              size="xl"
              src="https://i.ibb.co/ZfCZrY8/keerthi.jpg"
              name="Keerthi"
            />
          </Box>
        </Stack>
      </Box>
  )
}
`}
  />
);

export default cards;