<template>
  <div id="player">
    <a>
      <span class="icon" @click="favorited">
        <svg
          v-if="!favorite"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="animate__animated"
        >
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M466.706,66.173c-29.609-29.609-69.224-45.914-111.56-45.914c-36.448,0-70.876,12.088-98.643,34.342    c-28.166-22.254-62.637-34.342-98.729-34.342c-42.532,0-82.252,16.312-111.86,45.914C16.305,95.776,0,135.398,0,177.727    c0,42.335,16.305,81.951,45.914,111.553l197.065,197.065c3.591,3.598,8.306,5.396,13.021,5.396c4.703,0,9.405-1.793,13.003-5.372    l197.224-196.623C495.75,259.561,512,219.89,512,178.034C512,135.791,495.965,96.12,466.706,66.173z M440.056,263.821    L256.018,447.294L71.956,263.238c-22.647-22.653-35.122-53.023-35.122-85.511s12.475-62.858,35.122-85.511    c22.653-22.647,53.128-35.122,85.818-35.122c32.169,0,62.705,12.53,85.966,35.269c7.207,7.054,18.767,6.992,25.895-0.147    c22.653-22.647,53.017-35.122,85.511-35.122c32.494,0,62.858,12.475,85.358,34.974c22.352,22.868,34.661,53.398,34.661,85.966    C475.165,210.209,462.642,240.738,440.056,263.821z"
                  fill="#ffffff"
                  data-original="#000000"
                  style=""
                />
              </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
          </g>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 435.737 435.737"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="animate__animated"
        >
          <g>
            <path
              xmlns="http://www.w3.org/2000/svg"
              style=""
              d="M397.584,56.432c-25.078-25.078-59.037-39.184-95.086-39.184c-30.825,0-60.082,10.449-84.114,29.257  c-24.033-18.808-53.29-29.257-84.114-29.257c-36.049,0-70.008,14.106-95.086,39.184c-52.245,52.245-52.245,137.404,0,189.649  L206.89,413.787c3.135,3.135,7.314,4.702,10.971,4.702c4.18,0,7.837-1.567,10.971-4.702l167.706-167.184  c25.078-25.6,39.184-59.559,39.184-95.086C436.245,115.468,422.661,82.032,397.584,56.432z"
              fill="#ef2b2b"
              data-original="#4dcfe0"
              class=""
            />
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
          </g>
        </svg>
      </span>
    </a>

    <router-link to="/player" class="music">
      <strong> {{ music }} •</strong>
      {{ artist }}
    </router-link>

    <a v-if="status === 'play'" @click="pause">
      <span class="iconPlayPause">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.99998 511.99998" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m256 512c-141.386719 0-256-114.617188-256-256s114.613281-256 256-256 256 114.613281 256 256c-.167969 141.316406-114.683594 255.832031-256 256zm0-480c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.132812-123.65625-100.34375-223.867188-224-224zm0 0" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m208 368c-8.835938 0-16-7.164062-16-16v-192c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v192c0 8.835938-7.164062 16-16 16zm0 0" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m304 368c-8.835938 0-16-7.164062-16-16v-192c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v192c0 8.835938-7.164062 16-16 16zm0 0" fill="#ffffff" data-original="#000000" style="" class=""/></g></svg>
      </span>
    </a>
   
    <a v-if="status === 'pause'" @click="play">
      <span class="iconPlayPause"> 
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 480 480" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm0 464c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.140625 123.652344-100.347656 223.859375-224 224zm0 0" fill="#fdfdfd" data-original="#000000" style=""/><path xmlns="http://www.w3.org/2000/svg" d="m355.574219 232.839844-192-96c-2.480469-1.238282-5.425781-1.105469-7.78125.351562-2.359375 1.460938-3.792969 4.035156-3.792969 6.808594v192c-.015625 2.78125 1.414062 5.367188 3.773438 6.835938 2.363281 1.46875 5.316406 1.605468 7.800781.363281l192-96c2.71875-1.351563 4.433593-4.125 4.433593-7.160157 0-3.03125-1.714843-5.804687-4.433593-7.160156zm-187.574219 90.214844v-166.109376l166.113281 83.054688zm0 0" fill="#fdfdfd" data-original="#000000" style=""/></g></svg>
      </span>
    </a>

    <div class="progressBar">
      <div class="rangeBar" ref="rangeBar" style="width: 0%"></div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
      status: "pause",
      music: "We paid",
      artist: "Lil Baby",
      favorite: false, 
  }),

  computed: {
   
  },

  methods: {
    favorited: function ($event) {
      if (this.favorite == false) {
        $event.target.classList.add("animate__bounceIn");
      } else {
        $event.target.classList.add("animate__bounceOut");
      }

      setTimeout(() => {
        $event.target.classList.remove("animate__bounceIn");
        $event.target.classList.remove("animate__bounceOut");
        this.favorite = !this.favorite;
      }, 300);
    },

    play: function(){
        this.status = "play";
        const rangeBar = this.$refs.rangeBar;
        let progress = parseInt(rangeBar.style.width.replace("%"));

       this.timeInterval = setInterval(() => {
        progress = progress >= 100 ? 0 : progress + 1;
        rangeBar.style.width = `${progress}%`
         }, 1000)
      
    },

    pause: function(){
        this.status = "pause";
        clearInterval(this.timeInterval);
       
    },

  }
};
</script>

<style scoped lang="scss">
#player {
  position: fixed;
  bottom: 48px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  background-color: #282828;
  border-top: 1px solid #181818;
}
a {
  text-align: center;
  display: block;
  height: 48px;
  color: #c9c9c9;
  text-decoration: none;
}
.music {
  padding: .7rem;
  width: 70%;
}
.icon {
  display: block;

  & svg {
    height: 24px;
    width: 64px;
    margin: 10px;
  & strong {
      height: 48px;
      line-height: 48px;
    }
  }

  &PlayPause svg {
    height: 27px;
    width: 64px;
    margin: 10px;
  }
}

.progressBar {
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 1px;
  & .rangeBar{
    background-color: #fff;
    height: 1px;
  }
}


</style>