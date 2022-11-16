import Head from 'next/head';
import { useState } from 'react';
import { MantineProvider, TypographyStylesProvider, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props) {
  
  const { Component, pageProps } = 