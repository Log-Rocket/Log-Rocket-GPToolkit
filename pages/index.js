import Head from 'next/head'
import { showNotification } from '@mantine/notifications';
import { Center, Button, Paper, Text, Tabs, Alert, ActionIcon, Modal, PasswordInput, useMantineColorScheme } from '@mantine/core';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import { AiOutlineKey } from 'react-icons/ai'
import { SiBuymeacoffee } from 'react-icons/si'
import { GiToolbox, GiBrainstorm, GiComputing, GiBriefcase, GiBookCover, GiPalette } from 'react-icons/gi'
import { useState } from 'react';
import { FaHeartBroken } from 'react-icons/fa';
import BrainstormCard from './components/BrainstormCard';
import PromptCard from './components/PromptCard';
import IdeaToCodeCard from './components/IdeaToCodeCard';
import TranspilerCard from './components/TranspilerCard';
import OptimizerCard from './components/OptimizerCard';
import IdeaToArtCard from './components/IdeaToArtCard';

export default function Home() {

  const [key, setKey] = useState('');
  const [error, setError] = useState(false);
  const [mode, setMode] = useState(0);
  const [modal, setModal] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  // Function for generic prompt sending
  async function sendPrompt(operation, prompt) {
    if(key === ''){
      showNotification({
        autoClose: 6000,
        title: 'Oops! Your API key is missing',
        message: 'Try entering your api key by opening the key icon in the bottom right!',
        color: 'pink'
      })
    }
    return fetch('api/handleRequest', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({operation: operation, key: key ? key : null, prompt: prompt})})
  }

  return (
    <div>

      {/* Metadata */}
      <Head>
        <title>GPToolkit</title>
        <meta name="description" content="A web app tool for generating elevator pitches, new business ideas, and/or helping refine company messages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar/Header  */}
      <Paper shadow='sm' style={{width:'100vw', borderRadius:'0px', height: '80px', position: 'absolute', top: 0, left: 0}}>
        <Center>
          <div style={{height:'80px', display:'flex', alignItems:'center'}}>
            <GiToolbox style={{fontSi