import * as React from 'react';
import { Layout } from 'react-admin';
import type { Theme } from '@mui/material/styles';
import AppBar from './AppBar';
import Menu from './Menu';

export default ({ children }: { children: React.ReactNode }) => (
    <Layout
        appBar={AppBar}
        menu={Menu}
        sx={{
            backgroundColor: (theme: Theme) =>
                theme.palette.background.default,
        }}
    >
        {children}
    </Layout>
);
