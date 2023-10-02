<script>
  // Svelte component
  import { fade } from "svelte/transition";
  import { cubicIn } from "svelte/easing";

  // SVG import
  import github from './assets/github.svg';
  import facebook from './assets/facebook.svg';
  import twitch from './assets/twitch.svg';
  import discord from './assets/discord.svg';
  import youtube from './assets/youtube.svg';

    import itsuki from './assets/itsuki.png';

  // ...
  
  const socialLink = [
    {
      link: "https://www.youtube.com/@fishuvn", icon: youtube
    },
    {
      link: "https://github.com/fishudroid", icon: github
    },
    {
      link: "https://discord.gg/6fqnxrDKbj", icon: discord
    }, 
    {
      link: "https://www.facebook.com/fishu.the.magical.fish", icon: facebook
    },
    {
      link: "https://www.twitch.tv/fishuvn", icon: twitch
    }
  ]


  // Script
  let loaded = false;

  function onLoad() {
    loaded = true;
  }

</script>

<svelte:window on:load={() => onLoad()}/>

{#if loaded}
<main>
  <div id="main" class="xl:grid xl:grid-cols-2 text-dark-800 dark:text-light-300">
    <span id="one" class="flex justify-center text-center" in:fade={{ duration: 200, delay: 200, easing: cubicIn }}>
      <span id="name" class="select-none p-3 shadow-lg bg-light-300 dark:bg-dark-500 rounded-lg text-center absolute text-5xl font-monospace">
        Fishu
      </span>
      <span id="icons" class="absolute bg-dark:500 dark:bg-light-600 flex flex-row text-light-400 dark:text-dark-800 shadow-2xl rounded-xl" in:fade={{ duration: 200, delay: 500, easing: cubicIn }}>
        {#each socialLink as s}
          <a href="{s.link}">
            <img src={s.icon} alt="" class="w-10 h-10 m-4">
          </a>
        {/each}
      </span>
      <div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;" class="absolute top-3/4 invisible xl:visible"><iframe src="https://streamable.com/e/9nwyzb?autoplay=1&loop=0" frameborder="0" width="100%" height="100%" style="width:50vw;height:50vh;overflow:hidden;" title="something"></iframe></div>
    </span>
    <span id="two" class="invisible xl:visible">
      <img src={itsuki} alt="" class="absolute" id="itsuki">
    </span>
  </div>
</main>
{/if}

<style>
  #name {
    top: 15%;
  }
  #icons {
    top: 25%;
  }
/* 
    mask-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
*/

  #itsuki {
    right: 0;
    bottom: 0;
    height: 100vh;
    mask-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
    
  }

  #icons > a > img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
    transition: all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  #icons > a > img:hover {
    transform: scale(1.2);
    filter: invert(0%) sepia(100%) saturate(18%) hue-rotate(278deg) brightness(97%) contrast(104%);
  }

  /* check dark mode */
  @media (prefers-color-scheme: dark) {

    #icons > a > img { 
      filter: invert(0%) sepia(100%) saturate(18%) hue-rotate(278deg) brightness(97%) contrast(104%);
    }

    #icons > a > img:hover {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
      transform: scale(1.2);
    }
  }

</style>
