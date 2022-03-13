<script>
  export let name;

  const handleClick = () => {
    const answer = 'Rahul';

    const myFunc = () => {
      return `the answer is ${answer}`;
    };

    console.log('arrow functions + template strings', myFunc());

    const elvenShieldRecipe = {
      leatherStrips: 2,
      ironIngot: 1,
      refinedMoonstone: 4,
    };

    // ES7 Object spread example
    const elvenGauntletsRecipe = {
      ...elvenShieldRecipe,
      leather: 1,
      refinedMoonstone: 1,
    };
    console.log('ES7 Object spread example: ', elvenGauntletsRecipe);

    // ES8 Object.values example
    // Note: Will not transpile without babel/imported polyfills because it is a new method
    console.log(
      'ES8 Object.values example',
      Object.values(elvenGauntletsRecipe)
    );

    // Event queue block scoping example
    // Check babel output to see that `let` isn't simply switched to `var`
    // because the code would not have the same output.
    for (let i = 0; i < 10; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1);
    }

    // async/await example from MDN
    function resolveAfter2Seconds() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log('calling');
      const result = await resolveAfter2Seconds();
      console.log(result);
      // expected output: "resolved"
    }

    asyncCall();

    const person = {
      name: 'Rahul',
      age: 27,
      address: {
        state: 'karnataka',
        city: 'bangalore',
      },
    };

    console.log('Optional chaining', person?.address?.city);
    console.log('clicked7');
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <button on:click={handleClick}>Click me6</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
