<script>
import Color from '$lib/color.svelte'
import Button from '$lib/button.svelte'
import Play from '$lib/play-button.svelte'
</script>
<main class="container mx-auto mt-5">
  <section class="p-20">
    <h2 class="mb-8">Typography</h2>
    <h1>H1 Example Text and <b>Bold</b></h1>
    <h1 class="mb-8">Two Lines</h1>
    
    <h2>H2/ Example Text with</h2>
    <h2 class="mb-8">two lines to show lineheight.</h2>

    <h3>H3/ Example Text with two lines</h3>
    <h3 class="mb-8">to show lineheight</h3>
    
    <h4>H4/ Example Text with two lines</h4>
    <h4>hyper is awesome</h4>
    <h4 class="mb-8">Add more lines</h4>
   

    <h5 class="mb-8">H5/ Example Text</h5>

    <blockquote class="mb-8">// Blockquote Example Software development
      is the constant embrace. The secret of the universe is 42</blockquote>

    <p>A simple paragraph, core basic paragraph need more text, for this block so that it can show how things are working</p>

    <p class="detail">A detailed paragraph that should show up with a 600 weight</p>
    
    <h2 class="mt-8 mb-10">Colors</h2>
    <div class="colors flex justify-between">
      <Color color="black" />
      <Color color="yellow" />
      <Color color="orange" />
      <Color color="red" />
      <Color color="blue" />
      <Color color="purple" />
      <Color color="green" />
    </div>  
    <div class="colors flex justify-between">
      <Color color="darkgray" />
      <Color color="lightyellow" />
      <Color color="lightorange" />
      <Color color="lightred" />
      <Color color="lightblue" />
      <Color color="lightpurple" />
      <Color color="lightgreen" />
    </div>
    <div class="colors flex justify-between">
      <Color color="gray" />
      <Color color="lightgray" />
    </div>
    <div class="colors flex justify-between">
      <Color color="whitesmoke" />
    </div>
    <h2 class="mt-8">Buttons</h2>
    <div class="flex justify-between">
      <Button>Get Started</Button>
      <Button bgColor="yellow">Get Started</Button>
      <Button bgColor="orange">Get Started</Button>
      <Button bgColor="red">Get Started</Button>
      <Button bgColor="blue">Get Started</Button>
      <Button bgColor="purple">Get Started</Button>
      <Button bgColor="green">Get Started</Button>
    </div>
    <div class="mt-8 flex justify-between">
      <Button txtColor="blue" bgColor="lightblue">Learn more about us</Button>
    </div>
    <div class="mt-3">
      <h4>Code</h4>
      <pre>
        <code>
{'<Button txtColor="white" bgColor="black">Get Started</Button>'}
        </code>
      </pre>
    </div>
    <div class="mt-8 flex justify-between">
      <Play>Watch</Play>
      <Play bgColor="lightblue" iconColor="blue">
        Watch
      </Play>

      <Play bgColor="lightorange" iconColor="orange">
        Watch
      </Play>
      <Play bgColor="lightred" iconColor="red">
        Watch
      </Play>
      <Play bgColor="lightpurple" iconColor="purple">
        Watch
      </Play>
    </div>
  </section>
  
</main>
<style>
  .colors {
    margin-top: 24px;
  }

  p {
    margin-bottom: 16px;
  }
</style>
