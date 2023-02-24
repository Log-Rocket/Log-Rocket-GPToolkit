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