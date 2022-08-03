import React from 'react';
import {Typography,Button,Stack,ButtonGroup} from '@mui/material';
import {MuiTypography} from './Typography12';
import {Buttonel} from './Button';



function App(){
    return (
        <>
        <Typography variant='h6' style={{fontWeight:'Bold'}} >TutorialsPoint</Typography>
        <Stack direction='row'>
        <ButtonGroup color='primary' variant='contained' orientation='horizontal' size='small'>
        <Button >JavaScript</Button>
        <Button>ReactJs</Button>
        <Button>MaterialUi</Button>
        <Button>HTML5</Button>
        <Button>CSS3</Button>
        </ButtonGroup>
        </Stack>
        </>
    )}

    export default App 