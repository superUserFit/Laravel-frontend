import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { extendTheme } from "@chakra-ui/theme-utils";


const styles = {
	global: (props) => ({
	  body: {
		color: mode("gray.700", "whiteAlpha.800")(props),
		bg: mode("gray.200", "#101010")(props),
	  },
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};
  
const colors = {
	gray: {
	  light: "#616161",
	  dark: "#1e1e1e",
	},
};
  
  // Create a theme using extendTheme from Chakra UI
const theme = extendTheme({ config, styles, colors });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
	  	<ChakraProvider theme={theme}>
		  	<App />
		</ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)
