
import { Center, Select, Button, Divider, Skeleton, Grid, Textarea, useMantineColorScheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { useState } from 'react';
import { GiTransform } from 'react-icons/gi';

const programmingLanguages = [
    {value: 'Bash', label: 'Bash'},
    {value: 'C++', label: 'C++'},
    {value: 'JavaScript', label: 'JavaScript'},
    {value: 'TypeScript', label: 'TypeScript'},
    {value: 'React', label: 'React'},
    {value: 'Vue', label: 'Vue'},
    {value: 'Svelte', label: 'Svelte'},
    {value: 'Python', label: 'Python'},
    {value: 'C', label: 'C'},
    {value: 'C#', label: 'C#'},
    {value: 'Java', label: 'Java'},
    {value: 'PHP', label: 'PHP'},
    {value: 'Go', label: 'Go'},
    {value: 'Markdown', label: 'Markdown'},
    {value: 'Swift', label: 'Swift'},
    {value: 'Ruby', label: 'Ruby'},
    {value: 'HTML', label: 'HTML'},
    {value: 'CSS', label: 'CSS'},
    {value: 'SASS', label: 'SASS'},
    {value: 'JSON', label: 'JSON'},
    {value: 'XML', label: 'XML'},
    {value: 'YAML', label: 'YAML'},
    {value: 'SQL', label: 'SQL'},
]

const fileExt = {
  'Bash': 'sh',
  'C++': 'cpp',
  'JavaScript': 'js',
  'TypeScript': 'ts',