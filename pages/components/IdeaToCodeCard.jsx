import { Center, Select, Text, Button, Divider, Skeleton, Grid, Textarea, useMantineColorScheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { GiDiamondHard } from 'react-icons/gi'
import { useState } from 'react';

const programmingLanguages = [
  {value: 'Bash', label: 'Bash'},
  {value: 'C++', labe