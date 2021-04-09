<script>
  export let txtColor = 'black'
  export let bgColor = 'whitesmoke'
  export let iconColor = '#7C7F86'
</script>
<div class="flex items-center">
  <button class="bg-whitesmoke text-{iconColor} hover:bg-{bgColor} rounded-full flex items-center justify-center" >
    
    <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 22.813V0.812988L19 11.313L0 22.813Z" fill="inherit"/>
    </svg>
  </button>
  <span class="font-mono font-bold text-xl text-black hover:text-{txtColor} ml-3">
    <slot></slot>
  </span>
</div>
<style lang="postcss">
  div {
    width: 145px;
    height: 70px;
  }
  button { 
    width: 70px;
    height: 70px;
  }

  svg {
    fill: currentColor;
  }

</style>
