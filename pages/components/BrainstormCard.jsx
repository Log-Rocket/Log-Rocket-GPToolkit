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
    {value: 'Construction and building ', label: 'Construction and building '},
    {value: 'Customer service ', label: 'Customer service'},
    {value: 'Data protection', label: 'Data protection'},
    {value: 'Electrical and electronic', label: 'Electrical and electronic'},
    {value: 'Energy and utilities', label: 'Energy and utilities'},
    {value: 'Engineering', label: 'Engineering'},
    {value: 'Environmental management and sustainability', label: 'Environmental management and sustainability'},
    {value: 'Facilities management', label: 'Facilities management