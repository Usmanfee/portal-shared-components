/********************************************************************************
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { ComponentStory } from '@storybook/react'

import { CardGrid as Component } from './CardGrid'

export default {
  title: 'Content Components',
  component: Component,
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const CardGrid = Template.bind({})
CardGrid.args = {
  baseUrl: 'https://raw.githubusercontent.com/catenax-ng/tx-portal-assets/main/public/assets/',
  align: "center",
  provider: {
    "detailsWithImageRow1": [
      {
        "title": "Subscription Authority",
        "imagePath": "/images/content/teaser.png",
        "description": "This are the details which I will still add",
        "readMore": "",
        "backgroundColor": "#FFFFFF",
        "imageShape": "circle"
      },
      {
        "title": "Subscription Flow",
        "imagePath": "/images/content/teaser.png",
        "description": "This are the details which I will still add",
        "readMore": "",
        "backgroundColor": "#FFFFFF",
        "imageShape": "circle"
      },
      {
        "title": "Subscription Authority",
        "imagePath": "/images/content/teaser.png",
        "description": "This are the details which I will still add",
        "readMore": "",
        "backgroundColor": "#FFFFFF",
        "imageShape": "circle"
      },
    ],
    "detailsWithImageRow2": [
      {
        "title": "Subscription Authority",
        "imagePath": "/images/content/teaser.png",
        "description": "This are the details which I will still add",
        "readMore": "",
        "backgroundColor": "#FFFFFF",
        "imageShape": "circle"
      },
      {
        "title": "Subscription Flow",
        "imagePath": "/images/content/teaser.png",
        "description": "This are the details which I will still add",
        "readMore": "",
        "backgroundColor": "#FFFFFF",
        "imageShape": "circle"
      }
    ],
    "detailsWithoutImageRow1": [
      {
        "title": "Who can subscribe?",
        "description": "the details will get added asap",
        "readMore": "/help",
        "readMoreTitle": "Details",
        "backgroundColor": "#FFFFFF"
      },
      {
        "title": "What happens after the subscription?",
        "description": "the details will get added asap",
        "readMore": "/help",
        "readMoreTitle": "Details",
        "backgroundColor": "#FFFFFF"
      },
      {
        "title": "How can I use the service?",
        "description": "the details will get added asap",
        "readMore": "/help",
        "readMoreTitle": "Details",
        "backgroundColor": "#FFFFFF"
      }
    ]
  },
  grid: 3
}
