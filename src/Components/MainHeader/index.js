import React, {useMemo} from 'react';
import { Container, Profile, Welcome, UserName } from './styles.js';
import { emojis } from '../../utils/emojis';
import Toggle from '../Toggle/index.js';

export default function MainHeader() {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  },[])

  return (
    <Container>
      <Toggle/>
      
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Ivo Júnior</UserName>
      </Profile>
    </Container>
  )
} 
