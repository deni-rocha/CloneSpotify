<template>
  <div id="navbar">
    <router-link :to="urlBuscarHome">
      <span class="icon" @click="buscarFunc">
        <div class="icon-svg" v-if="!buscar" >
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 612.01 612.01" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(0.92,0,0,0.92,24.480378417968723,24.480380859374975)">
<g xmlns="http://www.w3.org/2000/svg">
	<g id="_x34__4_">
		<g>
			<path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0     C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586     l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8     c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407     S377.82,467.8,257.493,467.8z" fill="#ffffff" data-original="#000000" style="" class=""/>
		</g>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
            </g></svg>
        </div>
        <div class="icon-svg back" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 477.862 477.862" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="M187.722,102.856V17.062C187.719,7.636,180.076-0.003,170.65,0c-4.834,0.001-9.44,2.053-12.676,5.644L4.375,176.311    c-5.617,6.256-5.842,15.67-0.529,22.187l153.6,187.733c5.968,7.295,16.72,8.371,24.016,2.403c3.952-3.233,6.249-8.066,6.26-13.172    v-85.043c134.827,4.386,218.965,62.02,256.888,175.787c2.326,6.96,8.841,11.653,16.179,11.656c0.92,0.003,1.84-0.072,2.748-0.222    c8.256-1.347,14.319-8.479,14.319-16.845C477.855,259.818,356.87,112.174,187.722,102.856z M170.655,255.995    c-9.426,0-17.067,7.641-17.067,17.067v54.613L39.532,188.257l114.057-126.72v57.924c0,9.426,7.641,17.067,17.067,17.067    c134.144,0,234.53,92.826,264.124,234.462C379.841,294.6,291.385,255.995,170.655,255.995z" fill="#ffffff" data-original="#000000" style=""/>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
</g></svg>
        </div>
      <span class="title" v-if="!buscar">buscar</span>
      <span class="title" v-if="buscar">voltar</span>
      </span>
    </router-link>

    <router-link to="/">
      <span class="icon">
        <div class="icon-svg">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1"  x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(0.9000000000000001,0,0,0.9,25.599999999999966,25.599999999999994)">
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M256,0C114.848,0,0,114.848,0,256s114.848,256,256,256s256-114.848,256-256S397.152,0,256,0z M373.44,369.536    c-3.136,4.448-8.064,6.816-13.088,6.816c-3.2,0-6.4-0.928-9.184-2.912c-60-42.176-159.808-44.512-227.2-28.8    c-8.544,2.016-17.216-3.36-19.2-11.968c-1.984-8.608,3.328-17.216,11.968-19.232c74.08-17.152,184.8-14.016,252.8,33.824    C376.768,352.352,378.496,362.304,373.44,369.536z M404.672,307.104c-3.136,4.352-8.032,6.656-12.992,6.656    c-3.264,0-6.496-0.96-9.344-3.008c-69.6-49.952-155.104-62.368-269.216-39.072c-8.608,1.696-17.12-3.808-18.88-12.48    c-1.792-8.64,3.808-17.12,12.448-18.88c123.424-25.184,216.928-11.104,294.304,44.416    C408.16,289.92,409.824,299.904,404.672,307.104z M436.224,223.264c-3.104,4.576-8.16,7.008-13.248,7.008    c-3.104,0-6.24-0.896-8.992-2.752c-88.224-59.872-222.336-60.16-309.152-29.44c-8.32,2.88-17.472-1.44-20.416-9.792    c-2.944-8.32,1.408-17.472,9.76-20.416C188.608,134.496,334.944,135.2,432,201.024    C439.296,205.984,441.152,215.936,436.224,223.264z" fill="#ffffff" data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
          </g>
          </g></svg>
        </div>
      <span class="title"> Baixar aplicativo </span>
      </span>
    </router-link> 
    
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      buscar: false,
      urlBuscarHome: '',
    };
  },
  methods: {
    buscarFunc(){
      if(this.buscar){
        this.urlBuscarHome = "/"
      } else {
        this.urlBuscarHome = "/search"
      }
      
      this.buscar = !this.buscar
    }
  }
};
</script>

<style  lang="scss">
#navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #282828;
  border-top: 1px solid #181818;

  a {
    font-size: 1rem;
    display: block;
    height: 48px;
    color: #c9c9c9;
    text-decoration: none;
    padding: 4px 8px 2px;
  } 
}

.icon {
  text-align: center;
}

.icon-svg {
  height: 25px;
  width: 25px;
  display: block;
  margin: 0 auto;
}



</style>
