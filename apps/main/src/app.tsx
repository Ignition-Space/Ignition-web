import { MantineProvider } from '@mantine/core';

export function rootContainer(container) {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS >
			{container}
		</MantineProvider>
	)
}