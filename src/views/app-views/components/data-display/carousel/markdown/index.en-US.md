---
category: Components
type: Data Display
title: Carousel
---

A carousel component. Scales with its container.

## When To Use

- When there is a group of content on the same level.
- When there is insufficient content space, it can be used to save space in the form of a revolving door.
- Commonly used for a group of pictures/cards.

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| afterChange | Callback function called after the current index changes | function(current) | - |  |
| autoplay | Whether to scroll automatically | boolean | `false` |  |
| beforeChange | Callback function called before the current index changes | function(from, to) | - |  |
| dotPosition | The position of the dots, which can be one of `top` `bottom` `left` `right` | string | bottom | 3.17.0 |
| dots | Whether to show the dots at the bottom of the gallery | boolean | `true` |  |
| easing | Transition interpolation function name | string | `linear` |  |
| effect | Transition effect | `scrollx` \| `fade` | `scrollx` |  |

## Methods

| Name | Description | Version |
| --- | --- | --- |
| goTo(slideNumber, dontAnimate) | Go to slide index, if dontAnimate=true, it happens without animation | 3.9.3 |
| next() | Change current slide to next slide |  |
| prev() | Change current slide to previous slide |  |

For more info on the parameters, refer to the <https://github.com/akiran/react-slick>
