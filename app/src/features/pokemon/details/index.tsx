import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { getPokemonById } from '@/utils'
import { DisplayTable } from '@/components'
import { PokemonImage, Description, TypePill } from './components'
import { types } from '@/constants'
import { PokemonTypeName, Pokemon } from '@/interfaces'

export const PokemonDetails: FC = () => {
  const route = useRoute()
  const navigation = useNavigation<NativeStackNavigationProp<{}>>()
  //@ts-ignore
  const pokemon = getPokemonById(route.params?.id || -1)
  navigation.setOptions({ title: pokemon.name })

  return (
    <ScrollView>
      <PokemonImage url={pokemon.imageUrl} />
      <Description description="Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns it's firey breath on any opponent weaker than itself" />
      <DisplayTable
        title='Types'
        rows={[
          {
            label: 'This Pokemon',
            value: (
              <>
                {pokemon.types.map(type => (
                  <TypePill key={type} type={type} />
                ))}
              </>
            ),
          },
          {
            label: 'Most Effective',
            value: <MostEffectiveTypes {...pokemon} />,
          },
          {
            label: 'Fight With',
            value: <FightWithTypes {...pokemon} />,
          },
          {
            label: 'Avoid Using',
            value: <AvoidTypes {...pokemon} />,
          },
        ]}
      />
    </ScrollView>
  )
}

const MostEffectiveTypes: FC<Pokemon> = ({ types: pokemonTypes }) => (
  <>
    {findDuplicateTypes(getFightWithTypes(pokemonTypes, false)).map(type => (
      <TypePill key={type} type={type} />
    ))}
  </>
)

const FightWithTypes: FC<Pokemon> = ({ types: pokemonTypes }) => (
  <>
    {getFightWithTypes(pokemonTypes).map(type => (
      <TypePill key={type} type={type} />
    ))}
  </>
)

const AvoidTypes: FC<Pokemon> = ({ types: pokemonTypes }) => (
  <>
    {getAvoidTypes(pokemonTypes).map(type => (
      <TypePill key={type} type={type} />
    ))}
  </>
)

const findDuplicateTypes = (pokemonTypes: PokemonTypeName[]): PokemonTypeName[] => {
  const duplicateTypes: PokemonTypeName[] = []
  pokemonTypes.forEach((type, index) => {
    const potentialDuplicateIndex = pokemonTypes.indexOf(type)
    if (potentialDuplicateIndex !== index && potentialDuplicateIndex >= 0) {
      duplicateTypes.push(type)
    }
  })
  return duplicateTypes
}

const getFightWithTypes = (pokemonTypes: PokemonTypeName[], shouldBeUnique = true) => {
  const fightWithTypes: PokemonTypeName[] = []
  pokemonTypes.forEach(type => {
    types[type].doubleDamageFrom.forEach(doubleDamageType => {
      fightWithTypes.push(doubleDamageType)
    })
  })
  return shouldBeUnique ? [...new Set(fightWithTypes)] : fightWithTypes
}

const getAvoidTypes = (pokemonTypes: PokemonTypeName[]) => {
  const avoidTypes: PokemonTypeName[] = []
  pokemonTypes.forEach(type => {
    types[type].halfDamageFrom.forEach(doubleDamageType => {
      avoidTypes.push(doubleDamageType)
    })
  })
  return [...new Set(avoidTypes)]
}
