<template>
  <div style="background: white;padding: 20px 20px 40px 20px" >
    <a-row>
      <a-col :span="24" >
        <div style="text-align: center">
        <p>  <b style="font-size: 18px;">点击购买商品</b></p>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="8">
        <b style="color: red">&lowast;</b>虚拟货架名称 &nbsp;<a-input style="width: 70%" v-model="goodWayName"   placeholder="虚拟货架名称" />
      </a-col>
      <a-col :span="7"></a-col>
      <a-col :span="9">

      <router-link to='/edu/bb'>
        <a-button  style="float: right;margin-right: 5%">返回</a-button>
      </router-link>
      </a-col>
    </a-row>
    <a-row style="margin: 20px">
      <a-col :span="24" style="padding-right: 10px" >
        <div :style="{ backgroundImage:'url('+require('@/views/edu/img/'+bj)+')',
              backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%',}" style="width: 100%;height: 640px; border-top-right-radius: 4px; border-top-left-radius: 4px; background: #9e9e9e;padding: 3px">
          <p style="padding-left: 40px; padding-top: 10px;color:#FCBE26">饮料温度&nbsp;{{this.wenDu}}</p>
          <draggable
            :list="list3"
            group="peoples"
            @change="log"
            @start="onStart"
            @end="onEnd"
            v-for="(item,inde) in list3"
            :key="inde"
            style=" margin-bottom:10px;margin-left:1%"
            :disabled="disabled"
          >
            <draggable
              :list="list3[inde]"
              group="peopless"
              @change="log"
              @start="onStart"
              @end="onEnd"
              style="display: inline-block;height: 205px;width: 100%;margin-bottom:1px;"
              :disabled="disabled"

            >
<!--document.location.hostname
http://127.0.0.1:8080/jeecg-boot/sys/common/static/-->
              <div
                style="display: inline-block"
                v-for="(item,index) in list3[inde]"
                :key="index"
                v-bind:class="{itemone:item.hidden==1,itemtwo:item.hidden==2,itemthree:item.hidden==3}">
                <img :src="'http://localhost:8080/jeecg-boot/sys/common/static/'+item.picture"  style="height: 70%;width: 70%;  backgroundRepeat:'no-repeat';backgroundSize:'100% 100%'"  alt="图片" />
                <a-button  style="text-align: center;font-size: 6px;width: 100%;height: 20px;margin-top: 40px"  @click="shanchu(inde,index)">购买</a-button>
              </div>

            </draggable>
          </draggable>
          <p>{{this.results}}</p>
          <!--双货道货道-->
        </div>
        <div style="width: 100%;height: 74px;background: #32302C; border-bottom-left-radius: 4px;border-bottom-right-radius: 4px"></div>



      </a-col>
    </a-row>
    <!---->
  </div>
</template>

<script>

  import draggable from "vuedraggable"
  import { deleteAction, getAction,putAction,postAction,httpAction } from '../../api/manage'
  export default {
    name: 'aa',
    display: "Clone",
    order: 2,
    /*   drag: false,*/

    components: {
      draggable
    },
    data(){
      return{
        disabled:"false",

        msg:'90',
        results:'',
        hidden:'0',
        index:'',
        inde:'',
        goodWayName:'asf',
        name:"",
        wenDu:'热',
        bj:'03.png',
        /*eid:"1291179680555204989",*/
        gid:"",
        id:'d3f9ca32c9d554e5adb99791508b4fd6',
        /*id:"",*/
        /*id:'95',*/
        zongChaXunUrl:"/editgoodsway/querybyid",
        baochunUrl:"/editgoodsway/editgoodwaybyid",
        goumai:"/paay",
        bgimg:{
          backgroundImage:'url('+require('@/assets/img/bj.png')+')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%',
        },
        list1: [
          /* { name: "旺仔QQ糖",  px:2,id: 1,img: {image:require("@/assets/img/naitnag.png")} },
           { name: "老谭酸菜",  px:3,id: 3 ,img:{image:require("@/assets/img/laotan.png")},},*/

        ],
        list3: [],

host:"",


      }; },
    created() {


            this.id = this.$route.query.id;
            this.loadData()

    },
    mounted: function() {

      /* this.$route.go(0);*/
      this.loadData()

    },
    updated: function() {
      /*  this.loadData();*/
      /* this.$message.error('!！');*/

    },
    methods:{
      watch: { $route (to, from) { this.$router.go(0) } },
      //window.location.href
      /*document.location*/
      duanKou(){
        alert("1");
        alert(document.location.hostname);
      },


      /*换背景图*/
      huantu:function(e){
        if (e==91){
          this.bj='01.png';
        }else if(e==92){
          this.bj='02.png';
        }else if(e==93){
          this.bj='03.png';
        }else if(e==11){
          this.bj='11.png';
        }else if(e==12){
          this.bj='12.png';
        }else if(e==13){
          this.bj='13.png';
        }else if(e==14){
          this.bj='14.png';
        }else if(e==15){
          this.bj='15.png';
        }else if(e==16){
          this.bj='16.png';
        }else if(e==21){
          this.bj='21.png';
        }else if(e==22){
          this.bj='22.png';
        }else if(e==31){
          this.bj='31.png';
        }else if(e==32){
          this.bj='32.png';
        }else {
          this.bj='41.png';
        }
      },
      /*加载拿数据*/
      loadData(){
        getAction(this.zongChaXunUrl,{id:this.id}).then((res)=>{
          if(res.success){
            this.list3 = res.result.goodWayList;
            this.list1 = res.result.goodList;
            this.wenDu=res.result.temperature;
            this.bj=res.result.imgsrc
            this.goodWayName=res.result.goodWayName;
            this.$message.success('货架加载成功！');

          }else{
            this.$message.error('货架加载失败，请检查网络设置！');
          }
        })
      },
      /*保存*/
      bctp:function(e){
        /*  var  goodWayList={id:this.id,goodWayName:this.goodWayName,imgsrc:this.bj,temperature:this.wenDu};
  postAction(this.baochunUrl,{editGoodWay:goodWayList,jsonStr:JSON.stringify(this.list3)}).then((res)=>{*/
        postAction(this.baochunUrl,{id:this.id,goodWayName:this.goodWayName,imgsrc:this.bj,temperature:this.wenDu,jsonStr:JSON.stringify(this.list3)}).then((res)=>{
          if(res.success){
            this.$message.success('货架保存成功！');
          }else {
            this.$message.error('货架保存失败，请检查网络设置！');
          }
        })
      },
      /*删除*/
      danshanchu(e){
        console.log(e);
        /*  this.list2.splice(evt.added.newIndex+1,1)*/
        this.list2.splice(e,1)
      },
      shanchu(e,x){
        this.inde=e;
        this.index=x;
        /*  this.list3[e].splice(x,1);*/
        this.name =  this.list3[e][x].name;
        this.gid = this.list3[e][x].id;


        getAction(this.goumai,{eid:"1291179680555204989",gid:this.gid}).then((res)=>{
          if(res=="支付成功"){
            this.$message.success(this.name+'商品购买成功');
          }else {
            this.$message.error(this.name+'商品购买失败，请检查网络设置！');
          }
        })


      },
      /*自动轮播时间*/
      onChange(checked) {
        console.log(`a-switch to ${checked}`);
      },
      /*卡片图*/
      callback(key) {
        console.log(key);
      },
      /*托图*/
      log: function(evt) {
        window.console.log('evt',evt);
        /* this.list2.splice(evt.added.newIndex+1,1)*/
        /* alert("123");*/
        console.log()
      },

      onStart(e) {
      },
      onEnd(e) {

        console.log('e',e);
        console.log('e',e.newIndex);
        console.log('e',res);
        console.log('e',this.list1[e.oldIndex].hidden);
        for(let j=0; j<this.list3.length; j++ )
        {var  res = 0;
          for(let i=0; i<this.list3[j].length; i++) {
            res=res+Number(this.list3[j][i].hidden)
            if(res>14){
              this.list3[j].splice(i,1)
            }else {

            }
          }
        }

      },



    },


  }
</script>

<style scoped>

  .itemone {
    height: 70px;
    width: 5%;
    margin: 145px 1.045% 20px;
    text-align: center;

  }
  /*
   线上
   .itemtwo {
    height: 60px;
    width: 12.21%;
    margin: 145px 1%  20px;
    text-align: center;
  }*/
  .itemtwo {
    height: 100px;
    width: 12.21%;
    margin: 145px 1%  20px;
    text-align: center;
  }
  .itemthree {
    height: 80px;
    width: 155px;
    margin: 145px 20px 20px;
    text-align: center;
  }

  .itemone:hover {
    /*    575654*/
    background-color: #f1f1f1;
    cursor: move;
    filter:alpha(opacity=60);-moz-opacity:0.6;opacity:0.60;
  }
  .itemtwo:hover {
    background-color: #f1f1f1;
    cursor: move;
    filter:alpha(opacity=60);-moz-opacity:0.6;opacity:0.60;
  }
  .itemthree:hover {
    background-color: #f1f1f1;
    cursor: move;
    filter:alpha(opacity=60);-moz-opacity:0.6;opacity:0.60;
  }


</style>