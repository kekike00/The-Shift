<template>
  <div class="page">

    <div class="flexbox-wrapper">
      
      <div class="title-fix border-style:solid"> 
        <div class="title col-12 col-md-4 col-sm-6">
        <h1 id="title">{{ name }}</h1>
      
      </div>

      <div class="col-12">
        <p id="type">{{ type }}</p>
        <!-- <h1 id="year">{{ year }}</h1> -->
      </div>
      
      <br> 
      <br>
      <br> 
      <br>
      <br> 
      <br>
      <br> 
      <br>
      
   
      <div class="description" style="font-size:15px; color: black;">
        <p> {{ description }} </p>
       
      </div>
    </div>

    <div class="title-back">
      <div class="col-4">
      <h1></h1>
    </div>
    </div>
    
      <div class="grid-system-page" >
        <div class="container" style="height:60%;width:90%;border:0.1px solid #ccc; overflow:auto;">
          <div class="row justify-content-md-center">
            <div class="img col-md-3" 
              v-for="(work, i) of works"
              :key="i">
               <img class="img-fluid" :src="require(`~/assets/${work.imgSrc}`)" />
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>


</template>




<script>
export default {
  data(){
    return{
      name:"The Shift",
      year: "2022",
      type: "Location-based, interactive AR installation",
      description: "The Shift is a series of digital sculptures that explores the inherently dynamic relationship between the conscious and the unconscious.",

      works: [
        { imgSrc: "img/img_1.png"},
        { imgSrc: "img/img_2.png"},
        { imgSrc: "img/img_3.png"},
        { imgSrc: "img/img_4.png"},
        { imgSrc: "img/img_5.png"},
        { imgSrc: "img/img_6.png"},
        { imgSrc: "img/img_7.png"},
        { imgSrc: "img/img_8.png"},
        { imgSrc: "img/img_9.png"},
        { imgSrc: "img/img_10.jpg"},
        { imgSrc: "img/img_11.png"},
        { imgSrc: "img/img_12.jpg"},
        { imgSrc: "img/img_13.jpg"},
        { imgSrc: "img/img_14.jpg"},
        { imgSrc: "img/img_15.jpg"},
        { imgSrc: "img/img_16.jpg"},
        { imgSrc: "img/img_17.jpg"},
        { imgSrc: "img/img_18.jpg"},
        { imgSrc: "img/img_19.jpg"},
        { imgSrc: "img/img_20.jpg"},
        { imgSrc: "img/img_21.jpg"},
        { imgSrc: "img/img_22.jpg"},
        { imgSrc: "img/img_23.jpg"},
        { imgSrc: "img/img_24.jpg"},
        { imgSrc: "img/img_25.jpg"},
      ]
    };
  },

    mounted() {
      // console.log(this.name);

      this.myFunction();
    },

    methods: {
      myFunction() {
        console.log(this.name);
      }
    },
  
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.img{
  margin-left:2%;
}

img{
  width: 150%;
  padding:2%;
}


.flexbox-wrapper{
  display:flex;
  flex-direction:row;
  justify-content: flex-start;
  padding:2%;

  
}

.title-fix{
  color:rgb(51, 0, 255);
  /* font-size:larger; */
  position:fixed;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiase;
  width:25%;
  padding-top:2%;

  
  
}

.title-back{
  width:25%;
  height:100px;
  background-image: linear-gradient(to top, rgba(255,0,0,0), rgba(255,0,0,1));

}

#year{
  font-size:30px;
}

#type{
  font-size:20px;
  
}

#title{
  font-size:130px;
}



</style>
