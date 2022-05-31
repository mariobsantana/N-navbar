import * as React from 'react';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {FC} from "react";

type size = "small" | "medium" | "large";

export interface ArrowProps extends ButtonProps{
 onClick:()=>void;
}

export interface ButtonProps extends IconButtonProps{
   size?:size
}

export const ArrowsButtons:FC<ArrowProps> =({onClick, size, color}) =>{
    const props = {onClick, size, color}


    return (
    <Stack spacing={2} direction="row" data-testid="ArrowsNav">
        <IconButton aria-label="back" type="button" {...props} data-testid="ArrowsLeft">
        <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton aria-label="forward" type="button" {...props} data-testid="ArrowsRight">
        <ArrowForwardIosIcon />
        </IconButton>

    </Stack>
  );
}
