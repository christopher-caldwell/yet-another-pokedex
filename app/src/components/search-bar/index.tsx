import React, { FC } from 'react'
import { SearchBar as RNESearchBar, SearchBarProps } from 'react-native-elements'

import { BindValue } from '@/hooks'
/**
 * This "hacks" the react-native-elements Search Bar due to a bad typing job
 * https://github.com/react-native-elements/react-native-elements/issues/3163
 */
export const SearchBar: FC<Props> = props => {
  //@ts-ignore
  return <RNESearchBar {...(props as SearchBarProps)} />
}

type Props = Partial<Omit<SearchBarProps, 'onChangeText'> & BindValue>
