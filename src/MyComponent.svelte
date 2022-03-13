<script>
  const doSomething = () => {
    const arr = [1, 2, 3];
    const filteredArr = arr.filter((item) => item % 2 !== 0);
    alert('on it');
    console.log(filteredArr, 'filteredArr');
  };
</script>

<button on:click={doSomething}> Do some calculation </button>

<style>
  button {
    padding: 20px;
    background-color: aqua;
  }
</style>
