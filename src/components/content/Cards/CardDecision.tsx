/********************************************************************************
 * Copyright (c) 2023 BMW Group AG
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
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

import ApprovalIcon from '@mui/icons-material/Approval'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Box, Typography, IconButton, useTheme } from '@mui/material'
import { CardChip, StatusVariants } from './CardChip'

export interface AppContent {
  appId?: string
  name?: string
  provider: string
  status: StatusVariants
  id?: string
  title?: string
}

export interface CardDecisionProps {
  items: AppContent[]
  onApprove: (e: string) => void
  onDelete: (e: string) => void
  onClick: (e: string) => void
}

export const CardDecision = ({
  items,
  onApprove,
  onDelete,
  onClick,
}: CardDecisionProps) => {
  const theme = useTheme()

  const handleDecision = (
    e: React.SyntheticEvent,
    id: string,
    type: string
  ) => {
    e.stopPropagation()
    type === 'approve' ? onApprove(id) : onDelete(id)
  }

  return (
    <Box
      className="cx-card__decision"
      sx={{
        display: 'flex',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: '-10px',
        marginLeft: '-10px',
      }}
    >
      {items.map((item) => {
        const id = item.appId ?? item.id ?? ''
        const name = item.title ?? item.name ?? ''
        return (
          <Box
            className="cx-card__decision--item"
            key={id}
            sx={{
              paddingRight: '10px',
              paddingLeft: '10px',
              width: '270px',
              minWidth: '270px',
              marginBottom: '20px',
            }}
          >
            <Box
              className="cx-card__decision--button"
              sx={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                padding: '16px 28px',
                width: 'auto',
                height: '200px',
                background: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                flex: 'none',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0,
                cursor: 'pointer',
                ':hover': {
                  boxShadow: theme.shadows['20'],
                },
              }}
              onClick={() => {
                onClick(id)
              }}
            >
              <Typography
                className="cx-card__decision--title"
                variant="h5"
                sx={{
                  height: '48px',
                  '-webkit-line-clamp': '2',
                  display: '-webkit-box',
                  '-webkit-box-orient': 'vertical',
                  overflow: 'hidden',
                }}
              >
                {name}
              </Typography>
              <Typography
                className="cx-card__decision--provider"
                variant="label2"
                sx={{
                  color: '#999999',
                  height: '48px',
                }}
              >
                {item.provider}
              </Typography>
              <Box
                sx={{ marginBottom: '10px' }}
                className="cx-card__decision--chip"
              >
                <CardChip status={item.status} statusText={item.status} />
              </Box>
              {(item.status?.toLowerCase() as StatusVariants) !==
                StatusVariants.active && (
                <Box
                  className="cx-card__decision--status"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton
                    className="cx-card__decision--icon"
                    sx={{
                      padding: '5px',
                      border: '1px solid #00AA55',
                      margin: '0 10px',
                      ':hover': {
                        boxShadow: '0px 0px 0px 3px rgb(41 184 112 / 40%)',
                        backgroundColor: 'transparent',
                      },
                    }}
                    onClick={(e) => {
                      handleDecision(e, id, 'approve')
                    }}
                  >
                    <ApprovalIcon sx={{ color: '#00AA55' }} />
                  </IconButton>
                  <IconButton
                    className="cx-card__decision--icon-button"
                    sx={{
                      padding: '5px',
                      border: '1px solid #D91E18',
                      ':hover': {
                        boxShadow: '0px 0px 0px 3px rgb(217 30 24 / 40%)',
                        backgroundColor: 'transparent',
                      },
                    }}
                    onClick={(e) => {
                      handleDecision(e, id, 'delete')
                    }}
                  >
                    <DeleteOutlineIcon sx={{ color: '#D91E18' }} />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
