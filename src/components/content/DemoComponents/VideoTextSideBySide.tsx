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

import { type ProviderProps } from './ContentComponentsTypes'
import './ContentComponents.scss'
import ReactPlayer from 'react-player'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Trans } from 'react-i18next'
import { Typography } from '../../basic/Typography'
import { IconButton } from '../../basic/IconButton'

export const VideoTextSideBySide = ({
  provider,
  scrollTop = () => {
    // do nothing
  },
  showScroll = true,
}: {
  provider: ProviderProps
  scrollTop: () => void
  showScroll: boolean
}) => {
  return (
    <div className={'imageVideoTextSideBySide'}>
      <div>
        <ReactPlayer
          className="video"
          url={provider.videoUrl}
          controls={true}
        />
      </div>
      <div
        className={'titleDescriptionBody'}
        style={{ width: '50% !important' }}
      >
        <div className="titleWithIcon sideBySideTitle">
          <Typography variant="h2">{provider.title}</Typography>
          {showScroll && (
            <IconButton onClick={scrollTop}>
              <ArrowUpwardIcon />
            </IconButton>
          )}
        </div>
        <Trans>
          <Typography className={'providerDescription'} variant="body1">
            {provider.description}
          </Typography>
        </Trans>
      </div>
    </div>
  )
}
