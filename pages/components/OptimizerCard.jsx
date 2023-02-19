
import { Center, Select, Text, Button, Divider, Skeleton, Grid, Textarea, useMantineColorScheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { useState } from 'react';
import { GiEnergise } from 'react-icons/gi';

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
'React': 'jsx',
'Vue': 'vue',
'Svelte': 'svelte',
'Python': 'py',
'C': 'c',
'C#': 'cs',
'Java': 'java',
'PHP': 'php',
'Go': 'go',
'Markdown': 'md',
'Swift': 'swift',
'Ruby': 'rb',
'HTML': 'html',
'CSS': 'css',
'SASS': 'sass',
'JSON': 'json',
'XML': 'xml',
'YAML': 'yaml',
'SQL': 'sql',
}

export default function OptimizerCard({sendPrompt}){
 
    const [languages, setLanguage] = useState(programmingLanguages)
    const [source, setSource] = useState('')
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')
    const [response, setResponse] = useState(false)

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    var prompt = `
    # Optimze a ${source} code snippet for speed, security, and readability
    # Start Source Code Snippet
    ${input}
    # End Source Code Snippet
    # Start Optimized Code Snippet
    `;

    function handleSubmit() {
        setLoading(true)
        if(input.length > 0 && source.length > 0){
          sendPrompt('optimizeCode', prompt).then(res => res.json()).then(res => {setResponse(res.data);setLoading(false)})
        }else{
          setLoading(false)
        }
    }

    return (
        <Center style={{height:'60vh'}}>
                <div style={{width:'70vw'}}>
                  <Grid grow justify="space-between" gutter='xl' mt='xl' columns={10}>
                    <Grid.Col span={4}>
                      <Center>
                      <Select 
                        data={languages}
                        value={source}
                        onChange={(value) => setSource(value)}
                        variant="unstyled"
                        placeholder="Select Source Language"
                        size='xl'
                        mx='sm'
                        mt='md'
                        searchable
                        creatable
                        clearable