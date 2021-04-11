<script>
import Color from '$lib/color.svelte'
import Button from '$lib/button.svelte'
import Play from '$lib/play-button.svelte'
import NavButton from '$lib/nav-button.svelte'
import LinkBtn from '$lib/link-button.svelte'
import Link from '$lib/link.svelte'
import Pagination from '$lib/pagination.svelte'
import FAQ from '$lib/faq.svelte'
import Input from '$lib/input.svelte'
import Search from '$lib/search.svelte'
import Select from 'svelte-select'

  let items = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'pizza', label: 'Pizza'},
    {value: 'cake', label: 'Cake'},
    {value: 'chips', label: 'Chips'},
    {value: 'ice-cream', label: 'Ice Cream'},
  ];

  let selectedValue = {value: 'cake', label: 'Cake'};

  function handleSelect(event) {
    console.log('selected item', event.detail);
    // .. do something here 🙂
  }

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
    <div class="mt-3 flex justify-between">
      <Button>Get Started</Button>
      <Button bgColor="yellow">Get Started</Button>
      <Button bgColor="orange">Get Started</Button>
      <Button bgColor="red">Get Started</Button>
      <Button bgColor="purple">Get Started</Button>
      <Button bgColor="green">Get Started</Button>
    </div>
    <div class="mt-3 flex justify-between">
      <Button bgColor="gradient-blue">Get Started</Button>
      <Button bgColor="gradient-yellow">Get Started</Button>
      <Button bgColor="gradient-orange">Get Started</Button>
      <Button bgColor="gradient-red">Get Started</Button>
      <Button bgColor="gradient-purple">Get Started</Button>
      <Button bgColor="gradient-green">Get Started</Button>
    </div>
    <div class="mt-3 flex justify-between">
      <Button bgColor="active-blue">Get Started</Button>
      <Button bgColor="active-yellow">Get Started</Button>
      <Button bgColor="active-orange">Get Started</Button>
      <Button bgColor="active-red">Get Started</Button>
      <Button bgColor="active-purple">Get Started</Button>
      <Button bgColor="active-green">Get Started</Button>
    </div>
    <div class="mt-3">
      <h5>code</h5>
      <pre>
        <code>
{'<Button txtColor="white" bgColor="black">Get Started</Button>'}
        </code>
      </pre>
    </div>
    
    <h4 class="mt-8">Link Buttons</h4>
    <div class="mt-8 flex">
      <LinkBtn href="/">Learn More About Us</LinkBtn>
      <LinkBtn href="/" styles="ml-3" bgColor="active-yellow">Learn More About Us</LinkBtn>
      <LinkBtn href="/" styles="ml-3" bgColor="active-orange">Learn More About Us</LinkBtn>
      <LinkBtn href="/" styles="ml-3" bgColor="active-red">Learn More About Us</LinkBtn>
      <LinkBtn href="/" styles="ml-3" bgColor="active-purple">Learn More About Us</LinkBtn>
      <LinkBtn href="/" styles="ml-3" bgColor="active-green">Learn More About Us</LinkBtn>
    </div>
    <div class="mt-3">
      <h5>code</h5>
      <pre>
        <code>
{'<LinkBtn href="/" bgColor="active-blue">Learn More About Us</LinkBtn>'}
        </code>
      </pre>
    </div>
    <h4 class="mt-8">Play Buttons</h4>
    <div class="mt-3 flex justify-between">
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
    <div class="mt-3">
      <h5>code</h5>
      <pre>
        <code>
{'<Play bgColor="lightblue" iconColor="blue">Get Started</Play>'}
        </code>
      </pre>
    </div>
    <h4 class="mt-8">Nav Buttons</h4>
    <div class="mt-3 flex justify-between">
      <NavButton>API DOCS</NavButton>
      <NavButton txtColor='yellow' bgColor='lightyellow'>API DOCS</NavButton>
      <NavButton txtColor='orange' bgColor='lightorange'>API DOCS</NavButton>
      <NavButton txtColor='red' bgColor='lightred'>API DOCS</NavButton>
      <NavButton txtColor='purple' bgColor='lightpurple'>API DOCS</NavButton>
      <NavButton txtColor='green' bgColor='lightgreen'>API DOCS</NavButton>

    </div>
    <div class="mt-3">
      <h5>code</h5>
      <pre>
        <code>
{'<NavButton bgColor="lightgreen">API DOCS</NavButton>'}
        </code>
      </pre>
    </div>
    <h4 class="mt-8">Links</h4>
    <div class="mt-3 flex">
      <Link href="/" txtColor="blue">Button/Text Link</Link>
      <Link styles="ml-3" href="/" txtColor="yellow">Button/Text Link</Link>
      <Link styles="ml-3" href="/" txtColor="orange">Button/Text Link</Link>
      <Link styles="ml-3" href="/" txtColor="red">Button/Text Link</Link>
      <Link styles="ml-3" href="/" txtColor="purple">Button/Text Link</Link>
      <Link styles="ml-3" href="/" txtColor="green">Button/Text Link</Link>
    </div>
    <h4 class="mt-8">Button Colors</h4>
    <div class="mt-3 flex">
      <div class="bg-red box"></div>
      <div class="bg-blue box"></div>
      <div class="bg-yellow box"></div>
      <div class="bg-orange box"></div>
      <div class="bg-purple box"></div>
      <div class="bg-green box"></div>
    </div>
    <div class="mt-1 flex">
      <div class="bg-gradient-red box"></div>
      <div class="bg-gradient-blue box"></div>
      <div class="bg-gradient-yellow box"></div>
      <div class="bg-gradient-orange box"></div>
      <div class="bg-gradient-purple box"></div>
      <div class="bg-gradient-green box"></div>
    </div>
    <div class="mt-1 flex">
      <div class="bg-lightred box"></div>
      <div class="bg-lightblue box"></div>
      <div class="bg-lightyellow box"></div>
      <div class="bg-lightorange box"></div>
      <div class="bg-lightpurple box"></div>
      <div class="bg-lightgreen box"></div>
    </div>
    <h4 class="mt-8">Pagination</h4>
    <Pagination pages=5 /> 
    <Pagination pages=5 color="blue" /> 
    <Pagination pages=5 color="yellow" /> 
    <Pagination pages=5 color="orange" /> 
    <Pagination pages=5 color="purple" /> 
    <Pagination pages=5 color="green" /> 
    <h5>code</h5>
    <pre>
      <code>
{'<Pagination bgColor="lightgreen">API DOCS</Pagination>'}
      </code>
    </pre>
    <h3 class="mt-8">Elements</h3>
    <h4 class="mt-8">FAQ Toggle</h4>
    <FAQ class="mt-8">
      <span slot="question">How can I know if the services hyper provides is right for me?</span>
      <span slot="answer">All things are benefited greatly by hyper!</span>
    </FAQ>
    <h5>Code</h5>
    <pre>
      <code>
{`
<FAQ>
  <span slot="question">Some Question</span>
  <span slot="answer">Answert</span>
</FAQ>
`}
      </code>
    </pre>
    <h4 class="mt-8">Search</h4>
    <Search />
    <h4 class="mt-8 mb-3">Input</h4>
    <Input />
    <h4 class="mt-8 mb-3">Select</h4>
    <!--
    Does not work in svelte kit because it is an installed component
    I could try to copy to the src/lib dir and see if it works
    <Select {items} {selectedValue} on:select={handleSelect}></Select>
    -->
  </section>
  
</main>
<style lang="postcss">
  .box {
    @apply rounded;
    height: 38px;
    width: 38px;
    margin: 4px;
  }
  .colors {
    margin-top: 24px;
  }

  p {
    margin-bottom: 16px;
  }
</style>
