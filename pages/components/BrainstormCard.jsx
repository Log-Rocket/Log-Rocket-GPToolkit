import { Center, Paper, Select, Text, Button, Divider, Skeleton } from '@mantine/core';
import { useState } from 'react';

const sectors = [
    {value: 'Aerospace and aviation ', label: 'Aerospace and aviation '},
    {value: 'Agriculture ', label: 'Agriculture '},
    {value: 'Appliances ', label: 'Appliances '},
    {value: 'Automotive ', label: 'Automotive '},
    {value: 'Banking and financial services', label: 'Banking and financial services'},
    {value: 'Biometrics', label: 'Biometrics'},
    {value: 'CSR and governance ', label: 'CSR and governance '},
    {value: 'Construction and building ', label: 'Construction a