<script>
  export let href
  export let bgColor = 'active-blue'
  export let txtColor = 'white'
  export let styles = ''
</script>
<a {href} class="bg-{bgColor} text-{txtColor} {styles}">
  <slot></slot>
</a>
<style>
  a {
    display: flex;
    align-items: flex-start;
    border-radius: 6px;
    padding: 20px 30px;
    text-decoration: none;
  }
</style>

