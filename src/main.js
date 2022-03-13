import App from './App.svelte';
import newfeature from './newfeature';

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

newfeature();

export default app;
